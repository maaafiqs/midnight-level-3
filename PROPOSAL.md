# Product Proposal

## What is the product, and who uses it?

**MediCrypt ZK** is a decentralized medical record exchange and healthcare claim verification platform that protects the confidentiality of patients' clinical histories.

Its target users include:

* **Patients:** Individuals who want to prove their health status (e.g., proof of vaccination, absence of specific pre-existing conditions, or clinical trial qualification) to third parties without revealing their entire medical history.
* **Healthcare Providers (Hospitals, Clinics, Labs):** Medical facilities that issue trusted and verifiable clinical attestations without the risk of centralized data leaks.
* **Health Insurance Companies:** Policy assessors who verify the validity of claims and pre-existing condition histories cryptographically without violating health data privacy laws.
* **Research & Clinical Trial Organizers:** Researchers who screen patient populations according to study inclusion criteria anonymously.

## Why Midnight specifically?

Storing or referencing health records on transparent networks (like Ethereum or standard public L1s) risks leaking clinical data to the public and violating strict regulations like HIPAA, GDPR, and Personal Data Protection (PDP) laws.

Midnight is designed with a **rational privacy** approach that is ideal for the medical sector:

* **Dual-State & Client-Side Proofs:** Using the **Compact** contract language, ZK calculations are processed locally on the user's device (proof server). Sensitive data (diagnoses, prescriptions, identity) remains on the patient's device as *private state*, while the network only verifies the ZK-SNARK.
* **Selective Disclosure:** Patients can grant read access (read keys) in an encrypted manner to new doctors or official auditors without exposing this access to the public.
* **Predictable Transaction Costs:** Utilizing a shielded dual-token system (NIGHT/DUST) so that hospitals and insurance underwriters can estimate on-chain computational budgets predictably.

## Data Model

| Data Point | Type | Disclosed To |
| --- | --- | --- |
| Claim Validity / Eligibility Status (True/False) | Public ledger | Everyone |
| Cryptographic Commitment of Healthcare Facility Attestation (Merkle Root Hash) | Public ledger | Everyone |
| Attestation Revocation Status | Public ledger | Everyone |
| Detailed Clinical Diagnoses, Lab Test Results, & Medication History | Private witness | No one (Stored locally on the client-side) |
| Patient's Full Identity (SSN, Name, Date of Birth) | Private witness | No one |
| Complete Medical Records for Specific Referrals | Private witness (selective) | Authorized Receiving Doctors / Official Auditors |

## Mainnet Feasibility

**Yes, highly realistic to reach Mainnet by Level 6.**

* **Simple Circuit Architecture:** The contract logic focuses solely on verifying the healthcare facility's digital signature (issuer attestation), revocation checks (nullifier check), and threshold matching on Compact.
* **Tooling Readiness:** Midnight provides the Compact framework, TypeScript SDK (`midnight-js`), and a local proof server that directly supports the ZK-proof generation flow in the user's browser or mobile application.
* **Measurable Roadmap:** Level 6 focuses on completing a functional MVP on testnet and migrating to the active mainnet target in a stable federated environment (Kūkolu phase). No complex custom cryptographic circuits outside of Midnight's built-in standard library are needed, so audit and deployment times will be fast.