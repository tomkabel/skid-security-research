---
title: Laws, Acts, and Regulations
description: Reference guide to laws, acts, and directives applicable to electronic identification and trust services
---

# Regulatory Reference: Laws, Acts, and Directives

This document provides a factual reference of relevant laws, acts, and regulations applicable to electronic identification and trust services. No opinions or commentary are included.

---

## European Union Regulations

### eIDAS Regulation (EU) No 910/2014

**Scope:** Electronic identification and trust services for electronic transactions in the internal market.

**Relevant Articles:**
- **Article 19** - Security requirements for trust service providers
- **Article 24** - Requirements for qualified trust service providers
- **Article 25** - Liability of trust service providers
- **Annex II** - Requirements for qualified signature creation devices (QSCD)
- **Annex III** - Requirements for signature validation

**Relation to Smart-ID:** Governs the operation of Smart-ID as a qualified trust service provider. Requires compliance with security measures appropriate to the state of the art.

---

### EU AI Act (Regulation EU 2024/1689)

**Scope:** Rules on artificial intelligence systems and market placement.

**Relevant Provisions:**
- High-risk AI system requirements
- Transparency obligations
- Human oversight requirements

**Relation to Smart-ID:** May apply to AI components used in authentication risk decisioning.

---

### PSD2 (Payment Services Directive 2015/2366)

**Scope:** Payment services in the internal market.

**Relevant Provisions:**
- Strong customer authentication (SCA) requirements
- Dynamic linking requirements for payment transactions

**Relation to Smart-ID:** Governs authentication for payment transactions.

---

### Commission Delegated Regulation (EU) 2018/389 — RTS on Strong Customer Authentication

**Citation:** EUR-Lex CELEX:32018R0389.

**Scope:** Regulatory Technical Standards (RTS) supplementing PSD2, specifying requirements for strong customer authentication and common and secure open standards of communication.

**Relevant Articles:**
- **Article 2(2)(d)** — Transaction-monitoring mechanisms under Article 2(1) must take into account, at a minimum, "signs of malware infection in any sessions of the authentication procedure."
- **Article 2(2)(e)** — *Quoted here together with its condition, which qualifies it:* "in case the access device or the software is provided by the payment service provider, a log of the use of the access device or the software provided to the payment service user and the abnormal use of the access device or the software." This provision applies only where the PSP itself supplies the access device or software — it does not apply generally.
- **Article 18(2)(c)(ii)–(iii)** — A payment service provider may not apply the transaction-risk-analysis (TRA) exemption from SCA where its real-time risk analysis has identified "unusual information about the payer's device/software access" (ii) or "malware infection in any session of the authentication procedure" (iii). Both conditions are unqualified — unlike Article 2(2)(e), they do not depend on the PSP having supplied the device or software.

**Relation to Smart-ID:** These provisions establish that server-side monitoring of session- and device-level signals for signs of malware or anomalous access is not a novel or optional practice for payment service providers — it is a standing regulatory requirement (Art. 2(2)(d)) and a hard block on an SCA exemption (Art. 18(2)(c)(ii)–(iii)) wherever those signals are present. This sits alongside the eIDAS, EUTS, and GDPR framework already referenced above: the same category of server-side, RP-deployable session signal this research repository's technical analyses discuss elsewhere in the Technical Security section is independently and already contemplated by PSD2 RTS for banks generally, regardless of what Smart-ID itself does or does not implement.

---

### GDPR (Regulation EU 2016/679)

**Scope:** Protection of personal data.

**Relevant Articles:**
- **Article 25** - Data protection by design and by default
- **Article 32** - Security of processing
- **Article 33** - Notification of a personal data breach
- **Article 34** - Communication of a personal data breach

**Relation to Smart-ID:** Governs the processing of personal data during authentication and signature operations.

---

### DORA (Regulation EU 2022/2554)

**Scope:** Digital operational resilience for the financial sector.

**Relevant Articles:**
- **Article 5** - ICT risk management framework
- **Article 9** - Protection and prevention
- **Article 10** - Detection
- **Article 11** - Response and recovery

