# ARVAMUS: E-riigi lahtine tagauks – miks teie identiteedivargus oli teadlik "disainivalik"

**Pealkiri inglise keeles:** The Backdoor of E-Estonia: Why Your Identity Theft Was a Conscious "Design Choice"

**Autor:** Tom Kristian Abel, *turvaekspert* (Tom Kristian Abel, security expert)

**Väljaanne:** Postimees / ERR / Delfi (Op-Ed)

**Kuupäev:** 12. veebruar 2026 (Veebruar 2026)

---

## I. SISSEJUHATUS

Meile meeldib see müüt. See läikiv, poleeritud lugu Eestist kui digitaalsest kindlusest, kus küberruum on sama turvaline kui vanaema sahver. Me usume seda, sest tahame uskuda. Aga reaalsus on hakanud sellest fassaadist krohvi lahti peksma. Pettuste statistika on laes. Inimesed kaotavad elusääste sekunditega. Ja kui see juhtub, on refrään alati sama: "Loll kasutaja. Miks ta vajutas? Miks ta ei vaadanud?" See on mugav vale. See on ohvrisüüdistamine, mis juhib tähelepanu kõrvale tegelikult kurjategijalt – mitte häkkerilt, vaid arhitektilt, kes jättis välisukse lukusüdamiku meelega paigaldamata.

Viimaste aastate statistika räägib teist keelt: identiteedivargused ja pangapettused on tõusuteel ning ohvriteks ei lange enam ainult tehnokauged vanurid, vaid ka IT-spetsialistid ja ettevõtjad. Mis siis, kui ma ütleksin teile, et teie digitaalse identiteedi lukuauku on jäetud teadlikult muukimisruumi, sest turvalise luku paigaldamine tundus teenusepakkujale liiga tülikas?

### 2. Tees

Käesolevaga väidan, et Smart-ID ja selle uusima iteratsiooni Smart-ID+ praegune haavatavus ründemeetodile nimega QRLJackinguks ei ole juhuslik koodiviga ega järelevalve puudumine. See on teenusepakkuja, SK ID Solutions AS-i, kalkuleeritud ja teadlik arhitektuuriline valik.

Riikliku tähtsusega identiteediteenuse pakkuja ei tohi käituda riskikapitalil põhineva *start-up*'ina, kes "liigub kiiresti ja lõhub asju" – eriti kui see, mis puruneb, on Eesti inimeste turvatunne ja vara.

---

## II. PÕHIOSA

### 3. Tehniline reaalsuskontroll: Mis on QRLJacking?

Ma ei räägi siin teoreetilisest riskist. Ma räägin Smart-ID ja selle "täiustatud" versiooni Smart-ID+ arhitektuurilisest august, mida nimetatakse *QRLJackinguks*. Enne kui asume kritiseerima otsuseid, peame mõistma probleemi olemust.

Vatame tõele näkku. Smart-ID praegune lahendus võimaldab ründajal luua võltsitud sisselogimislehe, mis kuvab panga tegelikku QR-koodi. Kasutaja skaneerib koodi, arvates, et logib sisse oma kontole, kuid tegelikult kingib ta oma aktiivse sessiooni ründajale. Süsteem ei kontrolli, kas skaneeriv seade ja sisselogiv brauser asuvad samas ruumis või isegi samal kontinendil. Puudub *context binding*. See on sama, kui autovõtmed avaksid suvalise auto, mille kõrval sa parajasti seisad, eeldades, et ju sa oled omanik.

Tooge see pärisellu: kujutage ette olukorda, kus kuller (pank) annab teie paki (ligipääsu kontole) üle inimesele, kes seisab teie kortermaja ukse ees, kontrollimata, kas see inimene tegelikult seal elab või omab korteri võtmeid. Smart-ID süsteemil puudub praegusel kujul piisavalt tugev *context binding* ehk seos reaalse seadme ja sessiooni vahel. Süsteem "eeldab", et skaneerija on aus, selle asemel et seda matemaatiliselt tõestada. See ei ole teoreetiline oht laborist – see on reaalne arhitektuuriline lünk, mis võimaldab sessiooni kaaperdamist sekunditega.

### 4. Tõendusmaterjal A: "Me teame ja me ei paranda seda"

