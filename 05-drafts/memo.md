**Finantsinspektsiooni stiilis märgukiri**

**Riigi Infosüsteemi Amet**
Pärnu mnt 139a
15169 Tallinn

**Viitenumber:** 4.11-3/2026/89
**Kuupäev:** 26.02.2026
**Liik:** Väljuv märgukiri

**Teema:** **Smart-ID+ turvalisuse ja vastavuse kohta eIDAS määruse nõuetele**

**Lugupeetud peadirektor**

Finantsinspektsiooni digitaalse halduse järelevalve osakond (edaspidi: Järelevalve) on analüüsinud 26.02.2026. aastal SK ID Solutions AS-i poolt turule toodud ja riiklikes autentimisteenustes (sh portaalis eesti.ee) kasutusele võetud uue autentimislahenduse Smart-ID+ arhitektuurset ülesehitust.

Analüüsi tulemusena on tuvastatud kriitiline turva-arhitektuurne puudujääk: teenuse disainis puudub tehniline sunnimehhanism, mis seoks autentimispäringu algatamise konteksti (veebiteenus) ja kasutaja autentimisvahendi (nutiseade) vahelise andmevahetuse nn päritolu sidumise (*origin binding*) kaudu.

Alljärgnevalt esitame õigusliku hinnangu antud puudujäägi mõjule kvalifitseeritud usaldusteenuse staatusele ning nõuded edasiseks tegevuseks.

### **Õiguslik alus**

Hinnangu andmisel ja nõuete esitamisel tugineb Järelevalve järgmistele õigusaktidele:

1.  **Euroopa Parlamendi ja nõukogu määrus (EL) nr 910/2014 (eIDAS):**
    *   **Artikkel 19 (1) ja (2):** Usaldusteenuse osutajad on kohustatud võtma asjakohaseid tehnilisi ja korralduslikke meetmeid teenuste turvalisusega seotud riskide juhtimiseks. Need meetmed peavad tagama turvalisuse taseme, mis vastab riskide suurusele.
    *   **Artikkel 24 (2):** Kvalifitseeritud usaldusteenuse osutajad peavad kasutama usaldusväärseid süsteeme ja tooteid, mis on kaitstud muudatuste tegemise eest ning tagavad protsesside tehnilise turvalisuse ja usaldusväärsuse.
    *   **II lisa (Kvalifitseeritud elektroonilise allkirja andmise vahenditele esitatavad nõuded):** Punkt 1 sätestab, et vahend peab tagama allkirja andmise andmete konfidentsiaalsuse ja ainukontrolli (*sole control*).

2.  **E-identimise ja e-tehingute usaldusteenuste seadus (E-TS):** § 15 (Turvanõuded), mis kohustab järgima eIDAS määruse artiklis 19 sätestatud nõudeid.

---

### **MÄRGUKIRI**

**1. Arhitektuurne valik ja vastuolu turvanõuetega**

Järelevalve hinnangul ei ole Smart-ID+ puhul tuvastatud päritolu sidumise puudumine (nn *context binding* puudulikkus) käsitletav juhusliku tehnilise veana ega arendusprotsessi ebakõlana. Tegemist on teenuseosutaja (SK ID Solutions AS) teadliku arhitektuurse valikuga, kus on prioriseeritud kasutajamugavust (*User Experience*) ja teenuse laiemat ühilduvust kolmandate osapoolte platvormidega (kommertshuvi) turvalisuse arvelt.

Olukorras, kus autentimispäringu algataja (teenus) ja kinnitaja (kasutaja seade) vahel puudub krüptograafiliselt tagatud seos, on loodud soodne pinnas vahendusrünneteks (*Man-in-the-Middle* ja *Relay attacks*). Selline arhitektuur ei taga kasutaja teadlikkust sellest, millisele konkreetsele teenusele ta ligipääsu annab või millist tehingut allkirjastab.

**2. "Riskitaluvuse" lubamatus kvalifitseeritud teenustes**

Järelevalve on teadlik Riigi Infosüsteemi Ameti ja Tarbijakaitse ja Tehnilise Järelevalve Ameti (TTJA) senisest praktikast aktsepteerida teatud turvariske (nn *risk acceptance*), viidates teenuse "piisavale" turvalisusele ja laiale kasutajaskonnale.

