---
title: Server-Side Session-Continuity Checking — The Sixth Fix
description: A vendor-neutral, RP-deployable complement to the Smart-ID+ remediation list, for the class of attack Smart-ID+ does not cover
---

# Server-Side Session-Continuity Checking: The Fix That Needs No Vendor

## 1. Where this fits

The Achilles-heel report's remediation section ("Fixes that would actually move the numbers") lists five fixes, in order: mandatory verification codes, Smart-ID+ as the default (with same-device flows where available), transaction-context binding, a liability shift onto banks, and the regulatory floor (NIS2 / eIDAS 2.0). All five are aimed at the phone and the protocol, and every one of them requires SK ID Solutions or a bank to change something.

This document adds a **sixth** — not an "eighth," and not a replacement for any of the five. No seven-item list exists in this corpus or in the Achilles-heel report; this is the next fix after the five that report enumerates.

The sixth fix is different in kind from the other five: it is the only one on this list that a relying party (a bank, a government e-service) can deploy **unilaterally**, without waiting on SK ID Solutions to ship a protocol change or on a regulator to compel one.

## 2. The gap it closes — and the one it does not

[QRLJacking Analysis](./qrljacking-analysis.md) describes the signing-relay mechanism: the attacker serves a fake browser window containing a live, remote, legitimate session running in a container the attacker controls. The victim scans the QR code or enters PIN2 believing they are looking at the real thing, because they are — just relayed pixel by pixel. The session cookie that comes out the other end lands in the **attacker's** browser, not the victim's. The bank's actual authenticated session never touches the device the victim is holding.

That is a continuity break the bank's own infrastructure can, in principle, observe: the transport-layer session that gets authenticated is not the session the legitimate user's own browser opened. Every one of the five fixes above assumes the phone or the protocol is the place to intervene. This is the one place in the whole chain that sits entirely on the relying party's side of the wire, independent of what SK ships.

**Scope, stated honestly:** the Achilles-heel report credits same-device Smart-ID+ with closing both call-based vishing and the QR-relay class, because a same-device flow has no QR code for an attacker to relay in the first place. This sixth fix does not add anything for that case — same-device Smart-ID+ already closes it. Its residual value is for **non-Smart-ID+ flows and attacker-initiated cross-device flows**: legacy push-notification authentication, and any QR/cross-device flow where the attacker, not the user, controls the browser context the code is displayed in. That is exactly the population the five fixes above are slowest to reach, because it is also exactly the population still running the legacy flow while adoption of same-device Smart-ID+ lags (see [Convenience vs Security](./convenience-vs-security.md) on why legacy push flows remain the default at most banks).

It also does not help against on-device abuse, such as the accessibility-service abuse class this repo documents separately: if the approval happens because something running *on the user's own phone* drives the Smart-ID app, the traffic between that phone and the bank is genuinely the user's traffic on a genuine, single, continuous session. There is no continuity break to detect, because there was no relay. The two attack classes sit on opposite sides of the detection boundary this fix draws, and neither this document nor that finding should be read as covering the other's ground.

## 3. What "continuity checking" means, at the class level

The relay in the QRLJacking analysis works because the attacker fully controls what the victim's phone shows and what the bank's server sees are two different, decoupled artifacts: the victim's phone talks to the attacker's infrastructure; the attacker's container talks to the bank. Nothing forces those two conversations to share any evidence the client itself did not choose to report.

The class of mitigation this document describes does not try to fix that by asking the client to report more honestly (an infostealer or a relay operator controls the client and can fabricate any client-side signal — see [Vulnerability Analysis](./vulnerability-analysis.md) on why cookie- and browser-fingerprint-based RP controls already fail this way). Instead, it looks at artifacts the client does not get to author: transport- and session-layer traits of the connection itself, observed at the point where the bank's own infrastructure terminates the connection — things like whether the network path, timing, and session-establishment characteristics of the "authenticated" leg are continuous with the leg the user's own device opened, rather than an artifact of a second, attacker-run process reusing the session downstream.

