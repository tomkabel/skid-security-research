# Smart-ID Security Research

<div align="center">

[![View Documentation](https://img.shields.io/badge/View-Documentation-brightgreen?style=for-the-badge&logo=github)](https://tomkabel.github.io/skid-security-research/)
[![Live Documentation](https://img.shields.io/badge/Live-Documentation-blueviolet?style=for-the-badge&logo=read-the-docs)](https://tomkabel.github.io/skid-security-research/)

[![GitHub Stars](https://img.shields.io/github/stars/tomkabel/skid-security-research?style=for-the-badge)](https://github.com/tomkabel/skid-security-research/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/tomkabel/skid-security-research?style=for-the-badge)](https://github.com/tomkabel/skid-security-research/network/members)
[![License: CC-BY-4.0](https://img.shields.io/badge/License-CC--BY--4.0-blue?style=for-the-badge)](LICENSE)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](docs/LICENSE)

</div>

---

## Research Overview

This repository contains independent security research examining authentication architectures, vulnerability patterns, and regulatory compliance considerations for electronic identification systems. The research uses Smart-ID as a case study for analyzing broader questions in trust service provider security.

### Focus Areas

- Cryptographic origin binding in cross-device authentication flows
- QR-based authentication security models and attack vectors
- FIDO2/WebAuthn standards comparison and alignment
- Man-in-the-middle vulnerabilities in out-of-band authentication
- eIDAS and GDPR regulatory compliance frameworks
- Migration paths from proprietary to standards-based solutions

---

## Documentation Website

The project includes a full documentation website built with VitePress, automatically deployed to GitHub Pages.

### Access the Research

**Live Documentation**: [https://tomkabel.github.io/skid-security-research/](https://tomkabel.github.io/skid-security-research/)

### Local Development

```bash
cd docs
npm install
npm run dev
```

### Production Build

```bash
cd docs
npm run build
```

The built site will be in `docs/.vitepress/dist/`.

### Deployment

The documentation automatically deploys to GitHub Pages via GitHub Actions on every push to `main`.

---

## Repository Structure

```
.
├── docs/                         # VitePress documentation website
│   ├── .vitepress/
│   │   └── config.ts            # VitePress configuration
│   ├── core-analysis/           # Primary research documents
│   ├── technical-analysis/      # Security measures and vulnerabilities
│   ├── supplementary-research/  # Supporting research papers
│   ├── opinion-editorials/      # Editorials and expert opinions
│   ├── regulatory-reference/    # Legal and regulatory materials
│   ├── archived/                # Historical documents and summaries
│   ├── index.md                 # Home page
│   └── package.json
├── LICENSE                       # CC-BY-4.0 license for research content
└── README.md
```

---

## Key Findings

### Authentication Security

The research examines how cross-device authentication flows handle cryptographic binding between the browser session and the mobile authenticator. Key technical considerations include:

1. **Origin Binding**: Cryptographic binding of authentication credentials to the specific relying party origin
2. **Channel Binding**: Linking the authentication operation to the underlying TLS session
3. **User Intent Verification**: Mechanisms to verify user presence and intent beyond passive confirmation

### Standards Alignment

Comparison with established standards reveals areas where current implementations may diverge from industry best practices:

- **FIDO2/WebAuthn** provides cryptographic origin binding at the protocol level
- **NIST SP 800-63-4** defines phishing resistance requirements for Authenticator Assurance Level 3
- **eIDAS Article 24** requires trust service providers to use trustworthy systems

### Regulatory Considerations

Relevant regulatory instruments include:

- **eIDAS Regulation**: Requirements for qualified trust service providers
- **GDPR Articles 25 and 32**: Data protection by design and security of processing
- **Estonian EUTS**: National implementation of eIDAS requirements

---

## Recommendations

### For Service Providers

1. Implement cryptographic origin binding for high-assurance authentication
2. Evaluate FIDO2/WebAuthn as standards-based alternatives
3. Conduct regular security assessments aligned with NIST frameworks

### For Policymakers

1. Clarify liability frameworks for authorized push payment fraud
2. Establish minimum security requirements beyond visual verification
3. Align national requirements with EU eIDAS implementation guidance

---

## Methodology

The research employs standard security analysis methodologies including:

- Comparative standards analysis
- Architecture review against established frameworks
- Offensive security testing in controlled environments

---

## References

- NIST SP 800-63-4 (Digital Identity Guidelines)
- FIDO Alliance Phishing-Resistant Authentication Standards
- eIDAS 2.0 / EUDI Wallet Architecture Reference Framework
- ENISA Cybersecurity Guidelines for Trust Services

---

## Licensing

### Research Content (CC-BY-4.0)

All research documents, analysis, and written content are licensed under [Creative Commons Attribution 4.0 International (CC-BY-4.0)](LICENSE). This allows sharing, adapting, and commercial use with proper attribution.

### Code Components (MIT)

The documentation website build system and configuration files (located in `docs/`) are licensed under the [MIT License](docs/LICENSE).

### Third-Party Materials

Any third-party code, research papers, or materials included in this repository maintain their original licenses.

---

## Disclaimer

This research is provided for educational and informational purposes only. All findings have been disclosed through appropriate responsible disclosure channels.

---

## Security Researcher

This repository represents independent security research by Tom Kabel.