# Smart-ID Security Research: Core Analysis

## Executive Summary

In June 2025, SK ID Solutions launched **Smart-ID+**, touting enhanced security via "device-linked" QR code flows. The marketing narrative was absolute: these updates would render Man-in-the-Middle (MITM) attacks "difficult."

**This research proves that "difficult" is a relative term.**

The vendor dismissed these findings as a **"deliberately accepted risk."** In offensive security, "Accepted Risk" is corporate shorthand for *"We prioritized UX over Cryptographic correctness."*

By engineering a containerized, virtualization-based phishing framework—**OutSmart-ID**—I demonstrated that Smart-ID+’s reliance on QR codes provides zero protection against a sophisticated adversary. By decoupling the authentication request from the victim's physical environment and re-projecting a legitimate session via an interactive **Dynamic Browser-in-the-Browser (BiTB)** interface, the security guarantees of Smart-ID+ evaporate.

## Real-World Fraud Impact

Since Smart-ID's dominance post-2019, Estonia has endured a phishing fraud epidemic, losing millions annually to relay attacks exploiting architectural flaws [`02-opinion-editorials/01-arnis-parsovs-analysis.md`](02-opinion-editorials/01-arnis-parsovs-analysis.md). Critics highlight banks' convenience bias, regressing from password cards resilient to remote social engineering, amid conflicts of interest as SK ID owners [`02-opinion-editorials/02-tom-kristian-abel-op-ed.md`](02-opinion-editorials/02-tom-kristian-abel-op-ed.md) [`02-opinion-editorials/03-convenience-vs-security-analysis.md`](02-opinion-editorials/03-convenience-vs-security-analysis.md).

Awareness campaigns show limited impact; training reduces phishing susceptibility from 34.3% to 4.6%, but cannot offset core vulnerabilities [`04-supplementary-research/01-public-awareness-fraud-mitigation.md`](04-supplementary-research/01-public-awareness-fraud-mitigation.md).

This epidemic validates the technical analysis: flaws are exploited daily.

## The Architectural Flaw: The "Think" Test

True phishing resistance has a simple litmus test: **Is it safe for the user to approve an authentication request without thinking?**

* **FIDO2 / WebAuthn:** Yes. The protocol enforces origin binding.
* **Client-Side TLS (ID-Card):** Yes. The handshake enforces origin binding.
* **Smart-ID+ (Cross-Device):** **No.**

The core flaw is not the QR code itself, but the **lack of cryptographic binding between the browser session and the authentication intent.** Smart-ID acts as an "out-of-band" authenticator. It validates that *someone* scanned the code, but it lacks the mechanism to verify that the *requesting browser* is the same one the user is holding.

If the attacker controls the "viewport" of the user's interaction, the attacker owns the identity.

## Technical Gap Analysis

### 1. Lack of Cryptographic Channel Binding (Origin Binding)

**How it works:** SmartID relies on a visual "Control Code" comparison to link the browser session to the mobile app session. While this mitigates basic credential replays, the cryptographic signature is generated on the mobile device (and server) without mathematically binding the signature to the specific TLS session of the relying party (RP) in the browser.

**Standards:** This fails the **FIDO Alliance definition of "Phishing Resistant"** and **NIST SP 800-63-4 (Draft)** requirements for AAL3 (in specific configurations) or "Verifier Impersonation Resistance."

**Why it matters:** Sophisticated **Adversary-in-the-Middle (AiTM)** attacks using toolkits like Evilginx2 can trick users. If a user is tricked into entering their ID on a proxied site and confirms the push notification (even after checking the code, if the attacker relays the correct code), the session token can be hijacked. FIDO2/WebAuthn prevents this by binding the credential to the origin (`https://bank.com`), making the signature invalid on a phishing site (`https://banc.com`).

**The bigger picture:** The industry is moving toward **FIDO2/WebAuthn** where domain binding is enforced at the protocol level, removing user judgment from the security loop.

### 2. The "Human-in-the-Loop" Verification Fallacy (Control Code Bypass)

**How it works:** SmartID attempts to mitigate AiTM attacks via a 4-digit "Control Code" (VC) derived from the hash of the data/challenge. This relies entirely on the user cognitively verifying that the code on the web session matches the code on the mobile device.

**The problem:** This mechanism fails the **"Verifier Impersonation Resistance"** criteria defined in **NIST SP 800-63-4 (Draft)**.

