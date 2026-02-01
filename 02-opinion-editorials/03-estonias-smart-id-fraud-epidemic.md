### Module: 1. Title Selection

* **Core Argument:** The title must immediately establish the premise that the current fraud crisis is not accidental but the result of a deliberate design choice ("programmed risk") by the system's architects. It frames the issue as an institutional betrayal rather than individual user negligence.
* **Evidence Application:** Synthesizes the SK ID email admission ("consciously accepted risk") into a headline concept.
* **Rhetorical Strategy & Justification:** Using "Consciously Accepted Risk" (*Teadlikult aktsepteeritud risk*) directly challenges the bank narrative of "User Negligence." It shifts the frame from a crime story to a governance scandal. The subtitle links this technical flaw directly to the user's financial loss, making the abstract technical issue personal and urgent.
* **Drafting Notes:** Use strong, high-register journalistic Estonian. Avoid clickbait; aim for "Investigative Exposé."
* **Content (Estonian):**
    **Teadlikult aktsepteeritud risk: Miks teie pangakonto tühjendamine on sisseprogrammeeritud valik?**

---

### Module: 2. Section 1: The Myth of E-Estonia's Impenetrable Fortress

* **Core Argument:** The narrative of Estonia's secure "e-state" is crumbling under a wave of fraud that authorities dismiss as user error. This section argues that the sheer scale of losses (millions) proves a systemic failure, not a sudden epidemic of stupidity among the population.
* **Evidence Application:** implicit reference to rising fraud statistics post-2019 and the standard bank response ("gross negligence").
* **Rhetorical Strategy & Justification:** The "Hook." It starts with a relatable scenario (checking a balance) and twists it into a nightmare. It employs the "Talupojatarkus" (Peasant Wisdom) approach: if everyone is getting robbed, the problem is the lock, not the homeowner. This sets the stage for the technical pivot in the next section.
* **Drafting Notes:** Tone is empathetic to the user but clinical about the situation. Use terms like "digitaalne utoopia" (digital utopia) and "raske hooletus" (gross negligence).
* **Content (Estonian):**
    Eesti e-riigi edulugu on rajatud usaldusele. Meile on aastaid räägitud, et elame digitaalses kindluses, kus kodanik saab ajada asju turvalisemalt kui paberil. Kuid alates 2019. aastast on see müüt murenenud miljonite eurode väärtuses. Stsenaarium on alati sama: inimene saab teavituse, sisestab harjumuspäraselt PIN1-koodi ja hetk hiljem on tema elusäästud kadunud.

    Pangad ja ametiasutused nimetavad seda ohvri "raskeks hooletuseks". Nad väidavad, et kasutaja andis vabatahtlikult kurjategijale võtmed. Kuid kas on tõenäoline, et tuhanded eestlased muutusid üleöö hooletuks, või on meie digitaalsesse vundamenti tekkinud pragu? Tõde on karmim kui lihtne kuritegevusstatistika. See ei ole kasutajate massiline rumalus, vaid süsteemne arhitektuurne praak, mida serveeritakse meile mugavusteenusena. Meie digitaalne lukk on katki, ja mis kõige hullem – lukuvalmistaja teab seda.

---

### Module: 3. Section 2: SK ID Solutions' Calculated Architectural Betrayal

