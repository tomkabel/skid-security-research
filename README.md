# Kuningas on Alasti: Smart-ID Security Research Repository

## *Shattering the Smart-ID+ 'Phishing-Resistant' QR Paradigm*

### A Case Study on Exploiting Origin Binding Failures via Remote Browser Orchestration (RBO) and Dynamic BiTB

---

## 🛡️ A Note on Responsible Disclosure & Cryptographic Irony

> **The "Trust Service Provider" Paradox**
>
> We disclosed these findings to **SK ID Solutions** via their designated secure channels. The experience was a masterclass in irony. For a multinational Identity Provider and "Qualified Trust Service Provider," their own security hygiene was functionally non-existent.
>
> At the time of the report, the Incident Response Team had allowed their **public PGP keys to expire**, effectively decapitating their own encrypted reporting channel. For **55 days**, their triage process remained incapacitated. It is a bold move for a PKI-based company to manage their own keys with less competence than a hobbyist, yet here we are.

---

## Repository Structure

This repository contains research on Smart-ID security vulnerabilities, architectural flaws, and strategic analysis. The content has been organized into thematic categories.

### 📁 Directory Structure

```
.
├── 01-core-analysis/              # Main security analysis and research
│   └── smartid-security-research.md
├── 02-opinion-editorials/         # Opinion pieces and editorial content
│   ├── 01-arnis-parsovs-analysis.md
│   ├── 02-tom-kristian-abel-op-ed.md
│   └── 03-convenience-vs-security-analysis.md
├── 03-technical-analysis/         # Detailed technical assessments
│   └── 01-suggested-security-measures.md
├── 04-supplementary-research/     # Supporting research and alternatives
│   ├── 01-public-awareness-fraud-mitigation.md
│   ├── 02-fido2-pivot-analysis.md
│   └── 03-strategic-guide.md
├── 05-drafts/                     # Work-in-progress content
│   └── ideas.md
├── 06-archived/                   # Deprecated/merged content
│   └── README.md
└── README.md                      # This file
```

---

## 📋 Content Overview

### 01-core-analysis/
**Main Security Research**

- **smartid-security-research.md** - Analysis of Smart-ID+ vulnerabilities, architectural flaws, phishing attack vectors (QRLJacking), and the "OutSmart-ID" offensive framework. Includes technical gap analysis against modern standards (FIDO2, NIST SP 800-63-4, eIDAS 2.0).

### 02-opinion-editorials/
**Opinion Pieces & Editorial Content**

- **01-arnis-parsovs-analysis.md** - Analysis of Arnis Paršovs' critique of Smart-ID, including his arguments about banks prioritizing convenience over security, the regression from password cards, and the conflict of interest in bank ownership of SK ID Solutions.

- **02-tom-kristian-abel-op-ed.md** - The main op-ed piece (Estonian: "ARVAMUS: E-riigi lahtine tagauks") arguing that Smart-ID vulnerabilities are conscious design choices by SK ID Solutions, not bugs. Includes the "smoking gun" email evidence and CVE dispute analysis.

- **03-convenience-vs-security-analysis.md** - Detailed UX analysis showing how Smart-ID+ prioritizes convenience over security, including push notification architecture, absence of manual VC entry, and legacy compatibility issues.

### 03-technical-analysis/
**Technical Assessments**

- **01-suggested-security-measures.md** - Practical security measures for Relying Parties (RPs) to implement, including anonymous flows, trusted browser tracking, IP reputation monitoring, and user verification mechanisms.

### 04-supplementary-research/
**Supporting Research & Alternatives**

- **01-public-awareness-fraud-mitigation.md** - Research on the effectiveness of public awareness campaigns (2014-2025), including quantitative impact data, behavioral change studies, and global best practices from Singapore, UK, and Australia.

- **02-fido2-pivot-analysis.md** - Technical feasibility study of pivoting from Smart-ID's proprietary split-key architecture to FIDO2/WebAuthn with Cloud Signature Consortium (CSC) for achieving QES and LoA High compliance.

- **03-strategic-guide.md** - Strategic plan for opinion editorial creation, including headline ideas, structural outline, and argumentation strategy for differentiating from Arnis Paršovs' critique.

### 05-drafts/
**Work-in-Progress Content**

- **ideas.md** - Draft concepts including "Turvateater" (Security Theater) critique and analysis of proprietary lock-in strategies.

### 06-archived/
**Original Files (Merged)**

Contains the original files that were merged into the new structure. See `06-archived/README.md` for the complete mapping of original files to their new locations.

---

## 🔍 Key Findings Summary

### The Core Vulnerability
Smart-ID+ relies on **visual verification** (Control Codes) rather than **cryptographic origin binding**. This creates a fundamental gap where:
- The system validates that *someone* scanned the code
- But cannot verify that the *requesting browser* is the legitimate one
- Attackers can relay legitimate QR codes and Control Codes in real-time

### The Architectural Flaw
True phishing resistance requires: **Is it safe for the user to approve an authentication request without thinking?**

