# Riigi Infosüsteemi Amet

**Kellele:**

* Riigi Infosüsteemi Amet

**Kuupäev:** 07.04.2026  
**Nr:** 4.11-1/2026

### Märgukiri

**SK ID Solutions AS tegevuse kohta seoses teadaolevate turvanõrkustega Smart-ID teenuses**

Lugupeetud peadirektor

#### Asjaolu

Riigi Infosüsteemi Amet teostab järelevalvet kvalifitseeritud uslusteenuse osutajate ja eluliste teenuste üle. Käesoleva märgukirja eesmärgiks on juhtida tähelepanu SK ID Solutions AS (edaspidi „teenuseosutaja") tegevusele, mis võib kahjustada kodanike usaldust digitaalse identiteedi süsteemi vastu.

On täheldatud, et teenuseosutaja osutab Smart-ID teenust, millel on dokumenteeritud turvanõrkused. Teenuseosutaja RP API v3 dokumentatsioonis on märgitud järgmist:

1. Teenuseosutaja pakub endiselt „Notification based flow" autentimisviisi, mis on märgistatud kui „Not Recommended" (mitte soovitatav).

2. Dokumentatsioonis on sõnastatud: „Phishing protection relies on user awareness" – see tähendab, et andmepüügi kaitse tugineb kasutaja teadlikkusele.

3. Teenuseosutaja on dokumenteerinud: „Device link flows provide a modern and more secure alternative" – turvalisem lahendus on olemas ja kättesaadav.

4. Smart-ID RP API v3 kinnitab, et Device Link Flows (Dynamic QR, App-to-App) pakuvad „Maximum protection against phishing".

On tuvastatud, et teatisepõhine autentimisvoog on vastuvõtlik QRLJäämise (QRLJacking) ja Meediumi-pealiseise (Man-in-the-Middle) rünnakutele. Nimetatud nõlkus võimaldab ründajal algatada autentimissessiooni ja selle ohvri seadmesse suunata.

#### Õiguslik alus

Käesoleva märgukirja õiguslikuks aluseks on:

1. **Euroopa Parlamendi ja nõukogu määrus (EL) nr 910/2014 (eIDAS):**
   - Artikkel 19(1) – uslusteenuse osutaja peab võtma asjakohaseid tehnilisi ja korralduslikke meetmeid riskide juhtimiseks, võttes arvesse tehnika arengutaset.
   - Artikkel 24(2)(e) – kvalifitseeritud uslusteenuse osutaja peab kasutama usaldusväärseid süsteeme ja tooteid, mis on kaitstud muutmise vastu ja tagavad protsesside tehnilise turvalisuse ja usaldusväärsuse.

2. **E-identimise ja e-tehingute uslusteenuste seadus (EUTS):**
   - § 14 – RIA järelevalvevolitus kvalifitseeritud uslusteenuse osutajate üle.
   - § 15 – RIA volitus nõuda nõuetele vastavuse hindamist.
   - § 34 – riiklik järelevalve.
   - § 36 – ettekirjutuste ja sunniraha maksmise kohaldamine.

3. **Küberturbeseadus (KüTS):**
   - § 2 – elulise teenuse määratlus.
   - § 7 – teenuseosutaja kohustus rakendada turvameetmeid, mis on sobivad kindlaks tehtud riskidele.

4. **Isikuandmete kaitse üldmäärus (GDPR):**
   - Artikkel 25 – andmekaitse kavandamisel ja vaikimisi.
   - Artikkel 32 – töötlemise turvalisus.

#### Märgukiri

Riigi Infosüsteemi Amet soovib juhtida tähelepanu järgmistele asjaoludele:

##### 1. Teadaolev turvanõrkus ja selle olemus

On täheldatud, et Smart-ID teenus võimaldab QRLJäämise ründevektori, mis lubab ründajal algatada autentimissessiooni ja selle ohvri seadmesse suunata. Nimetatud nõlkus on teadaolev ja dokumenteeritud ka teenuseosutaja enda poolt.

On tuvastatud, et teatisepõhine autentimisvoog (Notification based flow) tugineb „kasutaja teadlikkusel", mis on vastuolus eIDAS artikli 24(2)(e) nõuetega usaldusväärsete süsteemide kohta. Nõue „kasutaja ainukontroll" (sole control) üle allkirjastamisandmete ei ole sellises arhitektuuris tagatud.

##### 2. Turvalisem lahendus on olemas, kuid vananenud voog jääb aktiivseks

On täheldatud, et teenuseosutaja on ise dokumenteerinud turvalisemad alternatiivid – Device Link Flows, mis pakuvad „Maximum protection against phishing". Samas on dokumentatsioonis märgitud, et „Not Recommended" voog jääb endiselt aktiivseks.

See olukord näitab, et tehniline lahendus on olemas ja kättesaadav (state of the art), kuid teenuseosutaja on teadlikult valinud vananenud ja turvatuuma viisi jätkamise. See on vastuolus eIDAS artikli 19(1) nõudega kasutada tehnika arengutaseme meetmeid.

##### 3. „Risk aktsepteerimise" kaitse on õiguslikult tühine

On täheldatud, et teenuseosutaja on kasutanud „risk aktsepteerimise" kaitse, mis on õiguslikult tühine järgmistel põhjustel:

1. **Mitteleandatav risk:** Eraõiguslikus lepingus võib teenuseosutaja riski aktsepteerida. Kuid riiklikes uslusteenustes ei saa teenuseosutaja aktsepteerida riski kolmandate isikute (kodanike, riigi) nimel ilma nende teadinud nõusolekuta. Risk langeb kasutajatele (varastatud vahendid) ja riigile (õiguslik terviklikkus).

2. **eIDAS hierarhia:** „Kõrge tagatise" taseme nõuded eIDAS alusel on statuudilised miinimumnõuded, mitte soovitused. Teadaolev arhitektuuriline nõlkus, mis võimaldab MITM-d, on vastuolus tehniliste spetsifikatsioonidega, mis nõuavad „olulist vastupidavist" ründaja võimetele.

3. **Kulud vs. turvalisus:** Tootevastutuse seaduste ja GDPRi alusel ei ole „rakendamise keerukus" (kulu) õigustatud kaitse kriitilise turvapuuduse jätmisele mass-turvalisuse tootes.

##### 4. Eesti pretsedent: ROCA (2017)

On täheldatud, et 2017. aastal, kui avastati teoreetiline Infineoni viga 750 000 ID-kaardis, peatati RIA poolt sertifikaadid rünnakute puudumisel, sundides uuendusi. RIA on juba näidanud, et eelistab usaldust järjepiduvusele teostatavate riskide korral. See pretsedent kohaldub Smart-ID QRLJackingu suhtes.

##### 5. Dokumentatsioon kui tõend enesest

On tuvastatud, et RP API v3 dokumentatsioon sisaldab järgmisi kinnitusi:

- „Not Recommended" märgistus tähendab, et teenuseosutaja on teadlik, et voog ei vasta nüüdisaegsetele standarditele.
- „Phishing protection relies on user awareness" tähendab, et turvakontroll on delegeeritud kasutajale, mitte süsteemile.
- „Device link flows provide a modern and more secure alternative" tähendab, et parim praktika on olemas ja rakendatav.

Need kinnitused moodustavad tõendikuue, mis näitab, et teenuseosutaja on teadlikult jätkanud turvatuuma teenuse osutamist.

##### 6. Taotletud toimingud

Ülalkirjeldatu põhjal on taotletud:

1. **Ettekirjutuse väljastamine:** Väljastada SK ID Solutions AS-le ametlik ettekirjutus, milles nõutakse teatisepõhise autentimisvoo (Notification based flow) deaktiveerimist kvalifitseeritud teenuste osutamisel 6 kuu jooksul.

2. **Kvalifitseeritud staatuse ülevaatus:** Alustada menetlust Smart-ID teenuse kvalifitseeritud staatuse ülevaatamiseks, arvestades eIDAS artikli 24(2)(e) rikkumist.

3. **Väline audit:** Nõuda sõltumatu auditeerija poolt kinnitatud raporti esitamist, mis kinnitab turvaparanduste rakendamist.

4. **Koordinatsioon:** Koordineerida tegevust Tarbijakaitse ja Tehnilise Järelevalve Ametiga (TTJA) ning Andmekaitse Inspektsiooniga (AKI) tervikliku regulatiivse reageerimise tagamiseks.

On taotletud, et RIA kasutaks oma järelevalvevolitusi SK ID Solutions AS tegevuse suhtes, võttes arvesse eelnevat ja tagades Eesti digitaalse identiteedi süsteemi usaldusväärsuse.

Täiendavate küsimuste korral oleme valmis lahkesti vastama.

Lugupidamisega

/allkirjastatud digitaalselt/

[Nimi]  
[Ametinimetus]  
[Kontaktandmed]

***

**Lisad:**

1. Smart-ID RP API v3 dokumentatsiooni väljavõtted – turvanõrkuste kirjeldused
2. Võrdlev analüüs regulatiivsetest pretsedentidest (ROCA 2017, BankID, Itsme)
3. Tehniline analüüs QRLJacking ja MITM rünnakutest