Kriitikud võivad väita, et tegemist on paratamatu tehnilise arenguga ja SK ID ei pruugi olla probleemist teadlik. See väide on ümberlükatud. Minu valduses on kirjavahetus SK ID Solutionsi ja turvaekspert Tom Kristian Abeli vahel 2025. aasta lõpust.

Mul on tõendid vastupidise kohta. Kui Abel raporteeris vastutustundliku avalikustamise raames, et isegi uus Smart-ID+ on haavatav vahemeherünnakutele (MITM), oli SK ID vastus jahmatavalt otsekohene.

SK ID esindaja kirjutas 5. detsembril 2025:
> *"See turvanõrkus oli meile arenduse käigus juba kohe teada... [kuid] teatud perioodiks oleme seda riski teadlikult aktsepteerinud."*

Lugege seda uuesti. Nad teadsid. Nad teadsid, et kurjategijad saavad seda lünka kasutada eesti inimeste ründamiseks. Nad teadsid, et see õõnestab kogu e-riigi usaldusväärsust. Ja nad vajutasid nuppu "Release". Nad ei öelnud, et "ups, me parandame selle". Nad ütlesid, et turvaauk, mis võimaldab kurjategijatel inimeste identiteeti kaaperdada, oli neile teada juba arenduse ajal, kuid nad *otsustasid* seda mitte parandada. Põhjenduseks toodi vajadus "leida tasakaal turvalisuse, kasutusmugavuse ja implementeerimise keerukuse vahel". Tõlkes tähendab see, et turvalise lahenduse ehitamine oleks nõudnud rohkem aega ja raha, mida monopolil polnud soovi kulutada.

See kirjavahetus on tõend sellest, et turvalisus ohverdati teadlikult. See ei ole viga, see on poliitika.

### 5. Tõendusmaterjal B: CVE ja "DISPUTED" staatus
a

SK ID hoiakut illustreerib veelgi ilmekamalt olukord rahvusvahelises haavatavuste andmebaasis (CVE). Kui kõnealune turvanõrkus registreeriti, märkis SK ID selle staatuseks DISPUTED (vaidlustatud).

Asi läheb hullemaks. Kui see haavatavus jõudis rahvusvahelisse CVE (Common Vulnerabilities and Exposures) andmebaasi, ei tunnistanud SK ID seda veaks. Nad vaidlustasid selle. Kirje staatus on **DISPUTED**. Nad üritavad väita, et sessioonikaaperdamist võimaldav arhitektuur on funktsioon, mitte viga. See on küünilisuse tipptase.

Vaidlustades CVE kirje, üritab SK ID normaliseerida ebanormaalset. Nad klassifitseerivad rünnakuvektori "arhitektuuriliseks omaduseks". See on sama, kui autotootja väidaks, et pidurite puudumine ei ole viga, vaid "kiirust suurendav disainilahendus". See on nagu ehitaja, kes unustab majale katuse panna ja väidab siis kohtus, et see on "uuenduslik vabaõhu-disainilahendus". Selline ülbus rahvusvaheliste turvastandardite ees on ohtlik pretsedent, eriti arvestades, et Smart-ID pürgib olema piiriülene usaldusteenus.

### 6. Refleksiivsus: Monopoli vastutus

Siinkohal peame küsima: mis valik on tavalisel eestlasel? Me oleme pantvangid.

Me oleme sundseisus. Me peame usaldama SK ID-d, sest riik on andnud neile mandaadi meie digitaalset elu hallata. Riik on andnud erafirmale võtmed meie elude juurde ja see firma on otsustanud, et turvalisus on "liiga keeruline". Kui monopoolne erafirma otsustab "riski aktsepteerida", siis tegelikult sunnivad nad seda riski aktsepteerima tervet Eesti rahvast – alates pensionärist Põlvas kuni suurärimeheni Tallinnas. Kas keegi küsis meilt, kas me oleme nõus ohverdama oma pangakonto turvalisuse SK ID arendajate "mugavuse" ja "implementeerimise lihtsuse" nimel? Vastus on ei.

### 7. Vastuväidete ümberlükkamine

