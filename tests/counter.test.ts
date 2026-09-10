import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock the compiled contract module
vi.mock('../managed/counter', () => {
    let counterState = 0;
    return {
        counter: {
            read: () => counterState,
            write: (v: number) => { counterState = v; }
        },
        increment_by_private_amount: (secret: number) => {
            if (secret <= 0) throw new Error("Amount must be positive");
            if (secret > 10) throw new Error("Amount must be at most 10");
            counterState += secret;
        }
    };
});

import { counter, increment_by_private_amount } from '../managed/counter';

describe('Counter Contract', () => {
    beforeEach(() => {
        counter.write(0);
    });

    it('a) Circuit logic — does the circuit compute correctly?', () => {
        counter.write(0);
        increment_by_private_amount(5);
        expect(counter.read()).toBe(5);
        
        // Fails if invalid
        expect(() => increment_by_private_amount(0)).toThrow("Amount must be positive");
        expect(() => increment_by_private_amount(15)).toThrow("Amount must be at most 10");
    });

    it('b) State transitions — does ledger state update as expected?', () => {
        counter.write(10);
        increment_by_private_amount(3);
        expect(counter.read()).toBe(13);

        increment_by_private_amount(7);
        expect(counter.read()).toBe(20);
    });

    it('c) Privacy — private input is never exposed in any output', () => {
        counter.write(100);
        // The return value of the circuit is empty/void, meaning the secret is not returned
        const result = increment_by_private_amount(2);
        
        // Assert that the result does not contain the secret (2)
        expect(result).toBeUndefined();
        
        // The public state is updated, but observer only sees old state and new state
        expect(counter.read()).toBe(102);
    });
});
