# Meeting Script: RIA eID Department and ProksiAbel OÜ

**Date:** March 17, 2026  
**Time:** 14:00  
**Location:** Virtual Meeting (Teams/Zoom)  
**Attendees:**

- **Tom Kristian Abel** – Security Engineer, ProksiAbel OÜ
- **Mari Tamm** – Head of eID Department, RIA
- **Jaak Kask** – CERT-EE Lead (joining for technical segments)
- **Toomas Kasemets** – Senior Specialist, eID Department

---

## Section 1: Opening

### 1.1 Welcome and Introductions

**[RIA Representative (Mari Tamm)]:**  
"Good afternoon, Mr. Abel. Thank you for joining us today. I am Mari Tamm, head of the eID Department at Riigi Infosüsteemi Amet. I am joined today by our senior specialist from the eID Department, and for the technical portion of our discussion, Jaak Kask from CERT-EE will also join us. We appreciate you taking the time to meet with us.

We have received your detailed email from March 6th regarding Smart-ID+ architecture and security concerns. Today's meeting is an opportunity to discuss these matters further. We understand you have specific concerns about QRLJacking and the cross-device authentication flow in Smart-ID+. Is that correct?"

**[Tom]:**  
"Yes, thank you for scheduling this meeting. My name is Tom Kristian Abel, Security Engineer at ProksiAbel OÜ. I submitted the email on March 6th because I believe there are significant security gaps in the current Smart-ID+ architecture that need to be addressed at a regulatory level.

To summarize the key points from my email: I have identified that the QR-based cross-device flow in Smart-ID+ is vulnerable to QRLJacking attacks. SK ID Solutions has classified this as a 'guided risk' or 'accepted architectural risk,' but I believe this characterization is incorrect. Additionally, I want to discuss the upcoming Smart-ID+ deployment via TARA and how these security concerns relate to country-wide implementation."

### 1.2 Agenda Confirmation

**[RIA Representative]:**  
"Thank you for that summary. Based on your email and our subsequent correspondence, we suggest the following agenda for today's discussion:

1. Technical overview of Smart-ID+ cross-device authentication flow and the QRLJacking concern
2. Regulatory and policy framework – RIA's supervisory role and QTSP obligations under eIDAS
3. TARA deployment considerations – country-wide Smart-ID+ integration
4. International perspective – comparison with BankID Norway's FIDO2 implementation
5. Proposed next steps and action items

Do these topics align with your expectations? Are there any additional items you would like to add?"

**[Tom]:**  
"Yes, that agenda covers the main points well. I would also like to briefly touch on the expired GPG keys at incident@skidsolutions.eu that I mentioned in my email, as this relates to incident response capabilities. Additionally, I want to present some defense-in-depth proposals that could mitigate the QRLJacking risk.

One important note: I want this meeting to be forward-looking. I'm not asking for formal positions or explanations today, but rather to discuss what can be done now and in the near future to improve Smart-ID+ security."

**[RIA Representative]:**  
"Understood. We appreciate your constructive approach. Let us begin with the technical discussion."

---

## Section 2: Technical Discussion – QRLJacking and Smart-ID+ Architecture

### 2.1 Understanding the QRLJacking Vulnerability

**[RIA Representative]:**  
"Jaak, could you provide some context from the CERT perspective on how we should frame this discussion?"

**[Jaak Kask (CERT-EE)]:**  
"Yes, thank you. From the CERT-EE perspective, we received your proof-of-concept materials on March 6th. We are currently conducting our initial assessment, which we expect to complete within the standard 5-7 working day timeframe – by March 18th at the latest.

Our preliminary analysis distinguishes between 'accepted architectural risk' and 'security vulnerability.' As we discussed in our response, if the issue is a design choice that the QTSP has documented in their risk register and actively manages, we classify it as an architectural risk. If the evidence shows that session hijacking can occur without user intervention, it would be classified as a vulnerability.

Mr. Abel, could you please explain in your own words the technical mechanism of the QRLJacking attack as you understand it?"

**[Tom]:**  
"Certainly. Let me walk through the attack vector:

The QRLJacking attack exploits the cross-device authentication flow in Smart-ID+. Here is how it works:

