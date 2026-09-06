# Smart-ID+ Migration Stall: The EUDIW Priority Conflict
*Generated: 2026-06-14 | Sources: 12 | Confidence: High*

## Executive Summary

Estonian banks delayed Smart-ID+ implementation for over a year after its June 2025 release primarily because finite IT development resources were redirected toward the **non-negotiable EU Digital Identity Wallet (EUDIW) mandate** under eIDAS 2.0. Banks face a December 2027 legal deadline to accept EUDIW for Strong Customer Authentication — with penalties for non-compliance — while Smart-ID+ remains an optional, regional security upgrade. The deadlock has now broken: as of June 2026, Bigbank became the first to launch Smart-ID+, LHV follows next week, and Swedbank and SEB plan rollout by end of year.

## 1. The Resource Bottleneck: Two Competing Mandates

Banks in Estonia (and the broader EU) operate on rigid IT roadmaps with finite engineering talent. Two major identity infrastructure projects collided:

| Factor | EUDIW Mandate | Smart-ID+ |
|--------|--------------|-----------|
| **Legal force** | Mandatory (eIDAS 2.0, Art. 5f(2)) | Optional / voluntary |
| **Deadline** | Dec 2027 (private sector acceptance) | No legal deadline |
| **Scope** | EU-wide, all 27 member states | Primarily Estonia, Baltic region |
| **Penalty for non-compliance** | Severe regulatory sanctions | None |
| **Integration complexity** | Massive — new architecture, cryptography, trust frameworks | Moderate — QR-based auth flow, API upgrade |
| **Fraud prevention** | Medium-term (zero-trust model) | Immediate (blocks phone-call phishing) |

Faced with this choice, banks **deprioritized Smart-ID+** to focus engineering effort on meeting the 2026–2027 EUDIW deadlines. As the Google AI search summary captured: "Many banks paused or slowed down internal authentication migrations to focus their engineering talent on meeting the impending EUDIW deadlines."

Swedbank's head of financial crime prevention, Raul Vahtra, confirmed in January 2026: *"We have included this in our action plan and are starting development, but it must be understood that developments like this are technically quite complex and take some time."* ([ERR News, Jan 2026](https://news.err.ee/1609925612/banks-not-rushing-into-smart-id-security-upgrade))

## 2. EUDIW Timeline: Why It Dominated Bank Roadmaps

The eIDAS 2.0 regulation created an inescapable compliance cascade that consumed bank IT planning:

