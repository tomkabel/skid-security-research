---
title: Regulatory Enforcement Strategy
description: Legal analysis and strategic enforcement recommendations for Estonian regulatory authorities regarding Smart-ID security vulnerabilities
---

# Regulatory Enforcement Strategy

**To:** RIA / TTJA / AKI
**Date:** 2026-02-01
**Subject:** Enforcement Mechanisms for Unremediated QRLJacking and MitM Vulnerabilities in Smart-ID

> **Author's Note:** This document represents technical and policy analysis. The author is not a lawyer. For legal advice on regulatory enforcement, consult with qualified legal professionals.

## Summary

The refusal of SK ID Solutions to remediate known architectural vulnerabilities (QRLJacking and Man-in-the-Middle vectors) under the defense of "risk acceptance" constitutes a potential violation of Estonian statutory law and EU regulations.

While "risk acceptance" is a valid concept in internal corporate governance, it cannot override statutory obligations regarding "High" assurance levels, consumer safety expectations, and data protection "by design." The following analysis outlines the specific legal instruments available to RIA, TTJA, and AKI to dismantle this defense and mandate technical remediation.

---

## 1. RIA (State Information System Authority)

**Primary Jurisdiction:** Supervision of Qualified Trust Services & Critical Infrastructure.

### The Legal Basis

The core violation lies in the eIDAS Regulation (EU) No 910/2014 and its implementation via the EUTS (E-identimise ja e-tehingute usaldusteenuste seadus).

