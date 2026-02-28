**Subject: Research Collaboration on QR Authentication Security – QRLJacking in Smart-ID+ Context**

Dear RIA Cybersecurity Team,

I hope you're having a good week. My name is [Name], and I'm an independent security researcher based in Tallinn with a particular fascination for authentication protocols and their real-world security implications. I've been conducting an in-depth analysis of QR-code-based authentication mechanisms across European e-identity systems, and Estonia's Smart-ID+ implementation has become a central focus of my recent work.

Rather than keeping my findings in an echo chamber, I wanted to reach out directly to understand RIA's perspective on some security considerations I've encountered—particularly around a threat vector known as QRLJacking (QR Code Login Jacking).

**What Led Me Here**

My research started with a straightforward question: How do modern "phishing-resistant" QR authentication systems actually bind the authentication request to its originating context? This investigation led me to build a containerized testing framework I've been calling "OutSmart-ID"—a proof-of-concept system using headless browser orchestration and reverse proxy techniques to model real-world attack scenarios against cross-device authentication flows.

Through this work, I've identified what appears to be a fundamental architectural gap in Smart-ID+'s current implementation: the absence of cryptographic origin binding between the browser session initiating authentication and the mobile device completing it. The system relies on Control Codes for visual verification, but there's no underlying protocol-level mechanism ensuring that the device scanning the QR code is physically or logically associated with the browser session requesting authentication.

**The Technical Concern in Plain Terms**

Let me illustrate why this matters. In a properly bound authentication system (like FIDO2/WebAuthn or client-authenticated TLS with ID-cards), the authentication response is cryptographically tied to the specific channel that initiated the request. Even if an attacker successfully phishes a user onto a malicious site, they cannot replay that authentication on a legitimate service because the cryptographic binding prevents session relay.

Smart-ID+'s architecture, by contrast, appears to validate that *someone* scanned the QR code and confirmed the Control Code match—but doesn't verify that the scanner is the legitimate user in the legitimate context. This creates what I'd call an "authentication relay" opportunity: an attacker displaying a legitimate service's QR code to a victim in real-time, harvesting their confirmation, and immediately using that authenticated session for fraudulent purposes.

This isn't theoretical. I've demonstrated this in controlled environments using Dockerized Chromium containers, noVNC streaming, and custom Golang reverse proxies. The attack window is seconds, not minutes, and requires only that the victim doesn't notice they're scanning a code displayed on a site they didn't intentionally navigate to.

**What I'm Hoping to Understand from RIA**

Given Estonia's leadership position in digital identity and RIA's oversight of national authentication infrastructure, I'm genuinely curious about several aspects of your security posture:

1. **Current Risk Framework**: Has RIA formally assessed QRLJacking as a threat vector within Smart-ID+'s architecture? If so, what is the current accepted risk status? My research suggests this is categorized as an "accepted risk" by the service provider, but I'm interested in the supervisory authority's perspective on whether this classification aligns with eIDAS Article 19 requirements for risk-appropriate security measures.

2. **Incident Landscape**: Has RIA received vulnerability disclosures, security notifications, or incident reports specifically related to QR code relay attacks or context-binding weaknesses in Smart-ID+? I'm aware of at least one responsible disclosure from December 2025 where the service provider acknowledged awareness of the architectural limitation but maintained it represented a conscious design trade-off. Have similar reports reached RIA through CERT-EE or other channels?

3. **Evolution of Protections**: I'm curious whether RIA has evaluated or mandated technological countermeasures such as:
   - **Context-binding protocols** that cryptographically link the authentication request to the original browser session
   - **Origin-binding mechanisms** ensuring the mobile app validates the authentication origin matches the claimed service
   - **Phishing-resistant alternatives** like FIDO2/WebAuthn that provide inherent channel binding without user friction

4. **Regulatory Perspective**: Given that Smart-ID+ operates as a Qualified Trust Service under eIDAS, how does RIA reconcile the "accepted risk" approach to session relay vulnerabilities with the regulation's requirement for "maximum possible assurance" and technical measures commensurate with identified risks? The II Annex requirements for sole control over signature creation data seem particularly relevant when authentication sessions can be relayed across arbitrary contexts.

**Why I'm Reaching Out Collaboratively**

I want to emphasize that this isn't a security disclosure or an attempt to create alarm. I believe I've discovered something the service provider already knows and has chosen not to remediate for what they describe as balancing "security, usability, and implementation complexity."

