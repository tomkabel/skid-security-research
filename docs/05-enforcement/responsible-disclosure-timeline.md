---
title: Responsible Disclosure Timeline
description: Complete timeline of vulnerability discovery, reporting, and regulatory engagement for Smart-ID security research
---

# Responsible Disclosure Timeline

This document provides a complete, chronological record of the vulnerability discovery, reporting, and regulatory engagement process. All dates are verifiable through the correspondence and evidence referenced herein.

---

## Timeline

### Phase 1: Discovery and Analysis (2025 Q3)

| Date | Event |
|------|-------|
| 2025-08 | Initial identification of origin binding deficiency in Smart-ID authentication flows during comparative standards analysis |
| 2025-09 | Detailed technical analysis of QRLJacking attack vector against Smart-ID+ QR code flow; development of OutSmart-ID proof of concept |
| 2025-10 | Completion of comprehensive vulnerability assessment covering MITM, BITB, and session hijacking attack chains |
| 2025-10-26 | Internal feasibility assessment of FIDO2/WebAuthn pivot as alternative architecture (see [FIDO2 Pivot Analysis](../06-supplementary-research/fido2-pivot-analysis.md)) |

### Phase 2: Responsible Disclosure (2025 Q4)

| Date | Event |
|------|-------|
| 2025-11 | Responsible disclosure initiated with SK ID Solutions via official channels |
| 2025-11 | Technical details of QRLJacking and MITM vulnerability vectors communicated to SK ID Solutions security team |
| 2025-12-05 | **SK ID Solutions responds.** Key admission: *"See turvanõrkus oli meile arenduse käigus juba kohe teada... [kuid] teatud perioodiks oleme seda riski teadlikult aktsepteerinud."* ("This security vulnerability was already known to us during development... [but] for a certain period we have consciously accepted this risk.") |
| 2025-12 | CVE registration attempted for the identified vulnerability |
| 2025-12 | **SK ID Solutions marks CVE entry as DISPUTED**, classifying the attack vector as an "architectural feature" rather than a vulnerability. CVE disputes are part of the standard vulnerability reporting process; vendors may dispute entries they consider within their threat model. |

### Phase 3: Escalation and Regulatory Engagement (2026 Q1)

| Date | Event |
|------|-------|
| 2026-01 | Analysis of SK ID Solutions' "Additional Security Measures" documentation completed (see [Vulnerability Analysis](../02-technical-security/vulnerability-analysis.md)) |
| 2026-01 | Arnis Paršovs (University of Tartu) publishes public critique of Smart-ID security failures, corroborating independent findings |
| 2026-01-31 | Public awareness effectiveness research completed (see [Public Awareness Effectiveness](../06-supplementary-research/public-awareness-effectiveness.md)) |
| 2026-02-01 | Legal enforcement analysis completed (see [Enforcement Strategy](./enforcement-strategy.md)) |
| 2026-02-12 | Tom Kristian Abel op-ed published in Estonian media (Postimees / ERR / Delfi) |

### Phase 4: Formal Regulatory Submissions (2026 Q2)

| Date | Event |
|------|-------|
| 2026-04-08 | **Formal memorandum submitted to RIA** (Riigi Infosüsteemi Amet) — Market failure analysis and request for regulatory intervention |
| 2026-04-08 | **Formal memorandum submitted to TTJA** (Tarbijakaitse ja Tehnilise Järelevalve Amet) — Misleading trading practices complaint |
| 2026-04-08 | **Formal memorandum submitted to AKI** (Andmekaitse Inspektsioon) — GDPR Articles 25 and 32 violations |
| 2026-04-07 | E-Services Target Catalog completed (see [E-Services Catalog](../06-supplementary-research/e-services-catalog.md)) |
| 2026-04 | Full research repository published |

### Phase 5: Accessibility-Service Abuse Finding (2026 Q3)

| Date | Event |
|------|-------|
| 2026-09 | Accessibility-service abuse of the Smart-ID app identified as a distinct, on-device attack class, separate from the signing-relay/QRLJacking findings above (see [Accessibility-Service Abuse](../02-technical-security/accessibility-service-abuse.md)) |
| 2026-09 | Existence-proof review of SteroidID (a defensive research tool demonstrating this automation class) completed; no exploit code or selectors reproduced in this repository |
| 2026-09 | Publication of this finding as a class-of-attack disclosure. This is a new, previously undisclosed finding — separate vendor notification specific to this finding has not yet been confirmed as of this publication, and is intended to follow the same responsible disclosure principles applied to the earlier findings in this timeline |

---

## Key Evidence

The following evidence supports the disclosure timeline:

1. **SK ID Solutions correspondence (December 5, 2025):** Written admission that the vulnerability was known during development and "consciously accepted" for a period. This correspondence was obtained through responsible disclosure channels.

2. **CVE DISPUTED status:** The CVE entry for the identified vulnerability was marked as DISPUTED by SK ID Solutions, despite the vulnerability being reproducible and the attack being demonstrated via proof of concept.

3. **SK ID Solutions RP API v3 documentation:** The official B2B documentation labels the notification-based flow as "Not Recommended" and states that "Phishing protection relies on user awareness," confirming the architectural limitation was documented internally.

---

## Disclosure Principles

This research followed responsible disclosure principles:

1. **Initial contact** was made directly with SK ID Solutions before any public disclosure
2. **Technical details** were shared with the vendor to enable remediation
3. **A reasonable timeframe** was provided for the vendor to address the vulnerabilities
4. **Public disclosure** occurred only after the vendor acknowledged the vulnerability and declined to remediate within the requested timeframe
5. **Regulatory submissions** were made to the appropriate supervisory authorities with jurisdiction over the vendor's operations

---

## Current Status

| Item | Status |
|------|--------|
| Vulnerability acknowledged by vendor | Yes (December 5, 2025) |
| Vendor remediation commitment | No — classified as "architectural feature" |
| CVE status | DISPUTED (by vendor) |
| Regulatory submissions filed | Yes — RIA, TTJA, AKI (April 8, 2026) |
| Research published | Yes (April 2026) |
| Accessibility-service abuse finding — vendor notification | Not yet confirmed as of publication (September 2026); this finding is new and distinct from the December 2025 correspondence above, which concerned the signing-relay/QRLJacking vector only |
