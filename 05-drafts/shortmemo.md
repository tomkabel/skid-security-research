**SAATJA:**
DIGITAL GOVERNANCE OVERSIGHT
Peamine õigusnõunik
Lõõtsa 8, 11217 Tallinn

**VASTUVÕTJA:**
RIIGI INFOSÜSTEEMI AMET
Paldiski mnt 80A, 11217 Tallinn

**Viitenumber:** 4.11-1/2026/12
**Liik:** Väljuv märgukiri
**Kuupäev:** 26.02.2026

**MÄRGUKIRI**

**Teema:** *Smart-ID+ turvalisuse ja vastavuse kohta eIDAS määruse nõuetele*

**Lugupeetud peadirektor,**

Antud märgukirjaga pöördub Digital Governance Oversight Riigi Infosüsteemi Ameti (RIA) poole seoses 26.02.2026 seisuga riigi infosüsteemides (sh eesti.ee) esialgu kättesaadavaks tehtud Smart-ID+ autentimisteenuse pakkuja SK ID Solutions AS poolt rakendatud arhitektuurse lahenduse ja selle vastavuse üle Euroopa Liidu e-identimise ja e-tehingute usaldusteenuste määruse (Määrus (EL) nr 910/2014, edaspidi *eIDAS määrus*) rangetele nõuetele.

**Asjaolu:** Smart-ID+ on turule toodud kui kvalifitseeritud elektroonilise allkirja (QES) loomise võimalusega kõrge turvalisusega teenus. Tähelepanuväärne on aga asjaolu, et süsteemis puudub kontekstiseos (ingl *origin binding*) ehk krüptograafiline side kasutaja seadme ja autentimisteenuse pakkuja vahel. See tähendab, et autentimistunnistus ei ole seotud konkreetse teenusepakkujaga (sh riigiportaaliga) ega takista sama seadme ja PIN-koodide kasutamist teiste, vähem turvaliste või kahtlaste teenuste pakkujate poolt, ilma et kasutaja seda märkaks.

**Õiguslik alus:**
Käesolev märgukiri tugineb järgmistel õigusnormidel:

1. **Määrus (EL) nr 910/2014**, artikkel 19 – nõuded kvalifitseeritud usaldusteenuste osutajatele ja nende turvalisusele.
2. **Määrus (EL) nr 910/2014**, artikkel 24 – nõuded kvalifitseeritud elektroonilise allkirja loomise seadmetele (vastavalt lisa II punktile 2.3.3, mis nõuab allkirja loomise seadme kaitset võltsimise vastu).
3. **Määrus (EL) nr 910/2014**, artikkel 26 – nõuded kvalifitseeritud elektroonilistele allkirjadele, mis peavad olema seotud allkirjastajaga ja olema kehtivad.
4. **E-identimise ja e-tehingute usaldusteenuste seadus (E-TS)**, § 63 ja § 70 – kohustus tagada teenuse turvalisus ja vastavus eIDAS määruse nõuetele.

**Märgukiri:**

**1. Arhitektuurne valik vs turvalisus**
Smart-ID+ arhitektuuris on teadlikult jäetud kontekstiseos (origin binding) loomata. See ei ole tehniline puudus, vaid strateegiline valik, mis on tehtud kasutajamugavuse ja ettevõttele kasumlikkuse (sh üksikasjalikumate turundusanalüüside) huvides. Selline valik suurendab aga oluliselt ohukohta, kus petturid saavad kasutada kasutaja seadet ja PIN-koodid teiste veebilehtede kaudu, varjates tegelikku teenusepakkujat (näiteks võltsitud riigiportaali). See on vastuolus kvalifitseeritud usaldusteenuse põhimõtetega, mis nõuavad teenuse selget ja tõestatavat seost kasutajaga.

**2. Vastuolu eIDAS-e nõuetega**
eIDAS määruse artikli 19 lõike 2 punktis c on selgelt sätestatud, et kvalifitseeritud usaldusteenuse osutajad peavad tagama, et nende teenused oleksid vastavad kõrgeimatele turvalisuse standarditele, mis on vajalikud usalduse säilitamiseks. Kontekstiseose puudumine tähendab, et Smart-ID+ ei suuda tõestada, et allkirjastaja konkreetset teenust (nt eesti.ee) usaldas, mis seab kahtluse alla *kvalifitseeritud elektroonilise allkirja* (QES) kehtivuse. Kui rahvusvahelise auditi käigus tuvastatakse see puudus, kuulub Eesti riski alla, et tema kvalifitseeritud elektroonilise allkirja staatus tühistatakse. See tooks kaasa usalduskriisi kogu Eesti e-riigi infrastruktuuris.

**3. Järelevalve kohustus**
RIA ja Tarbijakaitse ja Tehnilise Järelevalve Amet (TTJA) on kohustatud teostama järelevalvet vastavalt E-TS § 70. Käesoleval juhul on järelevalveasutused lubanud "riski vastuvõtmist" (risk acceptance) teenuse turvalisuse puudujääkide osas, mis ei vasta teenuse enda turvalisuse tasemele (vt. Smart-ID kvalifitseeritud teenuse taseme nõuded). Selline "riski vastuvõtmine" arhitektuurse vea suhtes, mis mõjutab otseselt kvalifitseeritud elektroonilise allkirja kehtivust, ei ole kooskõlas eIDAS määruse artikli 19 ja E-TS § 63 nõuetega vastavuse kohta.

**Nõue ja vastuse tähtaeg:**
Käesolevaga nõuame RIA-delt konkreetset reguleerivat korraldust, mis sunniks SK ID Solutions AS-i rakendama Smart-ID+ teenusesse kohustusliku kontekstiseose (origin binding) mehhanismi. Üldsõnalised soovitused "turvalisuse parandamiseks" ei ole piisavad.


Lugupidamisega,

__________________________________
**[Nimi]**
Peamine õigusnõunik
Digital Governance Oversight

**Jaotuskava:**

1. Majandus- ja Kommunikatsiooniministeerium
2. Tarbijakaitse ja Tehnilise Järelevalve Amet
3. SK ID Solutions AS (teavitamiseks)