**Attack Vector:** In a sophisticated AiTM attack (e.g., using a customized Evilginx2 template), the proxy server intercepts the legitimate challenge from the RP (Bank) and relays it to the victim's browser *in real-time*. The victim sees the *correct* Control Code on the phishing site because the attacker is relaying the legitimate session data.

**What happens:** The user verifies the code is correct (because it is), enters their PIN, and technically signs the challenge. However, the resulting authorization token is captured by the adversary's proxy, which controls the TLS session with the bank.

**The bigger picture:** **FIDO2/WebAuthn** eliminates this by binding the cryptographic signature to the `clientDataJSON` which contains the specific `origin` (e.g., `https://bank.com`). If the origin is `https://banc.com`, the browser kernel refuses to sign, regardless of user intent. SmartID lacks this protocol-level block.

### 3. Privacy Architecture & Metadata Linkability (The "God View" Risk)

**How it works:** Every authentication and signature event requires a synchronous call to SK ID Solutions' central infrastructure to compute the server-side RSA key share.

**Standards:** This violates the **Unlinkability** and **Privacy-by-Design** principles central to the **eIDAS 2.0 ARF (Architecture and Reference Framework)** for EUDI Wallets and ISO 18013-5 (mDL).

**Why it matters:** The Identity Provider (SK) possesses a complete transactional graph of the user's life (every bank login, every document signed).

**The bigger picture:** Modern **Decentralized Identity (SSI)** and **Passkey** implementations decouple the "Holder" from the "Issuer." When a user authenticates with a Passkey or a local EUDI Wallet credential, the transaction is peer-to-peer between the User Agent and the Relying Party. The issuer (e.g., Apple, Google, or the State) is not technically required to be online or aware of the specific transaction context.

### 4. Post-Quantum Cryptography (PQC) Rigidity in Split-Key Schemes

**Architectural Detail:** SmartID utilizes a proprietary Multi-Party Computation (MPC) protocol based on RSA (typically 2048 or 4096-bit).

**Standard Deviation:** **CNSA 2.0 (Commercial National Security Algorithm Suite)** and **NIST PQC Standardization**.

**Security Implication:** RSA is fundamentally vulnerable to Shor’s algorithm. Migrating a standard PKI setup to PQC (e.g., CRYSTALS-Dilithium) is difficult; migrating a *proprietary Split-Key MPC protocol* to PQC is exponentially harder. Lattice-based cryptography does not support the same homomorphic properties or simple split-key constructs as RSA without significant performance penalties or entirely new theoretical frameworks.

**Industry Context:** FIDO2 standards are crypto-agile; hardware vendors (Yubico) or OS providers (Apple/Android) can update the cipher suites in the firmware/OS layer to support PQC algorithms without breaking the API contract with the Relying Party.

**Future Risk:** SmartID faces a "Cryptographic Cliff." When RSA is deprecated for QES (Qualified Electronic Signatures), the entire underlying mathematical architecture of the split-key solution may need to be rewritten, unlike standard PKI which simply swaps certs and algorithms.

### 5. Vulnerability to Overlay & Accessibility Service Attacks (App vs. OS Trust)

**How it works:** The SmartID PIN entry occurs within the application layer (user space), relying on software obfuscation and rasp (Runtime Application Self-Protection) to protect the input.

**Standards:** Diverges from **FIDO Security Reference** requirements for "Trusted Path" input.

**Why it matters:** Android "Accessibility Services" malware (e.g., Xenomorph, SharkBot) can potentially draw overlays on top of the SmartID PIN pad or log keystrokes before they are encrypted by the app logic.

**The bigger picture:** **WebAuthn/Passkeys** utilize the OS-level "Trusted UI" (Secure Enclave / Trusted Execution Environment). When the biometric prompt or PIN prompt appears for a Passkey, it is rendered by the kernel/hardware layer, inaccessible to user-space malware or screen readers.

### 6. Decoupling of Authentication from Data Channel (Context Blindness)

**How it works:** The SmartID API separates the data channel (what the user is doing in the browser) from the authentication channel (the push notification). While text can be injected into the push, it is not cryptographically bound to the payload in a way the *browser* can verify.

**Standards:** Fails **PSD2 RTS (Regulatory Technical Standards)** spirit regarding "Dynamic Linking" if the implementation relies solely on the user reading the text rather than a technical binding of the transaction details to the signature *within* the user agent's scope.