* **Core Argument:** Smart-ID's vulnerability to relay attacks is not a bug, but a feature. SK ID Solutions prioritized User Experience (UX) over security (origin binding), creating a "decoupled" system where the user approves a transaction without cryptographically verifying its source.
* **Evidence Application:** **Crucial Turning Point.** Direct citation of the SK ID email ("teatud perioodiks oleme seda riski teadlikult aktsepteerinud"). References the "Disputed" QRLJacking CVE and the "OutSmart-ID" PoC logic.
* **Rhetorical Strategy & Justification:** This is the "Indictment." It moves from the symptoms (Section 1) to the root cause. By quoting the email, we move from speculation to fact. The strategy is to explain technical concepts (Man-in-the-Middle) using simple analogies (signing a check blindly) to make the negligence clear to non-technical readers.
* **Drafting Notes:** Maintain forensic precision. Do not attack "Natalja" (the email sender) personally; frame her words as the official stance of the monopoly. Use bold formatting for the key admission.
* **Content (Estonian):**
    Probleemi tuum ei peitu häkkerite geniaalsuses, vaid Smart-ID lahenduse arhitektuuris, mille ainuvalitsejaks on SK ID Solutions AS. Tehniliselt on tegemist "päritolu sidumise" (origin binding) puudumisega. Erinevalt ID-kaardist, mis nõuab füüsilist kohalolu ja brauseri sidet, on Smart-ID "lahtisestotud" lahendus. See võimaldab ründajal seista kliendi ja panga vahel (*Man-in-the-Middle*), vahendades päringuid reaalajas.

    See ei ole teoreetiline "auk", vaid disainivalik. Kui turvaeksperdid juhtisid tähelepanu Smart-ID vastuvõtlikkusele vahendusrünnetele (nagu QRLJacking), ei olnud vastuseks üllatus, vaid küüniline tunnistus. SK ID Solutionsi sisekirjavahetusest, mis on jõudnud vastutustundliku avalikustamise raames ekspertideni, vaatab vastu jahmatav lause: **"teatud perioodiks oleme seda riski teadlikult aktsepteerinud."**

    Lugege seda uuesti. Teenusepakkuja, kelle käes on terve riigi digitaalne identiteet, valis teadlikult turvaaugu säilitamise, et mitte ohverdada kasutusmugavust (UX). Kontrollkoodide süsteem, mida meile pakutakse "turvameetmena", on sisuliselt teater. See delegeerib vastutuse krüptograafialt inimesele, nõudes kasutajalt eksimatut tähelepanu olukorras, kus süsteem ise peaks pakkuma kaitset. See on nagu ukselukk, mis avaneb ka võõra võtmega, eeldades, et omanik seisab alati ise ukse kõrval ja kontrollib tulijat nägupidi.

---

### Module: 4. Section 3: Banks' Complicit Convenience Cartel

* **Core Argument:** Banks (Swedbank, SEB, Luminor) are not passive victims; they are the owners of SK ID Solutions. They benefit from the cheaper Smart-ID system while shifting fraud liability to customers. They act as a cartel, resisting security upgrades that might impact "competitiveness."
* **Evidence Application:** Ownership structure of SK ID. Contrast between LHV (attempting security via code matching) vs. the owners' refusal of "Smart-ID+ QR".
* **Rhetorical Strategy & Justification:** "Follow the Money." This section dismantles the bank's defense of "we just use the tool." It exposes the conflict of interest: The entities profiting from the cheap transaction method (banks) are the same ones deciding the security level (SK ID owners).
* **Drafting Notes:** Use terms like "huvide konflikt" (conflict of interest) and "mugavuskartell" (convenience cartel). Highlight the hypocrisy of dismantling secure hardware tokens for this app.
* **Content (Estonian):**
    Miks on selline riskantne arhitektuur üldse lubatud? Siin tuleb vaadata SK ID Solutionsi omanikeringi: Swedbank, SEB ja Luminor. Pangad ei ole siin ohvrid, vaid kasusaajad. Nad on aastate jooksul süstemaatiliselt lammutanud turvalisemaid, kuid kallimaid autentimisviise (paroolikaardid, riistvaralised tokenid), asendades need odava ja mugava äpiga.

    Tekkinud on perversne huvide konflikt. Pangad, kes peaksid kaitsma meie raha, omavad ettevõtet, mis loob turvastandardid. Nad on loonud süsteemi, kus tehingute kiirus ja maht toodavad kasumit, kuid paratamatu pettuserisk on täies ulatuses veeretatud kliendi õlule. Kui LHV on püüdnud juurutada täiendavat kontrolli (nt koodide sobitamine maksetel), siis suurpangad on tõrjunud turvalisemaid lahendusi (nagu QR-koodi põhine sessioonisidumine), viidates "konkurentsivõimele". Sisuliselt on loodud mugavuskartell, kus turvalisus on teisejärguline, sest kahjud ei tule panga kasumi arvelt, vaid tavainimese rahakotist.

---

### Module: 5. Section 4: Regulators' Paralysis Amid Known Perils

