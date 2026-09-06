---
title: E-Services Target Catalog
description: Comprehensive catalog of Estonian e-services targets for security research
---

# Estonian E-Services Target Catalog: Comprehensive Security Research Report

*Generated: 2026-04-07 | Confidence: High-Medium*

## Executive Summary

Estonia operates one of the world's most advanced digital societies, with virtually all government services available online. This comprehensive catalog identifies valuable targets for threat analysis, organized by sector. Key findings:

- **Smart-ID phishing** is a documented attack vector against Estonian financial services; Estonians lost an aggregate €42+ million to fraud in 2024, with reporting attributing many (not all) of those scams to Smart-ID PIN-phishing
- **Government e-services** (eesti.ee) are transitioning to Smart-ID+ (as of Feb 26, 2026) but remain high-value targets
- **Healthcare sector** experienced massive breach affecting ~50% of population (Allium UPI OÜ, 2024)
- **Critical infrastructure** (Elering power grid) facing both physical and cyber threats
- **Estonian banks** (Swedbank, SEB, LHV) under unprecedented fraud pressure withSmart-ID vulnerabilities actively exploited

## 1. FINANCIAL SERVICES

### 1.1 Major Banks

| Provider | Authentication Methods | Data Sensitivity | Notable Incidents |
|----------|----------------------|-----------------|-------------------|
| **Swedbank Estonia** | Smart-ID, Mobile-ID, ID-card, Password | CRITICAL | €27M+ fraud losses (2025); phishing attacks targeting Smart-ID users |
| **SEB Estonia** | Smart-ID, Mobile-ID, ID-card | CRITICAL | FIU damages claim filed; ongoing fraud litigation |
| **LHV Bank** | Smart-ID, Mobile-ID, ID-card | CRITICAL | Smart-ID security features added (2019); pension fund management |
| **Coop Pank** | Smart-ID, Mobile-ID | HIGH | Part of cooperative banking network |

**Confidence:** HIGH

**Security Incidents:**
- Swedbank reported "unprecedented fraud pressure" (Dec 2025) with phone scams impersonating trusted institutions
- Cybersecurity researcher Arnis Paršovs (University of Tartu) documented banks' failure to implement Smart-ID phishing protections
- Banks slow to adopt Smart-ID+ upgrade (announced Jan 2026 rollout)
- €42 million total fraud losses reported against Estonian banks

**Attack Vectors:**
- Smart-ID phishing via fraudulent calls requesting PIN codes
- Social engineering exploiting trust in banks and government institutions
- The RIA Cyber Security Yearbook 2025 documented doubled incident counts

### 1.2 Pension Funds

| Provider | Authentication | Data Sensitivity |
|----------|---------------|-----------------|
| **Pensionikeskus** (II & III pillar registry) | Smart-ID, ID-card | CRITICAL (Financial + Identity) |
| **Swedbank Pension** | Smart-ID | HIGH |
| **ERGO Pension** | Smart-ID | HIGH |
| **Tuleva** | Smart-ID | HIGH |

**Confidence:** HIGH

**Incidents:**
- Pensionikeskus issued fraud alerts (Sep 2025)
- Temporary access closures documented (June 2024)
- Government legislation drafted to restrict pension fund tampering by politicians

### 1.3 Insurance Companies

| Provider | Authentication | Data Sensitivity |
|----------|---------------|-----------------|
| **ERGO Insurance SE** | Smart-ID, Password | HIGH (Health, Property, Life) |
| **If Kindlustus** | Smart-ID, Password | HIGH |
| **Salva Kindlustus** | Password | MEDIUM |
| **Elama Kindlustus** | Password | MEDIUM |

**Confidence:** MEDIUM-HIGH

---

## 2. GOVERNMENT E-SERVICES

### 2.1 State Portal & Authentication

