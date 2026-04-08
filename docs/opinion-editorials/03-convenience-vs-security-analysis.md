# Convenience vs Security: Smart-ID UX Analysis

## Executive Summary

An in-depth analysis of SK ID Solutions' Smart-ID and the updated **Smart-ID+** ecosystem reveals a strategic pivot toward "invisible security" that reduces user friction while introducing subtle trade-offs in user verification. The most significant finding is the **divergence in security models** between the new "Smart-ID+" flows (QR/Deep Link) and the legacy "Push" flows, where legacy compatibility severely hampers the overall security posture.

## 1. Push-Based Notification "Wake-Up" Architecture

**How it works:**
Smart-ID utilizes an interrupt-driven, push-based architecture. When an authentication flow is initiated at the Relying Party (RP), the Smart-ID backend immediately triggers a push notification (via Apple APNs or Google FCM) to the user's device. This "wakes up" the app and presents the PIN dialog/confirmation screen immediately, without requiring the user to manually navigate to or open the application.

Technically, this creates a Server-Initiated Synchronization. The state of the authenticator is changed remotely by the RP's request. This contrasts with a "User-Initiated" or "Pull" model where the user must open the app to poll for pending requests. While this reduces friction (clicks), it drastically alters the threat landscape regarding unsolicited prompts.

**Standards:** This approach is currently under scrutiny in updated guidelines. **NIST SP 800-63B** allows out-of-band push, but recent industry shifts (driven by high-profile breaches like Uber and Lapsus$) strongly favor mechanisms that prevent "MFA Fatigue." This behavior is technically compliant with older OOB standards but falls short of emerging **Phishing-Resistant** definitions which prefer that the user demonstrates intent on the device *before* the prompt appears.

**Expert Analysis:**

* **PKI & Identity Architect:**
  * **The problem:** This architecture is the root cause of **MFA Fatigue (Notification Bombing)** attacks. Because the attacker can force the UI to appear on the victim's screen, they can spam requests (at 2 AM, for example) until the user accidentally or frustratedly clicks "Confirm/PIN1." The user's device acts as an annoyance vector controlled by the attacker.
  * **Implementation issues:** Reliance on third-party delivery (APNs/FCM) introduces latency and reliability issues. If push fails, the fallback is a manual open, creating inconsistent UX.
  * **Architectural fragility:** The "Wake-Up" signal is not authenticated. The OS displays the notification before the app fully verifies the cryptographic context. A malicious app on the same device could potentially mimic these system notifications (UI Spoofing) to trick the user into opening a fake overlay.
  * **Alternatives:** Shift to a **"Silent Pending"** model by default. The notification should say "You have a request," but clicking it should only open the app dashboard. The *dialog* should not pop up automatically. Or, require the user to open the app manually to view requests.

* **Mobile Security Researcher:**
  * **The problem:** Context Switching. By interrupting the user's current activity (e.g., watching a video, typing an email) with a modal dialog, the design encourages **reflexive dismissal**. Users are trained to clear pop-ups to return to their task. If "clearing" requires entering a PIN (muscle memory), the security is bypassed by the user's desire to remove the obstruction.
  * **Alternatives:** Implement **Intent Filters**. The app should only present the signing dialog if the device detects the user recently interacted with the app or if the biometrics were recently primed, rather than launching from a cold state based solely on a server signal.

* **CISO & Governance Expert:**
  * **The problem:** Lack of "Presence" verification. A push notification can light up a stolen phone. If the PIN is simple or the biometric acts on the first face seen, unauthorized access is easier than in a flow requiring manual app navigation.
  * **Implementation issues:** High volume of support tickets related to "Who is trying to log in?"
  * **Alternatives:** Mandatory **App-Lock**. Even if the push opens the app, the user must authenticate to the *app* (FaceID/Fingerprint) *before* seeing the specific transaction details, creating a "speed bump" for accidental acceptances.

## 2. Absence of Manual VC Entry (Passive Comparison or Selection)

**How it works:** Smart-ID relies on **Passive Comparison** (User looks at RP screen, looks at App, verifies codes match) or **Selection** (User picks the matching code from a list of 3). It *never* requires **Manual Entry** (Type the code displayed on the RP screen into the App).

Technically, this relates to **Channel Binding Visualization**. The goal is to prove the user is looking at the specific browser session initiating the request.

1. **Passive Comparison:** Relies entirely on user discipline.
2. **Selection (Pick 1 of 3):** Increases entropy slightly but still allows a 33% success rate for a blind guess.

**Standards:** This contradicts the latest defensive recommendations against **Adversary-in-the-Middle (AiTM)** attacks. **Microsoft**, **Google**, and **NIST** drafts are moving toward **Number Matching** (Manual Entry) as the standard. Manual entry forces a "Data Transfer" from the RP to the Authenticator, proving the user is in control of both. Passive comparison fails because users exhibit **"Confirmation Bias"** (they assume the system is working and ignore the code).

