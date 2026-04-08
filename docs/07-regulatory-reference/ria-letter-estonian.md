# Märgukiri

**Saaja:** Riigi Infosüsteemi Amet (RIA)  
**Saatja:** [Saatja nimi/aadress]  
**Kuupäev:** 7. aprill 2026  
**Teema:** Taotlus uurimise algatamiseks SK ID Solutions AS tegevuse suhtes seoses teadaolevate turvanõrkustega Smart-ID teenuses

---

## 1. Sissejuhatus ja taust

Käesolevaga pöördun Riigi Infosüsteemi Ameti poole seoses SK ID Solutions AS (edaspidi „SK ID" või „teenuseosutaja") poolt osutatava Smart-ID teenuse turvaprobleemidega, mis ohustavad Eesti kodanike ja ettevõtete digitaalset identiteeti ning usaldust kvalifitseeritud uslusteenuste süsteemi vastu.

Olen läbi viinud põhjaliku analüüsi SK ID dokumentatsioonist, regulatiivsetest precedenditest ja turvauuringutest, mis näitavad, et SK ID on teadlikult jätnud kasutusele kriitilised turvanõrkused ning kasutanud „riski aktsepteerimise" strateegiat, et vältida nende parandamist.

---

## 2. Faktilised asjaolud

### 2.1 Teadaolevad turvanõrkused

SK ID dokumentatsioon (RP API v3) kinnitab järgmist:

- **QRLJacking (QRLjäämise rünnak):** Smart-ID „Notification based flow" on vastuvõtlik QRLjäämise ründele, kus ründaja saab algatada autentimissessiooni ja suunata selle ohvri seadmesse.
- **Man-in-the-Middle (MitM) ründed:** Teatisepõhine autentimisvoog lubab sessiooni „kaaperdamist" sotsiaalse manipuleerimise kaudu.
- **Kontekstikohustuse puudumine:** Süsteem ei seo autentimissnõuet konkreetse seadme või sessiooniga, võimaldades ründajal kasutada erinevaid relaying meetodeid.

### 2.2 „Risk aktsepteerimise" strateegia

SK ID on oma dokumentatsioonis selgelt märkinud:

- „Notification based flow" on märgistatud kui **„Not Recommended"** (mitte soovitatav)
- Dokumentatsioon tunnistab: *„Phishing protection relies on user awareness"* (Andmepüük kaitse sõltub kasutaja teadlikkusest)
- SK ID lükkab vastutuse „Relying Party'dele" (RP-dele), väites, et nemad peavad riskid hindama

### 2.3 Tehnilised lahendused on olemas

SK ID pakub ise välja turvalisemad alternatiivid:

- **Device Link Flows (Dynamic QR, App-to-App):** Dokumentatsioonis märgistatud kui „Maximum protection against phishing"
- **Smart-ID+ (2026):** Täiustatud versioon täiendava autentimisega

**Kriitiline tähelepanek:** Kui turvaline lahendus on olemas ja kättesaadav, siis „risk aktsepteerimine" ei vasta määruse (EL) nr 910/2014 (eIDAS) artikli 19 nõuetele.

---

## 3. Õiguslik analüüs

### 3.1 eIDAS Regulation (EL) nr 910/2014 rikkumised

**Artikkel 19(1) – Turvanõuded uslusteenustele:**
Teenuseosutaja peab võtma „asjakohaseid tehnilisi ja korralduslikke meetmeid riskide juhtimiseks, võttes arvesse tehnika arengutaset."

- **Rikkumine:** QRLJacking on teadaolev vektor. Kontekstikohustus on tehnika arengutaseme mitigatsioon. Nõrkuse teadlikult mitteparandamine „kulude/mõnususe" põhjal ei vasta „state of the art" testile.

**Artikkel 24(2)(e) – Kvalifitseeritud teenuseosutajate nõuded:**
QTSP peab „kasutama usaldusväärseid süsteeme ja tooteid, mis on kaitstud muutmise vastu ja tagavad nende protsesside tehnilise turvalisuse ja usaldusväärsuse."

- **Rikkumine:** Süsteem, mis võimaldab sessiooni kaaperdamist lihtsa MITM-i kaudu, ei ole „usaldusväärne" kõrge tagatise taseme (High Assurance) toimingute jaoks.

### 3.2 E-identimise ja e-tehingute uslusteenuste seadus (EUTS) rikkumised

**§ 14 – Järelevalve:**
RIA-l on otsene volitus jälgida vastavust. Kui QTSP ei täida turvanõudeid, võib RIA peatada või tühistada „kvalifitseeritud" staatuse.

**§ 36 – Ettekirjutused ja trahvid:**
RIA võib väljastada ettekirjutuse, nõudes rikkumise kõrvaldamist.

### 3.3 Küberturbeseadus (KüTS) kohaldamine

SK ID on elulise teenuse (digitaalne identiteet) osutaja.

**§ 7 – Turvameetmed:**
Teenuseosutaja peab rakendama „organisatsioonilisi, füüsilisi ja infotehnoloogilisi turvameetmeid... sobivaid kindlaks tehtud riskidele."

- **Rakkumine:** Kui tehniline lahendus on olemas ja selle kasutamata jätmine võimaldab massilist identiteedivargust, on „riski aktsepteerimine" ebapiisav.

### 3.4 GDPR artiklite 25 ja 32 rikkumised

**Artikkel 25 – Andmekaitse kavandamisel ja vaikimisi:**
Kontrollerid peavad rakendama asjakohaseid tehnilisi meetmeid töötlemise ajal.