- ✅ **FIDO2/WebAuthn:** Yes - Protocol enforces origin binding
- ✅ **Client-Side TLS (ID-Card):** Yes - Handshake enforces origin binding  
- ❌ **Smart-ID+ (Cross-Device):** No - Lacks cryptographic binding

### The Offensive Framework: "OutSmart-ID"
A containerized, virtualization-based phishing framework using:
1. **Frontend (BiTB):** High-fidelity CSS/JS shell mimicking OS/browser
2. **Backend (Dockerized Chromium):** Headless browsers in isolated containers
3. **Transport (noVNC/WebSockets):** Live streaming of genuine sites
4. **Reverse Proxy:** Custom Golang proxy for session cookie extraction

### Vendor Response
> *"The vulnerability was known to us... we have consciously accepted this risk."*

An **Accepted Risk** without a **Compensating Control** is just a **vulnerability with a marketing budget.**

---

## 📊 Strategic Recommendations

### For Policymakers & Regulators (RIA)
1. **Mandate cryptographic origin binding** - Move beyond visual verification
2. **Enforce FIDO2/WebAuthn adoption** for high-assurance authentication
3. **Establish liability frameworks** - Shift risk from users to service providers
4. **Regulate social media advertising** - Prevent fraudster impersonation

### For Financial Institutions
1. **Implement FIDO2/Passkeys** as primary authentication method
2. **Use Smart-ID strictly for QES signatures** where legally mandated
3. **Deploy risk-based authentication** with behavioral analytics
4. **Provide user education** with just-in-time interventions

### For SK ID Solutions
1. **Acknowledge architectural debt** - Stop disputing CVE classifications
2. **Pivot to FIDO2/WebAuthn** - Modernize the authentication stack
3. **Implement proper origin binding** - Cryptographic, not visual
4. **Improve transparency** - Open security architecture for audit

---

## 🎯 Research Methodology

This research employs:
- **Offensive Security Testing** - Building actual attack frameworks (OutSmart-ID)
- **Comparative Analysis** - Against FIDO2, NIST, eIDAS standards
- **Behavioral Science** - COM-B model for user behavior analysis
- **Strategic Analysis** - Monopoly dynamics and incentive structures
- **Historical Research** - 2014-2025 fraud mitigation campaign data

---

## 📚 References & Citations

### Standards & Frameworks
- **NIST SP 800-63-4** - Digital Identity Guidelines
- **FIDO Alliance** - Phishing-Resistant Authentication Standards
- **eIDAS 2.0 / EUDI Wallet ARF** - EU Digital Identity Architecture
- **Cloud Signature Consortium (CSC)** - Remote Signing Standards
- **CEN/TS 419 241** - Remote Qualified Signature Creation

### Research Sources
- KnowBe4 Phishing Industry Benchmarking Report (2024)
- ACCC National Anti-Scam Centre Reports (2024-2025)
- UK Finance Fraud Updates (2025)
- Singapore IMDA ScamShield Data (2022-2024)
- US Postal Inspection Service Studies (2024)
- ENISA European Cybersecurity Month Reports (2025)

### Primary Evidence
- SK ID Solutions correspondence (December 5, 2025)
- CVE database entries (DISPUTED status analysis)
- Public disclosure records

---

## 📝 Usage Guidelines

### For Researchers
- Start with `01-core-analysis/smartid-security-research.md` for comprehensive overview
- Review `04-supplementary-research/02-fido2-pivot-analysis.md` for modern alternatives
- Use `03-technical-analysis/01-suggested-security-measures.md` for implementation guidance

### For Policymakers
- Begin with `02-opinion-editorials/02-tom-kristian-abel-op-ed.md` for strategic narrative
- Review `04-supplementary-research/01-public-awareness-fraud-mitigation.md` for campaign effectiveness
- Use `04-supplementary-research/03-strategic-guide.md` for argumentation strategy

### For Security Practitioners
- Focus on `03-technical-analysis/01-suggested-security-measures.md` for RP implementation
- Study `01-core-analysis/smartid-security-research.md` for attack vectors
- Reference `04-supplementary-research/02-fido2-pivot-analysis.md` for migration path

---

## ⚠️ Disclaimer

This research is provided for **educational and research purposes only**. The techniques described should only be used in authorized security testing environments with explicit permission from system owners.

The author and contributors assume no liability for any misuse of this information. All findings have been disclosed to relevant parties through responsible disclosure channels.

---

## 📄 License

Copyright 2026. Educational purposes only.

---

## 🤝 Contributing

This is a research repository. Contributions are welcome in the form of:
- Additional research findings
- Technical analysis improvements
- Translation and localization
- Strategic recommendations

Please submit pull requests or issues for review.

---

## 📞 Contact

For questions about this research or the reorganization of this repository, please refer to the commit history and file mappings in `06-archived/README.md`.

---

**Written by Tom Kristian Abel, Security Researcher**

*The King is Naked.*