| Service | URL | Authentication | Data Sensitivity |
|---------|-----|---------------|-----------------|
| **eesti.ee** | eesti.ee | Smart-ID+, Mobile-ID, ID-card, TARA | CRITICAL |
| **GovSSO** | e-gov.github.io/GOVSSO | ID-card, Mobile-ID, Smart-ID, EU eID | CRITICAL |
| **TARA** (State Auth Service) |ria.ee | Various OAuth/OIDC | HIGH |

**Confidence:** HIGH

**Key Developments:**
- Smart-ID+ became mandatory for state e-services (Feb 26, 2026)
- Eesti.ee mobile app launched (July 2025) for smartphone-based digital ID
- RIA Cyber Security Yearbook 2025 documented record cyber incidents

**Incidents:**
- 286,000 ID photos stolen from government database via vulnerability (2021)
- Ministry of Economic Affairs failed to patch vulnerabilities after cyberattack (2024)
- Russian GRU linked to theft of thousands of confidential documents from ministries (2024)
- DDoS attacks on state institutions in March 2024 (largest to date)

### 2.2 Tax & Customs

| Service | URL | Authentication | Data Sensitivity |
|---------|-----|---------------|-----------------|
| **e-MTA** | emta.ee | Smart-ID+, Mobile-ID, ID-card, Password | CRITICAL (Financial + Identity) |

**Confidence:** HIGH

**Notes:**
- Estonian Tax Board transitioning to Smart-ID+ (Feb 2026)
- Requires valid PIN codes for authentication
- Online services security guidance published

### 2.3 Police & Border Guard

| Service | URL | Authentication | Data Sensitivity |
|---------|-----|---------------|-----------------|
| **Politsei.ee Portal** | politsei.ee | Smart-ID, Mobile-ID, ID-card | HIGH |

**Confidence:** HIGH

**Incidents:**
- Police arrested Tallinn resident for stealing 286,000 ID scans from government database (2021)
- Estonian Citizenship Database breach affected Have I Been Pwned (2018)

### 2.4 E-Residency Program

| Service | URL | Authentication | Data Sensitivity |
|---------|-----|---------------|-----------------|
| **E-Residency Portal** | e-resident.gov.ee | ID-card, Smart-ID | CRITICAL (Identity + Business) |
| **E-Residency Digital ID** | N/A | Hardware smart card | CRITICAL |

**Confidence:** HIGH

**Notes:**
- Estonia's e-residency program issues digital identities to non-residents, enabling cross-border business and digital signatures
- Over 100,000 e-residents from 170+ countries as of 2025
- E-resident digital IDs use the same PKI infrastructure as domestic ID cards
- E-residents are vulnerable to the same Smart-ID phishing vectors as domestic users when using Smart-ID for authentication
- The program represents a unique attack surface: identity theft of e-residents has implications across multiple jurisdictions

---

## 3. TELECOM & ISP

### 3.1 Major Providers

| Provider | Services | Authentication | Data Sensitivity |
|----------|----------|---------------|-----------------|
| **Telia Estonia** | Mobile, Internet, TV, IT | Account password | HIGH (Communications) |
| **Elisa Estonia** | Mobile, Internet, TV, Cable | Account password | HIGH |
| **Zone.ee** | Domain, Hosting, Email | Account credentials | MEDIUM-HIGH |
| **Starman** (acquired by Elisa 2016) | Cable TV, Internet | Account credentials | MEDIUM |

**Confidence:** HIGH

**Security Notes:**
- Telia launched "Turvavork Kodu" home网络安全服务 (Nov 2025)
- Elisa blocked double the cyber threats in 2025 vs 2024
- Zone.ee offers SSL certificates and security guidance to customers
- Starman: acquired by Elisa; no major security incidents on record

**Incidents:**
- Elisa Estonia detected 331 cyber incidents per customer monthly in 2025 (20M+ threats in Dec 2025)
- Increase from 177 per customer in 2024, 99 in 2023

### 3.2 Email & Domain Providers

| Provider | Services | Data Sensitivity |
|----------|----------|-----------------|
| **Zone.ee** | Email, Domain registration, Web hosting | MEDIUM (Communications + Business) |

**Confidence:** MEDIUM-HIGH

