# ARVAMUS: Mugavus turvalisuse arvelt – miks riiklik identiteedi hoidja aktsepteerib sessioonivargust kui "disainivalikut"?

**Autor:** Tom Kristian Abel, *turvaekspert*

**Väljaanne:** Postimees / ERR / Delfi (Op-Ed)

**Kuupäev:** Veebruar 2026 (Kontekstuaalne aeg)

---

## I. SISSEJUHATUS

### 1. Konteksti loomine ja "Konks"

**Strateegiline eesmärk:** Lõhkuda müüt, et pettuse ohver on alati ise süüdi, ja suunata tähelepanu süsteemsele vastutusele.

Meile meeldib rääkida Eestist kui digitaalsest imedemaast, kus e-riik on turvaline kalju tormises kübermaailmas. Kuid viimaste aastate statistika räägib teist keelt: identiteedivargused ja pangapettused on tõusuteel ning ohvriteks ei lange enam ainult tehnokauged vanurid, vaid ka IT-spetsialistid ja ettevõtjad. Kui inimene kaotab raha, on meie esimene reaktsioon sageli ohvrisüüdistamine: "Miks ta selle koodi sisestas? Kuidas ta nii rumal oli?" See mugavnarratiiv peidab aga ebamugavat tõde. Me oleme harjunud vaatama kasutaja vigu, kuid pigistame silma kinni süsteemi enda ees, mis teeb need vead kurjategijale naeruväärselt lihtsaks. Mis siis, kui ma ütleksin teile, et teie digitaalse identiteedi lukuauku on jäetud teadlikult muukimisruumi, sest turvalise luku paigaldamine tundus teenusepakkujale liiga tülikas?

### 2. Tees (Thesis Statement)

**Strateegiline eesmärk:** Defineerida probleem mitte kui "viga", vaid kui eetiliselt küsitav "valik".

Käesolevaga väidan, et **Smart-ID** ja selle uusima iteratsiooni **Smart-ID+** praegune haavatavus ründemeetodile nimega *QRLJacking* ei ole juhuslik koodiviga ega järelevalve puudumine. See on teenusepakkuja, **SK ID Solutions AS-i**, kalkuleeritud ja teadlik arhitektuuriline valik. Tõendid näitavad, et ettevõte on otsustanud eelistada kasutusmugavust ja arenduskiirust kriitilisele turvalisusele, jättes "tagaukse" lahti rünnakutele, mida on võimalik ja vajalik vältida. Riikliku tähtsusega identiteediteenuse pakkuja ei tohi käituda riskikapitalil põhineva *start-up*’ina, kes "liigub kiiresti ja lõhub asju" – eriti kui see, mis puruneb, on Eesti inimeste turvatunne ja vara.

---

## II. PÕHIOSA

### 3. Tehniline reaalsuskontroll: Mis on QRLJacking?

**Strateegiline eesmärk:** Demüstifitseerida tehniline rünnak lihtsa analoogia kaudu, et lugeja mõistaks ohu reaalsust.

Enne kui asume kritiseerima otsuseid, peame mõistma probleemi olemust. Smart-ID haavatavus põhineb ründel nimega *QRLJacking* (QR-koodi kaaperdamine). Lihtsustatult toimib see nii: Ründaja loob võltsitud sisselogimislehe (näiteks panga oma), mis kuvab aga *tegeliku* teenuse QR-koodi. Kui kasutaja seda heauskselt skaneerib, arvates, et logib sisse oma panka, annab ta tegelikult ründajale üle oma aktiivse sessiooni.

Toome selle pärisellu: kujutage ette olukorda, kus kuller (pank) annab teie paki (ligipääsu kontole) üle inimesele, kes seisab teie kortermaja ukse ees, kontrollimata, kas see inimene tegelikult seal elab või omab korteri võtmeid. Smart-ID süsteemil puudub praegusel kujul piisavalt tugev *context binding* ehk seos reaalse seadme ja sessiooni vahel. Süsteem "eeldab", et skaneerija on aus, selle asemel et seda matemaatiliselt tõestada. See ei ole teoreetiline oht laborist – see on reaalne arhitektuuriline lünk, mis võimaldab sessiooni kaaperdamist sekunditega.

### 4. Tõendusmaterjal A: "Me teame ja me ei paranda seda"

**Strateegiline eesmärk:** Esitada "suitsev püstol" – kirjavahetus, mis tõestab teadlikku hooletust.

Kriitikud võivad väita, et tegemist on paratamatu tehnilise arenguga ja SK ID ei pruugi olla probleemist teadlik. See väide on ümberlükatud. Minu valduses on kirjavahetus SK ID Solutionsi ja turvaekspert **Tom Kristian Abeli** vahel 2025. aasta lõpust. Kui Abel raporteeris vastutustundliku avalikustamise (*Responsible Disclosure*) raames, et isegi uus **Smart-ID+** on haavatav vahemeherünnakutele (MITM), oli SK ID vastus jahmatavalt otsekohene.

SK ID esindaja kirjutas 5. detsembril 2025:
> *"See turvanõrkus oli meile arenduse käigus juba kohe teada... [kuid] teatud perioodiks oleme seda riski teadlikult aktsepteerinud."*

Lugege seda lauset uuesti. Nad ei öelnud, et "ups, me parandame selle". Nad ütlesid, et turvaauk, mis võimaldab kurjategijatel inimeste identiteeti kaaperdada, oli neile teada juba arenduse ajal, kuid nad *otsustasid* seda mitte parandada. Põhjenduseks toodi vajadus "leida tasakaal turvalisuse, kasutusmugavuse ja implementeerimise keerukuse vahel". See kirjavahetus on tõend sellest, et turvalisus ohverdati teadlikult. See ei ole viga, see on poliitika.

