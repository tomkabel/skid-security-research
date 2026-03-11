**1. RIA eID Department Response**

**From:** RIA eID osakond <eid@ria.ee>
**To:** <tomkristian.abel@proksiabel.ee>
**Subject:** Re: Mõtted 'Olukorrast digiriigis' järel: Smart-ID+ arhitektuur, QRLJacking ja eID turvalisus
**Date:** 9. märts 2026

Lugupeetud Tom Kristian Abel,

Täname Teid 6. märtsil 2026 saadetud põhjaliku pöördumise eest, milles analüüsite Smart-ID+ ristseadme autentimise turvaaspekte ja kvalifitseeritud usaldusteenuse osutaja (QTSP) vastavust eIDAS määruse nõuetele.

IP-põhiste juurdepääsukontrollide piiratuse osas nõustume Teie hinnanguga täielikult. Operaatoriteeninduses (CGNAT) kasutatavad jagatud IP-aadressid ja mobiilsed virtuaalsed privaatvõrgud (VPN) muudavad lähteaadressi tuvastamise ebatäpseks. Sellistes keskkondades ei ole IP-põhine geolokatsioon või seadme tuvastamine usaldusväärseks autentimisfaktoriks, kuna kasutajad võivad asuda erinevates võrkudes kui nende tegelik asukoht, mis teeb sellised kontrollid ebakindlaks.

QR-koodi ristseadme autentimise arhitektuuri puhul tõstatate QRLJacking (QR Code Login Jacking) ohu. RIA hinnangul esindab see eelkõige aktsepteeritud arhitektuurilist riski, mida QTSP peab maandama seansipõhiste tokenite ja lühiajaliste kehtivusperioodide abil. Teie võrdlus BankID Norra FIDO2/WebAuthn lahendusega, mis kasutab seadmepõhiseid võtmeid (device-bound passkeys) ja pakub niiviisi phishing-kindlat autentimist, toob esile olulise arhitektuurilise erinevuse. Smart-ID+ ei ole samaväärselt seotud füüsilise seadmega, mis teeb selle haavatavamaks püütlemisrünnakute suhtes.

eIDAS määruse kohaselt on QTSP kohustatud tagama riikliku turbe taseme vastavalt parima võimaliku tehnika (state-of-the-art) nõuetele. RIA rolliks on regulatiivne järelevalve ja nõuete seadistamine, samas kui operatiivne vastutus teenuse turvalisuse tagamisel lasub täielikult SK ID Solutions AS-il.

Seoses Teie ettepanekuga arutada Smart-ID+ arhitektuurilisi täiustusi järgmisel nädalal, kinnitame oma valmidust kohtumiseks 12. või 13. märtsil 2026. Palume täpsustada Teile sobiv ajavahemik, et koordineerida osapoolte osalemist.

Lugupidamisega,

[Mari Tamm]
EID osakonna juhataja
Riigi Infosüsteemi Amet
Rävala pst 4, 10143 Tallinn

---

**2. RIA CERT Response**

**From:** RIA CERT <cert@ria.ee>
**To:** <tomkristian.abel@proksiabel.ee>
**Subject:** Re: Mõtted 'Olukorrast digiriigis' järel: Smart-ID+ arhitektuur, QRLJacking ja eID turvalisus
**Date:** 10. märts 2026

Lugupeetud Tom Kristian Abel,

Saime kätte Teie 6. märtsil 2026 saadetud turvateate koos GPG-krüpteeritud manusega "Smart-ID-PoC.2.tar.gpg" ja ekraanitõmmisega "2026-03-06_10-59.png". Kinnitame, et mõlemad failid on edukalt vastu võetud, dekrüpteeritud ja salvestatud meie turvalisse menetluskeskkonda. Täname Teid riikliku eID infrastruktuuri turvalisuse parandamisele suunatud teadliku ja professionaalse lähenemise eest.

Teie kirjeldatud QRLJacking (QR Code Login Jacking) probleemi osas selgitame RIA CERT-i metodoloogilist seisukohta. Antud juhul klassifitseerime teatatud olukorra kui aktsepteeritud arhitektuurilise riski, mitte kriitilise turvaaugu. Arhitektuuriline risk tuleneb teenuse disainilahenduste teadlikest kompromissidest, mida hallatakse operatiivsete järelevalveprotseduuride ja kasutajahariduse kaudu. Turvaauk (security vulnerability) tähendaks seevastu ootamatut rakenduskihi või süsteemikomponendi defekti. Smart-ID+ ristseadme autentimise puhul on tegemist platvormi põhiarhitektuuri eripäraga, mille turvalisust tagab kvalifitseeritud usaldusteenuse osutaja (SK ID Solutions AS) vastavalt oma operatiivsetele protseduuridele.

