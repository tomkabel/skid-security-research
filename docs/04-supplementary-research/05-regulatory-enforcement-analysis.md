# Legal Analysis: Regulatory Enforcement Against SK ID Solutions

**To:** RIA / TTJA / AKI
**From:** Senior Legal & Cybersecurity Policy Auditor
**Date:** February 1, 2026
**Subject:** Enforcement Mechanisms for Unremediated QRLJacking and MitM Vulnerabilities in Smart-ID

## Summary

The refusal of SK ID Solutions to remediate known architectural vulnerabilities (QRLJacking and Man-in-the-Middle vectors) under the defense of "risk acceptance" constitutes a potential violation of Estonian statutory law and EU regulations.

While "risk acceptance" is a valid concept in internal corporate governance, it cannot override statutory obligations regarding "High" assurance levels, consumer safety expectations, and data protection "by design." The following analysis outlines the specific legal instruments available to RIA, TTJA, and AKI to dismantle this defense and mandate technical remediation.

---

## 1. RIA's Enforcement Powers (eIDAS & Cybersecurity)

**Jurisdiction:** supervision of Qualified Trust Service Providers and Vital Services.
**Objective:** Maintain the integrity of the Qualified status and national digital identity.

### The "Qualified" Status Leverage

Under EU Regulation 910/2014 (eIDAS), Smart-ID operates as a Qualified Trust Service. The cornerstone of this status is Sole Control.

* **Legal Argument:** If a QRLJacking/MitM attack allows an attacker to initiate a transaction that the user inadvertently authorizes, the system fails to guarantee that the signatory has "sole control" over the signature creation data.
* **eIDAS Annex II (Requirements for QSCD):** Paragraph 1 requires that the confidentiality of the data is reasonably assured. If the architecture allows a MitM to effectively "hijack" the signing session, the device arguably fails QSCD certification criteria.
* **eIDAS Article 24(2):** "Qualified trust service providers shall employ... trustworthy systems and products that are protected against modification and ensure the technical security and reliability of the processes supported by them."

**Estonian Law: EUTS**

* **§ 15 (Conformity Assessment):** RIA has the authority to reject conformity assessment reports if they do not adequately address known vulnerabilities.
* **§ 34 (State Supervision):** RIA is explicitly designated as the supervisory body.
* **§ 36 (Precepts and Penalty Payments):** RIA may issue a precept demanding the elimination of the violation.

### Cybersecurity Act (KüTS)

SK ID Solutions is a provider of a vital service (digital identification).

* **§ 7 (Security Measures):** "A service provider is required to apply organizational, physical and information technology security measures... appropriate to the identified risks."
* **The Hammer:** RIA can deem "risk acceptance" insufficient if the risk involves mass-scale identity theft potential. If a technical fix exists and continuing to use the vulnerable architecture violates the requirement to implement "appropriate" measures.

### Actionable Enforcement by RIA

1. **Issue a Precept:** Mandate the implementation of technical mitigations within a set timeframe.
2. **Threaten Revocation:** Notify SK ID Solutions that failure to remediate renders the service non-compliant with eIDAS Art. 24, triggering the procedure to revoke the Qualified status of Smart-ID. This would destroy the product's value proposition.

---

## 2. TTJA's Consumer Protection Mandate

**Jurisdiction:** Consumer safety, misleading trading practices, and digital goods conformity.
**Objective:** Ensure the product is as safe as marketed.

### Misleading Trading Practices

SK ID Solutions markets Smart-ID as a "Secure" authentication method.

* **TKS § 16:** A practice is misleading if it deceives the consumer regarding the main characteristics of the product, including risks and security.
* **Analysis:** If SK knows that a standard phishing kit can bypass the security but markets the tool as "secure" without explicitly warning users of this specific blind-spot, they are engaging in misleading omission.

### Defective Digital Services (VÕS)

Estonia transposed the EU Digital Content Directive into the Law of Obligations Act.

* **VÕS § 77:** Digital services must possess the qualities (including functionality, compatibility, and security) that are normal for services of the same type and which the consumer may reasonably expect.
* **The "Reasonable Expectation" Test:** A consumer using a banking-grade security app reasonably expects that the system checks if the person scanning the code is the person logging in. A system vulnerable to basic MitM attacks fails this conformity test.

### Actionable Enforcement by TTJA

1. **Injunction:** Demand the immediate cessation of marketing claims stating the system is "secure" until the vulnerability is patched.
2. **Administrative Fine:** Impose fines for misleading trading practices if the "risk acceptance" documentation proves they knowingly prioritized user friction reduction over necessary security updates.

---

## 3. AKI's Data Protection Oversight (GDPR)

**Jurisdiction:** Protection of personal data and security of processing.
**Objective:** Penalize "Security by Obscurity" or negligence.

### Article 32: Security of Processing

* **The Requirement:** Controllers/Processors must implement measures ensuring a level of security appropriate to the risk, taking into account the "state of the art."
* **The Violation:** Solutions to QRLJacking are "state of the art." By refusing to implement them due to "design choice," SK is failing to use state-of-the-art technology to protect user authentication data.
* **Legal Hammer:** A known vulnerability that allows interception of Personal Data constitutes a failure of Art 32.

### Article 25: Data Protection by Design and Default

* **The Requirement:** Security must be integrated into the architecture, not just the policy.
* **The Violation:** Relying on "User Awareness" instead of an architectural fix violates the principle of Privacy by Design. The system is designed with a default path that permits interception.

### Actionable Enforcement by AKI

1. **Assessment of Fines:** Initiate proceedings for violation of Art. 32. The fine potential is up to 10-20 million EUR or 2-4% of turnover.
2. **Reprimand & Order to Comply:** Issue a formal order to bring processing operations into compliance or face a temporary ban on processing.

---

## 4. The "Kill Chain"

To force immediate remediation from SK ID Solutions, the regulators should coordinate:

1. **RIA:** Issue a formal Precept under EUTS § 36 citing non-compliance with eIDAS Art 24(2).
2. **AKI:** Open an investigation into GDPR Art 32 violation.
3. **TTJA:** Initiate a supervision proceeding regarding Misleading Trading Practices.

**Summary:** The defense of "risk acceptance" is legally null and void when the risk involves national security infrastructure, breaches the "state of the art" requirement, and fails the reasonable expectation of safety. The combined weight of a RIA Precept and a GDPR Fine creates an unavoidable legal imperative for SK ID Solutions to patch the architecture.