* **Core Argument:** Regulatory bodies (RIA, TTJA) are failing their mandate. By allowing "risk acceptance" in a High Level of Assurance (LoA) tool, they are violating the spirit of eIDAS and GDPR. Inertia prevails despite known solutions (FIDO2).
* **Evidence Application:** Comparison to "state of the art" requirements in regulations.
* **Rhetorical Strategy & Justification:** This targets the "Watchmen." It questions the legitimacy of the "Qualified Signature" status if the tool is known to be vulnerable. It accuses the state of passivity—waiting for a catastrophe instead of preventing it.
* **Drafting Notes:** Tone shifts to legal/administrative critique. Keywords: *järelevalve* (supervision), *kõrge usaldusväärsuse tase* (high assurance level), *hambutu* (toothless).
* **Content (Estonian):**
    Veelgi murettekitavam on riikliku järelevalve – Riigi Infosüsteemi Ameti (RIA) ja Tarbijakaitse ja Tehnilise Järelevalve Ameti (TTJA) – halvatus. Kuidas saab teenus, mille arendaja tunnistab "teadlikult aktsepteeritud riske", omada kõrgeimat usaldusväärsuse taset (High LoA)?

    Euroopa eIDAS määrus ja GDPR nõuavad "turvalisust disaini kaudu" (*security by design*). Ometi on regulaatorid vaadanud pealt, kuidas Smart-ID arhitektuurijulgeolek on jäänud maha moodsast standardist (FIDO2/WebAuthn), mida kasutavad tehnoloogiahiiud nagu Google ja Apple. Kui miljardite dollaritega tehnoloogiafirmad peavad päritolu sidumist (origin binding) elementaarseks, siis miks Eesti regulaatorid lubavad meie e-riigi alustalal opereerida madalamate standarditega? "Riskianalüüs" ei ole vabandus turvaaugu jätmiseks, eriti kui see auk on kurjategijate peamine sissetungitee. Riigi tegevusetus on muutnud nad vaikivaks kaasosaliseks selles "digitaalses taskuvarguses".

---

### Module: 6. Section 5: Stalled Reforms and Doomsday Forecast

* **Core Argument:** Without intervention, the fraud epidemic will continue until trust in the e-state evaporates. The promise of "analyzing solutions" (from the email) is a stalling tactic.
* **Evidence Application:** Reference the vague timeline in the email ("taking time to analyze") vs. the immediate threat.
* **Rhetorical Strategy & Justification:** The "Doomsday Scenario." Connects the loss of money to the loss of trust. If people stop trusting the e-ID, the digital society fails. This raises the stakes from financial loss to existential threat for the state.
* **Drafting Notes:** Urgent tone. Contrast "analüüsimine" (analyzing) with "tegutsemine" (acting).
* **Content (Estonian):**
    SK ID Solutionsi vastused kriitikale on olnud ümarad: "analüüsime lahendusi" ja "otsime tasakaalu". See on bürokraatlik venitamistaktika. Samal ajal, kui nemad "analüüsivad", tühjenevad Eesti perede kontod.

    Kui see epideemia ei lõppe, seisame silmitsi palju suurema ohuga kui raha kaotus – see on usalduse kollaps. Kui Smart-ID kvalifitseeritud staatus tuleks turvaintsidentide tõttu tühistada, paiskaks see Eesti digiriigi kaosesse. Meie sõltuvus ühest monopoolsest, turvalisuse osas kompromisse tegevast teenusepakkujast on muutunud riiklikuks julgeolekuriskiks. Me ei saa oodata, kuni "mugavus" on söönud ära viimasegi riisme meie digitaalsest turvatundest.

---

### Module: 7. Section 6: Urgent Remedies (Enforceable Blueprint)

* **Core Argument:** Concrete demands. RIA must issue a precept. Banks must enforce code matching/QR immediately. SK ID must migrate to FIDO2 standards.
* **Evidence Application:** FIDO2/WebAuthn as the viable, existing alternative that disproves the "it's too hard" excuse.
* **Rhetorical Strategy & Justification:** The "Call to Action." Stops complaining and starts commanding. The demands are specific (dates, technologies) to prevent wiggling room. Ends with a return to the "lock" metaphor for a satisfying conclusion.
* **Drafting Notes:** Imperative mood. Clear, list-like demands (implied). Final sentence must be memorable.
* **Content (Estonian):**
    On aeg lõpetada ohvrite süüdistamine ja nõuda vastutust arhitektidelt. Lahendus ei ole utoopiline, see on tehnoloogiliselt olemas ja standardiseeritud (FIDO2/WebAuthn).

    Esiteks, RIA peab väljastama konkreetse ettekirjutuse: Smart-ID peab hiljemalt 2026. aasta veebruariks implementeerima krüptograafilise konteksti sidumise. Teiseks, pangad peavad koheselt muutma kohustuslikuks kontrollkoodide automaatse sobitamise või QR-põhise autentimise, lõpetades ebaturvalise "lihtsa" sisselogimise toetamise.

    Me ei saa nimetada end digiriigiks, kui meie digitaalsed võtmed on disainitud nii, et neid saab varastada. On aeg lõpetada teater, tunnistada "teadlikult aktsepteeritud" viga ja parandada lukk enne, kui meil pole enam midagi, mida lukustada.