Rõhutame, et **kvalifitseeritud elektroonilise allkirja (QES)** ja kõrge usaldusväärsuse tasemega (*Level of Assurance - High*) autentimisvahendite puhul on arhitektuurse turvaaugu teadlik aktsepteerimine (riski aktsepteerimine) õiguslikult vastuvõetamatu. eIDAS määrus eeldab kvalifitseeritud teenuselt maksimaalset võimalikku kindlust. Kui tehnoloogia võimaldab päritolu sidumist (nagu tõendavad alternatiivsed lahendused turul), siis selle rakendamata jätmine on vastuolus eIDAS artikli 19 lõikega 1, mis nõuab riskidele vastavat turvalisuse taset. Arhitektuurne puudujääk, mis võimaldab massilist andmepüüki, ei ole kooskõlas kvalifitseeritud staatusega.

**3. Süsteemne risk Eesti e-riigi mainele ja usaldusteenuse staatusele**

Smart-ID+ kasutuselevõtt praegusel kujul riiklikes teenustes tekitab süsteemse riski. Juhul kui rahvusvaheline audit (nt ETSI standardite alusel või Euroopa Komisjoni vastastikune hindamine) tuvastab, et Eesti riiklikult tunnustatud ja eesti.ee portaalis kasutatav vahend ei taga tegelikkuses allkirja andmise vahendi ainukontrolli (eIDAS II lisa rikkumine), on reaalne oht kaotada Eesti usaldusteenuste kvalifitseeritud staatus. See tooks kaasa doominoefekti, mille tagajärjel muutuksid küsitavaks kõik Smart-ID+ abil antud digitaalallkirjad ja tehtud õigustoimingud.

**4. Järelevalveasutuse kohustuste täitmata jätmine**

Riigi Infosüsteemi Amet vastutab riigi infosüsteemi kindlustava asutusena selle eest, et riiklikes portaalides kasutatavad autentimismeetodid vastaksid kõrgeimatele turvastandarditele. Lubades teenusesse arhitektuurselt puuduliku lahenduse, on RIA asunud positsioonile, mis võib olla tõlgendatav järelevalvealase tegevusetusena. Haldusorgani passiivsus olukorras, kus on ilmne oht isikute digitaalsele identiteedile, on vastuolus hea halduse tavaga.

### **Resolutsioon**

Lähtudes eeltoodust, teeb Finantsinspektsiooni digitaalse halduse järelevalve osakond Riigi Infosüsteemi Ametile ettepaneku:

1.  **Algatada viivitamatult menetlus** Smart-ID+ vastavuse täiendavaks kontrollimiseks, keskendudes päritolu sidumise (*origin binding*) puudumisest tulenevatele riskidele.
2.  **Kehtestada nõue**, mille kohaselt on riiklikes e-teenustes lubatud kasutada Smart-ID+ lahendust vaid tingimusel, et rakendatud on tehniline meede, mis seob üheselt autentimispäringu algatamise konteksti ja kasutaja seadme (vältimaks vahendusründeid).
3.  Mitte piirduda üldiste parendusettepanekutega, vaid nõuda teenuseosutajalt konkreetse arhitektuurse muudatuse sisseviimist.

Palume esitada kirjalik seisukoht ja tegevuskava märgukirjas toodud puuduste likvideerimiseks hiljemalt **30 päeva jooksul** käesoleva märgukirja registreerimisest, juhindudes haldusmenetluse seaduse §-st 5 ja märgukirjale ja selgitustaotlusele vastamise ning kollektiivse pöördumise esitamise seaduse §-st 6.

Järelevalve peab vajalikuks märkida, et struktuurse turvavea ignoreerimist käsitletakse järelevalvekohustuse rikkumisena, mis toob kaasa vajaduse küsimuse eskaleerimiseks Majandus- ja Kommunikatsiooniministeeriumi tasandile.

Lugupidamisega

*(allkirjastatud digitaalselt)*

**[Nimi]**
Osakonna juhataja
Finantsinspektsioon

**Jaotuskava:**
1.  Majandus- ja Kommunikatsiooniministeerium (teadmiseks)
2.  Tarbijakaitse ja Tehnilise Järelevalve Amet (TTJA) (teadmiseks ja järelevalve koordineerimiseks)