1. The user initiates authentication on a desktop browser by visiting a relying party website
2. The website displays a QR code that the user scans with their Smart-ID mobile app
3. The attacker's malicious website or application displays a *different* QR code that overlays or replaces the legitimate one – this can be done through a browser popup, a malicious application, or even a physical overlay
4. When the user scans the attacker's QR code with their Smart-ID app, they are authorizing a session on the attacker's device, not the legitimate website
5. The attacker now controls the authentication session while the user believe they are authenticating to their intended service

The critical issue is that the QR code itself is not bound to the specific session or relying party in a cryptographically secure manner. There is no context binding – the QR code does not contain a signature or token that ties it to the specific session initiated on the legitimate website.

This is fundamentally different from device-bound authentication methods where the authentication credential is permanently associated with a specific physical device."

### 2.2 Context Binding and Session Security

**[Tom continued]:**  
"In my communications with SK ID Solutions, I raised the issue of missing context binding. Their response was essentially that this is a known limitation of the QR-based flow, and they consider it an acceptable risk because users should visually verify the relying party name displayed in the Smart-ID app.

However, this 'visual verification' requirement places the entire security burden on the end user – and this is precisely where the attack succeeds. Users are conditioned to trust QR codes and expect them to be secure. They are not trained to carefully inspect every authentication request. Moreover, in a cross-device flow, the user is already in a state of trust – they have already logged into their bank website and are simply completing a second factor authentication. The psychological context is already established.

This is why I believe calling it an 'architectural risk' is misleading. An architectural risk implies that there are compensating controls in place. But here, the only control is user vigilance – and that is not a reliable security control."

> ***[Alternate Response Point: When RIA says "This is accepted architectural risk"]**
>
> **RIA Position:** "We classify this as accepted architectural risk rather than a vulnerability because the user must choose to scan a QR code. This is documented in SK ID Solutions' risk register."
>
> **Your Rebuttal:** "With respect, I'd like to challenge that classification. A vulnerability is defined as a weakness in system security that can be exploited to compromise the system. The QRLJacking vector meets this definition."
>
> **Your Strong Counter-Argumentation:** "The key distinction is that in my PoC, the session can be hijacked WITHOUT meaningful user interaction. This differs from traditional phishing where users must actively enter credentials. The QR code flow creates a passive vector where the attacker merely needs to display their QR code to intercept a victim's session. The user is not 'choosing' to attack themselves – they are being deceived by a legitimate-looking authentication flow."
>
> **RIA/CERT Response to Rebuttal:** "That's an interesting technical distinction. However, we'd note that the user must still authorize the authentication request in their Smart-ID app. The app displays the relying party name – if users would verify this, the attack would fail. This places the responsibility on user vigilance."*

**[RIA Representative]:**  
"We understand your concern. From our perspective at RIA, we acknowledge that the QR cross-device flow has different security characteristics than device-bound authentication. We also recognize that IP-based controls have limitations in modern network environments – this was acknowledged in our response to your email.

However, we need to be precise about terminology. Could you clarify whether you are claiming that this is a technical vulnerability that can be exploited, or whether it is an inherent limitation of the QR-based architecture?"

**[Tom]:**  
"That is an excellent question, and I want to be very clear:

The QRLJacking vector I am describing is a *demonstrable* exploitation path. I have provided proof-of-concept materials to CERT-EE that demonstrate this attack. It does not require sophisticated technical resources – any attacker with the ability to display a QR code on a victim's device can execute this.

However, I also acknowledge that there are architectural alternatives that would *eliminate* this attack vector entirely. That is precisely the point of my comparison with BankID Norway."

> ***[Alternate Response Point: When RIA challenges the "vulnerability" terminology]**
>
> **RIA Position:** "Our preliminary view is that this is an architectural limitation, not a vulnerability. The user must authorize the request, and the app displays the service name."
>
> **Your Rebuttal:** "I'd like to respectfully disagree. The critical factor is that the user believes they are authorizing access to the legitimate service, but they are actually authorizing access to the attacker's session. This is session hijacking – the user is not granting the attacker access; the attacker is intercepting the user's legitimate session intent."
>
> **Your Strong Counter-Argumentation:** "Consider the asymmetry: the defender (SK ID Solutions) could implement cryptographic session binding that would make this attack impossible. Instead, they rely on users to detect the attack. This places the burden of security on the least-equipped party. The question isn't whether the attack is 'possible' – it's whether the QTSP has implemented reasonable protections. They have not."
>
> **RIA/CERT Response to Rebuttal:** "We understand your argument. We'll consider this carefully in our assessment. The distinction between 'user must authorize' and 'user must correctly verify' is a meaningful one."*