**Expert Analysis:**

* **PKI & Identity Architect:**
  * **The problem:** **Low Entropy & Probability.**
    * In "Passive Comparison," the cryptographic assurance is effectively **zero** because the protocol proceeds regardless of whether the user actually checked the code. The only gate is the PIN.
    * In "Selection" (1-of-3), an attacker spamming requests has a **1 in 3 (33%)** probability of the user guessing correctly or the attacker getting lucky if they control the flow. Compared to a 2-digit manual entry (1/100) or 4-digit (1/10,000), 1/3 is unacceptably high risk for financial transactions.
  * **Implementation issues:** Low. This is optimized for convenience, not security.
  * **Architectural issue:** The generation of the VC is deterministic based on the session hash. If an attacker can pre-calculate hashes (collision attack), they can predict the VC.
  * **Alternatives:** **Mandate Manual Entry.** The user *must* type the 4 digits shown on the browser into the mobile app. This makes the probability of a successful blind accept **1 in 10,000**.

* **Mobile Security Researcher:**
  * **The problem:** **Attacker-in-the-Middle (AiTM) / Proxy Attacks.** In a live phishing scenario, the attacker proxies the connection. The attacker sees the real VC code from the bank. The attacker displays that VC code on their phishing site. The user sees the code, the app shows the code. They match. The user accepts. Passive comparison **does not prevent real-time phishing**.
  * **Alternatives:** While Manual Entry doesn't solve the Proxy issue (attacker can just relay the number), it stops **Automated Attacks** and **Fatigue Attacks**. To solve the Proxy issue, you need **FIDO2/WebAuthn** (origin binding), not visual codes. But as a fallback, Manual Entry is vastly superior to "Pick 1 of 3."

* **CISO & Governance Expert:**
  * **The problem:** **Liability Shift.** In a "Passive Comparison" model, the user can plausibly deny the transaction ("I didn't check the code, I just typed my PIN"). If the system *forces* entry of the code, the user cannot claim they weren't looking at the screen. The current Smart-ID design leaves the RP vulnerable to repudiation claims because the action (checking the code) is not enforced by the system.
  * **Implementation issues:** "Pick 1 of 3" is confusing for elderly or non-tech-savvy users who panic when they see numbers they don't recognize.
  * **Alternatives:** Abandon "Pick 1 of 3." It is security theater. Move to **Manual Entry** immediately to align with Microsoft and Google ecosystem standards, reducing user training friction (since they already do this for MS Office 365).

## 3. UX Prioritized to Minimize Friction (Friction Reduction)

The primary goal of Smart-ID+ is to eliminate the "cognitive load" and "mechanical effort" of the previous generation.

* **Removal of Manual ID Entry (The "Zero-Type" Login):**
  * **Analysis:** In the legacy flow, a user had to manually type their 11-digit Personal ID code on the bank/service website to initiate a request. Smart-ID+ completely removes this step.
  * **UX Impact:** This is the single largest friction reduction. By scanning a QR code (Desktop) or clicking a "Login with Smart-ID" button (Mobile), the user identity is transmitted automatically via the deep link or QR payload.
  * **Friction Eliminated:** No memorization of ID code needed; no typing errors; faster initiation.

* **Seamless App-to-App Switching (Deep App Links):**
  * **Analysis:** On mobile devices, Smart-ID+ uses Android App Links and iOS Universal Links to automatically switch the user from the browser/banking app to the Smart-ID app.
  * **UX Impact:** This removes the need for the user to manually navigate to the home screen, find the Smart-ID app, and open it. The OS handles the context switch, creating a "fluid" experience where the authentication feels like a native part of the banking app rather than an external third-party check.

## 4. User Convenience Prioritized Over Security (Trade-offs)

While "under-the-hood" security (cryptography) is improved, the **user-facing** security steps are reduced, creating potential risks rooted in user complacency.

* **The "Blind Trust" of App-to-App Flows (Verification Code Removal):**
  * **The Mechanism:** In the standard/legacy Smart-ID flow, a **4-digit Control Code** is displayed on the website and the app. The user *must* visually compare them to ensure they aren't approving a fraudulent request (Man-in-the-Middle).
  * **The Trade-off:** In the frictionless **Smart-ID+ App-to-App flow**, this visual comparison is often de-emphasized or removed entirely. Because the deep link cryptographically binds the session to the specific app instance, the system "trusts" that the request is legitimate.
  * **The Risk:** This trains users to **"blind sign"** (enter PIN1 immediately upon app opening) without verifying the context. If a malicious app manages to trigger the Smart-ID app (e.g., via a hijacked intent or similar UI spoofing), the user—conditioned to not look for a code—might instinctively enter their PIN, authorizing an action they didn't fully scrutinize. Convenience (skipping the code check) wins over the strict "human-in-the-loop" verification.

