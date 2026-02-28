Subject: Smart-ID+ QR authentication / QRLJacking risk

Hi RIA Security team,

I'm an independent security researcher here in Tallinn, and I've been poking around the Smart-ID+ architecture lately. Specifically, I was looking at the QR code authentication flow.

From what I can see from the outside, the QR codes seem to be completely context-less. The mobile app doesn't cryptographically verify the origin of the request, which obviously leaves the door pretty wide open for QRLJacking. You know the drill—an attacker relays a legit QR code from a target service to a victim. The victim scans it thinking they're logging into Service A, but they actually just authenticated the attacker's session on Service B.

I'm reaching out because I want to see how RIA views this. Is this an accepted risk in your current threat model? I'm curious if you guys have explored origin-binding mechanisms for this. Maybe embedding origin info in the payload that the app actually validates, or something closer to FIDO2's origin binding?

I'm not trying to drop a surprise zero-day on you or anything. Honestly, I might just be missing an invisible backend check here. Or maybe there are strict UX trade-offs you ran into when building this out? It's a tricky balance.

If someone on the architecture team has 10 minutes to chat about this over email, I'd really appreciate it. I'm happy to share the specific attack scenarios I modeled out.

Best,

[Your Name]
Independent Security Researcher
[Email] | [LinkedIn/Twitter if applicable]

P.S. If this should go straight to CERT-EE instead, just let me know and I'll forward it over.