---
title: Smart-ID Security Analysis
description: Security architecture analysis of Smart-ID electronic identification system and compliance with security standards
---

# Smart-ID Security Analysis

## Executive Summary

This research examines the security architecture of Smart-ID, Estonia's dominant electronic identification system, with particular focus on cross-device authentication flows and compliance with contemporary security standards.

**Key Finding:** Smart-ID relies on visual verification (Control Codes) rather than cryptographic origin binding to authenticate users. This creates a fundamental security gap: the system validates that someone scanned a QR code, but cannot verify that the requesting browser session is the legitimate one. Attackers can relay legitimate QR codes and Control Codes in real-time, enabling session hijacking without the user's knowledge.

**Evidence:** SK ID Solutions acknowledged this vulnerability in written correspondence dated December 5, 2025, stating the flaw was known during development and was "consciously accepted" for a period. The company subsequently marked the corresponding CVE entry as DISPUTED, classifying the attack vector as an architectural feature rather than a vulnerability. See the [Responsible Disclosure Timeline](../05-enforcement/responsible-disclosure-timeline.md#key-evidence) for the correspondence date, the CVE DISPUTED status, and the underlying source material; this repository does not itself record a public CVE identifier for the entry. CVE disputes are a routine part of the vulnerability reporting process — vendors may dispute entries they consider out of scope, not reproducible, or consistent with their threat model. The documented facts above (the correspondence and the DISPUTED status) are separate from the architectural interpretation that follows: that the system validates that someone scanned a QR code, not that the requesting browser session is legitimate, is this research's technical conclusion, not a vendor admission.

**Standards Gap:** The implementation diverges from established security frameworks. FIDO2/WebAuthn provides cryptographic origin binding at the protocol level. NIST SP 800-63-4 defines phishing resistance requirements for Authenticator Assurance Level 3 that Smart-ID does not meet. eIDAS Article 24 requires trust service providers to use trustworthy systems—a standard that a system vulnerable to basic MITM attacks arguably fails.

**Recommendation:** Technical analysis indicates a feasible migration path from Smart-ID's proprietary split-key architecture to FIDO2/WebAuthn with Cloud Signature Consortium (CSC) integration, achieving full functional parity including Qualified Electronic Signature (QES) capability and Level of Assurance (LoA) High. Estimated implementation cost is €2-5M, with projected fraud reduction of 95% and break-even within 16 months. [[1]](#references)

---

## Technical Findings

### Origin Binding Deficiency

Smart-ID relies on visual verification (Control Codes) rather than cryptographic origin binding. This creates a fundamental security gap:

- The system validates that someone scanned the QR code
- It cannot verify that the requesting browser is the legitimate one
- Attackers can relay legitimate QR codes and Control Codes in real-time
- The authentication token lacks intrinsic context of the user's actual environment

### Standards Compliance

The implementation diverges from established security frameworks:

| Standard | Requirement | Smart-ID Compliance |
|----------|-------------|---------------------|
| FIDO2/WebAuthn | Cryptographic origin binding | Not implemented |
| NIST SP 800-63-4 | Verifier Impersonation Resistance | Partial/Visual only |
| eIDAS Art. 24 | Trustworthy systems | Questions raised |
| eIDAS Annex II | QSCD confidentiality | At risk under MITM |

### Attack Vectors

**Man-in-the-Middle (MitM) Attacks:**
Relay attack scenarios exploit the lack of cryptographic binding between the browser session and mobile authenticator. Advanced proxy tools (e.g., Evilginx2) can intercept and relay authentication requests in real-time. The attack is automated and scalable.

**Browser-in-the-Browser (BiTB):**
Sophisticated attack frameworks (see [QRLJacking Analysis](../02-technical-security/qrljacking-analysis.md)) can simulate legitimate authentication flows, projecting genuine QR codes while capturing session credentials. The OutSmart-ID proof of concept demonstrates this using a containerized, virtualization-based approach with Docker, NoVNC, and EvilNoVNC.

---

## Problem Statement

### Fraud Landscape

Since Smart-ID became the primary authentication method post-2019, phishing-related fraud has increased significantly. Financial losses escalated from €5-10 million annually (2019-2021) to €29 million in 2025—a threefold increase in a single year. [[2]](#references)

External analysis by security researcher Arnis Paršovs (University of Tartu) notes that:

- Authentication flows rely on user verification rather than technical controls
- Convenience appears prioritized over security in system design
- Banks as owners of the identity provider face conflicts of interest
- Research indicates awareness training reduces susceptibility from 34.3% to 4.6%, but technical architectural flaws remain exploitable regardless of user vigilance [[3]](#references)

### Regulatory Gap

Current liability frameworks place responsibility on users rather than service providers. This creates limited economic incentive for implementing additional security measures. The "risk acceptance" defense, while valid in internal corporate governance, cannot override statutory obligations under eIDAS and GDPR. [[4]](#references)

---

## Strategic Recommendations

### Migration Path to FIDO2

Technical analysis indicates feasibility of transitioning from proprietary split-key architecture to FIDO2/WebAuthn with Cloud Signature Consortium (CSC) integration:

1. **FIDO2 as Sole Control Mechanism**: Utilize platform authenticators (Secure Enclave/TPM) for user verification
2. **Remote QSCD**: Maintain qualified electronic signature capability through certified HSM infrastructure
3. **QR-Based UX**: Preserve scan-to-login user experience while gaining cryptographic guarantees

::: tip Break-Even Analysis
- **Implementation cost:** €2-5M
- **Expected fraud reduction:** 95%
- **Break-even period:** 16 months
:::

For the complete technical architecture, see [FIDO2 Pivot Analysis](../06-supplementary-research/fido2-pivot-analysis.md).

### For Policymakers

::: warning Regulatory Action Required
1. Mandate cryptographic origin binding for high-assurance authentication
2. Establish liability frameworks shifting risk from users to service providers
3. Require security assessments aligned with NIST SP 800-63-4
4. Issue formal precepts under EUTS § 36 for non-compliant trust services
:::

### For Service Providers

::: danger Immediate Action Recommended
1. Implement FIDO2/Passkeys as primary authentication
2. Use Smart-ID strictly for QES where legally mandated
3. Deploy risk-based authentication with behavioral analytics
4. Migrate from notification-based flows to device link flows
:::

---

## Regulatory Framework

Relevant regulatory instruments include:

- **eIDAS Regulation (EU) 910/2014**: Qualified trust service provider requirements [[4]](#references)
- **NIST SP 800-63-4**: Digital identity guidelines and authentication assurance levels [[5]](#references)
- **GDPR Articles 25 & 32**: Data protection by design and security obligations [[6]](#references)
- **Estonian EUTS**: National eIDAS implementation
- **DORA (EU 2022/2554)**: Digital Operational Resilience Act for financial sector ICT risk management [[7]](#references)

See [`03-regulatory-framework/laws-acts-regulations.md`](../03-regulatory-framework/laws-acts-regulations.md) for comprehensive regulatory reference.

---

## Conclusion

Smart-ID represents an earlier approach to electronic identity, centralized around achieving legal compliance (QES) through proprietary architecture. However, it does not align with modern identity stack priorities: decentralization, hardware-binding, and verifier impersonation resistance.

The key vulnerability lies in reliance on user-verified Control Codes—a gap that modern phishing proxies have demonstrated the ability to bridge. Contemporary standards (FIDO2) assume user compromise and rely on protocol-level rejection of adversaries. The distinction is critical: Smart-ID asks users to detect attacks; FIDO2 makes attacks mathematically impossible.

For high-assurance use cases, transition strategies should prioritize standards-based authentication while retaining qualified electronic signature capability where legally mandated. The technology exists. The standards are established. The question is whether the institutional will exists to act.

The evidence is clear: this is not a technical problem awaiting a solution. It is a governance failure awaiting accountability.

---

## References

<a id="references"></a>

1. FIDO Alliance. *FIDO2: WebAuthn and CTAP*. https://fidoalliance.org/fido2/
2. Estonian Information System Authority (RIA). *Cyber Security in Estonia 2025*. https://ria.ee/sites/default/files/documents/2025-02/Cyber-security-in-Estonia-2025.pdf
3. KnowBe4. *2024 Phishing by Industry Benchmarking Report*. KnowBe4, 2024.
4. Regulation (EU) No 910/2014 of the European Parliament and of the Council (eIDAS).
5. NIST. *SP 800-63-4: Digital Identity Guidelines*. National Institute of Standards and Technology, 2024.
6. Regulation (EU) 2016/679 of the European Parliament and of the Council (GDPR).
7. Regulation (EU) 2022/2554 of the European Parliament and of the Council on digital operational resilience for the financial sector (DORA).
8. Paršovs, A. *Pangad ei kasuta Smart-ID õngitsusrünnete vastaseid meetmeid*. ERR, January 2026.

---

*This research represents independent security analysis by Tom Kristian Abel. For the complete disclosure timeline, see [Responsible Disclosure Timeline](../05-enforcement/responsible-disclosure-timeline.md).*