**Security:** Provides SSL/TLS certificates, security best practices documentation

---

## 4. CLOUD/HOSTING PROVIDERS

| Provider | Type | Data Sensitivity | Notes |
|----------|------|-----------------|-------|
| **Pilvio** | Local cloud platform | HIGH | Estonian data residency emphasis |
| **RIIGIPILV** | Government cloud | CRITICAL | State systems |
| **WaveCom** | VMware Cloud, DRaaS | HIGH | Enterprise services |
| **Infonet DC** | Colocation, Tier 3 | HIGH | Carrier neutral |
| **EstNOC** | Dedicated servers, hosting | MEDIUM-HIGH | Government clients |
| **Levira** | Data center (TV Tower) | MEDIUM-HIGH | State-affiliated |
| **Tet Cloud** | Cloud services | MEDIUM | Formerly Lattelecom |

**Confidence:** MEDIUM-HIGH

**Security:** Estonian providers emphasize GDPR compliance and local data sovereignty

---

## 5. UTILITIES & ENERGY

### 5.1 Electricity Grid

| Provider | Role | Data Sensitivity | Incidents |
|----------|------|-----------------|-----------|
| **Elering** | Grid operator (transmission) | CRITICAL (Infrastructure) | Undersea cable sabotage; drone threats |

**Confidence:** HIGH

**Security Incidents:**
- EstLink 2 cable damage suspected as sabotage (Dec 2024)
- €200M+ infrastructure protection investment planned
- €700M investment plan through 2028
- Drone attacks on power infrastructure (2026)
- Concrete shielding being installed at substations

### 5.2 Energy Companies

| Provider | Services | Data Sensitivity |
|----------|----------|-----------------|
| **Eesti Energia / Enefit** | Electricity, heating | HIGH |
| **Väike-Õmara** | District heating | MEDIUM |

**Confidence:** MEDIUM

---

## 6. HEALTHCARE

### 6.1 Major Providers

| Provider | Type | Authentication | Data Sensitivity |
|----------|------|---------------|-----------------|
| **North Estonia Medical Center (PERH)** | Hospital | Internal systems | CRITICAL (Health records) |
| **West Tallinn Central Hospital (LTKH)** | Hospital | Internal systems | CRITICAL |
| **Tartu University Hospital** | Hospital | Internal systems | CRITICAL |
| **Health Insurance Fund (Tervisekassa)** | Public health portal | Smart-ID, Password | CRITICAL |
| **Allium UPI OÜ** | Healthcare supplier | Unknown | CRITICAL (breached) |

**Confidence:** HIGH

**Security Incidents:**
- **Allium UPI OÜ breach (2024):** ~700,000 customer data stolen (half of Estonian population); €3M fine
- **West Tallinn Central Hospital (2026):** Patient sent home with USB containing other patients' data
- **Asper Biogene (2023):** 10,000 people's genetic/health data stolen
- **Software glitch:** Faulty data in hundreds of patient records (2023, 5-year span)
- **Family medicine centers:** 25% experiencing cyberattacks; struggling to meet cybersecurity standards
- **Healthcare incidents:** ~7,000 incidents recorded in first year of tracking (2024)

### 6.2 Pharmacies

| Provider | Type | Incidents |
|----------|------|-----------|
| **Apotheka** | Pharmacy chain | 700,000 customer data breach; €3M fine (2025) |

---

## 7. RETAIL & E-COMMERCE

| Provider | Type | Authentication | Data Sensitivity |
|----------|------|---------------|-----------------|
| **Kaup24.ee** | E-commerce | Account password | MEDIUM (PII, Financial) |
| **Barbora.ee** | Online grocery | Account password | MEDIUM |
| **Osta.ee** | Marketplace | Account password | MEDIUM |
| **Hansapost** | E-commerce | Account password | MEDIUM |
| **Zalando Estonia** | Fashion e-commerce | Account password | LOW-MEDIUM |
| **220.lv** | E-commerce (Latvia) | Account password | MEDIUM |

**Confidence:** MEDIUM

