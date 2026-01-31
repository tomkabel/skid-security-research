# Smart-ID Security Research: Core Analysis

## Executive Summary

In June 2025, SK ID Solutions launched **Smart-ID+**, touting enhanced security via "device-linked" QR code flows. The marketing narrative was absolute: these updates would render Man-in-the-Middle (MITM) attacks "difficult."

**This research proves that "difficult" is a relative term.**

The vendor dismissed these findings as a **"deliberately accepted risk."** In offensive security, "Accepted Risk" is corporate shorthand for *"We prioritized UX over Cryptographic correctness."*

By engineering a containerized, virtualization-based phishing framework—**OutSmart-ID**—I demonstrated that Smart-ID+’s reliance on QR codes provides zero protection against a sophisticated adversary. By decoupling the authentication request from the victim's physical environment and re-projecting a legitimate session via an interactive **Dynamic Browser-in-the-Browser (BiTB)** interface, the security guarantees of Smart-ID+ evaporate.

## The Architectural Flaw: The "Think" Test

True phishing resistance has a simple litmus test: **Is it safe for the user to approve an authentication request without thinking?**

* **FIDO2 / WebAuthn:** Yes. The protocol enforces origin binding.
* **Client-Side TLS (ID-Card):** Yes. The handshake enforces origin binding.
* **Smart-ID+ (Cross-Device):** **No.**

The core flaw is not the QR code itself, but the **lack of cryptographic binding between the browser session and the authentication intent.** Smart-ID acts as an "out-of-band" authenticator. It validates that *someone* scanned the code, but it lacks the mechanism to verify that the *requesting browser* is the same one the user is holding.

If the attacker controls the "viewport" of the user's interaction, the attacker owns the identity.

## Technical Gap Analysis

### 1. Lack of Cryptographic Channel Binding (Origin Binding)

**Architectural Detail:** SmartID relies on a visual "Control Code" comparison to link the browser session to the mobile app session. While this mitigates basic credential replays, the cryptographic signature is generated on the mobile device (and server) without mathematically binding the signature to the specific TLS session of the relying party (RP) in the browser.

**Standard Deviation:** Fails the **FIDO Alliance definition of "Phishing Resistant"** and **NIST SP 800-63-4 (Draft)** requirements for AAL3 (in specific configurations) or "Verifier Impersonation Resistance."

**Security Implication:** Susceptible to advanced **Adversary-in-the-Middle (AiTM)** attacks using toolkits like Evilginx2. If a user is tricked into entering their ID on a proxied site and confirms the push notification (even after checking the code, if the attacker relays the correct code), the session token can be hijacked. FIDO2/WebAuthn prevents this by binding the credential to the origin (`https://bank.com`), making the signature invalid on a phishing site (`https://banc.com`).

**Industry Shift:** The industry is moving toward **FIDO2/WebAuthn** where domain binding is enforced at the protocol level, removing user judgment from the security loop.

### 2. The "Human-in-the-Loop" Verification Fallacy (Control Code Bypass)

**Architectural Detail:** SmartID attempts to mitigate AiTM attacks via a 4-digit "Control Code" (VC) derived from the hash of the data/challenge. This relies entirely on the user cognitively verifying that the code on the web session matches the code on the mobile device.

**Deep Technical Divergence:** This mechanism fails the **"Verifier Impersonation Resistance"** criteria defined in **NIST SP 800-63-4 (Draft)**.

**The Attack Vector:** In a sophisticated AiTM attack (e.g., using a customized Evilginx2 template), the proxy server intercepts the legitimate challenge from the RP (Bank) and relays it to the victim's browser *in real-time*. The victim sees the *correct* Control Code on the phishing site because the attacker is relaying the legitimate session data.

**Failure Mode:** The user verifies the code is correct (because it is), enters their PIN, and technically signs the challenge. However, the resulting authorization token is captured by the adversary's proxy, which controls the TLS session with the bank.

**Industry Context:** **FIDO2/WebAuthn** eliminates this by binding the cryptographic signature to the `clientDataJSON` which contains the specific `origin` (e.g., `https://bank.com`). If the origin is `https://banc.com`, the browser kernel refuses to sign, regardless of user intent. SmartID lacks this protocol-level block.