---

## Section 3: Regulatory and Policy Discussion

### 3.1 eIDAS Requirements and QTSP Obligations

**[RIA Representative]:**  
"Let us now discuss the regulatory framework. As you know, SK ID Solutions operates as a Qualified Trust Service Provider (QTSP) under the eIDAS Regulation. Could you share your understanding of how this regulatory framework applies to this situation?"

**[Tom]:**  
"Certainly. Under eIDAS, QTSPs are required to provide services that meet the highest standards of security. Article 24 states that qualified trust services shall be provided using qualified certificates and in accordance with technical standards and requirements that ensure a level of security commensurate with the nature and sensitivity of the data being protected.

The key phrase here is 'state-of-the-art' – QTSPs must implement security measures that reflect the current state of technology and best practices. My argument is that SK ID Solutions has access to superior technical alternatives (such as FIDO2/device-bound passkeys) that would eliminate the QRLJacking vulnerability entirely.

By choosing to continue with a QR-based cross-device flow that is demonstrably vulnerable to session hijacking, SK ID Solutions is not meeting their state-of-the-art obligation. This is especially concerning given that they are the sole provider of Estonia's national eID authentication service."

**[RIA Representative]:**  
"We appreciate your interpretation of the eIDAS requirements. Let me provide some context on RIA's role in this framework.

RIA operates as the supervisory body for eID services in Estonia. Our primary responsibility is to ensure that QTSPs comply with regulatory requirements. However, we do not directly implement or operate the authentication infrastructure – that is the responsibility of the QTSP.

Under the current framework, if we receive a report of a potential security issue, we can:
- Request documentation from the QTSP regarding their risk assessment
- Conduct supervisory reviews
- Issue compliance directions if necessary

However, we do not have the authority to dictate specific technical implementations to a QTSP. That would be outside our supervisory mandate.

Could you clarify what you believe RIA's role should be in this situation?"

**[Tom]:**  
"I understand RIA's supervisory role, and I am not asking you to dictate technical implementations. However, I believe there are several regulatory actions available to RIA:

1. **Formal risk assessment request** – RIA can formally request that SK ID Solutions conduct a comprehensive risk assessment of the QRLJacking vector and submit it for review.

2. **Compliance direction** – If the risk assessment reveals that the current implementation does not meet eIDAS state-of-the-art requirements, RIA can issue a direction requiring remediation.

3. **Conditional approval for TARA deployment** – Before Smart-ID+ is integrated into TARA (the authentication gateway), RIA could require that certain security conditions be met.

4. **International coordination** – RIA can engage with other EU member states to share intelligence on eID security vulnerabilities and coordinate responses.

My concern is that without regulatory action, SK ID Solutions has no incentive to address these issues. They have already stated that they consider it an accepted risk. This is not acceptable for a critical national infrastructure component."

### 3.2 RIA's Position on Regulatory Action

**[RIA Representative]:**  
"We understand your concerns. Let me be transparent about our position:

First, we acknowledge the technical limitations of IP-based controls, as we stated in our response to your email. CGNAT and VPN usage do significantly limit the effectiveness of IP-based access controls.

Second, regarding QRLJacking, we maintain our position that this is currently classified as an 'accepted architectural risk' rather than a critical vulnerability. This classification is based on our initial review, which will be finalized after CERT-EE completes their assessment.

Third, regarding the TARA deployment – Smart-ID+ integration into TARA is part of the broader eID modernization roadmap. This deployment is subject to our standard supervisory process, which includes security review.

I want to be clear: RIA takes all security reports seriously. However, we must follow our established procedures for assessment and classification. We cannot make determinations outside of our formal process."

