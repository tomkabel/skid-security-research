# Re-Evaluation of Legal Analysis: SK ID Solutions RP API v3 & Liability Shifting

**To:** State Information System Authority (RIA) / Consumer Protection and Technical Regulatory Authority (TTJA) / Data Protection Inspectorate (AKI)
**From:** Senior Legal & Cybersecurity Policy Auditor
**Date:** February 1, 2026
**Subject:** URGENT RE-EVALUATION – Impact of Smart-ID RP API v3 on Enforcement Strategy against SK ID Solutions

## Executive Summary: The \"Liability Shield\" Strategy

The introduction of **Smart-ID RP API v3** changes the nature of negligence but does not absolve SK ID Solutions. The documentation confirms Device Link Flows (Dynamic QR, App-to-App) offer \"Maximum protection against phishing.\" However, the vulnerable \"Notification based flow\" remains active, labeled \"Not Recommended\" as phishing protection \"relies on user awareness.\"

SK ID Solutions employs a \"Liability Shield\" – shifting blame to RPs while contractually absolving themselves. As QTSP, they cannot permit insecure options for Qualified services. Enforcement pivots from technical remediation (now exists) to **mandatory deprecation**.

The docs act as confession: fix deployable today, but legacy sustained for market share.

## 1. Factual Updates Based on API v3 Documentation

The API documentation admits vulnerabilities:

| Claim in Documentation | Legal Implication for Regulators |
|------------------------|----------------------------------|
| **\"RP API v3 still has notification based flows... Phishing protection relies on user awareness\"** | Admits legacy vulnerable to social engineering (MitM). |
| **\"Not Recommended\" (Table 1 & 2)** | Officially fails modern standards. |
| **\"It is the RP's opportunity and responsibility to carefully assess these risks...\"** | **Smoking Gun:** Liability shift to clients. |
| **\"Device link flows provide a modern and more secure alternative\"** | State of the Art (GDPR Art 32) available now. |

## 1.1 Technical-Legal Re-Assessment: Dynamic QR Fallacy

Device Link claims \"Maximum protection,\" but scrutiny reveals potential QRLJacking if relayable without context binding (animated liveness/spatial). Notification explicitly relies on \"user awareness,\" contradicting eIDAS Art 24(2)(e).

## 2. Revised Enforcement Strategy by Agency

### A. RIA (eIDAS & EUTS): The \"Qualified\" Trap
SK argues RP choice; RIA counters Qualified not optional.

- **Violation:** eIDAS Art 24(2) – trustworthy systems; QES via insecure flow dilutes trust mark.
- **Action:** Precept sunset Notification for QES. *Hammer:* \"QTSP cannot delegate security to RP discretion.\"

### B. TTJA (Consumer Protection): The \"Invisible Choice\"
Consumer blind to RP integration.

- **Violation:** TKS §16 misleading; markets \"Secure\" while licensing insecure config.
- **Action:** Penalize \"Defective by Design\"; mandate app warnings for Notification. *Hammer:* \"Offering defective option exposes consumers to risks.\"

### C. AKI (GDPR): Privacy by Design & Default
- **Violation:** Art 25 – secure design exists but insecure default allowed.
- **Action:** Rule offering Notification violates when Device Link available. *Hammer:* \"Enforce secure as default.\"

## 3. \"RP Responsibility\" Defense Dismantled

SK: \"RP assesses risks.\"

Fails:
1. **Vital Service (Cybersecurity Act):** Provider secures service.
2. **eIDAS Sole Control:** QTSP responsibility.
3. **Asymmetry:** Expert cannot support \"Not Recommended\" flow (gross negligence).
4. **Gatekeeper:** Must cut off insecure RPs.

**Silver Bullet:** Internal acceptance proves conscious choice prioritizing clients over citizens.

## 4. Final Revised Conclusion & \"Kill Chain\"

API v3 indicts legacy support. Proven capable, refuse enforcement.

**Orders:**
1. **RIA:** EOL Notification (6 months); QES via legacy loses status.
2. **AKI:** Audit contracts; flag Art 32 failure post-v3.
3. **TTJA:** Warnings: \"Low-security method by [RP].\"

**Verdict:** Gatekeeper must close insecure gate. Documentation strengthens gross negligence case.