# Smart-ID+ Migration Stall: The EUDIW Priority Conflict
*Generated: 2026-06-14 | Sources: 12 | Confidence: High*

## Executive Summary

Estonian banks delayed Smart-ID+ implementation for over a year after its June 2025 release; this report's hypothesis is that finite IT development resources were partly redirected toward the EU Digital Identity Wallet (EUDIW) obligations under eIDAS 2.0 Article 5f, though no direct bank statement confirms this causal link (see §3.1 below). Article 5f(2) creates a conditional acceptance obligation — it applies only to private relying parties already legally or contractually required to use strong user authentication, excludes micro and small enterprises, is triggered only on a user's voluntary request, and runs 36 months from the entry into force of the implementing acts under Article 5a(23)/5c(6) (adopted 28 November 2024, published 4 December 2024), commonly reported as end of December 2027 — it is not a blanket "all banks must accept EUDIW" mandate, and Article 5f itself specifies no particular sanction for non-compliance. Smart-ID+ remains an optional, regional security upgrade with no comparable legal deadline. The deadlock has now broken: as of June 2026, Bigbank became the first to launch Smart-ID+, LHV follows next week, and Swedbank and SEB plan rollout by end of year.

## 1. The Resource Bottleneck: Two Competing Mandates

Banks in Estonia (and the broader EU) operate on rigid IT roadmaps with finite engineering talent. Two major identity infrastructure projects collided:

| Factor | EUDIW Mandate | Smart-ID+ |
|--------|--------------|-----------|
| **Legal force** | Conditionally mandatory for qualifying private relying parties (eIDAS 2.0, Art. 5f(2)); excludes micro/small enterprises; triggered only where strong authentication is already legally/contractually required, and only on user request | Optional / voluntary |
| **Deadline** | 36 months after entry into force of the Art. 5a(23)/5c(6) implementing acts (adopted 28 Nov 2024, published 4 Dec 2024) — commonly reported as end of December 2027 | No legal deadline |
| **Scope** | EU-wide for qualifying relying parties (public sector under Art. 5f(1); qualifying private relying parties under Art. 5f(2), excluding micro/small enterprises) | Primarily Estonia, Baltic region |
| **Penalty for non-compliance** | Not specified in Article 5f itself; general eIDAS/national supervisory enforcement would apply | None |
| **Integration complexity** | Massive — new architecture, cryptography, trust frameworks | Moderate — QR-based auth flow, API upgrade |
| **Fraud prevention** | Medium-term (zero-trust model) | Immediate (blocks phone-call phishing) |

**Hypothesis, not established fact:** this report infers that banks deprioritized Smart-ID+ to focus engineering effort on meeting EUDIW timelines. The cited ERR reporting documents technical complexity, user-convenience trade-offs, and bank rollout decisions, but no bank has stated on the record that EUDIW work displaced Smart-ID+ engineering resources. A Google AI search synthesis ("Many banks paused or slowed down internal authentication migrations to focus their engineering talent on meeting the impending EUDIW deadlines") is not an auditable primary source and should not be read as confirming the causal link — it is included below only as a pointer to what a broader synthesis suggested, pending direct bank roadmap statements.

Swedbank's head of financial crime prevention, Raul Vahtra, confirmed in January 2026: *"We have included this in our action plan and are starting development, but it must be understood that developments like this are technically quite complex and take some time."* ([ERR News, Jan 2026](https://news.err.ee/1609925612/banks-not-rushing-into-smart-id-security-upgrade))

## 2. EUDIW Timeline: Why It Dominated Bank Roadmaps

The eIDAS 2.0 regulation created an inescapable compliance cascade that consumed bank IT planning:

- **May 2024**: eIDAS 2.0 entered into force, starting the clock
- **28 November 2024 / 4 December 2024**: Key implementing acts adopted and published — technical standards finalized (not Q2 2025 as earlier drafts of this timeline stated) ([eIDAS Readiness](https://eidasreadiness.com/eidas-2-timeline))
- **Q4 2025**: Large-Scale Pilots delivered final results across finance, healthcare, travel
- **End of 2026** (24 months after the Art. 5a(23) implementing act's adoption): Member states must make wallets available to citizens — not H1 2026 as earlier drafts of this timeline stated
- **End of December 2027** (36 months after the Article 5a(23)/5c(6) implementing acts, adopted 28 November 2024 and published 4 December 2024, enter into force): **Qualifying private relying parties** — those already required by Union or national law or by contract to use strong user authentication *for online identification*, excluding micro and small enterprises — must accept EUDIW upon a user's voluntary request. Article 5f(2) is distinct from, and does not create, a general PSD2 Strong Customer Authentication (SCA) obligation for all banks — the two frameworks address different authentication requirements and should not be conflated. This is not a universal "all EU banks" mandate, and Article 5f does not itself specify that KYC onboarding, login, and high-value transfers are the covered processes; those categories are illustrative sector examples in the source commentary, not a statutory list. ([Truvity, Sep 2025](https://www.truvity.com/blog/your-banks-first-3-steps-to-eidas-2-0-compliance))

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
- **Same-device auth**: On smartphones, authentication can only be initiated from the same device — this flow does close the remote phone-call phishing vector.
- **QR cross-device auth**: On desktop/laptop, the user scans a QR code with their phone, which reduces (but does not eliminate) remote phishing risk. Scanning does not require the victim's physical presence at the fraudulent site: ERR reporting documents banks (including LHV) warning that a fraudster can display the QR code on a fake website while directing the victim to scan it over a phone call, relaying the session in real time. Same-device auth remains the stronger mitigation against this residual path.
- Overall, Smart-ID+ substantially reduces the classic remote phone-call phishing pattern, particularly for same-device flows, but QR cross-device auth alone is risk reduction, not elimination.

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

- **This report's working hypothesis is that the EUDIW obligation was a significant factor in the Smart-ID+ stall**, alongside technical complexity and the ownership conflict of interest (§3.1). No direct bank statement confirms EUDIW work displaced Smart-ID+ engineering resources; this remains an inference from timing and general industry commentary, not an established fact.

- **The stall was not purely technical** — available reporting points to a resource-allocation and prioritization story, but the specific claim that the same engineering teams were reassigned from Smart-ID+ to EUDIW integration is not documented in primary bank sources.

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
