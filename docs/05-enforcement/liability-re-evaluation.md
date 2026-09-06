---
title: Liability Re-Evaluation
description: Re-evaluation of Smart-ID RP API v3 and liability shifting implications
---

# Re-Evaluation: SK ID Solutions RP API v3 & Liability Shifting

**To:** RIA / TTJA / AKI
**Date:** 2026-02-01
**Subject:** Impact of Smart-ID RP API v3 on Enforcement Strategy

> **Author's Note:** This document represents technical and policy analysis. The author is not a lawyer. For legal advice on regulatory enforcement, consult with qualified legal professionals.

## Summary: The "Liability Shield" Strategy

The introduction of Smart-ID RP API v3 changes the nature of negligence but does not absolve SK ID Solutions. The documentation confirms Device Link Flows (Dynamic QR, App-to-App) offer "Maximum protection against phishing." However, the vulnerable "Notification based flow" remains active, labeled "Not Recommended" as phishing protection "relies on user awareness."

SK ID Solutions employs a "Liability Shield"—shifting blame to RPs while contractually absolving themselves. As QTSP, they cannot permit insecure options for Qualified services. Enforcement pivots from technical remediation (now exists) to mandatory deprecation.

The documentation acts as a confession: the fix is deployable today, but the legacy flow is sustained for market share.

---

## 1. Factual Updates Based on API v3 Documentation

The API documentation admits vulnerabilities:

| Claim in Documentation | Legal Implication |
|----------------------|-------------------|
| "RP API v3 still has notification based flows... Phishing protection relies on user awareness" | Admits legacy flow is vulnerable to social engineering (MitM). |
| "Not Recommended" | Officially fails modern standards. |
| "It is the RP's opportunity and responsibility to carefully assess these risks..." | Smoking Gun: Liability shift to clients. |
| "Device link flows provide a modern and more secure alternative" | State of the Art (GDPR Art 32) is available now. |

### Technical-Legal Re-Assessment: Dynamic QR Fallacy

Device Link claims "Maximum protection," but scrutiny reveals potential QRLJacking if relayable without context binding. Notification explicitly relies on "user awareness," contradicting eIDAS Art 24(2)(e). The documentation itself proves that SK ID Solutions has the technical capability to provide stronger security—they simply choose not to mandate it for all flows.

---

## 2. Revised Enforcement Strategy

### A. RIA: The "Qualified" Trap

SK argues RP choice; RIA counters that Qualified status is not optional.

**Violation:** eIDAS Art 24(2) – trustworthy systems; QES via insecure flow dilutes the trust mark.

**The Argument:** When a QTSP offers both a secure flow (Device Link) and an insecure flow (Notification), and labels the insecure flow "Not Recommended," the continued availability of that flow for Qualified Electronic Signatures is a compliance violation. A QTSP cannot simultaneously acknowledge that a flow fails security standards and permit it to be used for legally binding signatures.

**Action:** Precept mandating sunset of Notification-based flow for QES within 6 months. Any RP wishing to continue using the notification flow for Qualified signatures must implement compensating controls approved by RIA.

### B. TTJA: The "Invisible Choice"

The consumer is blind to the RP's integration choice.

**Violation:** TKS §16 misleading; markets "Secure" while licensing insecure configuration.

**The Argument:** When a consumer sees the Smart-ID logo on a banking website, they assume a uniform level of security. They have no visibility into whether the bank has implemented the secure Device Link flow or the insecure Notification flow. The consumer cannot make an informed choice because the critical variable (which flow is being used) is hidden from them.

**Action:** Penalize "Defective by Design"; mandate app-level warnings for Notification flow: "This service uses a lower-security authentication method."

### C. AKI: Privacy by Design & Default

**Violation:** Art 25 – secure design exists but insecure default is allowed.

**The Argument:** The availability of a secure alternative (Device Link) makes the continued offering of the insecure alternative (Notification) a violation of "default" protection. Under GDPR Art 25(2), the default setting must provide the highest level of data protection. If Device Link exists and is superior, it should be the default—or the only option.

**Action:** Rule that offering Notification flow violates Art 25 when Device Link is available and deployed.

---

## 3. "RP Responsibility" Defense Dismantled

**SK's Position:** "RP assesses risks."

**Why This Fails:**

1. **Vital Service Doctrine:** As a provider of a service critical to national digital infrastructure, SK ID cannot delegate security responsibility to individual RPs. The systemic risk of insecure authentication affects all users, not just those of a particular RP.

2. **eIDAS Sole Control:** The QTSP bears primary responsibility for the security of the trust service. Permitting RPs to choose an insecure flow while maintaining the QTSP's qualified status is incompatible with the Sole Control requirement.

3. **Expert Knowledge Asymmetry:** An individual RP (e.g., a small e-commerce shop) lacks the cryptographic expertise to assess whether the Notification flow's "user awareness" requirement is sufficient. SK ID, as the architect, has this expertise—and has already concluded it is insufficient ("Not Recommended"). Allowing a less knowledgeable party to override the expert's assessment constitutes gross negligence.

4. **Gatekeeper Obligation:** SK ID is the gatekeeper. If an RP refuses to migrate to the secure flow, SK ID should cut off API access for that RP's use of Qualified services. The gatekeeper cannot simultaneously warn that the gate is broken and leave it open.

**Key Point:** The internal admission of "knowing acceptance" proves conscious choice prioritizing clients over citizens. This is not a failure of knowledge—it is a failure of will.

---

## 4. Final Conclusion

The API v3 documentation indicts legacy flow support. SK ID Solutions has proven it is technically capable of providing secure authentication. Its refusal to mandate the secure flow for all use cases constitutes a conscious business decision to prioritize adoption and revenue over user security.

**Orders:**
1. **RIA:** Mandate end-of-life for Notification flow in QES contexts within 6 months; QES via legacy flow loses Qualified status.
2. **AKI:** Audit SK ID's contracts with RPs; flag Art 32 failure post-v3 documentation release.
3. **TTJA:** Require warnings: "This service uses a lower-security authentication method by [RP name]."

**Verdict:** The gatekeeper must close the insecure gate. The documentation strengthens the gross negligence case. The fix is available. The will to implement it is not.
