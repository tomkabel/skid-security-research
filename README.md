# Smart-ID Security Research of electronic identification security

A technical analysis in the context of Estonian digital identity infrastructure.

---

## Overview

This repository contains security research examining authentication architectures, vulnerability patterns, and regulatory compliance considerations for electronic identification systems. The research focuses on technical analysis of Smart-ID as a case study for examining broader questions in trust service provider security.

---

## Research Focus Areas

### Technical Analysis
- Cryptographic origin binding in cross-device authentication flows
- QR-based authentication security models
- Comparison with FIDO2/WebAuthn standards
- Man-in-the-middle attack vectors in out-of-band authentication

### Regulatory Framework
- eIDAS Regulation (EU) 910/2014 compliance requirements
- NIST SP 800-63-4 authentication assurance levels
- GDPR data protection obligations for trust service providers
- Estonian EUTS implementation requirements

### Strategic Considerations
- Migration paths from proprietary authentication to standards-based solutions
- Public awareness effectiveness in fraud mitigation
- Liability frameworks for relying parties

---

## Documentation Website

This research project includes a documentation website built with **VitePress**, hosted on GitHub Pages.

### Viewing the Research

The documentation is available at: `https://[username].github.io/[repo-name]/`

### Local Development

To run the documentation site locally:

```bash
cd docs
npm install
npm run dev
```

### Building for Production

```bash
cd docs
npm run build
```

The built site will be in `docs/.vitepress/dist/`.

### Deployment

The site automatically deploys to GitHub Pages via GitHub Actions on push to main.

---

## Repository Structure

```
.
├── docs/                         # Documentation website (VitePress)
│   ├── .vitepress/
│   │   └── config.ts            # VitePress configuration
│   ├── core-analysis/           # Primary research documents
│   ├── technical-analysis/      # Security measures and vulnerabilities
│   ├── supplementary-research/  # Supporting research papers
│   ├── opinion-editorials/      # Editorials and expert opinions
│   ├── regulatory-reference/    # Legal and regulatory materials
│   ├── archived/               # Historical documents and summaries
│   ├── index.md                # Home page
│   └── package.json
├── docs/01-core-analysis/            # Primary technical research (source)
├── docs/02-opinion-editorials/       # External analysis and commentary (source)
├── docs/03-technical-analysis/       # Implementation guidance (source)
├── docs/04-supplementary-research/   # Supporting research materials (source)
├── docs/07-regulatory-reference/     # Laws, acts, and regulations (source)
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

- FIDO2/WebAuthn provides cryptographic origin binding at the protocol level
- NIST SP 800-63-4 defines phishing resistance requirements for Authenticator Assurance Level 3
- eIDAS Article 24 requires trust service providers to use trustworthy systems

### Regulatory Considerations

Relevant regulatory instruments include:

- **eIDAS Regulation**: Requirements for qualified trust service providers
- **GDPR Articles 25 & 32**: Data protection by design and security of processing
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

This repository uses dual licensing to appropriately cover different types of content:

### Research Content (CC-BY-4.0)
All research documents, analysis, and written content in this repository are licensed under [Creative Commons Attribution 4.0 International (CC-BY-4.0)](LICENSE). This license allows anyone to:
- Share — copy and redistribute the material in any medium or format
- Adapt — remix, transform, and build upon the material for any purpose, even commercially
- With proper attribution to the original work

### Code Components (MIT)
The documentation website build system and configuration files (located in `docs/`) are licensed under the [MIT License](docs/LICENSE). This permissive license allows maximum reuse of the technical implementation.

### Third-Party Materials
Any third-party code, research papers, or materials included in this repository maintain their original licenses. Please refer to individual files or subdirectories for specific licensing information.

---

## Disclaimer

This research is provided for educational and informational purposes. All findings have been disclosed through appropriate responsible disclosure channels.

---

**Security Researcher**  
*This repository represents independent security research.*