- **Rikkumine:** Tõendid näitavad, et nõrkus oli teada „arenduse käigus" (kavandamise faasis). Parandamata jätmine „keerukuse" põhjustest on Privacy by Design põhimõtte rikkumine.

**Artikkel 32 – Töötlemise turvalisus:**
Nõuab protsessi „tehnika arengutaseme" meetmete tõhususe regulaarseks testimiseks.

- **Rikkumine:** Riskihindamine ise ei piisa. Kõrge mõjuga riski (identiteedi kaaperdamine) „aktsepteerimine" on asjakohaste meetmete rakendamise läbikukkumine.

---

## 4. „Risk aktsepteerimise" kaitse ümberlükkamine

SK ID väide, et nad „tasakaalustasid turvalisuse, kasutamise ja keerukuse" ja „aktsepteerisid riski", on õiguslikult tühine järgmistel põhjustel:

### 4.1 Mitteleandatav risk
Eraõiguslikus lepingus (näiteks mängufoorum) võib teenuseosutaja riski aktsepteerida. Kuid riiklikes uslusteenustes ei saa teenuseosutaja riski aktsepteerida kolmandate isikute (kasutajad, riik) nimel ilma nende teadinud nõusolekuta.

### 4.2 eIDAS hierarhia
„Kõrge tagatise" taseme nõuded eIDAS alusel on **statuudilised miinimumnõuded**, mitte soovitused. Teadaolev arhitektuuriline nõrkus, mis võimaldab MITM-d, on vastuolus tehniliste spetsifikatsioonidega, mis nõuavad „olulist vastupidavist" ründaja võimetele.

### 4.3 Kulud vs. turvalisus
Tootevastutuse seaduste ja GDPRi alusel ei ole „rakendamise keerukus" (kulu) õigustatud kaitse kriitilise turvapuuduse jätmisele mass-turvalisuse tootes.

### 4.4 Eesti pretsedent: ROCA (2017)
2017. aastal, kui avastati teoreetiline Infineoni viga 750 000 ID-kaardis, **RIAs peatati sertifikaadid rünnakute puudumisel**, sundides uuendusi. RIA on juba näitanud, et eelistab usaldust järjepiduvusele **teostatavate riskide korral**. See pretsedent kohaldub Smart-ID QRLJackingu suhtes.

---

## 5. Taotletud toimingud

Käesolevaga taotlen RIA-lt järgmiste toimingute algatamist:

### 5.1 Ettekirjutuse (precept) väljastamine

Väljastada SK ID Solutions AS-le ametlik ettekirjutus, milles nõutakse:

1. **Kohene parandamine:** Kontekstikohustuse (või samaväärse arhitektuurilise kaitse) rakendamine QRLJacking/MITM rünnakute vältimiseks 30 kalendripäeva jooksul.
2. **Väline audit:** Esitada uus sõltumatu auditeerija conformity assessment report, mis kinnitab nõrkuse kõrvaldamist.
3. **Hoiatus trahvist:** Mittetäitmise korral rakendada 10 000 euro suurust mittetäitmise levit iga nädala eest ja kaaluda „Kvalifitseeritud uslusteenuse osutaja" staatuse peatamist.

### 5.2 Kvalifitseeritud staatuse ülevaatus

Alustada menetlust Smart-ID kvalifitseeritud staatuse ülevaatamiseks, arvestades:

- eIDAS artikli 24(2)(e) rikkumist
- Teenuse mittevastavust „kõrge tagatise" nõuetele
- Jätkuvat turvapuudustega teenuse osutamist

### 5.3 Koordinatsioon teiste regulatsioonidega

Soovitan RIA-l koordineerida tegevust:

- **TTJA-ga:** Tarbijakaitseliste meetmete rakendamiseks seoses eksitavate kauplemistavadega (TKS § 12, § 16).
- **AKI-ga:** GDPR artiklite 25 ja 32 rikkumiste uurimiseks.

---

## 6. Kokkuvõte

Tõendid näitavad, et turvanõrkus ei ole „viga", vaid **äriline otsus**. SK ID on teadlikult valinud kasumi ja kasutajamugavuse kodanike turvalisuse arvelt.

Eelneva põhjal palun RIA-l:

1. Algatada ametlik uurimine SK ID Solutions AS tegevuse suhtes.
2. Väljastada ettekirjutus koos konkrese tähtajaga turvaparanduste rakendamiseks.
3. Hinnata Smart-ID kvalifseeritud staatuse vastavust eIDAS nõuetele.
4. Koordineerida tegevust TTJA ja AKI-ga tervikliku regulatiivse reageerimise tagamiseks.

Eesti digitaalse identiteedi süsteemi usaldusväärsus sõltub sellest, kas regulatiivsed asutused sekkuvad, kui teenuseosutaja teadlikult ignoreerib tehnika arengutaseme nõudeid ja seab kasumi kodanike turvalisuse ette.

---

**Lugupidamisega,**

[Allkiri]  
[Nimi]  
[Kontaktandmed]

---

**Lisad:**

1. Smart-ID RP API v3 dokumentatsiooni väljavõtted (turbevulnerability'de kohta)
2. Võrdlev analüüskiri regulatiivsetest pretsedentidest (ROCA, BankID, Itsme)
3. Tehniline analüüs QRLJacking ja MITM rünnakutest

---

*See dokument on koostatud eraõigusliku isiku poolt turvauuringu ja regulatiivse analüüsi alusel. Käesolev ei kujuta endast õigusnõuete esitamist, vaid taotlust regulatiivsele asutusele uurimise algatamiseks.*