This is deliberately described at the level of a *class*, not a product or a specific signal list. The point being made is architectural: this category of check exists, sits entirely at the RP's terminating edge, requires no cooperation from SK, and is structurally different from the cookie/IP/UEBA measures SK's own "Additional Security Measures" guidance recommends and which [Vulnerability Analysis](./vulnerability-analysis.md) already shows fail against infostealers, residential proxies, and CGNAT.

## 4. Regulatory hook

This is not a novel regulatory category invented for this document. PSD2's Regulatory Technical Standards on Strong Customer Authentication (Commission Delegated Regulation (EU) 2018/389) already requires payment service providers' transaction-monitoring mechanisms to consider "signs of malware infection in any sessions of the authentication procedure" (Art. 2(2)(d)), and blocks a transaction-risk-analysis exemption from SCA where real-time risk analysis identifies "unusual information about the payer's device/software access" or "malware infection in any session of the authentication procedure" (Art. 18(2)(c)(ii)-(iii)). See [Laws, Acts & Regulations](../03-regulatory-framework/laws-acts-regulations.md) for the full citation. The server-side, session/device-level signal category this document describes is the same category PSD2 RTS already contemplates for banks generally — it is not asking regulators to invent a new legal theory, only to recognize that RPs already have both the authority and, arguably, the obligation to look at this layer.

See also [Enforcement Strategy](../05-enforcement/enforcement-strategy.md) for the parallel argument that RIA, TTJA, and AKI have instruments to compel SK-side fixes; this document is the complementary argument for what a bank can do on its own side of the wire in the meantime, without waiting for that enforcement track to resolve.

For the SK-side alternative that removes the need for this kind of compensating control entirely, see [FIDO2 Pivot Analysis](../06-supplementary-research/fido2-pivot-analysis.md) — cryptographic origin binding at the protocol level makes the relay mathematically impossible rather than statistically detectable. The sixth fix is not a substitute for that migration; it is what an RP can do before it happens.

## 5. Honest limits

Three limits, stated up front rather than discovered later:

1. **It is itself evadable.** A sufficiently resourced attacker who controls both legs of the relay end-to-end, and who is willing to invest in matching network-layer characteristics, can in principle make the two legs look more continuous. This raises the attacker's cost; it does not make the attack impossible the way cryptographic origin binding does.
2. **Its value is in cross-layer coherence and step-up gating, not certainty.** A single missing or ambiguous signal proves nothing on its own. The utility is in combining several independent, hard-to-fake observations and using disagreement between them to trigger a step-up challenge (e.g., a mandatory verification-code check, or a transaction-context re-confirmation) — not in issuing a final accept/reject verdict by itself.
3. **It is a risk score, not an authenticator.** NIST SP 800-63B's authenticator assurance levels describe *what proves possession and control of a credential*. A continuity signal proves neither; it is evidence for a fraud-risk decision layered on top of an existing authentication event, not a replacement authentication factor. Describing it as anything more than that would overclaim exactly the kind of "compliance achieved" language this research project holds everyone else to.

## 6. Why it belongs on this list at all

The other five fixes are correct and necessary, and none of them are optional substitutes for this one. But every one of them is gated on someone else acting: SK shipping same-device flows more broadly, banks adopting them, a regulator issuing a precept, or a legislature moving a liability line. This is the one item on the list an RP can start building today, with no dependency on any of those. That is also its ceiling: it is a mitigation a single relying party can deploy for its own users, not a fix for the underlying architecture. The five fixes above are still the ones that would actually change the numbers industry-wide. This is what closes some of the gap in the meantime.

---

*Cross-references: [QRLJacking Analysis](./qrljacking-analysis.md), [Vulnerability Analysis](./vulnerability-analysis.md), [FIDO2 Pivot Analysis](../06-supplementary-research/fido2-pivot-analysis.md), [Enforcement Strategy](../05-enforcement/enforcement-strategy.md), [Laws, Acts & Regulations](../03-regulatory-framework/laws-acts-regulations.md). See also this repo's accessibility-service abuse disclosure for the on-device attack class this fix does not cover.*
