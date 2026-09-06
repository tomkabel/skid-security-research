---
title: Additions Plan (Autonomous Pass)
description: Phased plan for new documents and consistency fixes added in the T7/T8/T13/consistency task batch
---

# Additions Plan — T7, T8, T13-adjacent, Consistency

**Status:** Self-reviewed, autonomous pass. No human review checkpoint was available before implementation; this plan was critically self-checked against the working rules below (no operational detail, no live-system probing, every statute cite/figure traced to a primary source, responsible-disclosure posture preserved) before content was written, and the finished documents were checked again against the same list before PRs were opened.

**Branch provenance note:** This work is based on `origin/wip/pre-existing-reorg-2026-09-06` (commit `bbb0658`), a pre-existing, previously-uncommitted docs reorganization that was snapshotted to that branch by a prior session — it is not part of this task's output. One of the fixes below (Estonian-language editorial ownership correction) touches a file (`fraud-epidemic-editorial.md`) that exists only on that branch, not on `master`, so a clean rebase onto `master` is not possible for that change; the PR for it says so explicitly. Other PRs in this batch were rebased onto clean `origin/master` where the diff allowed it cleanly — each PR states which base it uses and why.

---

## 1. T7 — "The sixth fix": server-side session-continuity checking

**New file:** `docs/02-technical-security/server-side-session-continuity.md`

**Where it lands:** Technical Security section, alongside `qrljacking-analysis.md` and `convenience-vs-security.md` — it is a technical mitigation analysis, not a regulatory or enforcement document.

**Numbering:** The Achilles-heel report's own remediation section ("Fixes that would actually move the numbers") lists five: (1) mandatory verification codes, (2) Smart-ID+ as default, (3) transaction-context binding, (4) liability shift, (5) regulatory floor. This document is the **sixth**, not "eighth." No seven-item list exists anywhere in the corpus. The doc uses "the fix that needs no vendor" / "sixth fix" only.

**Sources:**
- This repo: `docs/02-technical-security/qrljacking-analysis.md` (the relay mechanism), `docs/06-supplementary-research/fido2-pivot-analysis.md` (cross-reference for the vendor-dependent alternative), `docs/05-enforcement/enforcement-strategy.md` (cross-reference for the regulatory track)
- `tomabel.ee` Achilles-heel report (`/home/notroot/Documents/tomabel.ee/drafts/research/smart-id-achilles-heel.md`) for the "five fixes" enumeration and the Smart-ID+ same-device scope boundary
- PSD2 RTS Art. 2(2)(d), Art. 18(2)(c)(ii)-(iii) (added to `laws-acts-regulations.md` in the T13 PR) as the regulatory hook for server-side session/device signals
- NIST SP 800-63B (already cited elsewhere in the corpus) for the "signal, not an authenticator" framing

**Disclosure-safety review:**
- Describes a *class* of server-side detection (continuity of TLS/session/transport-layer artifacts across the same logical session) in the abstract — no vendor name, no product, no implementation snippet, no scoring formula, no specific signal list beyond what's already public in the SoK-style literature this repo already cites (e.g., IP/UEBA references in `vulnerability-analysis.md`).
- Explicitly scopes the claim: this only helps the non-Smart-ID+ / attacker-initiated cross-device relay case; same-device Smart-ID+ already closes that gap per the Achilles report, and the doc says so rather than implying broader coverage.
- States its own limit up front (evadable by a sufficiently careful attacker; it is a risk signal for step-up gating, not an authenticator per NIST SP 800-63B) — this is a disclosure-safety requirement (no overclaiming) as much as an honesty one.
- No contradiction with `tomabel.ee`: cross-checked against the "Fixes" section and the Smart-ID+ scope language above.

**Sidebar/config wiring:** No `.vitepress/config.ts` change needed — `vitepress-sidebar` auto-generates from the folder tree and frontmatter `title`. Add a line to `docs/02-technical-security/index.md` under "Contents."

---

## 2. T8 — Accessibility-service (a11y) abuse disclosure

**New file:** `docs/02-technical-security/accessibility-service-abuse.md`

**Where it lands:** Technical Security section (attack-surface analysis, same tier as the QRLJacking doc).

**Sources:**
- `~/Documents/.meta/00-MASTER-PLAN.md` §3.1 n.1–n.2 for the SteroidID PoC existence-proof framing and the "different machine, different side of the detection boundary" distinction from the signing-relay
- Existing corpus: `docs/02-technical-security/vulnerability-analysis.md` (infostealer/cookie-theft attack surface it does *not* cover — this doc fills that gap)
- Android Accessibility Service documentation (public, vendor-neutral: the OS permission model itself, not any specific tool) for the trust-boundary framing

**Disclosure-safety review:**
- Class-of-attack only: what an a11y-privileged app *can* structurally do (read UI tree, synthesize gestures/text) and why that collapses the "user must physically approve" assumption — no selectors, no package names, no code, no automation steps.
- SteroidID's PoC is cited exactly once, as an existence proof ("a defensive research tool has already demonstrated this is possible"), never reproduced or walked through.
- Framed as the class this repo's other findings do *not* cover (explicitly distinguished from the signing-relay, which is a remote/network-side issue; a11y abuse is on-device and structurally invisible to the T7 mitigation) — this scoping honesty is itself a disclosure-safety requirement, since implying a11y abuse is "just another case the sixth fix catches" would be a false reassurance.
- Mitigations discussed are architectural classes (transaction-context display the a11y layer cannot fabricate, foreground-app attestation, same-device-only flows) — not a hardening guide with concrete implementation steps.