* **Biometrics Replacing PIN2 for "Low-Risk" Signing:**
  * **The Mechanism:** Smart-ID typically requires **PIN1** for authentication and **PIN2** for digital signatures (Qualified Electronic Signature).
  * **The Trade-off:** To compete with Apple/Google Pay convenience, Smart-ID and integrated banks (e.g., Swedbank) allow **Biometric authentication** (fingerprint/FaceID) to replace PIN entry for transactions up to certain limits (e.g., 100 EUR) or for "fast login."
  * **The Risk:** Biometrics are "something you are" (authentication), not "something you know" (intent/non-repudiation). By allowing biometrics to authorize payments, the system prioritizes speed over the legal robustness of a conscious PIN entry, which is harder to coerce or spoof than a face scan.

## 5. UX/Changes De-prioritized for Legacy Compatibility

The most critical weakness in the Smart-ID ecosystem is not the new features, but the **inability to retire the old ones** due to the commercial realities of its customers (banks).

* **Retention of "Push Notification" (The "MFA Fatigue" Vector):**
  * **The Issue:** Smart-ID+ (QR/Deep Link) is "phishing-resistant" because it requires the user to *initiate* the action (scan/click). However, the legacy **"User types ID -> Push Notification arrives"** flow is kept active.
  * **Legacy Constraint:** Banks are "slow to adopt" Smart-ID+ because it requires backend changes. As a result, the legacy Push method remains the default for many.
  * **Impact:** Attackers can bypass the fancy new Smart-ID+ security by simply using the *old* flow: spamming a victim's phone with Push notifications until they accidentally click "Accept" (MFA Fatigue). The UX improvement of "security" is nullified because the "insecure" legacy door is left wide open.

* **Bank Inertia Blocking UX Modernization:**
  * **The Issue:** Financial institutions spend an estimated **70% of their IT budgets** on maintaining legacy core systems.
  * **Impact:** Even though Smart-ID+ offers a superior UX (no ID code typing), banks refuse to implement the new API because "the old one works." This forces SK ID Solutions to maintain a fragmented UX where a user might enjoy a slick QR login on a government site but is forced back to the clunky, manual-entry, push-waiting flow on their bank's site. The "modern" UX is effectively held hostage by the "legacy" infrastructure of the service providers.

## 6. Lack of Cryptographic "Origin Binding" (Domain Sealing)

**Identified Behavior & Technical Analysis:**
Smart-ID operates as a "Decoupled" authentication mechanism. The cryptographic operation happens in the Smart-ID app, which has no technical awareness of the context (URL, Application ID) of the Relying Party (RP) interface the user is looking at. The link between the browser session and the mobile app is established via a proprietary backend identifier, not a cryptographic bind to the session's TLS channel or the origin's domain name.

Technically, this renders the solution susceptible to advanced **Adversary-in-the-Middle (AiTM)** attacks using tools like *Evilginx2*. If a user is lured to `bank-login-secure.com` (a proxy), the proxy forwards the request to the real bank. The real bank triggers Smart-ID. The user sees the code, types the PIN on their phone, and the signature is sent to the bank. The bank accepts it, but the session cookie is captured by the proxy site.

* **Standards Alignment:** This represents the fundamental gap between "Strong Customer Authentication" (PSD2 compliant) and "Phishing Resistance" (FIDO2/WebAuthn standard).
  * **NIST SP 800-63-4 (Draft):** Explicitly defines "Phishing Resistance" as requiring the authenticator to cryptographically bind the output to the specific origin (domain) of the verifier. Smart-ID fails this definition because the app trusts the *push payload*, not the *local browser context*.
  * **FIDO Alliance:** Modern defensive recommendations insist that the authenticator must detect if the domain requesting auth differs from the domain hosting the credentials.

## 7. Centralized Oracle Dependency (Privacy & Availability Risks)

**Identified Behavior & Technical Analysis:**
Smart-ID utilizes a Split-Key (Threshold Cryptography) RSA architecture. One private key share resides on the user's device, and the corresponding share resides on SK ID Solution's Hardware Security Modules (HSMs). To generate a valid signature, both must participate in the computation.

Technically, this creates a **Centralized Oracle** architecture. Every single authentication and signing event *must* traverse SK's infrastructure. There is no capability for "Offline" authentication or peer-to-peer verification.