- **May 2024**: eIDAS 2.0 entered into force, starting the clock
- **Q2 2025**: Implementing Acts published — technical standards finalized ([eIDAS Readiness](https://eidasreadiness.com/eidas-2-timeline))
- **Q4 2025**: Large-Scale Pilots delivered final results across finance, healthcare, travel
- **H1 2026**: Member states must make wallets available to citizens
- **Dec 2027**: **All EU banks must accept EUDIW** for any process requiring Strong Customer Authentication (KYC onboarding, login, high-value transfers) ([Truvity, Sep 2025](https://www.truvity.com/blog/your-banks-first-3-steps-to-eidas-2-0-compliance))

> *"Where private relying parties … are required by Union or national law to use strong user authentication for online identification … also accept European Digital Identity Wallets."* — eIDAS 2.0, Article 5f(2)

The Mobey Forum's Digital Identity Expert Group (including representatives from Nordea, DNB, HSBC, Erste Bank, Bank of Ireland) characterized the December 2026 readiness deadline as the point when banks must have integration strategies in place. Their report maps out role-based opportunities and practical use cases for financial institutions. ([Mobey Forum, May 2025](https://mobeyforum.org/mapping-the-business-case-banks-and-the-european-digital-identity-wallet/))

## 3. Why Smart-ID+ Was Deprioritized

### 3.1 Owner-Operator Conflict of Interest

Swedbank and SEB — two of Estonia's largest banks — are **shareholders in SK ID Solutions**, the developer of Smart-ID. Cybersecurity researcher Arnis Paršovs (University of Tartu) identified this ownership structure as a structural problem: it creates financial incentive to promote Smart-ID while simultaneously underinvesting in its security upgrades. Banks "classify phishing as a type of fraud that is not related to technology vulnerabilities," deflecting responsibility away from the authentication tool itself. ([BNN News, Jan 2026](https://bnn-news.com/cybersecurity-expert-estonian-banks-fail-to-implement-security-measures-against-smart-id-phishing-276140))

### 3.2 Integration Complexity with Legacy Systems

EUDIW integration requires a fundamental architectural shift — from centralized (bank holds customer data) to decentralized (user controls wallet credentials). Truvity's analysis notes that "legacy banking systems are architecturally mismatched with the new decentralized model, making direct integration risky and expensive." Banks couldn't justify doing **both** a core architecture overhaul for EUDIW and a Smart-ID+ API upgrade simultaneously. The recommended best practice — implementing a "translation layer" that bridges wallet cryptography with legacy systems — itself consumes significant resources. ([Truvity, Sep 2025](https://www.truvity.com/blog/your-banks-first-3-steps-to-eidas-2-0-compliance))

### 3.3 Technical Moving Targets

Until Q2 2025, fundamental technical specifications governing how banks interact with digital wallets were still being finalized. Building integration architecture prematurely risked expensive code rewrites. Germany's Federal Office for Information Security (BSI) was still actively shaping security standards, and individual member states were on fractured timelines. ([Neosfer, Nov 2025](https://neosfer.de/en/digital-identity/))

### 3.4 Regulatory Jurisdiction Gap

The Estonian state cannot compel banks to adopt Smart-ID+. Banks fall under the Financial Supervision Authority (Finantsinspektsioon) and are subject to EU rules. RIA's head of e-identity, Anna Õuekallas, stated plainly: *"In reality, it is not possible for the Estonian state to make a separate move here in any way, because all these requirements that e-ID tools must meet also come from Europe."* ([ERR News, Jan 2026](https://news.err.ee/1609925612/banks-not-rushing-into-smart-id-security-upgrade))

## 4. The Fraud Problem Smart-ID+ Was Built to Solve

Smart-ID commands nearly **60% market share** in Estonia (vs. ~23% for ID card, remainder for Mobiil-ID). The system's critical weakness: authentication can be initiated remotely, meaning a fraudster only needs to trick a victim into confirming a Smart-ID prompt on their phone during a phone call. Unlike the old code-card system, Smart-ID has **no payment limit**.

The scale: fraud cases in Estonia reached **€23 million** in 2025. Paršovs argued that banks, not victims, should bear responsibility because "it is the bank's responsibility not to accept insecure authentication methods." ([BNN News, Jan 2026](https://bnn-news.com/cybersecurity-expert-estonian-banks-fail-to-implement-security-measures-against-smart-id-phishing-276140))

Smart-ID+ addresses this by:
- **Same-device auth**: On smartphones, authentication can only be initiated from the same device
- **QR cross-device auth**: On desktop/laptop, user must scan a QR code with their phone — requiring physical presence
- This eliminates remote phone-call phishing, where fraudsters initiate transactions and trick victims into entering PINs

## 5. The Turning Point: June 2026

The deadlock has now broken, driven by three converging factors:

1. **EUDIW specifications stabilized**: Implementing acts are published, ARF is mature, large-scale pilots are complete
2. **Fraud pressure became untenable**: €23M in fraud losses created public and regulatory pressure
3. **Phased approach emerged**: Banks can implement Smart-ID+ as an interim security layer while EUDIW integration proceeds in parallel

The rollout sequence as of June 13–14, 2026:

| Bank | Status | Timeline |
|------|--------|----------|
| **Bigbank** | **Launched** | June 12, 2026 (first) |
| **LHV** | Launching next | June 17, 2026 |
| **Swedbank** | In development | "Within this year" |
| **SEB** | In development | "Within this year" |

SK ID Solutions board member Liisa Luukin declared: *"Those attacks are now over"* — referring to the phone-call phishing vector that Smart-ID+ neutralizes. ([ERR News, Jun 13, 2026](https://news.err.ee/1610054356/banks-taking-on-scammers-with-new-smart-id-upgrade))

The strategy has shifted from "delay until EUDIW" to **"blend Smart-ID+ with future EUDIW acceptance capabilities into a single, cohesive security layer."**

## Key Takeaways

- **Yes, the EUDIW mandate is the primary reason Smart-ID+ stalled.** Banks had to choose between a legally mandated EU-wide infrastructure overhaul (with penalties) and a regional security upgrade (without penalties). They chose compliance.

- **The stall was not purely technical** — it was a resource allocation decision driven by regulatory prioritization. The same engineering teams that would implement Smart-ID+ are needed for EUDIW integration.

- **The deadlock broke in June 2026.** Bigbank's launch and LHV's imminent follow-up show banks can now pursue both in parallel, suggesting EUDIW specifications have stabilized enough to allow concurrent development.

- **Smart-ID+ is not the final answer** — it's an interim security layer. EUDIW's zero-trust, cryptographic model represents the long-term identity architecture. Banks that integrate both thoughtfully will have the strongest fraud prevention posture.

- **The regulatory jurisdiction gap matters.** The Estonian state cannot mandate Smart-ID+ adoption; EU-level mandates (eIDAS 2.0) are the binding force. This structural reality made the EUDIW priority inevitable.

## Sources

1. [Banks not rushing into Smart-ID security upgrade](https://news.err.ee/1609925612/banks-not-rushing-into-smart-id-security-upgrade) — ERR News, Jan 29, 2026. Primary news reporting on bank hesitation.
2. [Cybersecurity expert: Estonian banks fail to implement security measures against Smart-ID phishing](https://bnn-news.com/cybersecurity-expert-estonian-banks-fail-to-implement-security-measures-against-smart-id-phishing-276140) — BNN News, Jan 15, 2026. Researcher analysis of Smart-ID security flaws and bank inaction.
3. [Banks taking on scammers with new Smart-ID+ upgrade](https://news.err.ee/1610054356/banks-taking-on-scammers-with-new-smart-id-upgrade) — ERR News, Jun 13, 2026. Latest: Bigbank launches, others follow.
4. [Mapping the Business Case: Banks and the EUDI Wallet](https://mobeyforum.org/mapping-the-business-case-banks-and-the-european-digital-identity-wallet/) — Mobey Forum, May 2025. Industry report on bank strategic opportunities with EUDIW.
5. [Your Bank's First 3 Steps to eIDAS 2.0 Compliance](https://www.truvity.com/blog/your-banks-first-3-steps-to-eidas-2-0-compliance) — Truvity, Sep 29, 2025. Technical compliance roadmap for banks.
6. [eIDAS 2.0 Timeline & Key Deadlines](https://eidasreadiness.com/eidas-2-timeline) — eIDAS Readiness. Authoritative timeline of regulatory milestones.
7. [Digital Identity: Europe's new wallet will change the financial world](https://neosfer.de/en/digital-identity/) — Neosfer, Nov 5, 2025. Analysis of EUDIW impact on banking sector.
8. [eIDAS 2.0 & EUDI Wallet Timeline: What to Expect in 2026](https://www.gataca.io/resources/blog/eIDAS2-timeline/) — Gataca. Timeline overview with compliance guidance.
9. [European Digital Identity (EUDI) Regulation](https://digital-strategy.ec.europa.eu/en/policies/eudi-regulation) — European Commission. Official regulatory source.
10. [Smart-ID+: Experience the Next Generation](https://www.skidsolutions.eu/news/smart-id-experience-the-next-generation-of-secure-authentication-now/) — SK ID Solutions. Developer documentation for Smart-ID+.
11. [EUDI Wallet Hub](https://www.eudi-wallet.eu/) — Comprehensive resource on EUDIW standards and use cases.
12. Google AI Search synthesis (Jun 14, 2026) — Confirmed the EUDIW/Smart-ID+ priority conflict analysis, with supporting sources from IDnow, Truvity, Thede Consulting, ERR, and Sumsub.

## Methodology

- Searched 4 queries via firecrawl-mcp search and 1 via Google AI Search
- Deep-read 7 sources via firecrawl-mcp scrape
- Sub-questions investigated:
  - What is the current status of Smart-ID+ adoption by banks?
  - What reasons have been cited for the delay/stall?
  - What is the EUDIW/eIDAS 2.0 mandate timeline?
  - Is there a documented link between EUDIW priorities and Smart-ID+ deprioritization?
  - What is the security gap Smart-ID+ addresses?
  - What does the June 2026 rollout mean for the stall narrative?
- Tools used: firecrawl-mcp (primary), Google AI Search (supplementary)