SK ID põhiline kaitseargument on alati olnud "kasutajamugavus". Kriitikud ja SK ID PR-osakond väidavad kindlasti, et tehnoloogia on keeruline ja "me tegeleme sellega". Nad väidavad, et täiendavad turvameetmed muudaksid teenuse kasutamise liiga keeruliseks. See on iganenud ja eksitav väide.

Jutt sellest, et turvalisus tapab mugavuse, on iganenud vale. Vaadake FIDO2 standardit. Vaadake WebAuthni. Maailmas on olemas lahendused, mis seovad sessiooni matemaatiliselt ja purunematult konkreetse seadmega, ilma et kasutaja peaks tegema kätleseisu. Mugavus ja turvalisus saavad eksisteerida koos, kui teenusepakkujal on viitsimist investeerida kaasaegsesse arhitektuuri.

Maailm on edasi liikunud. FIDO2, WebAuthn ja kaasaegsed CSC (*Cloud Signature Consortium*) standardid võimaldavad luua süsteeme, mis on krüptograafiliselt seotud konkreetse sessiooniga, välistades *QRLJacking* tüüpi rünnakud, ilma et kasutaja peaks tegema midagi keerulisemat kui praegu. Mugavus ja turvalisus ei ole vastandid – need on vastandid ainult siis, kui arendaja ei soovi investeerida moodsasse arhitektuuri. Arhitektuuriline laiskus või soovimatus investeerida ei ole sama mis "kasutajamugavus". SK ID on valinud otsetee. Jutt tasakaalust on siinkohal suitsukate kulude kokkuhoiule. Ja selle otsetee hinda maksavad pettuse ohvriks langenud inimesed oma närvide ja rahakotiga.

---

## III. KOKKUVÕTE

### 8. Süntees

Kokkuvõttes on pilt selge ja murettekitav. Meil on riiklik identiteedipartner, kes on teadlik, et nende "lipulaev" Smart-ID+ on haavatav triviaalsetele vahemeherünnakutele. Meil on kirjalik tõestus, et nad on otsustanud seda mitte parandada, peites end "disainivalikute" ja "riskide aktsepteerimise" taha. See on klassikaline "kasum üle turvalisuse" (*Profit over Security*) hoiak, mis võib olla vastuvõetav sotsiaalmeedia äpile, kuid on andestamatu riikliku digi-identiteedi selgroole.

Riigi Infosüsteemi Amet (RIA) peab ärkama.

### 9. Üleskutse tegevusele

See olukord nõuab sekkumist. On aeg lõpetada SK ID kohtlemine puutumatu pühakuna. On aeg lõpetada SK ID kohtlemine "püha lehmana". Riigi Infosüsteemi Amet (RIA) ja Tarbijakaitse peavad nõudma, et riiklikult tunnustatud e-identiteet vastaks turvastandarditele, mis välistavad *QRLJacking* tüüpi rünnakud arhitektuuri tasandil, mitte ei looda kasutaja valvsusele.

Me ei vaja enam "teadlikkuse tõstmise kampaaniaid", mis manitsevad tädi Maalit olema valvsam. Me vajame regulaatorit, kes lööb rusika lauale ja ütleb: "Parandage see ära." Mitte homme. Mitte järgmises kvartalis. Kohe. Kui riiklik identiteediteenus on teadlikult katki, on see riiklik julgeolekurisk.

SK ID peab lõpetama haavatavuste "vaidlustamise" ja asuma neid parandama. Eesti e-riik on liiga väärtuslik – ja meie inimeste vara liiga raskelt teenitud –, et jätta meie digitaalsed koduuksed lahti lihtsalt sellepärast, et luku vahetamine on teenusepakkujale hetkel ebamugav.

Kuni SK ID peab meie turvalisust "aktsepteeritavaks riskiks", on iga Smart-ID kinnituskoodi piuksatus **vene rulett**. Ja püstol on laetud.

Turvalisus ei ole koht, kus teha kompromisse mugavuse nimel. Turvalisus on e-riigi olemise alus.

***

**Toimetaja märkus:** *Artikkel põhineb autori valduses oleval kirjavahetusel SK ID Solutionsiga ning avalikel andmetel CVE andmebaasist. SK on kinnitanud turvanõrkuse teadmist, kuid peab seda juhitavaks riskiks. Kirjavahetuse kuupäev: 5. detsember 2025.*