* **Standards Alignment:** This contradicts the architectural shift toward **Decentralized Identity (SSI)** and **Edge Computing**.
  * **eIDAS 2.0 / EUDI Wallet (ARF):** The Architecture Reference Framework for the upcoming EU Digital Identity Wallet favors architectural models that allow for "Offline" presentation (e.g., via NFC or QR code local exchange) and privacy-preserving "Unlinkability."
  * **Privacy Engineering:** Current privacy standards advise against "Panopticon" architectures where a single central provider has logs of every service a user accesses. Smart-ID's architecture inherently prevents "Unlinkability" (SK always knows who is logging into what and when), whereas Verifiable Credentials (VCs) and mDL (ISO 18013-5) are designing for selective disclosure without phoning home.

## 8. Static LOA Inheritance (Session Invariance)

**Identified Behavior & Technical Analysis:**
Smart-ID creates a qualified electronic signature (QES) or strong authentication based on a static enrollment Level of Assurance (LOA). Once the PIN is entered, the system returns a binary "Success" with the associated fixed identity attributes.

Technically, this lacks **Continuous Adaptive Risk Assessment** signals *from the authenticator itself*. Modern authenticators (like those integrating with Apple's Secure Enclave or Android Keystore) can pass granular signals to the RP, such as "Biometric confidence score," "Device integrity status" (is the phone rooted?), or "Local user presence" at the moment of signing. Smart-ID largely acts as a "dumb" pipe for the PIN entry, abstracting away the device health posture from the Relying Party.

* **Standards Alignment:** This falls short of **Zero Trust Architecture (ZTA)** principles (NIST SP 800-207).
  * **CAEP / RISC (Shared Signals):** The industry is moving toward the "Shared Signals and Events" framework, where the authenticator constantly assesses device trust. If a device becomes infected or jailbroken, the authenticator should dynamically downgrade the trust level. Smart-ID generally guarantees the *identity* of the signer but provides limited telemetry regarding the *integrity of the environment* in real-time to the bank/service provider compared to native FIDO implementations or MDM-integrated solutions.

## 9. Vulnerability to "Same-Device" Context Switching (App-Switching Fatigue)

**Identified Behavior & Technical Analysis:**
When a user attempts to log into a banking app *on the same device* where Smart-ID is installed, the operating system must perform a full context switch (App A moves to background → Smart-ID comes to foreground → User enters PIN → Smart-ID closes → App A returns to foreground).

Technically, this breaks the "flow" and relies on Deep Linking or Push notifications to bridge the gap. This introduces a "Blind Spot" during the switch. Malicious "Overlay" malware (common in Android banking trojans) can detect the Smart-ID package launch, draw a fake PIN pad over the real one, capture the PIN, and pass it to the underlying app.

* **Standards Alignment:**
  * **Google/Apple UI Guidelines:** Modern security recommendations favor **In-App Authentication** (e.g., Passkeys or Biometric prompts rendered *inside* the Relying Party app via system calls) rather than switching to a separate authenticator app.
  * **PSD3 / PSR (Payment Services Regulation) Drafts:** While App-to-App is currently compliant, upcoming discussions on fraud prevention highlight that reducing the "attack surface" of context switching is vital. Integrated biometric flows (FIDO2) prevent overlay attacks more effectively because the UI is drawn by the Trusted Execution Environment (TEE) of the OS, not a standard application layer window that can be overlaid.

## 10. User Awareness & Context Display

**Identified Behavior & Technical Analysis:**
Architecture for displaying granular initiator data (Geolocation, IP address, and Requesting Entity) to the user before they authorize a request.

**Technical Analysis:**
* **Current Protocol:** The API supports `displayText`, but standard implementations for Authentication (PIN1) usually only display the Service Name (e.g., "Swedbank").
* **Vulnerability Assessment:** A user in Estonia receiving a login request triggered by an attacker in Nigeria has no visual way to distinguish it from a legitimate local request (other than timing).
* **Requirement:** NIST SP 800-63B recommends providing context to the user to make an informed decision. Excluding Geolocation/IP context significantly lowers the user's ability to detect fraud.

**Verdict:** The lack of mandatory context is a significant architectural decision that lowers the defense against remote attackers.

## Summary

| Feature / Area | UX Priority | Analysis |
| :--- | :--- | :--- |
| **QR Authentication** | **Friction Reduction** | Removes manual typing of Personal ID code (11 digits). Faster, error-free initiation. |
| **App-to-App Flow** | **Convenience vs Security** | Removes or de-emphasizes the **4-digit Control Code** comparison. Relies on "invisible" cryptographic binding, training users to "blindly" enter PINs without visual context verification. |
| **Biometric Signing** | **Convenience vs Security** | Allows FaceID/TouchID to replace PIN2 for low-value payments. Sacrifices the high assurance of "intent" (PIN entry) for the speed of a glance/touch. |
| **Push Notification** | **Legacy Compatibility** | The vulnerable "Server-Initiated" push flow is kept active because banks won't upgrade. Leaves users exposed to **MFA Fatigue/Spamming** despite the existence of safer methods. |