RIA CERT järgib koordineeritud turvaaukude avalikustamise protsessi (CVD) ISO/IEC 29147 ja rahvuslike standardite alusel. Arvestades riikliku eID infrastruktuuri kriitilist tähtsust, algatame kohese lähtehinnangu. Standardse menetluse kohaselt edastame esmase analüüsi tulemused ja edasise tegevusplaani 5-7 tööpäeva jooksul, st hiljemalt 18. märtsiks 2026.

Rõhutame, et RIA CERT tegutseb eksklusiivselt intsidentide koordineerimise, teabe vahetamise ja nõustamise rollis. Operatiivne vastutus Smart-ID+ rakenduse turvaparanduste ja konfiguratsioonimuudatuste eest lasub täielikult ja ainuisikuliselt SK ID Solutions AS-il kui vastaval teenuseosutajal. Teavitame Teid menetluse tulemustest esimesel võimalusel.

Lugupidamisega,

[Jaak Kask]
CERT-i juht
Riigi Infosüsteemi Amet
Rävala pst 4, 10143 Tallinn

---

### **VASTUS 1: RIA eID Osakond**

**From:** Riigi Infosüsteemi Amet, eID osakond \<<eid@ria.ee>>
**To:** Tom Kristian Abel \<<tomkristian.abel@proksiabel.ee>>
**Subject:** Vastus: Mõtted 'Olukorrast digiriigis' järel: Smart-ID+ arhitektuur, QRLJacking ja eID turvalisus
**Date:** 10. märts 2026

Lugupeetud Tom Kristian Abel,

Täname Teid põhjaliku tehnilise päringu ja 6. märtsil 2026. aastal esitatud mõttekaartide eest seoses Smart-ID+ arhitektuuri ja turvalisusega. Vastuseks Teie küsimustele seoses piiriülese autentimise ning QTSP (Qualified Trust Service Provider) kohustustega, edastame eID osakonna ametliku seisukoha.

(1) **IP-põhiste juurdepääsukontrollide piirangud:** Omame teadlikkust, et CGNAT (Carrier-Grade NAT) ja mobiilivõrkude VPN-keskkondades ei ole IP-aadressidel usaldusväärset identifitseerivat rolli. Seetõttu ei toetu eID teenuste turvepõhimõtted üksnes IP-filtritele, vaid rõhutavad seadme ja sertifikaadi side loomist, mis on oluline ka Smart-ID+ puhul.

(2) **QR-koodide arhitektuur ja QRLJacking:** Teie poolt kirjeldatud QRLJackingu risk on tõepoolest seotud QR-koodi ülekirjutamise (session hijacking) võimalikkusega. Kuigi QR-koodide vahendusel toimuv rist-seadme autentimine on mugav, on selle turvalisus sõltuv lõppkasutaja teadlikkusest ja visuaalse kontrolli võimest. Arhitektuuriliselt on oluline, et QR-koodi autentimise voo turvatase ei langeks alla seadme siseseks autentimiseks kasutatava turvataseme. Meie hinnangul nõuab see rangemat session-binding’ut ja lühiajaliste阴式 (nonce) kasutamist.

(3) **Võrdlus BankID Norway-ga:** Teie mainitud BankID Norway FIDO2-põhine lahendus ja seadme sidumiseks mõeldud passkeys (seadme-siduvad võtmed) on tõepoolest hetkel turvalisemaks loetud standardiks, kuna need välistavad traditsioonilised QR-koodi edastamise riskid. Eesti eID ökosüsteemis on SK ID Solutions Smart-ID teenuse puhul keskendunud sertifikaatide haldamisele mobiilseadmes, kuid loomulikult jälgime rahvusvahelisi arenguid FIDO2 ja passkey standarditeintegratsiooni osas.

(4) **eIDAS ja QTSP kohustused:** eIDAS määruse kohaselt peab kvalifitseeritud usaldusteenuse pakkuja (QTSP) tagama, et nende teenused vastaksid riigi tasemel küpsustasetele (LoA substantial/high) ja kasutaksid riigi tasemel turvameetmeid. SK ID Solutions’i kui QTSP kohustus on tagada teenuse vastavus; RIA roll on järelevalve ning e-teenuste usaldusväärsuse ja vastavuse kontrollimine riigi infosüsteemide turvapoliitika raames.