**Future Risk:** As phishing pivots to real-time automated proxies, the "Control Code" becomes a security theater mechanism that validates the *session existence* but not the *session ownership*.

### 3. Privacy Architecture & Metadata Linkability (The "God View" Risk)

**Architectural Detail:** Every authentication and signature event requires a synchronous call to SK ID Solutions' central infrastructure to compute the server-side RSA key share.

**Standard Deviation:** Violates the **Unlinkability** and **Privacy-by-Design** principles central to the **eIDAS 2.0 ARF (Architecture and Reference Framework)** for EUDI Wallets and ISO 18013-5 (mDL).

**Security Implication:** The Identity Provider (SK) possesses a complete transactional graph of the user's life (every bank login, every document signed).

**Industry Context:** Modern **Decentralized Identity (SSI)** and **Passkey** implementations decouple the "Holder" from the "Issuer." When a user authenticates with a Passkey or a local EUDI Wallet credential, the transaction is peer-to-peer between the User Agent and the Relying Party. The issuer (e.g., Apple, Google, or the State) is not technically required to be online or aware of the specific transaction context.

**Future Risk:** Regulatory scrutiny under GDPR and eIDAS 2.0 will increasingly penalize architectures that centrally aggregate user behavioral metadata.

### 4. Post-Quantum Cryptography (PQC) Rigidity in Split-Key Schemes

**Architectural Detail:** SmartID utilizes a proprietary Multi-Party Computation (MPC) protocol based on RSA (typically 2048 or 4096-bit).

**Standard Deviation:** **CNSA 2.0 (Commercial National Security Algorithm Suite)** and **NIST PQC Standardization**.

**Security Implication:** RSA is fundamentally vulnerable to Shor’s algorithm. Migrating a standard PKI setup to PQC (e.g., CRYSTALS-Dilithium) is difficult; migrating a *proprietary Split-Key MPC protocol* to PQC is exponentially harder. Lattice-based cryptography does not support the same homomorphic properties or simple split-key constructs as RSA without significant performance penalties or entirely new theoretical frameworks.

**Industry Context:** FIDO2 standards are crypto-agile; hardware vendors (Yubico) or OS providers (Apple/Android) can update the cipher suites in the firmware/OS layer to support PQC algorithms without breaking the API contract with the Relying Party.

**Future Risk:** SmartID faces a "Cryptographic Cliff." When RSA is deprecated for QES (Qualified Electronic Signatures), the entire underlying mathematical architecture of the split-key solution may need to be rewritten, unlike standard PKI which simply swaps certs and algorithms.

### 5. Vulnerability to Overlay & Accessibility Service Attacks (App vs. OS Trust)

**Architectural Detail:** The SmartID PIN entry occurs within the application layer (user space), relying on software obfuscation and rasp (Runtime Application Self-Protection) to protect the input.

**Standard Deviation:** Diverges from **FIDO Security Reference** requirements for "Trusted Path" input.

**Security Implication:** Android "Accessibility Services" malware (e.g., Xenomorph, SharkBot) can potentially draw overlays on top of the SmartID PIN pad or log keystrokes before they are encrypted by the app logic.

**Industry Context:** **WebAuthn/Passkeys** utilize the OS-level "Trusted UI" (Secure Enclave / Trusted Execution Environment). When the biometric prompt or PIN prompt appears for a Passkey, it is rendered by the kernel/hardware layer, inaccessible to user-space malware or screen readers.

**Future Risk:** As mobile malware evolves to bypass software-based RASP, reliance on app-layer PIN entry becomes a critical weakness compared to hardware-isolated authentication.

### 6. Decoupling of Authentication from Data Channel (Context Blindness)

**Architectural Detail:** The SmartID API separates the data channel (what the user is doing in the browser) from the authentication channel (the push notification). While text can be injected into the push, it is not cryptographically bound to the payload in a way the *browser* can verify.

**Standard Deviation:** Fails **PSD2 RTS (Regulatory Technical Standards)** spirit regarding "Dynamic Linking" if the implementation relies solely on the user reading the text rather than a technical binding of the transaction details to the signature *within* the user agent's scope.