**Relation to Smart-ID:** Applies to financial institutions using Smart-ID for customer authentication. Requires financial entities to manage ICT risks, including those arising from third-party authentication providers. Mandates incident reporting and resilience testing for critical ICT services.

---

## Estonian National Legislation

### E-identimise ja e-tehingute usaldusteenuste seadus (EUTS)

**Translation:** Electronic Identification and Trust Services for Electronic Transactions Act

**Purpose:** Implementation of eIDAS in Estonian law.

**Relation to Smart-ID:** Establishes the legal framework for Smart-ID operation in Estonia. Defines requirements for qualified trust service providers operating in Estonia.

---

### Tarbijakaitseseadus (TKS)

**Translation:** Consumer Protection Act

**Relevant Provisions:**
- Misleading trading practices
- Consumer rights regarding product safety

**Relation to Smart-ID:** May apply to marketing claims regarding Smart-ID security capabilities.

---

### Küberkuritegude vastu võitlemise seadus

**Translation:** Act on Combating Cybercrime

**Relation to Smart-ID:** Addresses criminal offenses related to unauthorized access to information systems.

---

### Krüptograafiliste vahendite seadus

**Translation:** Cryptographic Means Act

**Relation to Smart-ID:** Governs the use of cryptographic means in Estonia.

---

## International Standards and Guidelines

### NIST SP 800-63-4 (Digital Identity Guidelines)

**Publisher:** National Institute of Standards and Technology (USA)

**Relevant Sections:**
- **IAL** - Identity Assurance Level
- **AAL** - Authenticator Assurance Level
- **FAL** - Federation Assurance Level
- **Phishing Resistance** requirements

**Relation to Smart-ID:** Provides comprehensive guidance on authentication assurance levels and phishing resistance.

---

### NIST SP 800-207 (Zero Trust Architecture)

**Publisher:** National Institute of Standards and Technology (USA)

**Relation to Smart-ID:** Provides framework for zero trust authentication architecture.

---

### FIDO2/WebAuthn Standards

**Publisher:** FIDO Alliance

**Relevant Specifications:**
- WebAuthn Level 1
- CTAP2 (Client to Authenticator Protocol)
- Phishing-Resistant Authentication Guidelines

**Relation to Smart-ID:** Industry standard for phishing-resistant authentication. Provides technical specifications for cryptographic origin binding.

---

### ISO/IEC 27001:2022

**Publisher:** International Organization for Standardization

**Relation to Smart-ID:** Information security management system standard.

---

### ISO/IEC 27002:2022

**Publisher:** International Organization for Standardization

**Relation to Smart-ID:** Code of practice for information security controls.

---

### ISO 18013-5 (mDL - Mobile Driving Licence)

**Publisher:** International Organization for Standardization

**Relation to Smart-ID:** Provides reference for mobile identity credential architecture.

---

### CEN/TS 419 241

**Publisher:** European Committee for Standardization

**Relation to Smart-ID:** Security requirements for remote signature creation.

---

### Cloud Signature Consortium (CSC) Standards

**Publisher:** Cloud Signature Consortium

**Relevant Specifications:**
- CSC API Standard
- Remote signature creation protocols

**Relation to Smart-ID:** Provides standards for remote qualified electronic signatures.

---

## Regulatory Authorities

### Estonia

- **RIA (Riigi Infosüsteemi Amet)** - State Information System Authority. Supervises qualified trust service providers.
- **TTJA (Tarbijakaitse ja Tehnilise Järelevalve Asutus)** - Consumer Protection and Technical Regulatory Authority. Consumer protection oversight.
- **AKI (Andmekaitse Inspektsioon)** - Data Protection Inspectorate. Personal data protection oversight.

### European Union

- **European Commission** - Policy development for eIDAS
- **ENISA (European Union Agency for Cybersecurity)** - Cybersecurity guidance
- **European Data Protection Board** - GDPR consistency mechanism

---

## Notes

This reference document is provided for informational purposes only. For legal advice and regulatory compliance, consult with qualified legal professionals and relevant regulatory authorities.