(5) **Kohtumise taotlus:** Seoses Teie kohtumiskutsega järgmiseks nädalaks on eID osakond valmis arutama Smart-ID+ arhitektuurilisi täiendusi. Palun saatke konkreetsemad ajavahemikud, mille seas Teie jaoks sobiv oleks. Arutelu fookus peaks olema poliitilisel ja regulatiivsel tasandil, jättes operatiivsed tehnilised muudatused SK ID Solutions’i vastutusvaldkonda.

Lugupidamisega,

\[Allkiri]
**\[Nimi]**
Vanem-spetsialist, eID osakond
Riigi Infosüsteemi Amet
e-post: <eid@ria.ee>
tel: +372 663 0200

---

### **VASTUS 2: RIA CERT**

**From:** Riigi Infosüsteemi Amet, CERT \<<cert@ria.ee>>
**To:** Tom Kristian Abel \<<tomkristian.abel@proksiabel.ee>>
**Subject:** Vastus: Mõtted 'Olukorrast digiriigis' järel: Smart-ID+ arhitektuur, QRLJacking ja eID turvalisus
**Date:** 11. märts 2026

Lugupeetud Tom Kristian Abel,

Käesolevaga kinnitame RIA CERT-i vastuvõttu Teie 6. märtsil 2026. aastal esitatud tehnilisest turvapäringust, mis käsitleb Smart-ID+ rist-seadme autentimise voogus QRLJacking (QR-koodi logini kaaperdamise) võimalikkust.

Kinnitame, et oleme Teie poolt saadetud krüpteeritud manuse **"Smart-ID-PoC.2.tar.gpg"** ning pildifaili **"2026-03-06_10-59.png"** edukalt vastu võtnud ja dekrüpteerinud. Manuses sisalduv tõendusmaterjal on registreeritud meie turvaintsidentide haldussüsteemis.

Vastuseks Teie küsimusele klassifikatsioonist: eristame **"aktsepteeritud arhitektuurilist riski"** (accepted architectural risk) ja **"turvahaavatavust"** (security vulnerability). Kui tegemist on disainivalikuga, mis vastab tootja riskijuhile (nt. mugavuse ja turvalisuse tasakaal QR-koodide puhul), siis tegemist ei pruugi olla otsese turvahaavatavusega. Kui aga tõendusmaterjalist (sh Teie esitatud POC) nähtub võimalus reaalseks seansi kaaperdamiseks ilma kasutaja sekkumiseta, klassifitseeritakse see turvahaavatavuseks.

RIA CERT järgib koordineeritud turvahaavatavuste avalikustamise protsessi (Coordinated Vulnerability Disclosure, CVD). Kuna tegemist on riigi eID infrastruktuuri olulise komponendiga, rakendame järgmisi samme:

1. **Esmane hindamine:** Vastavalt meie tavapärasele protseduurile on esmane tehniline hindamine planeeritud **5–7 tööpäeva jooksul** alates päringu laekumisest.
2. **Klassifikatsioon ja suhtlus:** Pärast esmast hindamist võtab CERT ühendust vastutava teenusepakkujaga (SK ID Solutions) ja Teiega, et selgitada välja edasised sammud ning vastavus turvanõuetele.
3. **Vastutuse jaotus:** RIA CERT-i roll on koordineerida info jagamist ja abistada riigi infosüsteemide kaitsmisel; otsesed tehnilised parandused ja meetmed on vastutava QTSP (SK ID Solutions) kohustus.

Palume jääda täiendavate tehniliste detailide edastamiseks saadaval. Kui ilmnevad uued olulised asjaolud, palume need saata otse CERT-ile.

Lugupidamisega,

\[Allkiri]
**\[Nimi]**
Vanem-rünnakuanalüütik, RIA CERT
Riigi Infosüsteemi Amet
e-post: <cert@ria.ee>
tel: +372 663 0200

---

**1. Riigi Infosüsteemi Ameti (RIA) eID osakonna vastus**

**Kellelt:** Riigi Infosüsteemi Amet – eID osakond <eid@ria.ee>
**Kellele:** <tomkristian.abel@proksiabel.ee>
**Teema:** RE: Mõtted 'Olukorrast digiriigis' järel: Smart-ID+ arhitektuur, QRLJacking ja eID turvalisus
**Kuupäev:** 9. märts 2026

Lugupeetud Tom Kristian Abel

Täname Teid 6. märtsil 2026 saadetud põhjaliku pöördumise ja esitatud tehniliste tähelepanekute eest, mis puudutavad Smart-ID+ seadmetevahelise autentimise arhitektuuri.