**Security Implication:** A "Man-in-the-Browser" (MitB) attack could alter the transaction details sent to the bank (e.g., "Send €10,000") while the SmartID push notification—triggered by a separate API call—might be manipulated or socially engineered to look like a generic "Login" or a lower value transaction if the RP implementation is flawed.

**Industry Context:** **FIDO2** (via `transactionConfirmation` extensions) and **EUDI Wallets** allow the signing of specific blobs of data where the display of that data is handled by the Trusted Execution Environment (TEE), ensuring WYSIWYS (What You See Is What You Sign) integrity that cannot be spoofed by browser malware.

### 7. Dependency on Proprietary "Split-Key" vs. Hardware-Backed Keys

**Architectural Detail:** SmartID uses a proprietary RSA split-key scheme where one share of the private key is on the user's device and the other is on the SK ID Solutions server.

**Standard Deviation:** Contradicts the shift toward **Syncable Credentials (Passkeys)** and **device-native hardware security modules (HSMs/Secure Enclaves)** as preferred storage mechanisms. While compliant with eIDAS QSCD via a SAM (Server Signing Mechanism), it relies on a centralized trust anchor (the server holding the other key share) rather than full user-held cryptographic independence.

**Security Implication:** Introduces a central point of failure (the SmartID server infrastructure). If the server-side HSMs are compromised or the API is manipulated, security assurances drop.

**Industry Shift:** A move toward **decentralized key management** (Apple/Google Passkeys) where the cloud sync is platform-managed, but the cryptographic operations utilize local hardware enclaves (Secure Enclave/Titan M) without vendor-specific server dependencies for every signature.

### 8. Vulnerability to "Prompt Bombing" / Push Fatigue

**Architectural Detail:** The authentication flow is triggered Out-of-Band (OOB) via a push notification.

