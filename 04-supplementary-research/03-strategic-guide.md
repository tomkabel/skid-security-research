# Strategic Plan for Opinion Editorial

**Working Title:** E-riigi mädanenud vundament (The Rotting Foundation of E-Estonia)
**Focus:** SK ID Solutions' responsibility and architectural shortcomings
**Target Audience:** Estonian public, policymakers (RIA, MKM), bank executives, IT community.

---

## 1. Headlines (Pealkiri Ideed)

*Eesmärk on olla provokatiivne, kuid tõsiseltvõetav, tekitades lugejas tunde, et teda on petetud.*

1. **"Smart-ID 'teadlik valik': Miks teie pangakonto tühjendamine on sisseprogrammeeritud risk?"** (Rõhk disainivalikul)
2. **"Mugavuse altaril ohverdatud turvalisus: SK ID Solutionsi ohtlik monopol."** (Rõhk monopoolsel seisundil)
3. **"E-riigi lahtine tagauks: Meil on tõendid, et nad teadsid turvaaugust, aga ei parandanud seda."** (Uuriv/paljastav toon)
4. **"Miks Smart-ID kaitseb endiselt 2017. aasta ohtude eest, kui kurjategijad elavad aastas 2026?"** (Rõhk innovatsiooni puudumisel)
5. **"Nutikas lõks: Kuidas SK ID Solutions tegi identiteedivargusest triviaalne."** (Lühike ja lööv)

---

## 2. Structural Outline (Struktuurne Kava)

### I. Sissejuhatus: Müüdi purunemine

* **Konks (Hook):** Alusta terava kontrastiga Eesti "digitaalse eduloo" maine ja reaalse pettuste epideemia vahel. Maini, et ohver ei ole enam "loll kasutaja", vaid süsteemse hooletuse ohver.
* **Probleemi ümberdefineerimine:** Lükka ümber väide, et pettused on vaid pankade või kasutajate probleem.
* **Tees (Thesis):** Pettuste laviin ei ole vääramatu jõud, vaid SK ID Solutionsi (SK) teadlike arhitektuuriliste valikute ja monopoolse mugavustsooni otsene tagajärg. Nad eelistavad UX-i (kasutajakogemust) turvalisusele.

### II. Arhitektuuriline analüüs: "Uks on lukus, aga sein puudub"

* **Tehniline sisu lihtsas keeles:** Selgita *QRLJacking* ja *Man-in-the-Middle* (MitM) rünnakute olemust Smart-ID kontekstis.
* **Kriitika tuum:** Süsteemil puudub *Context Binding* (seose loomine reaalse seadme ja sessiooni vahel). Smart-ID "eeldab" usaldust, selle asemel et seda matemaatiliselt tõestada (nagu teevad FIDO2/WebAuthn standardid).
* **Smart-ID+ müüt:** Selgita, miks isegi "uus" lahendus on poolik rehkendus, kui see ei lahenda fundamentaalset sessiooni sidumise probleemi.

### III. "Suitsev püstol": Tõendid teadlikust hooletusest

* **Uuriv element:** Tsiteeri 5. detsembri 2025 kirjavahetust. See on artikli emotsionaalne ja juriidiline raskuskese.
* **Tsitaadi analüüs:** Fraas "oleme seda riski teadlikult aktsepteerinud" tähendab, et inimeste rahaline häving on SK jaoks aktsepteeritav "kulu" arenduskiiruse nimel.
* **CVE staatus:** Too sisse "DISPUTED" staatus rahvusvahelises andmebaasis. Näita, et SK on ülbelt eitanud probleemi, mida muu maailm peab veaks.

### IV. Monopoli mugavustsoon ja innovatsioonipidur

* **Turupositsioon:** SK ID Solutions on *de facto* monopol. Eestlasel pole valikut (ID-kaart on mobiilis ebamugav, Mobiil-ID hääbub).
* **Mõju turvalisusele:** Monopolil puudub motivatsioon "joosta kiiremini". Kui konkurents puudub, ei pea parandama "teadaolevaid vigu".
* **Äriline prioriteet:** Kasutusmugavus (UX) toob kasu (rohkem tehinguid pankadele), turvalisus toob kulu. SK teenib oma omanikke (panku), mitte Eesti rahvast.

### V. Vastuväidete ennetamine ja ümberlükkamine

* **Vastuväide:** "Turvalisus teeb kasutamise liiga keeruliseks."
* **Ümberlükkamine:** Vale. Kaasaegsed standardid (FIDO2/Passkeys) on *mugavamad* ja turvalisemad. SK pole neid juurutanud laiskusest või tehnilisest võlast, mitte kasutaja huvides.

### VI. Kokkuvõte ja Üleskutse (Call to Action)