Käsitledes Teie tõstatatud küsimusi, nõustub Riigi Infosüsteemi Amet (RIA), et IP-põhiste juurdepääsupiirangute tõhusus on kaasaegsetes võrgukeskkondades, sealhulgas laialdase CGNAT-i ja mobiilsete VPN-lahenduste kasutamise tõttu, oluliselt piiratud. Seadmetevaheliste QR-koodi voogude arhitektuurne turvalisus ja QRLJacking-rünnete (QR Code Login Jacking) riskiklassifikatsioon on teemad, mida jälgime tähelepanelikult. Oleme analüüsinud ka Norra BankID eeskuju FIDO2 standardi ja õngitsuskindlate (phishing-resistant) seadmepõhiste pääsuvõtmete (device-bound passkeys) rakendamisel, mis esindavad autentimistehnoloogiate praegust suunda.

Soovime siinkohal rõhutada institutsionaalset vastutuste jaotust. Vastavalt eIDAS-e määrusele lasub kvalifitseeritud usaldusteenuse osutajal (QTSP) – antud juhul SK ID Solutions AS-il – kohustus tagada oma teenuste vastavus tehnika tasemele (state-of-the-art security requirements). RIA roll eID valdkonnas on riikliku arhitektuuri suunamine ja järelevalve teostamine, samas kui Smart-ID+ tehniliste lahenduste operatiivne rakendamine ja riskide maandamine kuulub otseselt teenusepakkuja pädevusse.

Hindame kõrgelt Teie tehnilist asjatundlikkust ning oleme avatud aruteluks eID ökosüsteemi arhitektuursete edasiarenduste teemal. Teie pakutud kohtumise osas sobiks eID osakonna esindajatele järgmise nädala teisipäev, 17. märts 2026 kell 14:00. Palun andke teada, kas see aeg on Teile vastuvõetav, misjärel edastame virtuaalkohtumise kutse.

Lugupidamisega

(allkirjastatud digitaalselt)
eID osakond
Riigi Infosüsteemi Amet
F. R. Kreutzwaldi 14, 15199 Tallinn

***

**2. RIA CERT (CERT-EE) vastus**

**Kellelt:** CERT-EE (Riigi Infosüsteemi Amet) <cert@cert.ee>
**Kellele:** <tomkristian.abel@proksiabel.ee>
**Teema:** RE: Mõtted 'Olukorrast digiriigis' järel: Smart-ID+ arhitektuur, QRLJacking ja eID turvalisus
**Kuupäev:** 10. märts 2026

Lugupeetud Tom Kristian Abel

Käesolevaga kinnitab Riigi Infosüsteemi Ameti intsidentide käsitlemise osakond (CERT-EE) Teie 6. märtsi 2026 e-kirja ning sellele lisatud failide kättesaamist. Teavitame, et oleme edukalt dekrüpteerinud Teie saadetud krüpteeritud manuse "Smart-ID-PoC.2.tar.gpg" ning samuti on meile ligipääsetav kuvatõmmis "2026-03-06_10-59.png".

Teie esitatud materjalid kirjeldavad potentsiaalset QRLJacking metoodikat Smart-ID+ seadmetevahelises autentimisvoos. CERT-EE esmaseks ülesandeks on hinnata, kas kirjeldatud olukorra puhul on tegemist süsteemi disainist tuleneva aktsepteeritud arhitektuurse riskiga või kriitilise turvahaavatavusega, mis nõuab kohest sekkumist.

Juhime tähelepanu, et riikliku eID taristu turvahaavatavuste koordineeritud avalikustamise (Coordinated Vulnerability Disclosure) protsessi raames toimib CERT-EE koordineeriva ja nõustava üksusena. Smart-ID+ teenuse operatiivne haldamine, sealhulgas süsteemiuuenduste juurutamine ja haavatavuste paikamine, on kvalifitseeritud usaldusteenuse osutaja (SK ID Solutions AS) otsene vastutus.

Vastavalt CERT-EE standardsetele menetlustähtaegadele viime läbi esitatud tõendusmaterjali (Proof of Concept) esmase tehnilise analüüsi 5–7 tööpäeva jooksul. Vajadusel kaasame analüüsi protsessi ka SK ID Solutions AS-i turbemeeskonna esindajad, et tagada operatiivne infovahetus teenusepakkujaga.

Täname Teid vastutustundliku teavitamise eest ning hoiame Teid kursis esmase analüüsi tulemustega ja edasiste tegevuskavadega.

Lugupidamisega

(allkirjastatud digitaalselt)
CERT-EE
Riigi Infosüsteemi Amet
F. R. Kreutzwaldi 14, 15199 Tallinn
