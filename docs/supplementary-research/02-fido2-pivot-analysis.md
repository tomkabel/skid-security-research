# Technical Feasibility of FIDO2/WebAuthn Pivot for eIDAS QES and High Assurance

**To:** Executive Steering Committee
**From:** Senior Security Architect & Product Lead
**Date:** October 26, 2023
**Subject:** Technical Feasibility of FIDO2/WebAuthn Pivot for eIDAS QES and High Assurance

## Summary

You've asked whether pivoting to a FIDO2/WebAuthn-based mobile authenticator (mimicking the SQRL "scan-to-login" UX) can replicate the Qualified Electronic Signature (QES) and Level of Assurance (LoA) 'High' capabilities currently offered by Smart-ID.

**The verdict:** Yes, but not natively. Standard FIDO2 (Passkeys) alone creates only a local authentication signal—it doesn't inherently produce an EU-recognized QES.

However, by adopting a Cloud Signature Consortium (CSC) architecture where FIDO2 acts as the Sole Control Mechanism (SCM) for a remote Qualified Signature Creation Device (QSCD), this pivot can achieve full functional parity with Smart-ID, including QES status and LoA High.

This approach modernizes the UX (solving the phishing/notification bombing issues) while relying on standardized remote signing protocols rather than proprietary split-key cryptography.

---

## 1. The Architectural Gap: Authentication vs. Qualified Signing

To understand the complexity, we must distinguish between the two functions Smart-ID performs:

1. **Authentication:** Proving you are who you say you are to a bank.
2. **Qualified Signing (QES):** Creating a legally binding signature equivalent to a wet-ink signature under eIDAS Article 25(2).

**The challenge:**

* Smart-ID uses a proprietary "Split-Key" system. One part of the key is on the phone, one is on the server. Neither can sign without the other. This allows them to achieve QES without the phone chip being certified.
* Native FIDO2/WebAuthn generates a private key stored wholly inside the user's phone (in the Secure Enclave/TPM).
  * *Problem:* Apple and Google's Secure Enclaves are not currently certified as QSCDs (Qualified Signature Creation Devices) by EU auditors. Therefore, a signature generated directly by a standard iPhone Passkey is, legally speaking, only an Advanced Electronic Signature (AdES), not a Qualified (QES) one.

---

## 2. The Solution: FIDO2 as the "Sole Control" Trigger

To achieve QES with a FIDO2 pivot, we must decouple the Authorization from the Signing. We move from a "Device Signing" model to a "Remote Signing" (Server-Signing) model, governed by the Cloud Signature Consortium (CSC) standards.

### The Proposed Architecture

1. **The Identity Proofing (Onboarding):**
    * User downloads the App.
    * User scans their Passport/ID Card via NFC (ensuring strict identity verification).
    * The App generates a FIDO2 credential (Passkey) and registers the Public Key with your backend.

2. **The Remote QSCD (The "Vault"):**
    * Instead of splitting the key (like Smart-ID), you act as a Qualified Trust Service Provider (QTSP). You generate a Qualified Signing Key for the user and store it in a certified Hardware Security Module (HSM) in your secure datacenter.
    * This HSM *is* a certified QSCD.

3. **The Signing Flow (SQRL-mimic UX):**
    * **Step 1 (Trigger):** User scans a QR code on a contract to sign.
    * **Step 2 (Context):** The App displays the document hash and metadata.
    * **Step 3 (Sole Control):** The User authenticates via Biometrics (FaceID/TouchID) using FIDO2/WebAuthn.
    * **Step 4 (Execution):** The App sends the FIDO2 Signed Assertion to your server.
    * **Step 5 (Validation & Signing):** Your server verifies the FIDO2 signature. If valid, the server unlocks the HSM and signs the document with the User's Qualified Key.

**Result:** The legal signature is created by the server (which is certified), but it was cryptographically authorized by the user's biometrics (FIDO2). This satisfies the "Sole Control" requirement of eIDAS.

