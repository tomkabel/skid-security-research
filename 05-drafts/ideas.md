# Draft Ideas and Concepts

## 5. Evidence: "Security Theater" – Cosmetic Cryptography

Here's the cynical part: SK ID's "solutions" (visual verification codes) don't solve the problem—they just create a false sense of security.

When faced with criticism, SK ID added colorful icons and verification codes to the user interface. They told us: "Check if the image on your phone matches the one on your computer screen."

That's security theater. Why? Because QRLJacking is about real-time relaying.

When an attacker sits between you and the bank, they don't show you a random code. They load the real QR code from the real bank website in the background, display it on their fake page, and when the system generates a control code (like "0424"), the attacker automatically displays that same code. The numbers match on your phone and the attacker's page. You click "Yes"—and you're caught.

SK ID engineers know perfectly well that without cryptographic binding between the browser and phone (Channel Binding), any visual check is just decoration. They chose a cheap visual change that looks good in marketing materials, instead of building an expensive but secure backend solution. They gave us a broken car but painted the door handles red, claiming the vehicle is now safe. That's deliberate deception.

## 6. Evidence: The Proprietary Trap – Why is FIDO2 Taboo?

Ask yourself: why does a small Estonian company reinvent the wheel when the world is already driving FIDO2 race cars?

There's an open, royalty-free standard called FIDO2/WebAuthn. This is the technology used by Google, Microsoft, and Apple. It was built from the ground up to be phishing-resistant. It makes man-in-the-middle attacks mathematically impossible because the key and domain are cryptographically bound.

SK ID knows this. But SK ID refuses to integrate FIDO standards into their core. Why? Because it would break their business model.

Smart-ID is built on a proprietary, closed protocol. That's "Vendor Lock-in"—forcing banks and service providers to depend on a specific vendor. If they switched to open FIDO2 standards, they'd lose their unique selling argument. Security would mean competition. By keeping their vulnerable but unique "legacy" technology, they protect their market share, sacrificing user safety on the altar of profit. We're attacked not because technology doesn't exist, but because the monopoly is greedy to keep their closed garden.

## 7. Evidence: The User as "Biological Firewall"

The most shocking evidence is hidden in Smart-ID's terms and design philosophy. There's a silent agreement: SK ID's system can't technically distinguish an attacker from a bank, so they've delegated that task to you—the user.

They assume that an ordinary user—a tired nurse after a 12-hour shift or a rushing mother with a stroller—can audit a web address (URL) and notice that "seb.ee" has become "seb-login-secure.net." That's absurd. Security research has repeatedly proven that the human eye cannot distinguish high-quality fraud in a tense situation.

This is a design choice: making humans the last line of defense—the "biological firewall." This is an admission of technological bankruptcy. An autopilot shouldn't let a plane crash just because the pilot was sleepy for a moment. But Smart-ID does exactly that—the system lets the attacker in, leaves the door open, then blames the homeowner for not looking at the intruder with sufficient hostility.

SK ID built a system where the machine's job—verifying authenticity—is pushed onto humans. And when humans fail (which is inevitable), the service provider washes their hands. This isn't a service. It's a trap.