> ***[Alternate Response Point: When RIA cites "established procedures" as constraint]**
>
> **RIA Position:** "We must follow our established procedures for assessment and classification. We cannot make determinations outside of our formal process."
>
> **Your Rebuttal:** "I understand the need for procedural rigor. However, I'd argue that the TARA deployment creates a new context that warrants expedited review. This isn't a routine assessment – it's a critical national infrastructure decision."
>
> **Your Strong Counter-Argumentation:** "The existing procedures were designed for incremental changes to the eID ecosystem. The TARA deployment represents a fundamental transformation in how Estonian citizens authenticate to government services. If a vulnerability exists in Smart-ID+, it will now affect virtually every e-government interaction. The risk profile has fundamentally changed, and I would submit that your procedures should account for this."
>
> **RIA Response to Rebuttal:** "That's a valid point. We can agree that the TARA deployment adds urgency to completing our assessment. We'll prioritize the technical review."*

**[Tom]:**  
"I appreciate your transparency. Let me respond to each point:

On the classification as 'architectural risk' – I understand RIA's process, but I would argue that the classification is fundamentally flawed. The issue is not whether the attack is technically possible (it is), but whether the QTSP has implemented appropriate mitigations. They have not. User education is not a technical control – it is a compensating measure that places the burden on the wrong party.

On the TARA deployment – this is actually my primary concern. Smart-ID+ is being deployed as the primary authentication method for all of Estonia's e-government services. If this deployment proceeds without addressing the QRLJacking vulnerability, the entire country will be exposed to session hijacking attacks.

I propose that RIA consider requiring SK ID Solutions to implement additional security measures before full TARA integration, such as:
- Cryptographic session binding between the relying party and the authentication session
- Mandatory biometric verification for high-risk transactions
- Transaction signing with visual confirmation of the relying party identity

These are reasonable requirements that would significantly reduce the risk without dictating the specific implementation."

**[RIA Representative]:**  
"We will take your proposals under consideration. However, I want to emphasize that any such requirements would need to be based on our formal assessment process and would involve consultation with SK ID Solutions.

Let us move on to discuss the TARA deployment in more detail."

---

## Section 4: TARA Deployment Discussion

### 4.1 Country-Wide Smart-ID+ Integration

**[RIA Representative]:**  
"Could you share your specific concerns about the TARA deployment? What is it that worries you most about the integration of Smart-ID+ into the national authentication infrastructure?"

**[Tom]:**  
"My concerns about TARA deployment are twofold:

**First, attack surface expansion.** Smart-ID+ will become the authentication mechanism for virtually all e-government services in Estonia. This means that any vulnerability in Smart-ID+ becomes a vulnerability in the entire national digital infrastructure. An attacker who successfully executes a QRLJacking attack could potentially access:
- Banking services via e-banking integrations
- Personal government portals (eesti.ee, etc.)
- Health information systems
- Property and land registry services
- Tax authority services
- Social services and benefits systems

The consequences of a successful attack are therefore much more severe than attacks on individual commercial services.

**Second, trust implications.** Estonia has built its digital society on a foundation of trust in the eID infrastructure. If users begin to experience fraud or security breaches via Smart-ID+, it will undermine confidence in the entire digital government ecosystem.

I am not saying that the current TARA deployment should be stopped – I recognize that Smart-ID+ provides important accessibility benefits. However, I believe there should be a phased approach with enhanced security controls for high-risk transactions while the security issues are addressed."

### 4.2 Proposed Mitigations for TARA

**[Tom continued]:**  
"Here are my specific proposals for the TARA deployment. I want to emphasize that these are directly targeted to mitigate the QRLJacking/cross-device attack vector and are practical for SK ID Solutions to implement.

#### a) QR Code Session Binding Enhancements

These are technical controls that SK ID Solutions can implement on their side:

1. **Cryptographic binding of QR session to specific relying party (RP) session ID**
   - The QR code should contain a cryptographic hash or signature that binds it to the specific session initiated by the legitimate relying party
   - This prevents attackers from generating valid QR codes for sessions they don't control
   - Implementation: Include RP-specific session token in QR payload, verified during authentication handshake

2. **Short-lived QR codes with automatic refresh (10-15 second rotation)**
   - QR codes should expire rapidly, requiring fresh generation for each authentication attempt
   - This limits the window of opportunity for attackers to inject malicious QR codes
   - Implementation: Server-side session with short TTL, automatic refresh via polling/WebSocket

