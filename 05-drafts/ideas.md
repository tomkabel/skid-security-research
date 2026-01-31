# Draft Ideas and Concepts

## 5. Tõendusmaterjal C: "Turvateater" – Kosmeetika krüptograafia asemel

**Strateegiline eesmärk:** Paljastada, et SK ID pakutud "lahendused" (nt visuaalsed kontrollkoodid) on vaid silmapete, mis ei lahenda probleemi juurteni, luues vaid valeturvatunde.

Veelgi küünilisemaks muutub pilt, kui vaatame, mida SK ID on teinud probleemi *näiliseks* lahendamiseks. Vastuseks varasematele kriitikanooltele on kasutajaliidestesse lisatud värvilised ikoonid ja kontrollkoodid (VC - *Verification Codes*). Meile öeldakse: "Vaadake, kas pilt telefonis ühtib pildiga arvutiekraanil."

See on klassikaline "turvateater". Miks? Sest QRLJacking rünnaku olemus on **reaalajas toimuv vahendamine (relaying)**.

Kui ründaja istub teie ja panga vahel, siis ei näita ta teile oma suvalist koodi. Ta laeb taustal päris panga lehelt päris QR-koodi, kuvab selle teile oma võltslehel, ja kui süsteem genereerib kontrollkoodi (nt "0424"), siis kuvab ründaja automaatselt ka sedasama koodi. Teie telefonis ja ründaja lehel ongi numbrid samad. Klõpsate "Jah" – ja oletegi lõksus.

SK ID insenerid teavad suurepäraselt, et ilma krüptograafilise seoseta brauseri ja nutiseadme vahel (Channel Binding) on igasugune visuaalne kontroll vaid dekoratsioon. Nad valisid odava visuaalse muudatuse, mis näeb turundusmaterjalides hea välja, selle asemel, et ehitada kallis, kuid turvaline backend-lahendus. Nad andsid teile katkise auto, aga värvisid selle ukselingid punaseks, väites, et nüüd on sõiduk ohutu. See on teadlik eksitamine.

## 6. Tõendusmaterjal D: Proprietaraarne lõks – Miks FIDO2 on tabu?

**Strateegiline eesmärk:** Näidata, et turvaaugu parandamata jätmise taga on ärihuvid – soov hoida turgu lukus (vendor lock-in), vältides avatud ja turvalisemaid standardeid.

Küsige endalt: miks leiutab väike Eesti firma jalgratast, kui maailm sõidab ammu ringi F1 vormelitega? Maailmas eksisteerib avatud ja litsentsitasuta standard nimega FIDO2 / WebAuthn. See on tehnoloogia, mida kasutavad Google, Microsoft ja Apple. See on loodud algusest peale *phishing*-kindlaks. See teeb vahemeherünnakud matemaatiliselt võimatuks, sest võti ja domeen on krüptograafiliselt seotud.

SK ID teab seda. Aga SK ID keeldub FIDO-standardeid oma tuumikusse integreerimast. Miks? Sest see rikuks nende ärimudeli.

Smart-ID on ehitatud patenteeritud, suletud (proprietary) protokollile. See on "Vendor Lock-in" – panga ja teenusepakkuja sõltuvusse seadmine konkreetsest teenusepakkujast. Kui nad läheksid üle avatud FIDO2 standardile, kaoks nende unikaalne müügiargument. Turvalisus tähendaks konkurentsivõimalust. Säilitades oma haavatava, kuid unikaalse pärand-tehnoloogia ("legacy"), kindlustavad nad oma turuosa, ohverdades kasutaja turvalisuse kasumi altaril. Meid ei rünnata mitte tehnoloogia puudumise, vaid monopoli ahnuse tõttu hoida kinni oma iganenud "suletud aiast".

## 7. Tõendusmaterjal E: Kasutaja kui "bioloogiline tulemüür"

**Strateegiline eesmärk:** Rünnata Smart-ID filosoofilist alustala, mis veeretab tehnilise vastutuse (kontrollida serveri autentsust) inimesele, kes ei ole selleks võimeline.

Kõige šokeerivam tõend peitub aga Smart-ID kasutajatingimustes ja disainifilosoofias. Seal on peidus vaikiv kokkulepe: SK ID süsteem ei suuda tehniliselt eristada ründajat pangast, seega nad on delegeerinud selle ülesande teile – inimesele.

Nad eeldavad, et tavakasutaja – olgu ta väsinud õde pärast 12-tunnist vahetust või kiirustav ema lapsevankriga – suudab auditeerida veebiaadressi (URL-i) ja märgata, et "seb.ee" asemel on aadressireal "seb-login-secure.net". See on absurdne. Turvauuringud on korduvalt tõestanud, et inimsilm ei ole suuteline eristama kõrgekvaliteedilist pettust pingelises olukorras.

See on disainivalik: teha inimestest süsteemi viimane kaitseliin ehk "bioloogiline tulemüür". See on tehnoloogilise pankroti tunnistus. Autopiloot ei tohiks lasta lennukil alla kukkuda lihtsalt sellepärast, et piloot oli hetkeks unine. Kuid Smart-ID teeb just seda – süsteem lubab ründaja sisse, jättes ukse lahti, ja süüdistab pärast majaomanikku, et see kurjategijat uksel piisavalt kurja pilguga ei vaadanud.

SK ID on ehitanud süsteemi, kus masina (serveri) töö – autentsuse kontrollimine – on lükatud inimese õlgadele. Ja kui inimene eksib (mis on paratamatu), peseb teenusepakkuja käed puhtaks. See pole teenus. See on lõks.
