# Regulatory Enforcement Strategy

## 1. RIA (State Information System Authority)

**Primary Jurisdiction:** Supervision of Qualified Trust Services & Critical Infrastructure.

### The Legal Basis

The core violation lies in the eIDAS Regulation (EU) No 910/2014 and its implementation via the EUTS (E-identimise ja e-tegingute usaldusteenuste seadus).

* **eIDAS Article 19 (Security requirements):** Article 19(1) mandates that Trust Service Providers take "appropriate technical and organisational measures to manage the risks posed to the security of the trust services... having regard to the state of the art."
  * *Breach:* QRLJacking is a known vector. "Context Binding" is the state-of-the-art mitigation. By knowingly omitting this for cost/complexity reasons, SK ID has failed the "state of the art" test.
* **eIDAS Article 24 (Requirements for QTSPs):** Article 24(2)(e) states a QTSP must "use trustworthy systems and products that are protected against modification and ensure the technical security and reliability of the processes supported by them."
  * *Breach:* A system that allows session hijacking via simple MITM isn't "trustworthy" for High Assurance actions (bank transfers, signing laws).
* **EUTS § 14 (Supervision):** RIA has the direct mandate to supervise compliance. If a QTSP fails to meet security requirements, RIA can suspend or revoke the "Qualified" status.

### Recommended Action (RIA)

RIA must issue an immediate Precept under EUTS and the Cybersecurity Act (KüTS). The admission that risk was "accepted" invalidates the certification audit, since the audit relies on the premise that all critical risks are mitigated, not merely "accepted" for convenience.

---

## 2. TTJA (Consumer Protection & Technical Regulatory Authority)

**Primary Jurisdiction:** Misleading Commercial Practices & Product Safety.

### The Legal Basis

The product (Smart-ID+) is marketed as a secure, "High" level tool for identity verification.

* **TKS (Consumer Protection Act) § 16 (Misleading Omission):** A trading practice is misleading if it omits material information that the average consumer needs to take an informed transactional decision.
  * *Breach:* SK ID markets the service as "Secure." They omitted the material fact that they "knowingly accepted" a flaw allowing identity theft via MITM. Had consumers known this, they might have chosen ID-card or Mobile-ID instead.
* **TKS § 12 (Misleading Trading Practices):** Providing false information or deceiving the consumer regarding the main characteristics of the product (including risks and security).
  * *Breach:* Selling a "High Assurance" tool that lacks basic Context Binding constitutes a deceptive description of the product's safety characteristics.

### Recommended Action (TTJA)

TTJA must open a misdemeanor procedure for Misleading Trading Practices. They should demand SK ID explicitly label the service with a warning or mandate the immediate implementation of the security fix (Context Binding) as a condition for continuing to market the service as "Secure."

---

## 3. AKI (Data Protection Inspectorate)

**Primary Jurisdiction:** Protection of Personal Data (GDPR).

### The Legal Basis

Identity theft leads to a massive breach of personal data.

* **GDPR Article 25 (Data Protection by Design and by Default):** Controllers must implement appropriate technical measures at the time of the determination of the means for processing and at the time of the processing itself.
  * *Breach:* The email evidence states the flaw was known "during development" (design phase). By choosing not to fix it for "complexity" reasons, SK ID violated the core principle of Privacy by Design.
* **GDPR Article 32 (Security of Processing):** Requires a process for regularly testing, assessing, and evaluating the effectiveness of technical measures.
  * *Breach:* While they "assessed" the risk, their decision to "accept" a high-impact risk (identity hijacking) is a failure to implement appropriate measures relative to the risk.

### Recommended Action (AKI)

AKI should launch an investigation into the architectural decision-making process. If a data breach occurs due to this specific flaw (QRLJacking), SK ID faces fines up to 20 million EUR or 4% of turnover, specifically aggravated by the written evidence of prior knowledge (intent/negligence).

---

## 4. Dismantling the "Risk Acceptance" Defense

**The Defense:** SK ID claims they "balanced security, usability, and complexity" and "accepted the risk."

**The Rebuttal:**

1. **Non-Transferable Risk:** In a strictly private contract (a gaming forum), a provider can accept risk. In National Trust Services, the risk isn't SK ID's to accept. The risk falls on the User (stolen funds) and the State (legal integrity). You can't accept risk for a third party without their informed consent.
2. **eIDAS Hierarchy:** The "Level High" assurance requirements under eIDAS are statutory minimums, not suggestions. A known architectural hole that facilitates MITM contradicts the technical specifications for "High" assurance which requires "substantial resistance" to attacker capability.
3. **Cost vs. Safety:** Under product liability laws and GDPR, "implementation complexity" (cost) isn't a valid legal defense for leaving a known critical vulnerability in a mass-market security product.

---

## 5. Draft Precept Template (For RIA)

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

## 6. Conclusion: Regulatory Action Plan

The evidence proves that the vulnerability is not a bug, but a business decision. This requires a coordinated punitive response.

| Authority | Charge / Violation | Statutory Basis | Required Action |
| :--- | :--- | :--- | :--- |
| **RIA** | Failure to meet "High Assurance" security standards; Operating a Qualified Service with known critical flaws. | eIDAS Art 19 & 24; EUTS | Precept: Mandate architectural fix (Context Binding) under threat of losing License. |
| **TTJA** | Misleading Trading Practices (Selling "Security" while hiding known flaws). | TKS § 12, § 16 | Fine: Misdemeanor procedure for deceptive marketing. Demand public risk notice. |
| **AKI** | Violation of "Privacy by Design"; Inadequate security measures for sensitive data. | GDPR Art 25, Art 32 | Audit: Initiate investigation into "Profit over Privacy" decision making. Potential administrative fine. |

**Final Recommendation:**
Submit the "responsible disclosure" correspondence formally to RIA's Cyber Security Branch (CERT-EE) and TTJA. Frame it not as a "bug report" but as "Evidence of Willful Violation of eIDAS Regulation." The admission of "knowing acceptance" is the legal pivot point that forces the regulators to act.