3. **Visual confirmation display showing the actual service being authenticated on the mobile device**
   - The Smart-ID app should display not just the relying party name, but a visual confirmation of the actual service URL/identifier being authenticated
   - Use icons or visual identifiers that users can recognize
   - Implementation: Include service identifier in authentication request, display in app

#### b) Mobile Device Confirmation Flow

These controls add additional verification steps:

1. **Push notification to registered device BEFORE displaying QR code on desktop**
   - User receives a push notification on their registered mobile device confirming they want to initiate an authentication session
   - User must acknowledge BEFORE the QR code is displayed on the desktop
   - This prevents attacks where QR code is displayed without user's intent

2. **Biometric re-verification on mobile for cross-device flows**
   - Require fingerprint/face recognition on the mobile device specifically for cross-device authentication flows
   - This ensures that even if someone gains access to the mobile device, they cannot complete authentication without biometric verification

3. **Transaction confirmation showing exact service name and action**
   - Display clear, unambiguous confirmation showing the exact service name and the action being authorized
   - Include the full URL or service identifier, not just a friendly name

#### c) Behavioral Analysis at Relying Party Level

These can be implemented by relying parties or SK ID Solutions:

1. **Velocity checks on authentication attempts**
   - Monitor for unusually high numbers of authentication attempts from same user/IP in short timeframe
   - Flag or block automated attack attempts

2. **Geographic anomaly detection**
   - Detect authentication attempts from geographically implausible locations (e.g., user authenticated in Tallinn 5 minutes ago, now attempting from Paris)
   - Implement location-based risk scoring

3. **Device fingerprinting at login initiation**
   - Collect device fingerprint at the time of authentication initiation
   - Correlate with known attack patterns or suspicious device profiles

#### d) User-Facing Friction Controls

These add controlled friction for higher-risk scenarios:

1. **Risk-based authentication (step-up for high-risk transactions)**
   - Implement risk scoring that triggers additional verification for high-risk actions
   - Examples: large transactions, sensitive data access, changes to account settings

2. **Mandatory confirmation dialogs showing transaction details**
   - Display clear confirmation dialogs showing exactly what the user is authorizing
   - Include service name, action type, and any transaction amounts

3. **Cooldown periods between authentication attempts**
   - Implement temporary locks after failed or suspicious authentication attempts
   - Prevents rapid-fire attack attempts

#### e) Technical Controls on SK ID Solutions Side

These are infrastructure-level protections:

1. **Certificate pinning for RP communications**
   - Implement certificate pinning to prevent man-in-the-middle attacks on the RP-SK ID Solutions communication channel

2. **Real-time session monitoring and anomaly detection**
   - Monitor authentication sessions for suspicious patterns
   - Implement automated alerting for anomalies

3. **Rate limiting on authentication endpoints**
   - Implement rate limiting to prevent brute-force or automated attacks
   - Apply stricter limits for cross-device flows given the increased attack surface

**[Tom continued]:**
"These proposals are directly targeted at the QRLJacking vector and are implementable by SK ID Solutions without requiring fundamental architectural changes. They increase friction for attackers while maintaining usability for legitimate users.

These measures don't appear in standard security guidelines because they are specifically designed to increase friction for attacker tooling rather than to meet compliance requirements. However, they represent the actual defensive measures that sophisticated threat actors must overcome. The current Smart-ID+ architecture has none of these protections—attackers can use commodity tools to execute QRLJacking at scale."

> ***[Alternate Response Point: When RIA says "some proposals may raise privacy concerns"]**
>
> **RIA Position:** "Some of these measures—such as client-side fingerprinting and behavioral analysis—could raise privacy concerns and may conflict with Estonian data protection requirements."
>
> **Your Rebuttal:** "Those are valid concerns that should be carefully considered. However, I'd offer a different perspective."
>
> **Your Strong Counter-Argumentation:** "First, these measures can be implemented in privacy-preserving ways. Device fingerprinting can use client-side hashing without transmitting raw device information. Geographic analysis can be done on device without transmitting location data. Second, the privacy implications of a major fraud incident affecting thousands of citizens would be far greater—both in terms of financial harm and erosion of trust in the eID system. Third, these are defensive measures, not surveillance—the processing happens on the client device or as part of the authentication protocol, not for tracking users. Fourth, SK ID Solutions already implements extensive device fingerprinting in their standard flow. The question is whether we use that capability for security purposes."
>
> **RIA Response to Rebuttal:** "We acknowledge that privacy and security must be balanced. We'll consult with the Data Protection Inspectorate if needed. However, we agree that the status quo—where novice attackers with AI tools can easily compromise Smart-ID+—is not acceptable."*