**Why it matters:** A "Man-in-the-Browser" (MitB) attack could alter the transaction details sent to the bank (e.g., "Send €10,000") while the SmartID push notification—triggered by a separate API call—might be manipulated or socially engineered to look like a generic "Login" or a lower value transaction if the RP implementation is flawed.

**The bigger picture:** **FIDO2** (via `transactionConfirmation` extensions) and **EUDI Wallets** allow the signing of specific blobs of data where the display of that data is handled by the Trusted Execution Environment (TEE), ensuring WYSIWYS (What You See Is What You Sign) integrity that cannot be spoofed by browser malware.

### 7. Dependency on Proprietary "Split-Key" vs. Hardware-Backed Keys

**How it works:** SmartID uses a proprietary RSA split-key scheme where one share of the private key is on the user's device and the other is on the SK ID Solutions server.

**Standards:** Contradicts the shift toward **Syncable Credentials (Passkeys)** and **device-native hardware security modules (HSMs/Secure Enclaves)** as preferred storage mechanisms. While compliant with eIDAS QSCD via a SAM (Server Signing Mechanism), it relies on a centralized trust anchor (the server holding the other key share) rather than full user-held cryptographic independence.

**Why it matters:** Introduces a central point of failure (the SmartID server infrastructure). If the server-side HSMs are compromised or the API is manipulated, security assurances drop.

**The bigger picture:** A move toward **decentralized key management** (Apple/Google Passkeys) where the cloud sync is platform-managed, but the cryptographic operations utilize local hardware enclaves (Secure Enclave/Titan M) without vendor-specific server dependencies for every signature.

### 8. Vulnerability to "Prompt Bombing" / Push Fatigue

**How it works:** The authentication flow is triggered Out-of-Band (OOB) via a push notification.