**eIDAS Article 19 (Security requirements):** Article 19(1) mandates that Trust Service Providers take "appropriate technical and organisational measures to manage the risks posed to the security of the trust services... having regard to the state of the art." [[1]](#references)

- *Breach:* QRLJacking is a known vector. "Context Binding" is the state-of-the-art mitigation. By knowingly omitting this for cost/complexity reasons, SK ID has failed the "state of the art" test.

**eIDAS Article 24 (Requirements for QTSPs):** Article 24(2)(e) states a QTSP must "use trustworthy systems and products that are protected against modification and ensure the technical security and reliability of the processes supported by them." [[1]](#references)

- *Breach:* A system that allows session hijacking via simple MITM isn't "trustworthy" for High Assurance actions (bank transfers, signing laws).

**eIDAS Annex II (Requirements for QSCD):** Paragraph 1 requires that the confidentiality of the signature creation data is reasonably assured. If the architecture allows a MitM to effectively "hijack" the signing session, the device arguably fails QSCD certification criteria.

**The "Sole Control" Argument:** The cornerstone of Qualified Trust Service status is Sole Control—the signatory must have exclusive control over the signature creation data. If a QRLJacking/MITM attack allows an attacker to initiate a transaction that the user inadvertently authorizes, the system fails to guarantee that the signatory has "sole control" over the signature creation data. This is not a theoretical concern; it is the foundational requirement that distinguishes Qualified from Advanced electronic signatures.

### Estonian Law: EUTS

- **§§ 14–15 (Trusted list entry and publication):** These sections govern only the timing and publication of the trusted list; they are not the supervisory or sanctioning basis and are cited here for completeness, not authority.
- **§ 22 (State supervision):** RIA (as competent authority) and the competent information security authority have the direct mandate to supervise compliance with eIDAS and the Act.
- **§ 23 (Specific measures of state supervision):** RIA may apply the special state-supervision measures of the Law Enforcement Act (KorS §§ 30–32 and §§ 49–52 — questioning and document requests, summons, identity checks, and entry onto service premises) to investigate compliance. These are investigative powers, not the precept mechanism itself.
- **KorS § 28 (Precept and administrative coercion):** The general precept (*ettekirjutus*) authority — ordering a supervised person to eliminate a violation, on pain of a coercive measure — sits in KorS § 28, not in EUTS § 23. RIA may issue such a precept as part of its § 22 state-supervision mandate; non-compliance with the precept may then be enforced with a non-compliance levy (*sunniraha*) under the Substitutional Performance and Non-Compliance Levies Act (ATSS §§ 2 and 10).
- **§ 9(2) (Revocation of authorisation):** If a QTSP no longer meets the requirements of eIDAS or the Act and fails to correct this within a term set by RIA, RIA revokes the "Qualified" authorisation — the closest EUTS mechanism to suspending or revoking Qualified status.

### Cybersecurity Act (KüTS)

SK ID Solutions is a provider of a vital service (digital identification) under the Cybersecurity Act.

- **§ 7 (Security Measures):** "A service provider is required to apply organizational, physical and information technology security measures... appropriate to the identified risks." [[2]](#references)
- **The Hammer:** RIA can deem "risk acceptance" insufficient if the risk involves mass-scale identity theft potential. If a technical fix exists and continuing to use the vulnerable architecture violates the requirement to implement "appropriate" measures, the defense collapses.

### Recommended Action

If RIA's supervision under EUTS §§ 22–23 and the Cybersecurity Act (KüTS § 7) confirms the statutory conditions are met, RIA may issue a Precept under KorS § 28. Neither EUTS §§ 22–23 nor KüTS § 7 makes issuing a precept automatic — it is a discretionary supervisory measure, not a mandatory consequence of risk acceptance. Whether SK ID's "accepted risk" position also affects the standing of its certification audit is a separate conformity-assessment question that would need its own specific legal basis, not an automatic consequence asserted here.

---

## 2. TTJA (Consumer Protection & Technical Regulatory Authority)

**Primary Jurisdiction:** Misleading Commercial Practices & Product Safety.

### The Legal Basis

The product (Smart-ID+) is marketed as a secure, "High" level tool for identity verification.

**TKS § 16 (Misleading Omission):** A trading practice is misleading if it omits material information that the average consumer needs to take an informed transactional decision. [[3]](#references)

- *Breach:* SK ID markets the service as "Secure." They omitted the material fact that they "knowingly accepted" a flaw allowing identity theft via MITM. Had consumers known this, they might have chosen ID-card or Mobile-ID instead.

**TKS § 12 (Misleading Trading Practices):** Providing false information or deceiving the consumer regarding the main characteristics of the product (including risks and security).

- *Breach:* Selling a "High Assurance" tool that lacks basic Context Binding constitutes a deceptive description of the product's safety characteristics.

**VÕS § 77 (Defective Digital Services):** Estonia transposed the EU Digital Content Directive into the Law of Obligations Act. Digital services must possess the qualities (including functionality, compatibility, and security) that are normal for services of the same type and which the consumer may reasonably expect.

- **The "Reasonable Expectation" Test:** A consumer using a banking-grade security app reasonably expects that the system checks if the person scanning the code is the person logging in. A system vulnerable to basic MitM attacks fails this conformity test. This is not a theoretical legal argument—it is the standard by which all digital services in Estonia are now measured.

### Recommended Action

TTJA must open a misdemeanor procedure for Misleading Trading Practices. They should demand SK ID explicitly label the service with a warning or mandate the immediate implementation of the security fix (Context Binding) as a condition for continuing to market the service as "Secure."

---

## 3. AKI (Data Protection Inspectorate)

**Primary Jurisdiction:** Protection of Personal Data (GDPR).

### The Legal Basis

Identity theft leads to a massive breach of personal data.

**GDPR Article 25 (Data Protection by Design and by Default):** Controllers must implement appropriate technical measures at the time of the determination of the means for processing and at the time of the processing itself. [[4]](#references)

- *Breach:* The email evidence states the flaw was known "during development" (design phase). By choosing not to fix it for "complexity" reasons, SK ID violated the core principle of Privacy by Design.

**GDPR Article 32 (Security of Processing):** Requires a process for regularly testing, assessing, and evaluating the effectiveness of technical measures.

- *Breach:* While they "assessed" the risk, their decision to "accept" a high-impact risk (identity hijacking) is a failure to implement appropriate measures relative to the risk. Solutions to QRLJacking are "state of the art." By refusing to implement them due to "design choice," SK is failing to use state-of-the-art technology to protect user authentication data.

### Recommended Action

AKI should launch an investigation into the architectural decision-making process. If a data breach occurs due to this specific flaw (QRLJacking), SK ID faces fines up to 20 million EUR or 4% of turnover, specifically aggravated by the written evidence of prior knowledge (intent/negligence). [[4]](#references)

---

## 4. Dismantling the "Risk Acceptance" Defense

**The Defense:** SK ID claims they "balanced security, usability, complexity" and "accepted the risk."

**The Rebuttal:**

1. **Non-Transferable Risk:** In a strictly private contract (a gaming forum), a provider can accept risk. In National Trust Services, the risk isn't SK ID's to accept. The risk falls on the User (stolen funds) and the State (legal integrity). You cannot accept risk for a third party without their informed consent. The Estonian public was never asked whether they consented to this risk.

2. **eIDAS Hierarchy:** The "Level High" assurance requirements under eIDAS are statutory minimums, not suggestions. A known architectural hole that facilitates MITM contradicts the technical specifications for "High" assurance, which requires "substantial resistance" to attacker capability. The "DISPUTED" CVE status does not change the legal reality.

3. **Cost vs. Safety:** Under product liability laws and GDPR, "implementation complexity" (cost) is not a valid legal defense for leaving a known critical vulnerability in a mass-market security product. No court has ever accepted "it was too expensive to fix" as a defense for a known safety defect.

4. **The ROCA Precedent:** In 2017, RIA suspended certificates for 750,000 Estonian ID cards due to a theoretical Infineon cryptographic flaw—before any actual attacks occurred. The precedent is clear: RIA prioritizes trust over continuity for tangible risks in digital identity systems. Smart-ID QRLJacking is not theoretical; it is actively exploited.

---

## 5. Coordinated Enforcement: The "Kill Chain"

To force immediate remediation, regulators should coordinate:

1. **RIA:** If supervision establishes a statutory violation and the KorS § 28 conditions are met, RIA may issue a formal precept under the EUTS § 22 state-supervision mandate, citing the identity-verification component's failure to meet the "High" assurance-level technical specifications under eIDAS Art 8, and/or the signing (QTSP) component's non-compliance with the "trustworthy systems" obligation under eIDAS Art 24(2)(e).
2. **AKI:** Open an investigation into GDPR Art 32 violation.
3. **TTJA:** Initiate a supervision proceeding regarding Misleading Trading Practices.

The combined weight of a RIA Precept and a GDPR Fine creates an unavoidable legal imperative for SK ID Solutions to patch the architecture.

---

## 6. Enforcement Instruments Available to RIA

> **Important:** This section describes the legal instruments available to RIA under Estonian law and provides a hypothetical illustration of how those instruments could be applied. No precept has been issued. The following is analytical, not documentary.

Under EUTS § 22 (state supervision), RIA may issue a precept (*ettekirjutus*) demanding that a trust service provider eliminate a violation of statutory requirements, under the general precept authority of KorS § 28 — not EUTS § 23, which incorporates only the special investigative measures of KorS §§ 30–32 and §§ 49–52 (questioning, document requests, identity checks, and premises entry). Non-compliance with a precept may be enforced with a penalty payment (*sunniraha*) under the Substitutional Performance and Non-Compliance Levies Act (ATSS §§ 2 and 10). EUTS §§ 14–15 establish only the trusted-list entry and publication mechanics and are not themselves a source of supervisory or sanctioning power. The authority to revoke a qualified trust service provider's authorisation — the closest EUTS equivalent to "suspending qualified status" — sits in § 9(2): the competent authority revokes an authorisation if the provider no longer complies with Regulation (EU) No. 910/2014 or the Act and has not corrected this within a term set by the authority.

A hypothetical enforcement pathway would involve:

1. **Immediate remediation order:** Require implementation of cryptographic context binding (or equivalent architectural mitigation) to address QRLJacking/MITM susceptibility within a defined compliance period.
2. **Independent audit:** Mandate submission of a new conformity assessment report from an accredited auditor confirming closure of the identified vulnerability.
3. **Non-compliance penalty:** Failure to remediate within the compliance period would expose the provider to penalty payments (*sunniraha*, under ATSS §§ 2 and 10, following a KorS § 28 precept) and potential revocation of qualified trust service provider authorisation under EUTS § 9(2).

The FIDO2 Pivot Analysis (see [FIDO2 Pivot Analysis](../06-supplementary-research/fido2-pivot-analysis.md)) demonstrates that the technical capability to remediate exists. The question is regulatory will, not technical feasibility.

---

## 7. Regulatory Action Plan

The evidence proves that the vulnerability is not a bug, but a business decision. This requires a coordinated punitive response.

| Authority | Charge / Violation | Statutory Basis | Required Action |
| :--- | :--- | :--- | :--- |
| **RIA** | Potential failure of the identity-verification component to meet "High" assurance-level technical specifications; alleged operation of the signing (QTSP) component as a Qualified Service with known critical flaws. | eIDAS Art 8 (assurance levels); Art 19 & 24(2) (QTSP obligations); EUTS §§ 9(2), 22, 23; KorS § 28; ATSS §§ 2, 10; KüTS § 7 | Supervisory proceeding: Consider a KorS § 28 precept if the statutory conditions are met; continued non-compliance may lead to revocation of qualified authorisation under EUTS § 9(2). |
| **TTJA** | Misleading Trading Practices (Selling "Security" while hiding known flaws); Defective Digital Service. | TKS §§ 12, 16; VÕS § 77 | Fine: Misdemeanor procedure for deceptive marketing. Demand public risk notice. |
| **AKI** | Violation of "Privacy by Design"; Inadequate security measures for sensitive data. | GDPR Art 25, Art 32 | Audit: Initiate investigation into "Profit over Privacy" decision making. Potential administrative fine. |

**Final Recommendation:**
Submit the "responsible disclosure" correspondence formally to RIA's Cyber Security Branch (CERT-EE) and TTJA. Frame it not as a "bug report" but as "Evidence of Willful Violation of eIDAS Regulation." The admission of "knowing acceptance" is the legal pivot point that forces the regulators to act.

---

## References

<a id="references"></a>

1. Regulation (EU) No 910/2014 of the European Parliament and of the Council (eIDAS).
2. Cybersecurity Act (Küberkuritegevuse vastu võitlemise seadus, KüTS), Republic of Estonia.
3. Consumer Protection Act (Tarbijakaitseseadus, TKS), Republic of Estonia.
4. Regulation (EU) 2016/679 of the European Parliament and of the Council (GDPR).
5. Law of Obligations Act (Võlaõigusseadus, VÕS), Republic of Estonia.
6. Estonian Information System Authority (RIA). *Cyber Security in Estonia 2017* (ROCA precedent).
7. Law Enforcement Act (Korrakaitseseadus, KorS), Republic of Estonia, § 28.
8. Substitutional Performance and Non-Compliance Levies Act (Asendustäitmise ja sunniraha seadus, ATSS), Republic of Estonia, §§ 2, 10.
