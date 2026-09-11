# MediCrypt ZK
![CI](https://github.com/maaafiqs/midnight-level-3/actions/workflows/ci.yml/badge.svg)
> A Confidential Credentials platform for decentralized medical record exchange and healthcare claim verification that protects the confidentiality of patients' clinical histories.

## Live Demo
[https://medicrypt-zk.vercel.app](https://medicrypt-zk.vercel.app)

## Contract Address
| Network  | Address                          |
|----------|----------------------------------|
| Preprod  | `02a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a` |

## What This Does
MediCrypt ZK allows patients to prove their health status (like vaccination or absence of conditions) to third parties without revealing their full medical history. Healthcare providers can issue verifiable clinical attestations directly on-chain without central data leaks.

## Privacy Model
- **PUBLIC**: Claim validity status, healthcare facility attestation cryptographic commitments, and revocation statuses.
- **PRIVATE**: Detailed clinical diagnoses, lab results, medication history, and patient full identity.
- **PROVED without revealing**: Verification of healthcare facility digital signatures, nullifier/revocation checks, and threshold matching on Midnight Compact circuits without revealing the underlying health data.

## Privacy Claim
An on-chain observer sees whether a medical claim or attestation is valid, but **cannot see** the patient's actual medical records or identity details. The private state remains completely local on the client's device, ensuring HIPAA and PDP compliance.

## Tech Stack
- Frontend: React + Vite + TypeScript
- Smart Contract: Midnight Compact (`.compact`)
- Tests: Vitest

## Prerequisites
- Node.js (v22+)
- Midnight Local Node / Wallet
- Compact CLI Compiler (`compactc`)

## Setup & Run Locally
1. Clone the repository
   ```bash
   git clone https://github.com/maaafiqs/midnight-level-3.git
   cd midnight-level-3
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Compile the contract
   ```bash
   compact compile
   ```
4. Run the frontend
   ```bash
   npm run dev
   ```

## Run Tests
```bash
npm test
```

## CI/CD
The CI/CD pipeline runs on every push and pull request to the `main` branch. It automatically checks out the code, installs dependencies, compiles the compact contract, and executes the complete test suite. The status badge at the top of this README reflects the build health.

## Product Proposal
See [PROPOSAL.md](PROPOSAL.md)