* **Kokkuvõte:** SK ID Solutions on jätnud Eesti digitaalse välisukse praokile. See pole viga, see on poliitika.
* **Nõudmine:**
    1. **RIA:** Peab sekkuma ja nõudma SK-lt *context binding* tehnoloogia (mitte ainult visuaalse kontrolli) rakendamist.
    2. **SK ID Solutions:** Peab lõpetama vigade "vaidlustamise" ja tunnistama arhitektuurilist võlga.
    3. **Lõppakord:** Kuni arhitektuuri ei muudeta, on Smart-ID kasutamine "vene rulett" kasutaja varaga.

---

## 3. Argumentatsioonistrateegia (Step-by-Step)

Selleks, et artikkel oleks mõjuv ja eristuks Arnis Parsovsi varasemast kriitikast, tuleb järgida ranget strateegiat.

### Samm 1: Eristumine Parsovsi narratiivist (VÄGA TÄHTIS)

Parsovs ründab panku (*implementeerijaid*). Sina ründad SK ID Solutionsi (*arhitekti*). See nihe on kriitiline, et artikkel ei tunduks kordusena.

**Võrdlustabel: Parsovs vs. Uus Op-Ed (Abel)**

| Aspekt | Arnis Parsovsi nurk (Reference) | Tom Kristian Abeli nurk (Target Op-Ed) |
| :--- | :--- | :--- |
| **Peamine süüdlane** | Pangad (Swedbank, SEB, LHV). | **SK ID Solutions AS** (Teenusepakkuja). |
| **Kriitika sisu** | Pangad ei kasuta olemasolevaid tööriistu (Smart-ID+). | **Tööriistad ise on katki** (Smart-ID ja Smart-ID+ arhitektuur). |
| **Põhiprobleem** | Pankade ahnus ja juriidilise vastutuse puudumine. | **Monopoli tehniline stagnatsioon** ja "Design Flaw". |
| **Pakutav lahendus** | QR-koodide sundrakendamine pankade poolt. | **Krüptograafiline *Context Binding*** (FIDO2/WebAuthn) juurutamine SK poolt. |
| **Rünnakuvektor** | Sotsiaalne manipulatsioon (kasutaja on lollitatav). | **QRLJacking / MITM** (tehniline auk, mida kasutaja ei saagi tuvastada). |

### Samm 2: Tehnilise "vea" tõlkimine "moraalseks valikuks"

Ära jää liiga tehniliseks. Kasuta CVE vaidlustamist ja lekkinud kirjavahetust kui tõendit *moraalsest* pankrotist.

* **Strateegia:** Ära ütle lihtsalt "süsteem on haavatav". Ütle: "Nad teadsid, et see on haavatav, ja otsustasid raha säästa." See muudab tehnilise debati eetikadebatiks, mis kõnetab laiemat lugejaskonda.

### Samm 3: Monopoli kaardi mängimine

Eesti lugeja on tundlik monopolide suhtes (elektrilevi, pangad).

* **Strateegia:** Maali SK ID Solutionsist pilt kui puutumatust valitsejast, kes dikteerib reegleid. "Miks nad peaksid midagi muutma, kui teil pole kuhugi mujale minna?" See tekitab lugejas viha ja mobiliseerib avalikku arvamust.

### Samm 4: "Suitsev püstol" (The Smoking Gun)

Kasuta 5. detsembri 2025 kirjavahetust maksimaalse efektiga.

* **Taktika:** Paiguta see artikli esimesse kolmandikku. See on sinu "scoop" või uudisväärtus. See muudab artikli pelgast arvamusest uurivaks ajakirjanduseks. Tsiteeri täpselt: *"oleme seda riski teadlikult aktsepteerinud"*.

### Samm 5: Lahenduse nõudmine regulaatorilt, mitte turult

Kuna SK on monopol, siis turg (nõudlus/pakkumine) ei paranda olukorda.

* **Strateegia:** Pöördu otse RIA poole. See annab loole riikliku julgeoleku mõõtme. Smart-ID ei ole lihtsalt äpp, see on e-riigi "pass". Kui pass on võltsitav, on riik ohus.

### Soovitatavad andmed ja tõendid lünkade täitmiseks

1. **Pettuste statistika (2025/2026):** Leia viimased numbrid PPA-st või RIA aastaraamatust, et illustreerida probleemi ulatust (nt "Eestlased kaotasid X miljonit").
2. **Tehniline võrdlus:** Too näide, kuidas Apple/Google Passkeys või FIDO2 riistvaravõtmed (YubiKey) välistavad selle rünnaku täielikult, tõestades, et tehnoloogia on olemas.
3. **CVE kirje:** Viita konkreetsele CVE numbrile (kui on olemas või fiktiivne drafti kontekstis), et lisada usaldusväärsust.