**Standard Deviation:** **CISA MFA Alert (AA22-074A)** and recent **MFA Fatigue defensive recommendations**. While SmartID requires a PIN, the initiation of the flow is passive (the user receives a request they didn't necessarily trigger).

**Security Implication:** Users can be spammed with authentication requests. While the "Control Code" is meant to stop this, habituation causes users to blindly accept requests or confirm codes if they are socially engineered to believe it is a "security check."

**Industry Shift:** Modern standards prefer **"Just-in-Time" authentication** or active flows (scanning a QR code) over passive push notifications to ensure User Presence is intentional.

### 9. Non-Compliance with "Roaming Authenticator" Standards

**Architectural Detail:** The SmartID credential is strictly bound to the specific app installation on a specific device. Migration requires a complex re-onboarding process (often using biometrics or bank links).

**Standard Deviation:** Misalignment with **NIST SP 800-63-4** goals for **Cross-Device authentication** usability without degrading security.

**Security Implication:** High friction during device loss/replacement leads to "shadow IT" behaviors or fallback to weaker methods (SMS OTP) during recovery.

**Industry Shift:** **Multi-Device Credentials (Passkeys)** allow secure syncing of keys across a user's ecosystem (e.g., iCloud Keychain), ensuring high availability without lowering security to an identity-proofing fallback every time a phone is upgraded.

### 10. EUDI Wallet & ARF Alignment Gaps

**Architectural Detail:** SmartID is a private eID scheme.

**Standard Deviation:** Potential friction with the upcoming **eIDAS 2.0 European Digital Identity (EUDI) Wallet Architecture and Reference Framework (ARF)**. The ARF prioritizes user-centric verifiable credentials stored in a local Secure Element (Edge functionality) over server-side split keys.

**Security Implication:** As the EU moves to standardized Wallets, proprietary API integrations like SmartID's may become legacy technical debt, requiring complex bridges to interact with EUDI-compliant Relying Parties.

**Industry Shift:** Transition from proprietary IDPs (Identity Providers) to **Self-Sovereign Identity (SSI)** principles and standardized W3C Verifiable Credentials.

### 11. Reliance on Online Connectivity (Availability Risks)

**Architectural Detail:** Both the mobile client and the server must be online to compute the final RSA signature (Multiparty Computation).

**Standard Deviation:** Diverges from **Offline Authentication** capabilities found in FIDO2 security keys and emerging offline scenarios for EUDI Wallets (e.g., age verification in a store with no signal).

**Security Implication:** Denial of Service (DoS) vulnerability. If SK ID Solutions' internet connectivity or server farm goes down, authentication is impossible. Hardware keys (YubiKey) or local device biometrics do not suffer this dependency.

**Industry Shift:** Ensuring authentication resilience and **high availability** by reducing dependencies on real-time vendor server uptime.

### 12. Static LOA Inheritance (Session Invariance)

**Architectural Detail:** Smart-ID creates a qualified electronic signature (QES) or strong authentication based on a static enrollment Level of Assurance (LOA). Once the PIN is entered, the system returns a binary "Success" with the associated fixed identity attributes.

**Technical Analysis:** This lacks **Continuous Adaptive Risk Assessment** signals *from the authenticator itself*. Modern authenticators (like those integrating with Apple’s Secure Enclave or Android Keystore) can pass granular signals to the RP, such as "Biometric confidence score," "Device integrity status" (is the phone rooted?), or "Local user presence" at the moment of signing. Smart-ID largely acts as a "dumb" pipe for the PIN entry, abstracting away the device health posture from the Relying Party.

**Standards Alignment:** This falls short of **Zero Trust Architecture (ZTA)** principles (NIST SP 800-207).

**CAEP / RISC (Shared Signals):** The industry is moving toward the "Shared Signals and Events" framework, where the authenticator constantly assesses device trust. If a device becomes infected or jailbroken, the authenticator should dynamically downgrade the trust level. Smart-ID generally guarantees the *identity* of the signer but provides limited telemetry regarding the *integrity of the environment* in real-time to the bank/service provider compared to native FIDO implementations or MDM-integrated solutions.

### 13. Vulnerability to "Same-Device" Context Switching (App-Switching Fatigue)

**Architectural Detail:** When a user attempts to log into a banking app *on the same device* where Smart-ID is installed, the operating system must perform a full context switch (App A moves to background → Smart-ID comes to foreground → User enters PIN → Smart-ID closes → App A returns to foreground).

**Technical Analysis:** This breaks the "flow" and relies on Deep Linking or Push notifications to bridge the gap. This introduces a "Blind Spot" during the switch. Malicious "Overlay" malware (common in Android banking trojans) can detect the Smart-ID package launch, draw a fake PIN pad over the real one, capture the PIN, and pass it to the underlying app.

**Standards Alignment:**
* **Google/Apple UI Guidelines:** Modern security recommendations favor **In-App Authentication** (e.g., Passkeys or Biometric prompts rendered *inside* the Relying Party app via system calls) rather than switching to a separate authenticator app.
* **PSD3 / PSR (Payment Services Regulation) Drafts:** While App-to-App is currently compliant, upcoming discussions on fraud prevention highlight that reducing the "attack surface" of context switching is vital. Integrated biometric flows (FIDO2) prevent overlay attacks more effectively because the UI is drawn by the Trusted Execution Environment (TEE) of the OS, not a standard application layer window that can be overlaid.

### 14. User Awareness & Context Display

**Architectural Detail:** Architecture for displaying granular initiator data (Geolocation, IP address, and Requesting Entity) to the user before they authorize a request.

**Technical Analysis:**
* **Current Protocol:** The API supports `displayText`, but standard implementations for Authentication (PIN1) usually only display the Service Name (e.g., "Swedbank").
* **Vulnerability Assessment:** A user in Estonia receiving a login request triggered by an attacker in Nigeria has no visual way to distinguish it from a legitimate local request (other than timing).
* **Requirement:** NIST SP 800-63B recommends providing context to the user to make an informed decision. Excluding Geolocation/IP context significantly lowers the user's ability to detect fraud.

**Verdict:** The lack of mandatory context is a significant architectural decision that lowers the defense against remote attackers.

## The Offensive Framework: Architecture of "OutSmart-ID"

Standard reverse proxies (like *Evilginx2*) often fail against complex flows involving high-frequency dynamic content, WebSockets, or canvas-drawn QR codes. To break Smart-ID+, I transitioned from simple HTTP traffic proxying to **Remote Browser Orchestration (RBO).**

### The Infrastructure Stack

1. **Frontend (BiTB):** A high-fidelity CSS/JS shell mimicking the victim's OS and browser environment (Chrome on macOS/Windows). This "fake" window is rendered *inside* the attacker-controlled domain.
2. **Backend (Dockerized Chromium):** A fleet of headless browsers running in isolated containers. Each victim is assigned a unique, dedicated Chromium instance in Kiosk mode, navigated to the **genuine** banking or government portal.
3. **Transport (noVNC / WebSockets):** The live display of the *real* site is streamed to the victim via a modified `EvilNoVNC` bridge. The victim isn't looking at a cloned template; they are looking at the actual target site through a "lens" controlled by the attacker.
4. **Reverse Proxy & Request Rewriter:** A custom Golang-based proxy sits between the target site and the attacker's server to facilitate the extraction of cookies and headers immediately upon session creation.

### The Kill Chain

1. **The Bait:** The victim visits a phishing link. They are presented with a pixel-perfect "Login with Smart-ID" BiTB window.
2. **The Handshake:** The backend Docker instance triggers a legitimate Smart-ID+ session on `identity.sk.ee` or the Service Provider's portal.
3. **The Projection:** The **legitimate QR code**, generated on the official servers, is streamed live into the victim's browser via the BiTB interface.
4. **The Scan:** The victim scans the QR code with their physical phone. The Smart-ID app validates the code as "Correct" because it *is* correct—for the attacker's browser.
5. **The Hijack:** The attacker's Dockerized browser is now fully authenticated. The proxy immediately scrapes the session cookies (`JSESSIONID`, `SID`, etc.) and kills the VNC stream.

## Impact: Total Compromise via Credential Proxying

The impact extends past simple Account Takeover (ATO). Because the session exists in a real, containerized browser, we bypass standard bot detections (TLS Fingerprinting, Canvas Noise, Font Enumeration).

This allows for **unauthorized data aggregation**:

* **Credential Proxying:** Using the victim's active session to pull bulk data from e-services lacking public APIs.
* **Identity Impersonation:** Complete takeover of State and Financial services.

## Vendor Response: A Study in Hubris

When presented with the ability to transparently proxy Smart-ID+ sessions, SK ID Solutions responded:
> *"The vulnerability was known to us... we have consciously accepted this risk."*

An **Accepted Risk** without a **Compensating Control** is just a **vulnerability with a marketing budget.**

Reliance on users to manually verify "Control Codes" or visuals is security nihilism. If the security of a National Digital Identity depends on a user noticing a pixel-difference in a URL bar, or understanding the nuances of a Browser-in-the-Browser attack, the system is already broken.

They label this an 'upgrade' to sedate the market and stave off a fraud epidemic, but the reality is absolute. SK ID Solutions has attempted to plaster over legacy failures with the veneer of 'Smart-ID+', yet as this research demonstrates, cosmetic measures cannot remediate fundamental architectural rot.

The system remains inherently exposed. The King is naked, the architecture is a ghost, and the "risk" the vendor has so graciously accepted is a liability effectively transferred to their users—many of whom will pay for this "design choice" with their livelihoods.

This is not an accidental oversight—it is a feature, not a bug. It forces us to confront the most alarming conclusion of all: **The system was never intended to be secure. It was only intended to be convenient.**

## Conclusion & Strategic Recommendation

SmartID is a robust implementation of *legacy* identity concepts—specifically, the centralization of trust to achieve legal compliance (QES). However, it is architecturally orthogonal to the modern identity stack, which prioritizes **decentralization, hardware-binding, and verifier impersonation resistance.**

**The Critical Vulnerability:** The reliance on a "Control Code" creates a cognitive gap that modern phishing proxies have already bridged. The solution assumes the user is the firewall; modern standards (FIDO2) assume the user is compromised and rely on the protocol to reject the adversary.

**Recommendation:** For high-assurance use cases (privileged access, high-value transfers), reliance on SmartID alone should be considered a **risk acceptance** of AiTM vectors. Transition strategies should prioritize **FIDO2/Passkeys** for authentication (User verification & Access), relegating SmartID strictly to the role of a "digital pen" for legally binding document signatures where QES is mandated by law, rather than using it as a gatekeeper for access control.

***

*Written by Tom Kristian Abel, Security Researcher.*
*Copyright 2026. Educational purposes only.*