**Notes:**
- 70% of Estonians shop online (highest in Baltics)
- 14,500+ e-commerce stores analyzed

---

## 8. CRITICAL INFRASTRUCTURE

### 8.1 Government Systems

| System | Description | Risk Level |
|--------|-------------|------------|
| **X-Road** | Data exchange layer connecting all гос services | CRITICAL |
| **KMA** | Population register | CRITICAL |
| **SDK** | Population documents | CRITICAL |
| **MISP** | Missing Persons system | HIGH |

**Confidence:** HIGH

### 8.2 Recent Major Incidents

| Date | Incident | Impact |
|------|----------|--------|
| 2024 | GRU attacks on ministries | Thousands of documents stolen |
| 2024 | RIA photo database breach | 286,000 ID photos |
| 2024 | Apotheka/Allium breach | 700,000 records |
| 2024 | DDoS on state institutions | Largest recorded |
| 2024 | Ministry unpatched after attack | Continued vulnerabilities |

---

## AUTHENTICATION METHODS SUMMARY

| Method | Provider | Security Level | Vulnerabilities |
|--------|----------|---------------|-----------------|
| **Smart-ID+** | SK ID Solutions | HIGH (upgraded Feb 2026) | Phishing if PIN disclosed |
| **Mobile-ID** | Telia, Elisa | HIGH | SIM cloning risk |
| **ID-card** | State-issued | HIGH | Browser compatibility issues |
| **Password** | Various | MEDIUM-LOW | Credential stuffing, phishing |
| **TARA** | RIA | HIGH | OAuth/OIDC implementation |

**Smart-ID phishing concerns:**
- Six years of documented Smart-ID phishing scams
- Banks slow to implement protections
- New Smart-ID+ roll-out aims to address this (Feb 2026)

---

## Research Relevance: Why This Catalog Matters

This catalog serves a specific analytical purpose for the Smart-ID security research. Rather than being a generic directory of Estonian organizations, each entry is selected based on its relevance to the authentication security problems examined throughout this research.

### Key Analytical Links

**Financial Services (Section 1):** Estonian banks are the primary Relying Parties for Smart-ID and the organizations with the most to lose from authentication failures. The €42M in aggregate fraud losses — reported alongside (not proven to be concentrated in) Smart-ID PIN-phishing scams — demonstrates the economic scale of the architectural vulnerabilities analyzed in [Smart-ID Security Analysis](../01-core-research/smartid-security-analysis.md). The ownership structure (Swedbank AS, SEB Pank AS, and Telia Eesti AS as founding shareholders in SK ID Solutions) is directly relevant to the conflict-of-interest analysis in the enforcement strategy documents.

**Government E-Services (Section 2):** Estonia's state portals adopted Smart-ID+ in February 2026 — four months ahead of commercial banks. This asymmetric adoption pattern (state leads, banks lag) is evidence of the market failure analyzed in the [RIA Memorandum](../04-regulatory-memoranda/ria-memorandum.md). The state's ability to mandate security upgrades for its own portals — contrasted with its inability to compel banks — demonstrates the regulatory jurisdiction gap.

**Healthcare (Section 6):** The Allium UPI OÜ breach (700,000 records, half the population) and Apotheka breach exemplify the consequences of authentication failures at scale. When authentication is compromised, the blast radius extends to health data, genetic records, and prescription histories. These incidents demonstrate why "risk acceptance" at the authentication layer is not a localized decision — it cascades into every sector that relies on the same identity infrastructure.

**Critical Infrastructure (Section 8):** Estonia's X-Road data exchange layer connects all government services. Compromise of Smart-ID authentication at any single service provider creates a potential pivot point into the broader infrastructure. The e-residency program (§2.4) adds a cross-jurisdictional dimension: e-residents from 170+ countries use the same PKI infrastructure, making authentication failures an international problem.

### How to Use This Catalog

