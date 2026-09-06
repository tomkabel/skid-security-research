---
title: Regulatory Precedents
description: Comparative analysis of regulatory intervention against QTSPs with EU precedents
---

# Comparative Analysis: Regulatory Intervention Against QTSPs

**Date:** 2026-02-01
**Subject:** Validity of Enforcement Mechanisms Against SK ID Solutions – Comparative Analysis with EU Precedents

> **Author's Note:** This document represents technical and policy analysis. The author is not a lawyer. For legal advice on regulatory enforcement, consult with qualified legal professionals.

## Summary

The strategy leveraging RIA, TTJA, AKI for fixes is valid, supported by EU precedents. Regulators hesitate on revocation due to reliance, but Estonia's 2017 ID-card crisis (ROCA) shows RIA prioritizes trust over continuity for tangible risks.

---

## 1. RIA Powers (eIDAS & Vital Services)

### ROCA Precedent (Estonia, 2017)

**The Incident:** In November 2017, a cryptographic vulnerability was discovered in the Infineon chipset used in 750,000 Estonian ID cards. The vulnerability (ROCA, CVE-2017-15361) allowed private key reconstruction from public keys—potentially enabling identity theft at national scale.

**RIA's Response:** Despite no documented exploitation of the vulnerability, RIA suspended the digital certificates of all affected ID cards within days of disclosure. The decision was controversial—it temporarily locked hundreds of thousands of citizens out of e-services—but RIA determined that the theoretical risk to national identity infrastructure justified the disruption.

**Key Lessons for Smart-ID:**
- RIA has demonstrated willingness to disrupt continuity for theoretical risks in identity systems
- Smart-ID QRLJacking is not theoretical—it is actively exploited, resulting in documented financial losses
- The ROCA precedent establishes that RIA's mandate includes preventive action, not just reactive enforcement
- If RIA suspended certificates for a theoretical flaw, the legal and practical case for action against an actively exploited vulnerability is substantially stronger

**Relevance:** High. This precedent directly undermines SK ID's "risk acceptance" defense. If RIA acted on a theoretical risk, they cannot reasonably tolerate an actively exploited one.

### Camerfirma (Spain/Italy, 2021)

**The Incident:** Camerfirma, a Spanish/Italian Qualified Trust Service Provider, experienced repeated compliance failures. Google and Mozilla removed Camerfirma's root certificates from their trust stores, effectively rendering their qualified certificates unusable in major browsers.

**Key Lessons for Smart-ID:**
- Market pressure (browser trust store removal) can achieve what regulatory action alone cannot
- If RIA acts slowly, the market may act first—browser vendors and banks may independently deprecate Smart-ID
- The combined effect of regulatory action and market pressure creates a pincer that leaves the QTSP no viable path forward

**Relevance:** Moderate. Demonstrates that the ecosystem has independent enforcement mechanisms beyond formal regulation.

---

## 2. TTJA Mandate (Consumer Protection)

### BankID (Norway/Sweden)

**The Incident:** Between 2019-2022, Nordic banks experienced a surge in MITM attacks targeting BankID, the region's dominant mobile authentication system. Attackers used proxy-based phishing kits to relay BankID authentication in real-time.

**Response:** Financial Supervisory Authorities in both Norway and Sweden pressured banks to implement:
- Animated QR codes (detecting relay attacks through motion/interaction)
- App-to-App authentication (eliminating browser-based relay vectors)
- Mandatory transaction detail display (forcing user verification of payment details before PIN entry)

**Key Lessons for Smart-ID:**
- The Nordic precedent demonstrates that financial regulators can compel authentication upgrades
- The "animated QR" and "App-to-App" solutions mirror what Smart-ID+ offers—but Nordic banks were required to adopt them, not merely given the option
- The EU Digital Content Directive strengthens the "defective digital service" argument for TTJA enforcement

**Relevance:** High. Provides a direct regulatory playbook for mandating Smart-ID flow upgrades.

---

## 3. AKI Powers (GDPR Art 32)

### Itsme (Belgium)

**The Incident:** Itsme, Belgium's national mobile identity app, implemented proximity checks and SIM-binding as standard security measures. This created an industry benchmark for what "state of the art" mobile authentication looks like in Europe.

**Key Lessons for Smart-ID:**
- Itsme demonstrates that proximity checks and device binding are technically feasible and commercially viable
- A Belgian regulator could cite Itsme's implementation as evidence that Smart-ID's lack of such measures falls below "state of the art"
- The comparison directly dismantles the "implementation complexity" defense

**Relevance:** High. Itsme is the most direct architectural comparison to Smart-ID and demonstrates that the "state of the art" standard is achievable.

### British Airways / Ticketmaster (ICO, UK)

**The Incident:** In 2018, Magecart attacks compromised British Airways and Ticketmaster through known, unpatched vulnerabilities. The UK Information Commissioner's Office (ICO) fined British Airways £20 million and Ticketmaster £1.5 million—specifically citing the failure to patch known vulnerabilities as a violation of GDPR Art 32.

**Key Lessons for Smart-ID:**
- The ICO established that "failure to patch known vulnerabilities" constitutes an Art 32 violation
- SK ID's situation is arguably worse: they have not merely failed to patch—they have actively classified the vulnerability as a "feature" and disputed the CVE
- The fines were substantial even without evidence of prior knowledge; SK ID's written admission of "knowing acceptance" would constitute an aggravating factor

**Relevance:** High. Provides direct precedent for GDPR fines based on failure to remediate known vulnerabilities.

---

## 4. Risk Acceptance Defense Validity

The defense fails for a Qualified Trust Service Provider on four grounds:

1. **Sole Control is Absolute:** eIDAS requires the signatory to have sole control. A system vulnerable to relay attacks cannot guarantee sole control. Risk acceptance does not override statutory requirements.

2. **Estonian Precedent Rejects Irrelevance:** The ROCA precedent demonstrates that RIA does not accept "no documented exploitation" as a defense. Smart-ID has documented exploitation—making the defense even weaker.

3. **Market Peer Comparison:** Itsme, BankID, and FIDO2 implementations across Europe demonstrate that the "state of the art" is achievable and widely deployed. Smart-ID's architecture falls below this benchmark.

4. **The Documentation Is a Confession:** RP API v3 labels the vulnerable flow "Not Recommended." The documentation itself proves SK ID knows the flow is inadequate. You cannot simultaneously warn clients that a product is defective and continue selling it.

---

## Summary Table

| Mechanism | Validity | Precedent | Leverage | Confidence |
|-----------|----------|-----------|----------|------------|
| **RIA** | Confirmed | Estonian ROCA (2017); Camerfirma (2021) | Critical | High |
| **TTJA** | Confirmed | BankID Nordics; EU Digital Content Directive | High | High |
| **AKI** | Confirmed | Itsme (Belgium); BA/Ticketmaster (ICO) | High | High |

---

## Conclusion

Analysis holds. The ROCA precedent dismantles the "risk acceptance" defense. RIA has demonstrated it rejects risk acceptance for digital identity systems, even for theoretical risks. Smart-ID's actively exploited vulnerability presents a substantially stronger case for intervention.

All three regulators have clear legal mandates, established precedents, and actionable enforcement tools. The combined weight of a RIA Precept, a TTJA consumer protection action, and an AKI GDPR investigation creates an enforcement triad that SK ID Solutions cannot survive unchanged.
