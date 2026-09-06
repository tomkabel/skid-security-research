---
title: Accessibility-Service Abuse of the Smart-ID App
description: Class-of-attack disclosure — an Android Accessibility Service can automate approval of the Smart-ID app on-device, a surface not covered by existing infostealer/cookie-theft analysis
---

# Accessibility-Service Abuse of the Smart-ID App

## 1. Scope of this document

This document covers a **class of attack**, not a working exploit. It contains no selectors, no package names, no code, and no automation steps. A benign, defensive-research proof of concept (SteroidID, described below) has already demonstrated that this class of attack is technically possible; that PoC is referenced here once, as existence proof, and is not reproduced or walked through.

This finding is separate from — and not covered by — the signing-relay class described in [QRLJacking Analysis](./qrljacking-analysis.md), or by any server-side, RP-deployed session-continuity mitigation aimed at that relay class. The relay is a *remote* attack: the attacker's infrastructure runs the authenticated session and the victim never touches it. What this document describes is *local*: the victim's own phone, with its own genuine session, is driven by something other than the victim's own fingers. A server-side continuity check has nothing to detect here, because there is no relay and no second session — the traffic between the phone and the bank is genuinely the user's traffic, start to finish. Any argument that server-side session-continuity checking "handles" this class would be a false reassurance, and this document deliberately does not make it.

## 2. The gap in existing coverage

[Vulnerability Analysis](./vulnerability-analysis.md) and the broader corpus cover credential/session theft via infostealer malware (cookie and token exfiltration) as the primary on-device threat model. Neither that document nor the Achilles-heel report's remediation list addresses a different on-device threat: a malicious or coerced app that does not need to steal a session or a credential at all, because it can simply **operate the Smart-ID app itself**, as the user, using an OS-level accessibility permission.

## 3. The trust boundary: what an Accessibility Service can do

Android's Accessibility Service API exists to let assistive software — screen readers, switch-access tools — read the content of the screen and act on the user's behalf: inspect the UI element tree of the foreground app, and synthesize input (taps, gestures, text entry) as if the user performed it. That is the API's legitimate purpose, and the permission is deliberately powerful because assistive technology needs exactly this level of access to be useful.

The consequence is that any app holding this permission — whether a genuinely assistive tool, a compromised app that acquired the permission through social engineering, or an app coerced into installation and grant by an attacker with brief physical access — can drive **any other app's UI**, including the Smart-ID app: read what is displayed (a control code, a transaction amount, a PIN prompt), and issue the taps and text entry needed to approve it. This is the same automation surface QA-testing tools and assistive technology use; it is not a bug in the Android API. It is a bug in the assumption that "the user must physically look at the phone and physically approve" is a security property, once anything running with a11y privilege on that same phone can perform both halves of that action without the user's involvement.

**Why this collapses the core Smart-ID assumption:** every argument in this corpus for why Smart-ID+'s same-device flow and verification codes are an improvement over the legacy push flow rests on the premise that a human is the one reading the screen and pressing the button. Accessibility-service abuse removes that premise while leaving every other signal untouched: the session is genuinely the user's device, genuinely the user's SIM/app instance, genuinely a single continuous session with no relay and no network anomaly. It cannot be distinguished from legitimate use by anything this corpus's other mitigations check for.

## 4. Existence proof: SteroidID

SteroidID is a defensive research project (source: a local multi-language monorepo including an Android component with an accessibility-service bridge) built to demonstrate exactly this class of automation against the Smart-ID app end-to-end — reading the approval UI and issuing the taps and PIN entry an assistive tool would. Its own design places this behind a biometric passkey gate and keeps all processing on-device ("no cloud, no third party"), which is precisely why it is useful as a demonstration: it proves the automation surface is real without requiring any credential theft, network interception, or remote infrastructure at all.

SteroidID's existence is cited here only to establish that this class of attack is not theoretical. Its implementation, its automation targets, and its internal architecture are deliberately out of scope for this document.

## 5. Mitigations (architectural classes, not implementation steps)

None of these are specific to any one vendor's implementation; they describe categories of defense that would need to be evaluated and built by whoever owns the affected app or platform:

1. **Transaction-context display the automation layer cannot fabricate.** If the approval screen's authoritative content (payee, amount, purpose) can only be sourced from a channel an accessibility service cannot also read and rewrite in the same pass — for example, content rendered through a path the OS treats differently from ordinary UI text — then automating the "read code, tap approve" loop stops being sufficient, because reading is no longer the same operation as verifying.
2. **On-device attestation of the foreground app / caller identity.** Distinguishing "a human is directly interacting with this screen" from "an accessibility service is synthesizing this interaction" is a platform-level signal (where available) that the identity app can request and act on, rather than assume.
3. **Same-device, user-initiated flows as the default**, per the existing recommendation in [Smart-ID Security Analysis](../01-core-research/smartid-security-analysis.md) and the Achilles-heel report — this does not close the a11y gap (an a11y service can initiate the flow too), but it does remove the remote/relay attack surface this class is often bundled with in threat-model discussions, keeping the two classes analytically separate as this document argues they should be.

None of the above is a specification. They are the categories a fix would come from, offered so that SK, platform vendors, and RPs have a starting point for their own risk assessment — not a design SK is being asked to implement verbatim.

## 6. Responsible disclosure

This finding is routed through the same responsible-disclosure process as every other finding in this corpus. See [Responsible Disclosure Timeline](../05-enforcement/responsible-disclosure-timeline.md) for the current vendor-notification status of this specific finding.

---

*Cross-references: [QRLJacking Analysis](./qrljacking-analysis.md), [Vulnerability Analysis](./vulnerability-analysis.md), [Responsible Disclosure Timeline](../05-enforcement/responsible-disclosure-timeline.md). See §1 above for why server-side, relay-focused session-continuity mitigations structurally do not cover this on-device class.*
