# Kuningas on Alasti: Shattering the Smart-ID+ ‘Phishing-Resistant’ QR Paradigm

## *A Case Study on Exploiting Origin Binding Failures via Remote Browser Orchestration (RBO) and Dynamic BiTB.*

## 🛡️ A Note on Responsible Disclosure & Cryptographic Irony 💀

> **The "Trust Service Provider" Paradox**
>
> We disclosed these findings to **SK ID Solutions** via their designated secure channels. The experience was a masterclass in irony. For a multinational Identity Provider and "Qualified Trust Service Provider," their own security hygiene was functionally non-existent.
>
> At the time of the report, the Incident Response Team had allowed their **public PGP keys to expire**, effectively decapitating their own encrypted reporting channel. For **55 days**, their triage process remained incapacitated. It is a bold move for a PKI-based company to manage their own keys with less competence than a hobbyist, yet here we are.

***

## 1. Executive Summary: The Naked Truth

In June 2025, SK ID Solutions launched **Smart-ID+**, touting enhanced security via "device-linked" QR code flows. The marketing narrative was absolute: these updates would render Man-in-the-Middle (MITM) attacks "difficult."

**This research proves that "difficult" is a relative term.**

The vendor dismissed these findings as a **"deliberately accepted risk."** In offensive security, "Accepted Risk" is corporate shorthand for *"We prioritized UX over Cryptographic correctness."*

By engineering a containerized, virtualization-based phishing framework—**OutSmart-ID**—I demonstrated that Smart-ID+’s reliance on QR codes provides zero protection against a sophisticated adversary. By decoupling the authentication request from the victim's physical environment and re-projecting a legitimate session via an interactive **Dynamic Browser-in-the-Browser (BiTB)** interface, the security guarantees of Smart-ID+ evaporate.

## 2. The Architectural Flaw: The "Think" Test

True phishing resistance has a simple litmus test: **Is it safe for the user to approve an authentication request without thinking?**

* **FIDO2 / WebAuthn:** Yes. The protocol enforces origin binding.
* **Client-Side TLS (ID-Card):** Yes. The handshake enforces origin binding.
* **Smart-ID+ (Cross-Device):** **No.**

The core flaw is not the QR code itself, but the **lack of cryptographic binding between the browser session and the authentication intent.** Smart-ID acts as an "out-of-band" authenticator. It validates that *someone* scanned the code, but it lacks the mechanism to verify that the *requesting browser* is the same one the user is holding.

If the attacker controls the "viewport" of the user's interaction, the attacker owns the identity.

## 3. The Offensive Framework: Architecture of "OutSmart-ID"

Standard reverse proxies (like *Evilginx2*) often fail against complex flows involving high-frequency dynamic content, WebSockets, or canvas-drawn QR codes. To break Smart-ID+, I transitioned from simple HTTP traffic proxying to **Remote Browser Orchestration (RBO).**

### 3.1 The Infrastructure Stack

1. **Frontend (BiTB):** A high-fidelity CSS/JS shell mimicking the victim’s OS and browser environment (Chrome on macOS/Windows). This "fake" window is rendered *inside* the attacker-controlled domain.
2. **Backend (Dockerized Chromium):** A fleet of headless browsers running in isolated containers. Each victim is assigned a unique, dedicated Chromium instance in Kiosk mode, navigated to the **genuine** banking or government portal.
3. **Transport (noVNC / WebSockets):** The live display of the *real* site is streamed to the victim via a modified `EvilNoVNC` bridge. The victim isn't looking at a cloned template; they are looking at the actual target site through a "lens" controlled by the attacker.
4. **Reverse Proxy & Request Rewriter:** A custom Golang-based proxy sits between the target site and the attacker's server to facilitate the extraction of cookies and headers immediately upon session creation.

### 3.2 The Kill Chain

1. **The Bait:** The victim visits a phishing link. They are presented with a pixel-perfect "Login with Smart-ID" BiTB window.
2. **The Handshake:** The backend Docker instance triggers a legitimate Smart-ID+ session on `identity.sk.ee` or the Service Provider’s portal.
3. **The Projection:** The **legitimate QR code**, generated on the official servers, is streamed live into the victim's browser via the BiTB interface.
4. **The Scan:** The victim scans the QR code with their physical phone. The Smart-ID app validates the code as "Correct" because it *is* correct—for the attacker's browser.
5. **The Hijack:** The attacker's Dockerized browser is now fully authenticated. The proxy immediately scrapes the session cookies (`JSESSIONID`, `SID`, etc.) and kills the VNC stream.

## 4. Impact: Total Compromise via Credential Proxying

The impact extends past simple Account Takeover (ATO). Because the session exists in a real, containerized browser, we bypass standard bot detections (TLS Fingerprinting, Canvas Noise, Font Enumeration).

This allows for **unauthorized data aggregation**:

* **Credential Proxying:** Using the victim's active session to pull bulk data from e-services lacking public APIs.
* **Identity Impersonation:** Complete takeover of State and Financial services.

## 5. Vendor Response: A Study in Hubris

When presented with the ability to transparently proxy Smart-ID+ sessions, SK ID Solutions responded:
> *"The vulnerability was known to us... we have consciously accepted this risk."*

An **Accepted Risk** without a **Compensating Control** is just a **vulnerability with a marketing budget.**

Reliance on users to manually verify "Control Codes" or visuals is security nihilism. If the security of a National Digital Identity depends on a user noticing a pixel-difference in a URL bar, or understanding the nuances of a Browser-in-the-Browser attack, the system is already broken.

***

They label this an 'upgrade' to sedate the market and stave off a fraud epidemic, but the reality is absolute. SK ID Solutions has attempted to plaster over legacy failures with the veneer of 'Smart-ID+', yet as this research demonstrates, cosmetic measures cannot remediate fundamental architectural rot.

The system remains inherently exposed. The King is naked, the architecture is a ghost, and the "risk" the vendor has so graciously accepted is a liability effectively transferred to their users—many of whom will pay for this "design choice" with their livelihoods.

This is not an accidental oversight—it is a feature, not a bug. It forces us to confront the most alarming conclusion of all: **The system was never intended to be secure. It was only intended to be convenient.**

***

*Written by Tom Kristian Abel, Security Researcher.*

*Copyright 2026. Educational purposes only.*