**[RIA Representative]:**
"We appreciate these detailed proposals. However, I should note that some of these measures could raise privacy concerns and may conflict with Estonian data protection requirements. Additionally, we have limited authority to mandate specific technical implementations to SK ID Solutions."

**[Tom]:**
"I understand those concerns. However, I would argue that:

- These measures can be implemented in privacy-preserving ways (e.g., client-side hashing, zero-knowledge proofs)
- The privacy implications of a major fraud incident affecting thousands of citizens would be far greater
- These are defensive measures, not surveillance—the processing happens on the client device
- SK ID Solutions already implements extensive device fingerprinting in their standard flow

The question is whether we accept the status quo—that attackers can easily compromise Smart-ID+—or whether we implement measures that shift the economic balance back toward defenders."

> ***[Alternate Response Point: When RIA cites regulatory authority limitations]**
>
> **RIA Position:** "Current legislation does not provide RIA with explicit authority to mandate specific technical implementations such as proof-of-work or detailed behavioral analysis. We can only require SK ID Solutions to meet existing eIDAS requirements."
>
> **Your Rebuttal:** "I understand the legal constraints. However, there are still actions available within your current authority."
>
> **Your Strong Counter-Argumentation:** "First, you can require a formal risk assessment under your supervisory authority—this doesn't dictate implementation but requires the QTSP to formally evaluate the risk. Second, you can include enhanced security requirements in the TARA integration guidelines as conditions of approval—this is within your mandate for the national gateway. Third, you can communicate that certain security measures are expected as part of state-of-the-art compliance under eIDAS—this communicates expectations without dictating implementation. Fourth, if you believe stronger authority is needed, you can recommend legislative changes to the responsible ministry."
>
> **RIA Response to Rebuttal:** "These are reasonable interpretations of our authority. We'll consider how to apply them in the TARA integration process."*

**[RIA Representative]:**
"We will note your concerns about the TARA deployment. Regarding the expired GPG key from September to November 2025 at incident@skidsolutions.eu – we were not aware of this issue. We will follow up with SK ID Solutions on their incident response procedures.

Regarding your proposals – some of these fall within RIA's supervisory authority, while others are operational matters for SK ID Solutions or the relying parties themselves. We can commit to considering enhanced security requirements for high-risk transactions in the TARA integration guidelines.

Let us now discuss the international perspective."

---

## Section 5: International Comparison – BankID Norway

### 5.1 BankID Norway's FIDO2 Implementation

**[Tom]:**  
"I would like to draw your attention to the BankID Norway implementation as a benchmark for what is possible. As I mentioned in my email, BankID Norway has achieved zero fraud through their FIDO2 implementation that combines:

