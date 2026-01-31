# Additional security measures

This page lists additional security measures which can be deployed by the RP in order to protect from phishing threats and attacks.

## Anonymous flows and user identifiers

Commonly Smart-ID is used together with national identity numbers, however these national identity numbers might not be secret and could be enumerated. A better approach is to use anonymous device links which require the user to initiate the authentication process.

If the anonymous device links can’t be used for some reason, then the RP may ask for national identity number and a non-public identifier as well. This non-public identifier can be a username the users can choose, the account contract number or something else only the user knows.

## Keeping track of trusted and unknown browsers

A useful security measure is to keep track of trusted browser instances for each user. This allows the RP to take different actions whenever the user is connecting from their usual (trusted) browser or attempting to log in from a previously unseen, unknown browser. In case of the latter, an attacker may be attempting a phishing attack and the RP could ask for more information or alert the user.

**IMPORTANT**

Using the User-Agent field for device/browser identification is not secure and should be avoided as it can be easily spoofed by a malicious party.

The following are recommendations for setting up tracking for trusted and unknown browsers:

* The tracking must be done with an HTTP cookie (or with similar client-side storage features supported by modern browsers) with the content of randomly generated identifier (trackingID).
* The fact about placing such a cookie in the browser of the user must be declared in the public cookie policy.
* The RP database must keep previously seen browsers with the randomly generated identifier hash (hashedTrackingID), and the RP may allow the user to edit the names of the known browsers.
* The browser cookie must be set with Secure and HttpOnly flags, and the scope of the cookie must be the URL of the RP’s website.
* The RP website or app must allow the user to invalidate all the cookies on the RP server.
* A simple algorithm to set the hashedTrackingID for the user and browser combination can be used:
  * If a valid trackingID is not present, and authentication succeeds, set the trackingID and save it in the database for the particular user’s personal number and browser combination.
  * If a valid trackingID for the particular user and browser combination is present, the browser can be trusted.
* Additional security measures can be used if a new connection from an unknown browser is made, such as:
  * asking for the user’s national identity number,
  * sending an email or notification alert to the user,
  * using a different displayText for the authentication session such as "Authentication started from an unknown browser. Are you using a new computer?".

## Keeping track of suspicious and malicious IP addresses

When a user connects to the RP’s website or the app, it connects from the IP address of the user’s device. In case an attacker makes the connection or in case the attacker proxies the connection, the RP will see the attacker’s or proxy’s IP address.

There are commercial services that can provide general information about IP addresses. For example, they can tell if the IP address is known to be used for:

* sending spam messages, which may indicate the user connecting from such an IP address might be using a compromised computer,
* is known to be an open HTTP proxy host, which may indicate that the user connecting from such an IP address might be using a compromised computer or that an attacker might be using this host to proxy their connection to the RP’s website or the app,
* is known to be used as a TOR exit node or an anonymizing VPN service, which may indicate that the attacker could be using this to hide their connection to the RP’s website or the app,
* is known to be an IP address of a hosting provider, data-centre or content delivery network, which may indicate that the requests might be used to perform denial-of-service or data mining attacks.

In addition to such commercial services, RP’s own incident resolution team or security monitoring team could provide a list of IP addresses that are related to known incidents or suspicious activities.

Additional security measures can be used if the IP address is determined to be suspicious, such as:

* sending an email or notification alert to the user,
* using a different displayText for the authentication session such as "Authentication started from a suspicious IP address. Are you authenticating to <https://rp.example.com>?",
* limiting the maximum allowed transaction amount for that session,
* requiring additional verification such as a one-time challenge sent to the user’s mobile phone or email address,
* performing a CAPTCHA verification,
* block connections from malicious IP addresses.

## Allowing users to verify operations

It is important to give the user an option to see the history of their actions. For example when the user logged in, what operations the user has executed, what orders the user has placed and so on. This provides the user visibility and transparency about what is happening on their account. It also provides an opportunity to see actions or operations the user doesn’t recognize and that could point to security incidents.

RPs must allow the user to download digitally signed documents that were created after entering PIN2. This applies to any operation that uses PIN2 for additional consent. For example, after signing the terms and conditions for the e-service or when signing a transfer order on the RP’s website the user must be allowed to download the signed document. This allows the signer to verify contents of the signed document.

### Monitoring usage patterns

RP should record enough information about connections and operations users regularly attempt on the RP’s website or app. It is then possible to apply log analysis and other security intelligence to the available information (and cross-reference with other data sources) to deduce with some certainty that:

* there is an ongoing attack;
* some source (IP address, browser, phone number, e-mail address) behaves in a weird way and perhaps should be more closely monitored or added to a blocklist;
* some logs might indicate that there’s an unknown vulnerability in the RP’s website.

## Responding to security incidents

Procedures to respond to fraud and security incidents must be developed and communicated and practiced within the RP organization. The RP must be familiar with services and guidelines from law enforcement authorities and other bodies. It is useful to establish contacts with these organizations before the urgent need arises. Good opportunity to do that is to participate in exercise sessions with the local cyber defence league unit.

## Personal data processing

Some security measures described in this document require processing additional data about users (for example, which IP addresses they have used) and require placing additional information on their browser cookies. This means that the RP must re-evaluate their personal data processing guidelines and public policies.

Preferences cookies which are mentioned above for tracking trusted and unknown browsers require users' consent, and the information about using the cookie must be declared in the public cookie policy.

For processing personal data, the RP must make sure that they have a lawful basis for doing so (see GDPR art 6(1)). In case the processing is likely to result in a high risk to the rights and freedoms of data subjects a data protection impact assessment (DPIA) must be carried out. It is also useful to review the RP’s privacy policy and update it with relevant information.