- **For security researchers:** Prioritize targets by the "Data Sensitivity" and "Notable Incidents" columns. CRITICAL-rated services with documented breaches represent the highest analytical priority for this study. This catalog is a research-scoping reference, not a targeting directive: any testing must be authorized in writing by the system owner, must never touch production data or live accounts, and must follow this project's [responsible-disclosure policy](../05-enforcement/responsible-disclosure-timeline.md) rather than unauthorized probing of the named organizations.
- **For regulators:** The catalog maps the surface area of Smart-ID dependency across the Estonian economy, demonstrating that authentication infrastructure is a systemic risk, not a commercial concern.
- **For Relying Parties:** Compare your authentication implementation against peers in the same sector. If competitors have adopted Smart-ID+ and you have not, the catalog provides evidence for prioritizing migration.

---

## SOURCES

1. [Arnis Paršovs: Banks fail to implement measures against Smart-ID phishing](https://news.err.ee/1609910821/arnis-parsovs-banks-fail-to-implement-measures-against-smart-id-phishing) (ERR, Jan 2026)
2. [Cyber Security in Estonia 2025 - RIA PDF](https://ria.ee/sites/default/files/documents/2025-02/Cyber-security-in-Estonia-2025.pdf)
3. [Estonian banks face scrutiny as fraud losses hit €42 million](https://shortl.ee/en/estonia/story/estonian-banks-face-scrutiny-as-fraud-losses-hit-42-million-e3s) (shortl.ee, Jan 2026)
4. [Half of Estonian Population affected in Data Breach at Healthcare Supplier Allium UPI OÜ](https://icsstrive.com/incident/half-of-estonian-population-affected-in-data-breach-at-healthcare-supplier-allium-upi-ou/) (ICSSTRIVE, Dec 2024)
5. [Company fined €3 million over Apotheka loyalty program data breach](https://news.err.ee/1609791258/company-fined-3-million-over-apotheka-loyalty-program-data-breach) (ERR, Sep 2025)
6. [Russia's GRU stole thousands of confidential documents from Estonia's ministries](https://news.err.ee/1609446343/russia-s-gru-stole-thousands-of-confidential-documents-from-estonia-s-ministries) (ERR, Sep 2024)
7. [Estonia's state institutions hit by largest cyberattack to date](https://news.postimees.ee/7977286/estonia-s-state-institutions-hit-by-largest-cyberattack-to-date) (Postimees, Mar 2024)
8. [Smart-ID+ introduced on 26 February for more secure login to state e-services](https://www.id.ee/en/article/smart-id-introduced-on-26-february-for-more-secure-login-to-state-e-services/) (ID.ee, Mar 2026)
9. [Elering plans to invest €200 million to protect infrastructure from drones](https://news.err.ee/1609567903/elering-plans-to-invest-200-million-to-protect-infrastructure-from-drones) (ERR, Jan 2025)
10. [Estonian hospital sends patient home with other peoples' health data](https://news.err.ee/1609981857/estonian-hospital-sends-patient-home-with-other-peoples-health-data) (ERR, Mar 2026)
11. [Applied Cyber Security Group - List of Estonian e-services using eID](https://acs.cs.ut.ee/services_using_eid/) (UT.ee)
12. [Elisa Estonia sees number of cyber threats blocked double in 2025](https://www.telecompaper.com/news/elisa-estonia-sees-number-of-cyber-threats-blocked-double-in-2025--1560149) (Telecompaper, Jan 2026)
13. [Swedbank: Estonia seeing unprecedented fraud pressure](https://news.err.ee/1609892917/swedbank-estonia-seeing-unprecedented-fraud-pressure) (ERR, Dec 2025)

---

## CONFIDENCE RATINGS METHODOLOGY

- **HIGH:** Multiple independent sources, official statements, recent data (2024-2026)
- **HIGH-MEDIUM:** Strong source base with minor gaps in recency or corroboration
- **MEDIUM-HIGH:** Predominantly reliable sources with some dated or limited information
- **MEDIUM:** Limited sources or some dated information
- **LOW:** Single source, unverified claims, or significantly dated information

---

*Report compiled from open-source intelligence. Data accuracy dependent on source reliability.*