- Device-bound passkeys (credentials that are permanently stored on the user's physical device)
- NFC-based document reading for identity verification
- Biometric liveness detection using iProov technology

This combination creates a phishing-resistant authentication system. The key difference is that the authentication credential cannot be transferred to another device – it is bound to the physical device that was used during enrollment.

BankID Norway processes hundreds of millions of transactions annually with zero fraud on this journey. This demonstrates that it is possible to implement secure authentication at scale."

**[RIA Representative]:**  
"We are aware of BankID Norway's implementation and have reviewed their approach. It is indeed an interesting model. However, I should note some important contextual differences:

1. BankID Norway operates in a different regulatory environment – it is primarily a banking sector initiative rather than a national eID system.

2. Their implementation relies on NFC document reading, which requires users to have NFC-enabled devices and identity documents – this may not be universally accessible in the Estonian population.

3. The iProov liveness detection is a commercial solution that would need to be evaluated for procurement by SK ID Solutions.

That said, we agree that the FIDO2 standard and device-bound passkeys represent the current state-of-the-art in authentication security. We have noted this in our internal discussions."

**[Tom]:**  
"Those are valid points, but I would like to offer some perspective:

On the regulatory environment – BankID Norway is also operating under eIDAS as a QTSP (Stø AS). They have chosen to implement the highest level of security available, despite the regulatory environment not requiring it. The question is why SK ID Solutions, which serves as Estonia's national QTSP, has not made the same choice.

On accessibility – I agree that NFC document reading may not be universally accessible today, but it will become more common as new identity documents are issued. In the meantime, Smart-ID+ could be enhanced with additional security controls for users who do not have NFC capability.

On procurement – iProov is one option, but there are other biometric liveness solutions available. The key point is that technology exists today that could significantly improve Smart-ID+ security. The question is whether there is the will to implement it.

I understand that RIA cannot dictate procurement decisions to SK ID Solutions. However, I believe that RIA can and should communicate that enhanced biometric verification is expected as part of the state-of-the-art requirement under eIDAS."

### 5.2 International Best Practices and EU Developments

**[RIA Representative]:**  
"We are monitoring international developments in this area. The European Union is currently working on the eIDAS 2.0 revision, which includes provisions for secure electronic identification. Additionally, the European Commission has been promoting the adoption of FIDO2 and passkeys across member states.

We agree that the direction of travel is toward phishing-resistant authentication. The question is how quickly Estonia should transition and what interim measures should be in place.

We would be interested in your thoughts on what a realistic transition path would look like – assuming that a full FIDO2 migration is not feasible in the short term."

**[Tom]:**  
"Thank you for that question. Here is my proposed transition path:

**Short-term (0-6 months):**
- Implement cryptographic session binding to prevent QRLJacking
- Deploy enhanced monitoring for authentication anomalies
- Conduct a security audit of the current Smart-ID+ implementation

**Medium-term (6-18 months):**
- Pilot FIDO2/device-bound passkey authentication for select high-security services
- Implement biometric verification for high-risk transactions
- Conduct user research on acceptance of additional security measures

**Long-term (18-36 months):**
- Full FIDO2 migration for Smart-ID+ users
- Integration with hardware security keys for highest-security use cases
- NFC document reading for initial enrollment

This is a realistic timeline that would significantly improve security while maintaining service continuity.

I also want to mention that I proposed several defense-in-depth solutions in my email that could be implemented independently of the FIDO2 migration. These include:
- LLM-hostile frontend structuring to prevent AI-assisted attacks
- Static/dynamic analysis hardening
- CPU-in-JavaScript to increase attack complexity
- JA3/JA4 fingerprinting to detect anomalous clients
- Hardware fingerprint sanity checks

These are practical measures that SK ID Solutions could implement today without changing the fundamental architecture."

---

## Section 6: Action Items and Next Steps

### 6.1 RIA's Commitments

**[RIA Representative]:**  
"Thank you for your detailed proposals. Let me summarize RIA's commitments from today's discussion:

1. **CERT-EE assessment** – CERT-EE will complete their initial technical assessment of your QRLJacking report by March 18th, as previously communicated. We will share the results of this assessment with you and with SK ID Solutions.

2. **TARA security review** – RIA will conduct a security review as part of the TARA integration process. We will consider your proposals for enhanced security controls for high-risk transactions.

3. **Follow-up with SK ID Solutions** – RIA will follow up with SK ID Solutions regarding:
   - The expired GPG key at incident@skidsolutions.eu
   - Their risk assessment process for the QRLJacking concern
   - Their plans for biometric verification implementation

4. **International monitoring** – RIA will continue to monitor international developments in FIDO2 and passkey adoption, and will consider how these apply to the Estonian eID ecosystem.

5. **Future dialogue** – We are open to continuing this dialogue as more information becomes available. We appreciate your constructive approach to these issues."

### 6.2 Tom's Requests

**[Tom]:**  
"Thank you. I would like to request the following:

1. **Copy of CERT-EE assessment** – When the assessment is complete, I would appreciate receiving a copy of the findings, or at minimum, a summary of the classification decision.

2. **Meeting with SK ID Solutions** – If RIA schedules a meeting with SK ID Solutions to discuss these issues, I would appreciate the opportunity to participate or at minimum to provide input.

3. **Timeline for regulatory decision** – Could you provide a timeline for when RIA expects to make a decision on any enhanced security requirements for the TARA deployment?

4. **Disclosure coordination** – I have not publicly disclosed the technical details of the QRLJacking vulnerability. I am prepared to follow coordinated vulnerability disclosure procedures. Could you clarify the expected timeline for remediation discussions?"

### 6.3 Timeline Discussion

**[RIA Representative]:**  
"Let me address your requests:

1. **CERT-EE assessment** – We will share the assessment findings with you once they are finalized. This is consistent with our standard disclosure process.

2. **SK ID Solutions meeting** – We will consider your input, but we cannot commit to your direct participation in supervisory meetings with the QTSP. However, we will ensure that your concerns are communicated.

3. **Regulatory timeline** – I cannot commit to a specific timeline for regulatory decisions. The TARA deployment is subject to our standard process, which includes security review. We will make a determination based on the completed assessment and our supervisory analysis.

4. **Disclosure** – We appreciate your responsible approach to disclosure. We would ask that you allow CERT-EE to complete their assessment before any public disclosure. We will work with SK ID Solutions on remediation timelines as part of the coordinated vulnerability disclosure process."

---

## Section 7: Closing

### 7.1 Summary

**[RIA Representative]:**  
"Let me provide a brief summary of today's discussion:

- We discussed the technical details of QRLJacking in the Smart-ID+ cross-device authentication flow
- We explored the regulatory framework under eIDAS and RIA's supervisory role
- We discussed concerns about the TARA deployment and proposed security enhancements
- We compared the current implementation with BankID Norway's FIDO2 approach
- We outlined RIA's commitments for follow-up actions
- We discussed timeline expectations for assessment and regulatory decisions

Is there anything else you would like to add before we close?"

**[Tom]:**  
"Thank you for this productive discussion. I want to emphasize that my goal is not to criticize RIA or SK ID Solutions, but to ensure that Estonia's eID infrastructure remains secure and trustworthy. I believe that with appropriate regulatory attention and technical improvements, Smart-ID+ can continue to serve Estonia's digital society while addressing the security concerns I have raised.

I look forward to receiving the CERT-EE assessment results and to continued dialogue on these matters."

**[RIA Representative]:**  
"We appreciate your engagement and your expertise. We will be in touch following the completion of the CERT-EE assessment. Thank you for your time today."

**[Tom]:**  
"Thank you for meeting with me. I appreciate Ria's willingness to discuss these important security concerns."

---

## Appendix A: Key Technical Terms

| Term | Definition |
|------|------------|
| **QRLJacking** | QR Code Login Jacking – a session hijacking attack that exploits QR-based cross-device authentication flows |
| **QTSP** | Qualified Trust Service Provider – an entity that provides qualified trust services under eIDAS |
| **TARA** | Technological and Architectural Framework for Authentication – Estonia's national authentication gateway |
| **FIDO2** | Fast Identity Online 2 – an authentication standard that enables passwordless login using device-bound credentials |
| **Device-bound passkeys** | Cryptographic credentials that are permanently stored on a specific physical device |
| **Biometric liveness detection** | Technology that verifies that a biometric sample is from a live person (not a photo, mask, or replay) |
| **eIDAS** | Electronic Identification, Authentication and Trust Services – EU regulation on electronic identification and trust services |
| **CGNAT** | Carrier-Grade Network Address Translation – a technique used by ISPs to share limited IPv4 addresses |

## Appendix B: Reference Documents

| Document | Description |
|----------|-------------|
| Tom's email to RIA (March 6, 2026) | Original submission outlining Smart-ID+ security concerns |
| RIA eID Department response (March 9, 2026) | Initial response acknowledging IP control limitations |
| RIA CERT response (March 10, 2026) | Response regarding vulnerability classification |
| BankID Norway case study | FIDO2 implementation with zero fraud (FIDO Alliance) |
| Smart-ID Documentation | SK ID Solutions official documentation (sk-eid.github.io) |

---

*Document prepared for ProksiAbel OÜ*  
*Last updated: March 17, 2026*
