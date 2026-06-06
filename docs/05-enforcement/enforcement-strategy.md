---
title: Regulatory Enforcement Strategy
description: Legal analysis and strategic enforcement recommendations for Estonian regulatory authorities regarding Smart-ID security vulnerabilities
---

# Regulatory Enforcement Strategy

**To:** RIA / TTJA / AKI
**From:** Senior Legal & Cybersecurity Policy Auditor
**Date:** February 1, 2026
**Subject:** Enforcement Mechanisms for Unremediated QRLJacking and MitM Vulnerabilities in Smart-ID

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

- **§ 14 (Supervision):** RIA has the direct mandate to supervise compliance. If a QTSP fails to meet security requirements, RIA can suspend or revoke the "Qualified" status.
- **§ 15 (Conformity Assessment):** RIA has the authority to reject conformity assessment reports if they do not adequately address known vulnerabilities.
- **§ 34 (State Supervision):** RIA is explicitly designated as the supervisory body.
- **§ 36 (Precepts and Penalty Payments):** RIA may issue a precept demanding the elimination of the violation, with penalty payments for non-compliance.

### Cybersecurity Act (KüTS)

SK ID Solutions is a provider of a vital service (digital identification) under the Cybersecurity Act.

- **§ 7 (Security Measures):** "A service provider is required to apply organizational, physical and information technology security measures... appropriate to the identified risks." [[2]](#references)
- **The Hammer:** RIA can deem "risk acceptance" insufficient if the risk involves mass-scale identity theft potential. If a technical fix exists and continuing to use the vulnerable architecture violates the requirement to implement "appropriate" measures, the defense collapses.

### Recommended Action

RIA must issue an immediate Precept under EUTS § 36 and the Cybersecurity Act (KüTS). The admission that risk was "accepted" invalidates the certification audit, since the audit relies on the premise that all critical risks are mitigated, not merely "accepted" for convenience.

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

1. **RIA:** Issue a formal Precept under EUTS § 36 citing non-compliance with eIDAS Art 24(2).
2. **AKI:** Open an investigation into GDPR Art 32 violation.
3. **TTJA:** Initiate a supervision proceeding regarding Misleading Trading Practices.

The combined weight of a RIA Precept and a GDPR Fine creates an unavoidable legal imperative for SK ID Solutions to patch the architecture.

---

## 6. Draft Precept Template (For RIA)

**NOTICE OF ADMINISTRATIVE PRECEPT**

**To:** SK ID Solutions AS
**From:** Riigi Infosüsteemi Amet (RIA)
**Basis:** Electronic Identification and Trust Services for Electronic Transactions Act (EUTS)

**STATEMENT OF FACTS:**
Based on evidence acquired by the Authority, SK ID Solutions AS has admitted to knowingly deploying the "Smart-ID+" service with a known vulnerability (Lack of Context Binding/QRLJacking susceptibility), citing "implementation complexity" as justification.

**VIOLATION:**
This constitutes a breach of eIDAS Regulation Art 19(1) and Art 24(2)(e), as the service fails to employ state-of-the-art measures to mitigate high-impact risks to the security of the trust service.

**PRECEPT:**

1. **Immediate Remediation:** SK ID Solutions must implement "Context Binding" (or equivalent architectural mitigation) to prevent QRLJacking/MITM attacks within 30 calendar days.
2. **External Audit:** Submit a new conformity assessment report by an independent auditor confirming the closure of this vulnerability.
3. **Penalty Warning:** Failure to comply by [Date] will result in a non-compliance levy of 10,000 EUR per week and potential suspension of "Qualified Trust Service Provider" status for the Smart-ID service.

**Signatory:**
[Director General of RIA]

---

## 7. Regulatory Action Plan

The evidence proves that the vulnerability is not a bug, but a business decision. This requires a coordinated punitive response.

| Authority | Charge / Violation | Statutory Basis | Required Action |
| :--- | :--- | :--- | :--- |
| **RIA** | Failure to meet "High Assurance" security standards; Operating a Qualified Service with known critical flaws. | eIDAS Art 19 & 24; EUTS §§ 14, 15, 36; KüTS § 7 | Precept: Mandate architectural fix (Context Binding) under threat of losing License. |
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