### 5. Tõendusmaterjal B: CVE ja "DISPUTED" staatus

**Strateegiline eesmärk:** Kasutada rahvusvahelist standardit (CVE), et näidata SK ID kangekaelsust ja soovimatust tunnistada probleemi veana.

SK ID hoiakut illustreerib veelgi ilmekamalt olukord rahvusvahelises haavatavuste andmebaasis (CVE). Kui kõnealune turvanõrkus registreeriti, märkis SK ID selle staatuseks **DISPUTED** (vaidlustatud). Küberturvalisuse maailmas on see märgiline samm. "Disputed" tähendab sisuliselt seda, et teenusepakkuja ütleb: "See ei ole viga, see on disainivalik. See peabki nii töötama."

Vaidlustades CVE kirje, üritab SK ID normaliseerida ebanormaalset. Nad klassifitseerivad rünnakuvektori "arhitektuuriliseks omaduseks". See on sama, kui autotootja väidaks, et pidurite puudumine ei ole viga, vaid "kiirust suurendav disainilahendus". Selline ülbus rahvusvaheliste turvastandardite ees on ohtlik pretsedent, eriti arvestades, et Smart-ID pürgib olema piiriülene usaldusteenus.

### 6. Refleksiivsus: Monopoli vastutus

**Strateegiline eesmärk:** Rakendada emotsionaalset ja eetilist survet, rõhutades kasutaja sundseisu.

Siinkohal peame küsima: mis valik on tavalisel eestlasel? Kui mulle ei meeldi Gmaili privaatsuspoliitika, võin ma kolida ProtonMaili. Aga Eestis on SK ID Solutionsil *de facto* monopol. Ilma Smart-ID (või kohmaka ID-kaardi lugejata) on kodanik riigist ja pangandusest ära lõigatud.

Me oleme sundseisus. Me peame usaldama SK ID-d, sest riik on andnud neile mandaadi meie digitaalset elu hallata. Kui monopoolne erafirma otsustab "riski aktsepteerida", siis tegelikult sunnivad nad seda riski aktsepteerima tervet Eesti rahvast – alates pensionärist Põlvas kuni suurärimeheni Tallinnas. Kas keegi küsis meilt, kas me oleme nõus ohverdama oma pangakonto turvalisuse SK ID arendajate "mugavuse" ja "implementeerimise lihtsuse" nimel? Vastus on ei.

### 7. Vastuväidete ümberlükkamine

**Strateegiline eesmärk:** Ennetada argumenti "turvalisus tapab mugavuse" ja näidata, et see on valedikotoomia.

SK ID põhiline kaitseargument on alati olnud "kasutajamugavus" (*usability*). Nad väidavad, et täiendavad turvameetmed muudaksid teenuse kasutamise liiga keeruliseks. See on iganenud ja eksitav väide.

Maailm on edasi liikunud. FIDO2, WebAuthn ja kaasaegsed CSC (*Cloud Signature Consortium*) standardid võimaldavad luua süsteeme, mis on krüptograafiliselt seotud konkreetse sessiooniga, välistades *QRLJacking* rünnakud, ilma et kasutaja peaks tegema midagi keerulisemat kui praegu. Mugavus ja turvalisus ei ole vastandid – need on vastandid ainult siis, kui arendaja ei soovi investeerida moodsasse arhitektuuri. Arhitektuuriline laiskus või soovimatus investeerida ei ole sama mis "kasutajamugavus". Jutt tasakaalust on siinkohal suitsukate kulude kokkuhoiule.

---

## III. KOKKUVÕTE

### 8. Süntees

**Strateegiline eesmärk:** Siduda tõendid (email, CVE) ja eetika (monopol) kokku lõplikuks süüdistuseks.

Kokkuvõttes on pilt selge ja murettekitav. Meil on riiklik identiteedipartner, kes on teadlik, et nende "lipulaev" Smart-ID+ on haavatav triviaalsetele vahemeherünnakutele. Meil on kirjalik tõestus, et nad on otsustanud seda mitte parandada, peites end "disainivalikute" ja "riskide aktsepteerimise" taha. See on klassikaline "kasum üle turvalisuse" (*Profit over Security*) hoiak, mis võib olla vastuvõetav sotsiaalmeedia äpile, kuid on andestamatu riikliku digi-identiteedi selgroole.

### 9. Üleskutse tegevusele (Call to Action)

**Strateegiline eesmärk:** Nõuda konkreetset sekkumist regulaatoritelt.

See olukord nõuab sekkumist. Riigi Infosüsteemi Amet (RIA) ja Tarbijakaitse peavad lõpetama SK ID kohtlemise "püha lehmana". Me vajame regulaatorit, kes nõuab, et riiklikult tunnustatud e-identiteet vastaks turvastandarditele, mis välistavad *QRLJacking* tüüpi rünnakud arhitektuuri tasandil, mitte ei looda kasutaja valvsusele.

SK ID peab lõpetama haavatavuste "vaidlustamise" ja asuma neid parandama. Eesti e-riik on liiga väärtuslik – ja meie inimeste vara liiga raskelt teenitud –, et jätta meie digitaalsed koduuksed lahti lihtsalt sellepärast, et luku vahetamine on teenusepakkujale hetkel ebamugav.

Turvalisus ei ole koht, kus teha kompromisse mugavuse nimel. Turvalisus on e-riigi olemise alus.

***

**Toimetaja märkus:** *Artikkel põhineb autori valduses oleval kirjavahetusel SK ID Solutionsiga ning avalikel andmetel CVE andmebaasist. SK ID on kinnitanud turvanõrkuse teadmist, kuid peab seda juhitavaks riskiks.*