**Responsible disclosure timeline:** Append a new entry to `docs/05-enforcement/responsible-disclosure-timeline.md` recording this finding's disclosure status (vendor-notification pending/initiated — see the doc for the exact wording used) and add a row to the "Current Status" table so the timeline stays the single source of truth for disclosure state across findings.

**Sidebar/config wiring:** Same as T7 — add to `docs/02-technical-security/index.md` Contents list; no config.ts change.

---

## 3. T13-adjacent — PSD2 RTS hook in the regulatory framework

**Edit:** `docs/03-regulatory-framework/laws-acts-regulations.md`, under the existing "PSD2 (Payment Services Directive 2015/2366)" heading — add a new subsection for **Commission Delegated Regulation (EU) 2018/389** (RTS on SCA).

**Content (verified against EUR-Lex CELEX:32018R0389 text, cross-checked via two independent secondary sources quoting the same paragraphs — a Malta Financial Services Arbiter technical note and an FCA consultation paper, both reproducing the regulation verbatim):**
- Art. 2(2)(d): transaction-monitoring mechanisms must take into account, at a minimum, "signs of malware infection in any sessions of the authentication procedure."
- Art. 18(2)(c)(ii)-(iii): a transaction-risk-analysis (TRA) exemption from SCA is unavailable if the PSP's real-time risk analysis identifies "unusual information about the payer's device/software access" or "malware infection in any session of the authentication procedure" — both unqualified (no "if provided by the PSP" condition attached to these two).
- Art. 2(2)(e) is quoted **only together with its condition**: "in case the access device or the software is provided by the payment service provider, a log of the use of the access device or the software provided to the payment service user and the abnormal use of the access device or the software." This is included because the condition is exactly what makes it different from (d) and 18(2)(c)(iii) — worth showing, not omitting, as long as the condition travels with the quote.

**Tie-in:** One sentence connecting this to the existing eIDAS/EUTS/GDPR framework already in the document — the same server-side device/session signal categories the enforcement track argues for are independently, and already, contemplated by PSD2 RTS for the banks themselves. No new claim about Smart-ID compliance is made; this is a reference-document addition, consistent with the file's existing "no opinions or commentary" scope note.

**Verification:** Both quoted paragraphs cross-checked against two independent secondary sources reproducing the EUR-Lex CELEX:32018R0389 text verbatim (fetched live during this task). No fabricated citation.

---

## 4. T-consistency — Reconciliation against the `tomabel.ee` Achilles-heel report

Diffed against `/home/notroot/Documents/tomabel.ee/drafts/research/smart-id-achilles-heel.md` (the canonical draft of the published report) and its source list. Findings:

| # | Claim | This corpus (before) | `tomabel.ee` | Verdict | Fix |
|---|---|---|---|---|---|
| 1 | SK ID Solutions ownership | `e-services-catalog.md` and `fraud-epidemic-editorial.md` say "Swedbank, SEB, **Luminor**" | "founded 2001 by Swedbank, SEB Bank and **Telia Eesti**" (sourced from SK's own About page; independently confirmed live via 4 sources incl. Inforegister.ee company registry and SK's Trust Services Practice Statement, which give the exact split: Swedbank 25%, SEB Pank 25%, Telia Eesti 50%) | **Drift — factual error in this corpus.** Luminor is not and has never been a shareholder of SK ID Solutions. | Replace "Luminor" with "Telia Eesti" in both files. |
| 2 | Smart-ID+ launch date | `e-services-catalog.md`/`estonian-fraud-evolution.md` describe Smart-ID+ as a Jan/Feb 2026 rollout with no earlier anchor | SK introduced Smart-ID+ in **June 2025**; the Feb 26, 2026 date is specifically eesti.ee/state-e-services *adopting* it, not the product's launch | **Drift by omission** — not contradictory, but readable as if Smart-ID+ is a 2026 product, which understates the year-long bank-adoption lag that is the whole point of the enforcement argument. | Add the June 2025 SK-wide launch date as the anchor in both files; keep the Feb 2026 state-adoption date but label it as adoption, not launch. |
| 3 | LHV Smart-ID+ rollout date | Not present anywhere in this corpus | LHV rolled out Smart-ID+ login across its Internet Bank from **16 June 2026** | **Missing fact**, not a contradiction. | Update the stale "(2019)" LHV row in `e-services-catalog.md` with the verified 16 June 2026 date and a citation. |
| 4 | 2025/2024 fraud figures | €29M (2025) matches `tomabel.ee` exactly ("three times the year before"); this corpus's own 2024 figure is €8.0M (PPA, a different metric — total reported fraud losses for the year) | €29M (2025, RIA) and €13.5M (2024, **Eesti Pank's payment-fraud-specific** count) | **No contradiction** — different agencies, different scopes (RIA/PPA total fraud vs. Eesti Pank payment-transaction fraud specifically) — but juxtaposed without that distinction they read as conflicting numbers for the same year. | Add a one-line footnote in `estonian-fraud-evolution.md` distinguishing the two 2024 metrics and their sources, so a reader checking both reports doesn't conclude one of them is wrong. |

No other drift found in a targeted pass over every doc referencing "Smart-ID+", "LHV", "29 million"/"13.5", or SK's ownership structure.

---

## 5. Build verification

`npm run docs:build` (the repo's actual script name; there is no bare `npm run build`) must stay green after each PR. Verified locally before each PR is opened.

## 6. PR structure

One PR per new document, per the handoff's definition of done:
- **PR 1:** This plan + T7 doc + its sidebar wiring.
- **PR 2:** T8 doc + disclosure-timeline update + its sidebar wiring.
- **PR 3:** T13 regulatory addition + T-consistency fixes (bundled because both are edits to existing reference documents, not new analysis documents, and touch the same "keep the corpus internally and externally consistent" concern).
