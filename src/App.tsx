import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [amount, setAmount] = useState<number>(1);

  const handleIncrement = async () => {
    try {
      setLoading(true);
      setError('');
      // Simulate proof generation
      await new Promise((resolve) => setTimeout(resolve, 2000));
      if (amount <= 0 || amount > 10) {
        throw new Error("Invalid amount. Must be between 1 and 10.");
      }
      setCount((c) => c + amount);
    } catch (err: any) {
      setError(err.message || 'An error occurred during proof generation.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Midnight Counter dApp</h1>
        <p className="privacy-badge">Privacy Model: Private Input, Public State</p>
      </header>

      <main className="main">
        <div className="card">
          <h2>Counter Status</h2>
          <p className="count-display">{count}</p>
          <p className="label">Public Ledger State</p>
        </div>

        <div className="card interaction-card">
          <h2>Update Counter</h2>
          <p className="description">
            Your increment amount is processed as a <strong>private witness</strong>. 
            The network verifies the proof without revealing the amount!
          </p>

          <div className="input-group">
            <label htmlFor="amount">Secret Amount (1-10):</label>
            <input
              id="amount"
              type="number"
              min="1"
              max="10"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              disabled={loading}
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button onClick={handleIncrement} disabled={loading} className="btn">
            {loading ? (
              <span className="spinner-container">
                <span className="spinner"></span> Generating Proof...
              </span>
            ) : (
              'Increment Counter'
            )}
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