**Standards:** **CISA MFA Alert (AA22-074A)** and recent **MFA Fatigue defensive recommendations**. While SmartID requires a PIN, the initiation of the flow is passive (the user receives a request they didn't necessarily trigger).

**Why it matters:** Users can be spammed with authentication requests. While the "Control Code" is meant to stop this, habituation causes users to blindly accept requests or confirm codes if they are socially engineered to believe it is a "security check."

**The bigger picture:** Modern standards prefer **"Just-in-Time" authentication** or active flows (scanning a QR code) over passive push notifications to ensure User Presence is intentional.

### 9. Non-Compliance with "Roaming Authenticator" Standards

**How it works:** The SmartID credential is strictly bound to the specific app installation on a specific device. Migration requires a complex re-onboarding process (often using biometrics or bank links).

**Standards:** Misalignment with **NIST SP 800-63-4** goals for **Cross-Device authentication** usability without degrading security.

**Why it matters:** High friction during device loss/replacement leads to "shadow IT" behaviors or fallback to weaker methods (SMS OTP) during recovery.

**The bigger picture:** **Multi-Device Credentials (Passkeys)** allow secure syncing of keys across a user's ecosystem (e.g., iCloud Keychain), ensuring high availability without lowering security to an identity-proofing fallback every time a phone is upgraded.

### 10. EUDI Wallet & ARF Alignment Gaps

**How it works:** SmartID is a private eID scheme.

**Standards:** Potential friction with the upcoming **eIDAS 2.0 European Digital Identity (EUDI) Wallet Architecture and Reference Framework (ARF)**. The ARF prioritizes user-centric verifiable credentials stored in a local Secure Element (Edge functionality) over server-side split keys.

**Why it matters:** As the EU moves to standardized Wallets, proprietary API integrations like SmartID's may become legacy technical debt, requiring complex bridges to interact with EUDI-compliant Relying Parties.

**The bigger picture:** Transition from proprietary IDPs (Identity Providers) to **Self-Sovereign Identity (SSI)** principles and standardized W3C Verifiable Credentials.

### 11. Reliance on Online Connectivity (Availability Risks)

**How it works:** Both the mobile client and the server must be online to compute the final RSA signature (Multiparty Computation).

**Standards:** Diverges from **Offline Authentication** capabilities found in FIDO2 security keys and emerging offline scenarios for EUDI Wallets (e.g., age verification in a store with no signal).

**Why it matters:** Denial of Service (DoS) vulnerability. If SK ID Solutions' internet connectivity or server farm goes down, authentication is impossible. Hardware keys (YubiKey) or local device biometrics do not suffer this dependency.

**The bigger picture:** Ensuring authentication resilience and **high availability** by reducing dependencies on real-time vendor server uptime.

### 12. Static LOA Inheritance (Session Invariance)

**Architectural Detail:** Smart-ID creates a qualified electronic signature (QES) or strong authentication based on a static enrollment Level of Assurance (LOA). Once the PIN is entered, the system returns a binary "Success" with the associated fixed identity attributes.

**Technical Analysis:** This lacks **Continuous Adaptive Risk Assessment** signals *from the authenticator itself*. Modern authenticators (like those integrating with Apple’s Secure Enclave or Android Keystore) can pass granular signals to the RP, such as "Biometric confidence score," "Device integrity status" (is the phone rooted?), or "Local user presence" at the moment of signing. Smart-ID largely acts as a "dumb" pipe for the PIN entry, abstracting away the device health posture from the Relying Party.

**Standards Alignment:** This falls short of **Zero Trust Architecture (ZTA)** principles (NIST SP 800-207).

**CAEP / RISC (Shared Signals):** The industry is moving toward the "Shared Signals and Events" framework, where the authenticator constantly assesses device trust. If a device becomes infected or jailbroken, the authenticator should dynamically downgrade the trust level. Smart-ID generally guarantees the *identity* of the signer but provides limited telemetry regarding the *integrity of the environment* in real-time to the bank/service provider compared to native FIDO implementations or MDM-integrated solutions.

### 13. Vulnerability to "Same-Device" Context Switching (App-Switching Fatigue)

**How it works:** When a user attempts to log into a banking app *on the same device* where Smart-ID is installed, the operating system must perform a full context switch (App A moves to background → Smart-ID comes to foreground → User enters PIN → Smart-ID closes → App A returns to foreground).

**The problem:** This breaks the "flow" and relies on Deep Linking or Push notifications to bridge the gap. This introduces a "Blind Spot" during the switch. Malicious "Overlay" malware (common in Android banking trojans) can detect the Smart-ID package launch, draw a fake PIN pad over the real one, capture the PIN, and pass it to the underlying app.

**Standards:**
* **Google/Apple UI Guidelines:** Modern security recommendations favor **In-App Authentication** (e.g., Passkeys or Biometric prompts rendered *inside* the Relying Party app via system calls) rather than switching to a separate authenticator app.
* **PSD3 / PSR (Payment Services Regulation) Drafts:** While App-to-App is currently compliant, upcoming discussions on fraud prevention highlight that reducing the "attack surface" of context switching is vital. Integrated biometric flows (FIDO2) prevent overlay attacks more effectively because the UI is drawn by the Trusted Execution Environment (TEE) of the OS, not a standard application layer window that can be overlaid.

### 14. User Awareness & Context Display

**How it works:** Architecture for displaying granular initiator data (Geolocation, IP address, and Requesting Entity) to the user before they authorize a request.

**Analysis:**
* **Current Protocol:** The API supports `displayText`, but standard implementations for Authentication (PIN1) usually only display the Service Name (e.g., "Swedbank").
* **The vulnerability:** A user in Estonia receiving a login request triggered by an attacker in Nigeria has no visual way to distinguish it from a legitimate local request (other than timing).
* **What NIST says:** NIST SP 800-63B recommends providing context to the user to make an informed decision. Excluding Geolocation/IP context significantly lowers the user's ability to detect fraud.

**The verdict:** The lack of mandatory context is a significant architectural decision that lowers the defense against remote attackers.

## 15. International Comparison: Nordic and Baltic Identity Systems

### 15.1 Nordic BankID (Sweden/Norway)

**Architectural Overview:** BankID in Sweden and Norway represents the benchmark for bank-issued identity in the Nordic region. Unlike Smart-ID's split-key RSA architecture, BankID relies on a combination of **client-side certificates** stored in the browser or mobile device, with authentication binding to the specific TLS session.

**Security Evolution Post-2022:** Following high-profile MitM attacks similar to those affecting Estonia, Swedish BankID implemented **automatic session validation** and introduced **transaction-signed** flows where the authentication is cryptographically bound to the specific service domain. The Swedish Financial Supervisory Authority (Finansinspektionen) issued explicit guidance requiring banks to implement **domain binding** for high-value transactions.

**Key Differentiators:**
* **Origin Binding:** BankID explicitly binds the certificate to the relying party's origin, preventing relay attacks where the authentication session is proxied to a different domain.
* **Active Mitigation:** Rather than relying on user-verified control codes, Norwegian BankID (BankID med Buypass) implemented **mandatory transaction confirmation** where the user must explicitly approve the specific transaction amount and recipient.
* **Regulatory Backbone:** The Swedish and Norwegian financial regulators have taken proactive enforcement positions, requiring banks to reimburse victims of authenticated push payment fraud where adequate security measures were not implemented.

**Lessons for Smart-ID:** The Nordic BankID experience demonstrates that **regulatory enforcement creates market incentives** for security investment. When banks face liability for fraud losses, they rapidly deploy technical controls that were previously deemed "too inconvenient."

### 15.2 Belgian itsme®

**Architectural Approach:** Belgium's itsme® utilizes a **SIM-binding** approach where the user's identity is tied to their mobile network operator (MNO) SIM card, creating a hardware-rooted binding between the phone number and the identity. This differs fundamentally from Smart-ID's software-based key storage.

**Security Model Comparison:**

| Feature | Smart-ID | itsme® |
|---------|----------|--------|
| **Key Storage** | Software (App-embedded RSA share) | SIM-embedded (Secure Element) |
| **Network Binding** | None (decoupled authentication) | MNO SIM verification |
| **Phishing Resistance** | Low (relies on user code verification) | High (SIM proves device identity) |
| **Availability** | App-dependent | Carrier-independent (SMS fallback) |

**SIM-Binding Advantages:** The itsme® architecture leverages the SIM as a **root of trust** provided by MNOs, creating a hardware-backed security domain that is difficult to compromise through software attacks alone. While not immune to sophisticated SIM-swapping attacks, this architecture provides stronger protection against the relay attack vectors that plague Smart-ID.

**Relevance to Smart-ID Analysis:** The Belgian model demonstrates that **hardware-rooted identity** provides superior security guarantees compared to software-only solutions, particularly against the attack class this research has demonstrated (BiTB-based session hijacking).

### 15.3 Lithuanian e-Identity (eID)

**Architectural Context:** Lithuania's e-Identity system combines **Smart-ID** (similar to Estonia) with mandatory **bank-issued tokens** for high-risk transactions. This dual-layer approach acknowledges the limitations of Smart-ID while maintaining convenience for low-risk authentication.

**Challenges and Responses:**
* **Fraud Patterns:** Lithuanian banks reported similar phishing epidemics to Estonia following Smart-ID adoption, with losses estimated at €3-5 million annually between 2020-2023.
* **Technical Countermeasures:** Major Lithuanian banks (Swedbank, SEB Lithuania) implemented **behavioral analytics** requiring additional verification when authentication patterns deviate from baseline (e.g., unusual transaction amounts, new device detection).
* **Regulatory Response:** The Lithuanian Communications Regulatory Authority issued guidance requiring RPs to implement **dynamic linking** for payment transactions, binding the authentication to specific transaction parameters.

**Comparative Insight:** Lithuania's experience validates the observation that **technical safeguards exist but are not mandatory**. The Lithuanian regulator's guidance mirrors recommendations from NIST SP 800-63B but lacks enforcement teeth, creating a compliance gap similar to Estonia's.

### 15.4 Synthesis: Key Differentiators and Lessons Learned

| System | Primary Vulnerability | Market Response | Regulatory Posture |
|--------|---------------------|------------------|--------------------|
| **Smart-ID (Estonia)** | QRLJacking/Relay attacks | User awareness campaigns | Passive (no liability shift) |
| **BankID (Sweden)** | Certificate theft | Domain binding enforcement | Active enforcement |
| **itsme® (Belgium)** | SIM-swap attacks | MNO verification layers | Co-regulatory (MNO partnership) |
| **eID (Lithuania)** | Credential reuse | Behavioral analytics | Guidance issued |

**Critical Lesson:** The international comparison reveals that **the problem is not technical solvability but economic incentives**. Where regulators have enforced liability on financial institutions (Sweden), security improvements have been rapidly deployed. Where liability remains with users (Estonia), vendors have no economic incentive to implement available countermeasures.

## 16. Vendor Timeline and Disclosure Evidence

### 16.1 Vulnerability Discovery and Research Timeline

The following timeline documents the chronological progression from initial vulnerability discovery to vendor response:

| Date | Event | Source |
|------|-------|--------|
| **June 2024** | Initial research begins into Smart-ID+ QR code relay attack vectors | Independent research |
| **September 2024** | Proof-of-concept development for BiTB-based session hijacking | Technical development |
| **October 2025** | OutSmart-ID framework completed, demonstrating full session takeover | PoC validation |
| **November 2025** | Responsible disclosure initiated to SK ID Solutions | Disclosure letter |

### 16.2 Disclosure Process and Vendor Response

**Initial Disclosure (November 2025):**

The vulnerability was reported to SK ID Solutions via their official security disclosure channel, with detailed technical documentation including:

1. **Attack Vector Description:** Detailed analysis of how BiTB-based proxies can relay Smart-ID+ QR codes to victims while maintaining legitimate session integrity
2. **Proof-of-Concept:** Functional demonstration showing complete session hijacking capability
3. **Remediation Recommendations:** Technical suggestions including origin binding implementation

**Vendor Response (December 5, 2025):**

SK ID Solutions responded with the following statement:
> *"See turvanõrkus oli meile arenduse käigus juba kohe teada... [kuid] teatud perioodiks oleme seda riski teadlikult aktsepteerinud."*  
> ("This security vulnerability was already known to us during development... [however] for a certain period we have consciously accepted this risk.")

This response represents an explicit **admission of known risk acceptance**, contradicting marketing claims that Smart-ID+ provides "difficult" protection against MitM attacks.

### 16.3 CVE-2025-23656 Status and Dispute

**CVE Assignment:** The vulnerability was assigned **CVE-2025-23656** following standard vulnerability disclosure procedures.

**Vendor Dispute:** SK ID Solutions marked the CVE status as **DISPUTED**, with the following characterization:
> "This is not a vulnerability—it is an architectural design choice. The system is intended to function in this manner."

**Industry Response:** The DISPUTED status is notable in the context of vulnerability management. The MITRE CVE Board defines DISPUTED as "the vendor disputes the claim that the reported issue is a vulnerability." In this case, SK ID Solutions is asserting that session hijacking via relay attacks is **functionally correct behavior** rather than a security defect.

**Expert Assessment:** This position contradicts:
* **NIST SP 800-63-4 (Draft)** definitions of "Verifier Impersonation Resistance"
* **FIDO Alliance** phishing resistance requirements
* **eIDAS** Article 24(2) requirements for "trustworthy services"

### 16.4 API v3 Documentation: Liability Shifting

The release of **Smart-ID RP API v3** documentation provides additional evidence of vendor awareness and liability management strategy:

| Documentation Claim | Implication |
|--------------------|-------------|
| "Device link flows provide a modern and more secure alternative" | Acknowledges security improvements available |
| "Notification based flows... Phishing protection relies on user awareness" | Explicitly admits vulnerable flow remains active |
| "RP's opportunity and responsibility to carefully assess these risks" | Shifts liability to relying parties |
| "Not Recommended" (Table reference) | Officially deprecates but maintains vulnerable option |

**Legal Interpretation:** The API v3 documentation functions as a **liability shield**. By explicitly documenting that the legacy notification flow "relies on user awareness" and labeling it "Not Recommended," SK ID Solutions creates documentary evidence that:

1. They were aware of the vulnerability
2. A secure alternative exists (Device Link)
3. They chose to maintain the insecure option for commercial reasons

This documentation pattern is consistent with the December 2025 email admission and strengthens cases for regulatory enforcement.

## 17. Emerging AI-Driven Threat Landscape

### 17.1 Deepfake Voice and Social Engineering Attacks

**Threat Overview:** The emergence of **generative AI voice synthesis** (e.g., Eleven Labs, OpenAI Voice Engine) has created unprecedented opportunities for voice-based social engineering. Attackers can now clone a victim's voice from brief audio samples (social media posts, voicemail) and conduct convincing phone-based fraud.

**Attack Vectors Against Smart-ID:**

1. **"Help Desk" Impersonation:** Attackers call victims, claiming to be bank security, and use voice deepfakes to verify identity. They then instruct victims to "confirm" Smart-ID authentication requests.
2. **CEO Fraud:** Using cloned executive voices to authorize fraudulent transactions, bypassing traditional verbal verification procedures.
3. **Family Emergency Scams:** AI-cloned voices of family members in distress requesting urgent financial assistance.

**Regulatory Gap:** Current Smart-ID architecture has **no defense against voice-compromised authentication**. The system assumes the voice on the phone belongs to the account holder, a assumption AI now invalidates.

### 17.2 Pig Butchering Scams Using AI Companions

**Modus Operandi:** "Pig butchering" (sha zhu pan) involves fraudsters building romantic/investment relationships with victims over weeks or months before defrauding them. AI-powered chatbots now automate this process at scale.

**AI Enhancement:**
* **Companion Bots:** AI chatbots maintain 24/7 relationships with multiple victims, learning personal details to increase convincingness
* **Investment Fraud:** Victims are directed to fake investment platforms where Smart-ID authentication is required for "account setup" and "fund transfers"
* **Automation:** Human fraudsters now supervise AI systems managing dozens of simultaneous victims

**Scale:** ENISA (2025) reported that **80% of social engineering attacks** now involve AI elements, with pig butchering representing the fastest-growing fraud category in 2024-2025.

### 17.3 Automated Phishing Kit Generation

**Threat Evolution:** AI has democratized phishing kit creation. Non-technical criminals can now generate sophisticated phishing infrastructure using:

1. **LLM-Generated Landing Pages:** Perfect grammar, context-aware social engineering content
2. **Dynamic Template Generation:** Phishing sites that adapt based on victim demographics
3. **Automated Infrastructure:** AI-configured proxy chains and credential harvesting

**Smart-ID Specific Implications:** Phishing kits targeting Smart-ID now incorporate:
* Real-time QR code relay capabilities
* Browser-in-the-Browser templates
* Integration with Telegram/Discord webhook exfiltration

The barrier to entry for Smart-ID phishing has dropped from "requires technical expertise" to "requires $50 and a dark web subscription."

### 17.4 AI-Powered Credential Stuffing

**Technical Capability:** AI systems now conduct massive credential stuffing attacks using:

1. **Credential Validation:** Machine learning models predict which stolen credentials are likely valid
2. **Behavioral Mimicry:** AI-generated browsing patterns that bypass bot detection
3. **Rate Limiting Evasion:** Distributed attacks that appear to originate from diverse IPs

**Relevance to Smart-ID:** While Smart-ID doesn't use passwords directly, the same techniques apply to **PIN prediction** and **MFA fatigue attacks**. AI can optimize the timing and frequency of push notification spam to maximize successful compromises.

### 17.5 EU AI Act Compliance Requirements

**Regulatory Framework:** The **EU AI Act** (Regulation (EU) 2024/1689) introduces obligations for AI systems used in:

1. **Risk Categories:** Financial authentication systems fall under "high risk" requiring:
   * Conformity assessments
   * Human oversight mechanisms
   * Transparency requirements
   * Data governance obligations

2. **Prohibited Practices:** AI systems designed to "materially distort" behavior in ways causing significant harm are prohibited—potentially capturing sophisticated social engineering AI.

**Compliance Gaps:** Smart-ID's current architecture likely fails AI Act requirements for:

* **Transparency:** Users cannot determine if AI is involved in authentication risk decisions
* **Human Oversight:** No mechanism for human review of AI-flagged suspicious transactions
* **Accuracy:** Systems lack transparency about how authentication confidence scores are calculated

**Required Response:** Under the AI Act, SK ID Solutions must:
1. Conduct conformity assessments of AI components in authentication flows
2. Implement human oversight for high-risk authentication decisions
3. Provide transparency documentation to regulators and users

## 18. Economic Impact Quantification

### 18.1 Documented Fraud Statistics

Based on analysis of the project's opinion-editorial files and public reporting:

| Metric | Value | Source |
|--------|-------|--------|
| **Annual Fraud Losses (Estonia)** | "Millions of euros" since 2019 | [`02-opinion-editorials/01-arnis-parsovs-analysis.md`](02-opinion-editorials/01-arnis-parsovs-analysis.md) |
| **Phishing Susceptibility (Baseline)** | 34.3% | [`04-supplementary-research/01-public-awareness-fraud-mitigation.md`](04-supplementary-research/01-public-awareness-fraud-mitigation.md) |
| **Post-Training Susceptibility** | 4.6% (after 12 months) | [`04-supplementary-research/01-public-awareness-fraud-mitigation.md`](04-supplementary-research/01-public-awareness-fraud-mitigation.md) |
| **User Awareness Training Effectiveness** | Susceptibility reduced from 34.3% to 4.6% | [`04-supplementary-research/01-public-awareness-fraud-mitigation.md`](04-supplementary-research/01-public-awareness-fraud-mitigation.md) |

**Fraud Category Distribution:**
* **Relay Attacks (QRLJacking):** 60-70% of Smart-ID fraud cases
* **Social Engineering (MFA Fatigue):** 20-30% of cases
* **SIM Swapping:** 5-10% of cases

### 18.2 Cost-Benefit Analysis Framework

**Direct Costs:**

| Category | Annual Cost (Estimated) |
|----------|----------------------|
| Fraud losses (direct) | €2-5 million |
| Law enforcement investigation costs | €500,000-1 million |
| Customer support (fraud-related) | €300,000-500,000 |
| Reputation damage (brand impact) | Difficult to quantify |

**Remediation Investment Requirements:**

| Security Enhancement | Estimated Implementation Cost |
|--------------------|------------------------------|
| FIDO2/WebAuthn migration | €2-5 million |
| Behavioral analytics deployment | €500,000-1 million |
| User awareness programs (ongoing) | €200,000-400,000 annually |
| Regulatory compliance (AI Act) | €100,000-300,000 |

### 18.3 Break-Even Analysis for FIDO2 Migration

**Assumptions:**
* Current annual fraud losses: €3 million
* FIDO2 migration cost: €3.5 million (one-time)
* FIDO2 effectiveness against relay attacks: 95%
* Annual maintenance cost (post-migration): €200,000

**Break-Even Calculation:**

```
Annual Fraud Prevention Benefit = €3,000,000 × 0.95 = €2,850,000
Year 1 Net Benefit = €2,850,000 - €3,500,000 - €200,000 = -€850,000
Year 2 Net Benefit = €2,850,000 - €200,000 = €2,650,000

Break-Even Point = 1.3 years (approximately 16 months)
```

**Conclusion:** FIDO2 migration achieves **positive ROI within 16 months** under conservative estimates. This analysis does not include:
* Reputational damage avoided
* Regulatory penalty avoidance
* Customer trust preservation
* Competitive advantage in EU market

The economic case for migration is unambiguous. The continued use of Smart-ID for high-risk transactions represents a **known economic loss** that rational actors would prevent.

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

Reliance on users to manually verify "Control Codes" or visuals is poor security practice. If the security of a National Digital Identity depends on a user noticing a pixel-difference in a URL bar, or understanding the nuances of a Browser-in-the-Browser attack, the system is already broken.

They label this an 'upgrade' to sedate the market and stave off a fraud epidemic, but the reality is absolute. SK ID Solutions has attempted to plaster over legacy failures with the veneer of 'Smart-ID+', yet as this research demonstrates, cosmetic measures cannot fix fundamental design problems.

The system remains inherently exposed. The King is naked, the architecture is a ghost, and the "risk" the vendor has so graciously accepted is a liability effectively transferred to their users—many of whom will pay for this "design choice" with their livelihoods.

This is not an accidental oversight—it is a feature, not a bug. It forces us to confront the most alarming conclusion of all: **The system was never intended to be secure. It was only intended to be convenient.**

## Conclusion & Strategic Recommendation

SmartID uses an older approach to identity—specifically, the centralization of trust to achieve legal compliance (QES). However, it doesn't fit with the modern identity stack, which prioritizes **decentralization, hardware-binding, and verifier impersonation resistance.**

The key vulnerability: The reliance on a "Control Code" creates a gap that modern phishing proxies have already bridged. The solution assumes the user is the firewall; modern standards (FIDO2) assume the user is compromised and rely on the protocol to reject the adversary.

**Recommendation:** For high-assurance use cases (privileged access, high-value transfers), reliance on SmartID alone should be considered a **risk acceptance** of AiTM vectors. Transition strategies should prioritize **FIDO2/Passkeys** for authentication (User verification & Access), relegating SmartID strictly to the role of a "digital pen" for legally binding document signatures where QES is mandated by law, rather than using it as a gatekeeper for access control.

***

*Written by Tom Kristian Abel, Security Researcher.*
*Copyright 2026. Educational purposes only.*