---

## 3. Compliance Analysis: Can it meet the Standards?

### Requirement A: EU QES (Paper Signature Equivalence)

* **Status:** Achievable.
* **Mechanism:** By utilizing a certified Remote QSCD (HSM) and using FIDO2 Level 2 (L2) certified authenticators (most modern smartphones) as the authorization channel, you meet the requirements of CEN/TS 419 241 (Remote Qualified Signature Creation).
* **Caveat:** You must be audited as a QTSP (Qualified Trust Service Provider). This is an operational burden, not a technical one.

### Requirement B: eIDAS Level of Assurance (LoA) 'High'

* **Status:** Achievable.
* **Criteria:** LoA High requires:
    1. **Proof of Identity:** Physical presence or equivalent (NFC Document reading + Liveness detection).
    2. **Token Protection:** Protection against duplication/tampering. FIDO2 Private Keys in Secure Enclaves meet this.
    3. **Authentication Factor:** 2-Factor (Something you have + Something you are). FIDO2 + Biometrics meets this.
* **Note:** Smart-ID currently holds LoA High. The FIDO2 pivot matches this if the backend HSM infrastructure is EAL4+ certified and the onboarding process remains strict.

### Requirement C: Identity Attribute Provisioning

* **Status:** Achievable.
* **Mechanism:** FIDO2 itself is anonymous. However, the OpenID Connect (OIDC) layer wrapped around it handles the identity.
* **Flow:** When the user logs in via FIDO2, your Identity Provider (IdP) looks up the user associated with that FIDO key and issues an OIDC Identity Token containing the verified attributes (National ID, Name, DOB) to the service provider (Bank/Gov).
* **Compatibility:** This is 100% compatible with existing standards. In fact, it's more standard than Smart-ID's proprietary API, as it uses native OIDC flows.

---

## 4. Strategic Comparison: FIDO2 Pivot vs. Smart-ID

| Feature | Current Smart-ID (Split-Key) | Proposed FIDO2 Pivot (Remote QSCD) | Advantage |
| :--- | :--- | :--- | :--- |
| Phishing Resistance | Low (Code matching) | High (Domain Binding / Origin Check) | FIDO2 |
| Notification Bombing | Vulnerable (Public ID Push) | Solved (QR Scan / Hybrid Transport) | FIDO2 |
| QES Capability | Native (Split-Key) | Via Remote HSM (Cloud Signing) | Tie |
| Cryptography | Proprietary (RSA Split) | Standard (P-256 / Ed25519) | FIDO2 |
| Sole Control | User holds key share | User holds FIDO authorization key | Smart-ID |
| Implementation Cost | N/A (Already built) | High (Requires HSM infrastructure) | Smart-ID |

---

## 5. Recommendation & Roadmap

The "FIDO2 Pivot" isn't just feasible—it's the future-proof path. The industry is moving away from proprietary crypto-schemes (like Smart-ID's split-key) toward standard Passkeys (FIDO2) and Cloud Signing (CSC).

**To implement this successfully:**

1. **Build the "SQRL-like" Front End:** Develop the mobile app that scans QR codes and invokes the native OS WebAuthn/FIDO2 API.
2. **Deploy a Remote Signing Service (RSS):** Procure HSMs and implement the Cloud Signature Consortium (CSC) API.
3. **Bridge the Two:** Write the logic that accepts a valid FIDO2 assertion as the "trigger" to sign a document in the HSM.
4. **Audit:** Undergo the eIDAS conformity assessment to prove that the FIDO2 app creates a reliable "Sole Control" link to the HSM.

**Conclusion:** This architecture solves the Security Flaws (Phishing/Bombing) utilizing FIDO2's inherent strengths, while solving the Business Requirement (QES/LoA High) utilizing Remote Signing standards. It's a robust, compliant replacement for Smart-ID.