My interest is in understanding the broader ecosystem: How does Estonia's supervisory framework evaluate such trade-offs? What incidents or near-misses has RIA observed that might illuminate how this vulnerability manifests in practice? Are there compensating controls or monitoring systems in place that aren't visible from external analysis?

As Dr. Arnis Paršovs has eloquently argued, there's often a gap between technical security capabilities and institutional willingness to implement them when convenience and competitive positioning enter the equation. I'm curious whether RIA has observed this dynamic in the Smart-ID ecosystem—particularly given the ownership structure where major banks have stakes in the service provider, potentially creating incentives to prioritize adoption metrics over security friction.

**Context on Timing and Motivation**

My research timeline coincides with a period of significant fraud activity in the Estonian market. The shift from password cards to Smart-ID in 2019 appears to have created new attack surfaces that remote social engineers actively exploit. While banks have implemented some mitigations (LHV's Control Code matching being a notable example), the underlying architectural limitation remains: users are still asked to "be careful" rather than being protected by protocol design.

I'm particularly interested in whether RIA has observed attackers exploiting the Smart-ID issuance process itself—another vector that's emerged in recent incidents—or whether the focus has remained primarily on authentication-phase attacks.

**What I'm Offering**

I'm happy to share my technical findings, attack chain models, and comparative analysis against standards like NIST SP 800-63-4 and the EUDI Wallet Architecture Reference Framework. I've also explored what a migration path to FIDO2/WebAuthn with Cloud Signature Consortium integration might look like for achieving Qualified Electronic Signature status without the current architectural compromises.

My goal isn't to criticize from the sidelines but to contribute to a security ecosystem that Estonia has worked hard to build. If there's value in a researcher who has spent months modeling these attack scenarios participating in broader discussions about authentication security, I'm eager to engage constructively.

**A Respectful Request**

Would someone on your security or digital identity team be open to a conversation—either via email exchange or a brief call—about RIA's perspective on these architectural questions? I'm not seeking confidential operational details or anything that would compromise security. I'm simply looking to understand:

- Whether my technical assessment aligns with RIA's internal understanding
- What incident patterns you've observed that might validate or challenge my attack models
- Whether there are roadmap considerations for strengthening origin binding in Estonia's authentication infrastructure

I recognize that as a national CERT and supervisory authority, you navigate complex relationships with service providers, financial institutions, and international regulatory bodies. I'm approaching this with genuine curiosity and a desire to contribute positively to the security discourse.

**Closing Thoughts**

Estonia's digital infrastructure is genuinely impressive, and RIA's role in maintaining it is no small responsibility. I've chosen to reach out directly rather than publish speculatively because I believe constructive dialogue between independent researchers and oversight bodies ultimately produces better outcomes than adversarial disclosure.

If there's a more appropriate channel for this type of inquiry—perhaps through CERT-EE's research liaison or a specific working group on authentication standards—I'd be grateful for guidance on how to engage most productively.

Thank you for the work you do securing Estonia's digital frontier. I look forward to hearing from you, and I'm happy to provide any additional technical context or references that would be helpful.

With respect and curiosity,

[Your Full Name]
Independent Security Researcher
[Email Address] | [LinkedIn/Research Profile]
Tallinn, Estonia

---

**P.S.** I've included a brief technical appendix below summarizing my testing methodology and key references, in case it's useful for routing this inquiry to the appropriate technical contacts within RIA.

**Technical Appendix (Summary)**

*Research Framework:* OutSmart-ID – Containerized phishing framework using Browser-in-The-Browser (BiTB) techniques, Dockerized Chromium orchestration, noVNC streaming, and custom Golang reverse proxy for session extraction.

*Key Finding:* Smart-ID+ lacks cryptographic origin binding; authentication relies on visual Control Code verification without channel-binding protocols that would prevent relay attacks.

*Comparative Baseline:* FIDO2/WebAuthn and client-authenticated TLS (ID-card) provide inherent origin binding that cryptographically prevents the relay vectors demonstrated against Smart-ID+.

*Vendor Position:* Service provider acknowledges architectural limitation but classifies as "accepted risk" requiring balance between "security, usability, and implementation complexity" (per December 5, 2025 correspondence).

*Standards Context:* NIST SP 800-63-4 phishing-resistant requirements; eIDAS Article 19 risk-proportionate security; EUDI Wallet ARF channel binding specifications.