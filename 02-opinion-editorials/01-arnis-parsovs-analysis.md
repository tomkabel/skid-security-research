# Analysis: Arnis Paršovs' Smart-ID Security Critique

## Main Arguments

The publication argues that the "human error" narrative regarding Smart-ID phishing scams is a deflection by banks to avoid accountability for poor system design.

* **Systemic Negligence over User Error:** If a security tool relies entirely on the user's ability to distinguish a phishing site from a real one, the tool is broken. Security must be built-in, not offloaded to the user.
* **The Regression of Security:** Paršovs argues that the deprecated "password cards" (matrix cards) were actually more resistant to modern *remote* social engineering than Smart-ID, as they required active communication (reading codes over the phone) rather than a passive "click and confirm."
* **Conflict of Interest:** He highlights that the major banks (Swedbank, SEB) are owners of SK ID Solutions (the creator of Smart-ID), creating a conflict where they prioritize the tool's adoption and convenience over acknowledging its security flaws.
* **Ignored Technical Safeguards:** Banks have technical measures they refuse to implement because it hurts "convenience" or "competitiveness":
  * **Code Matching:** Only one bank (LHV) forces users to select the correct code from a list.
  * **Smart-ID+:** A safer QR-code-based flow exists but is not adopted.
  * **Behavioral Analytics:** Banks have data (IP reputation, device changes, location) to stop fraud but don't use it effectively.
* **Hypocrisy in Protocol:** Banks warn users not to authenticate during phone calls, yet bank support staff routinely ask users to do exactly that to verify identity, conditioning users to accept this attack vector.
* **Liability Shift:** The core argument is that banks should be held civilly liable. If banks were forced to reimburse phishing losses, they would immediately implement the stricter security measures they currently deem "too inconvenient."

## Notable Technical Points

* **The "Login Breach" Technicality:** A strong technical point is the author's distinction regarding *when* the breach occurs. He argues the security failure happens *before* the final PIN2 (signature) confirmation—it happens when the bank allows a stranger's device to initiate a session on the victim's account without sufficient risk scoring (e.g., wrong country, new device).
* **The "Contactless Payment" Analogy:** This is a strong rhetorical comparison. Banks limit contactless card payments to ~50 EUR because they acknowledge the risk of physical theft/skimming. Yet, for Smart-ID—which is currently highly vulnerable to relay attacks—they set no default "safe limits," exposing users to thousands in losses.
* **Mobile-on-Mobile vulnerability:** The text highlights that Smart-ID is designed for convenience, allowing a user to authenticate on the same device they are browsing on, which removes "out-of-band" security (using a separate physical channel).
* **The ID-Card Solution:** The author reminds readers that the Estonian ID-card (chip-based) is resistant to these specific relay attacks because the private key operation is bound to the specific TLS session in the browser (client-authenticated TLS), preventing a fraudster from easily replaying the session.

## Summary

**Summary of the argument:**
Arnis Paršovs argues that the millions of euros lost to Smart-ID phishing are the result of banks prioritizing convenience over security and refusing to implement available anti-phishing technologies. He contends that banks are hypocritical for blaming users while simultaneously normalizing dangerous authentication practices and ignoring safer alternatives like the ID-card or Smart-ID+. The article concludes that the only way to force banks to fix these systemic vulnerabilities is to hold them legally and financially liable for fraud losses.

**Context:**
This is an opinion piece published on the Estonian National Broadcasting (ERR) portal. It was created to challenge the prevailing narrative that phishing victims are stupid or careless. Its purpose is to advocate for consumer protection, pressure banks to adopt stricter security protocols (like mandatory code-matching or QR scanning), and influence policy regarding bank liability for authorized push payment fraud.

***

## Critical Analysis

Dr. Paršovs provides a necessary and morally aligned intervention, but his technical prescriptions suffer from a degree of academic idealism that overlooks the practicalities of mass-market UX and the "Mobile-First" reality.

1. **The "Password Card" Fallacy:** While rhetorically effective, praising password cards is technically regressive. Matrix cards were susceptible to man-in-the-middle (MitM) attacks, easy to photocopy, and offered zero non-repudiation. Smart-ID is cryptographically superior (PKI-based); the failure is indeed in the *implementation* of the challenge-response flow, but suggesting a return to static grids is dangerous nostalgia.
2. **The Smart-ID+ / QR Code Blind Spot:** Paršovs champions Smart-ID+ (QR scanning) as a silver bullet. He ignores the "Same-Device" problem. If a user is banking *on* their phone, they cannot scan a QR code displayed on that *same* phone screen. With mobile banking overtaking desktop, Smart-ID+ breaks the primary use case. Deep-linking (app-to-app authentication) is the standard, and securing that requires better intent verification (e.g., binding the transaction details more visibly), not just QR codes.
3. **The Friction vs. Adoption Reality:** He praises LHV for "Code Matching" (picking 1 of 3 codes). While secure, he underestimates the friction. In high-volume transaction environments, every added second of friction translates to dropped transactions. Banks aren't just "lazy"; they are calculating the cost of fraud reimbursement (zero, currently) vs. the cost of user churn. His solution isn't technical; it's purely economic. He is correct that regulation must change the equation, but he fails to acknowledge *why* banks resist this—it's not just incompetence, it's calculated risk management where the user carries the risk.
4. **ID-Card Usability:** Suggesting the ID-card as a primary alternative is blind to the hardware reality. Mobile usage is dominant. You cannot plug an ID-card reader into an iPhone easily. The ID-card is a "backup" anchor of trust, not a daily transactional tool for the masses.
5. **Missing the "Token Binding" Argument:** A true expert critique would focus on **Token Binding** or **FIDO2/WebAuthn**. The solution isn't "better user attention" or "QR codes," it is cryptographically binding the authentication session to the specific channel so that a relay attack becomes mathematically impossible. Paršovs touches on this with the ID-card but misses the opportunity to push for FIDO2 implementation in Smart-ID, which would solve the phishing issue without UX degradation.

**Assessment:** A strong ethical argument that correctly identifies the perverse incentives of the banking sector, but weak on viable mobile-first technical remediation. He correctly identifies the *disease* (liability imbalance) but prescribes *medicine* (QR codes/ID-cards) that the patient (the market) refuses to swallow.

***

## Arnis Paršovs: Pangad ei kasuta Smart-ID õngitsusrünnete vastaseid meetmeid

**Arvamus**
**Arnis Paršovs, Tartu Ülikooli küberkaitse teadur**

### Smart-ID
Smart-ID Autor/allikas: Kaupo Meiel/ERR

Viimase kuue aasta jooksul on eestlased kaotanud Smart-ID õngitsuspettuste tõttu miljoneid eurosid. Kuigi sageli süüdistatakse ohvreid hooletuses, peitub tegelik probleem pankade ja Smart-ID süsteemi disainivalikutes, kirjutab Arnis Paršovs.

Eestis said laiaulatuslikud õngitsuspettused alguse 2019. aastal, kui pangad loobusid paroolikaartidest ja viisid kliendid üle Smart-ID-le. Smart-ID krüptograafiast vaimustuses pangad jätsid tähelepanuta asjaolu, et õngitsusrünnete vastu pakub uus tehnoloogia nõrgemat kaitset kui eelnevalt kasutuses olnud paroolikaardid.

Paroolikaartidel oli oma nõrkusi, kuid paroolikoodide saamiseks pidid petturid ohvritele helistama ja küsima neid otse tekitades kahtlust ka kõige ettevaatamatute inimeste seas. Smart-ID puhul aga piisab ainult sellest, et kelm veenab ohvri kinnitama Smart-ID päringu ja täpselt selliselt ongi süsteem mõeldud toimima. Eelnevalt kasutuses olnud paroolikaardiga kinnitatud maksetele kehtis mõnesaja euro suurune päevalimiit, kuid Smart-ID puhul ei ole pangad sarnaseid piiranguid kehtestanud, hoolimata selle teadaolevatest turvariskidest.

Need pettused koormavad märkimisäärselt ka õiguskaitseorganeid, kes peavad tegelema probleemide tagajärgedega, mida pangad on otsustanud mitte ennetada.

## Smart-ID põhiline nõrkus

Smart-ID peamine turvanõrkus seisneb selles, et selle ohutus sõltub täielikult kasutajate võimest tunda ära õngitsuslehti või kontrollida helistaja isikut. Enamik inimesi ei suuda seda usaldusväärselt teha. Aastakümnete jooksul tehtud uurimistööd on näidanud, et keskmise kasutaja suutlikkus tuvastada õngitsuslehti on lähedane juhuslikule äraarvamisele ning isegi tehniliselt pädevad kasutajad langevad sageli hästi koostatud pettuste ohvriks. Ometi eiratakse seda reaalsust Smart-ID turvalisuse aruteludes suuresti.

Pangad hoiatavad kliente Smart-ID päringute kinnitamise eest kahtlaste kõnede ajal, samal ajal kui nende enda klienditeenindus kasutab klientide tuvastamiseks täpselt sama meetodit. Kuidas peaksid kasutajad aru saama, miks on see ühel juhul vastuvõetav, kuid teisel mitte? Päriselus ei ole pärast enda tuvastamist võõrale isikule tal võimalust meid pangas esindada, kuid Smart-ID puhul see just juhtub.

Kasutajate vaatenurgast on ootamatu, et kuigi neid süsteeme turundatakse kui kõrgeima turvatasemega lahendusi, peavad siiski kasutajad ise hindama, kas isikustamist nõudev osapool on usaldusväärne ning identiteet vastavuses väidetavale. Sellise koormuse panemine kasutajale on vastuolus elementaarsete ootustega, mida turvaline autentimine peaks pakkuma.
> Inimlik eksimus on paratamatu ning turvalisus peab olema süsteemi sisse ehitatud.

Smart-ID looja SK ID Solutions (SK) kinnitab jätkuvalt, et Smart-ID on turvaline ning probleem peitub kasutajates, kes "kasutavad seda valesti". Kui aga enamik inimesi ei suuda digitaalset tööriista korrektselt kasutada, ei ole probleem inimestes, vaid tööriistas. Inimlik eksimus on paratamatu ning turvalisus peab olema süsteemi sisse ehitatud. Me ei anna lapsele teravat nuga ja seejärel ei süüdista teda siis lõikehaavade tekitamises. Sama peab kehtima ka digimaailmas.

## Pangad jätavad õngitsusrünnete vastased meetmed kasutamata

Avalikkuse ees kipuvad pangad käsitlema õngitsust samas kategoorias pettustega, mis ei seisne tehnoloogilistes nõrkustes, nagu näiteks investeerimis- või romantikapettused, ning käituma justkui ei saaks nad teha muud kui ohvreid kaastundlikult kuulata ja soovitada neil edaspidi "ettevaatlikum olla". See ei vasta tõele.

Alustuseks eirab see narratiiv asjaolu, et igal Eesti elanikul on ID-kaart, mille autentimisprotsess on õngitsusrünnete suhtes vastupidav. Erinevalt Smart-ID-st ei saa õngitsuslehel tehtud ID-kaardi autentimist taaskasutada kasutaja asemel pangas esinemiseks. Ometi ei soovita ükski pank klientidel eelistada ID-kaarti turvalisuse nimel, sest see eeldaks Smart-ID nõrkuste tunnistamist. Samuti väärib märkimist, et Eesti jaepangandusturul domineerivad Swedbank ja SEB kuuluvad SK omanike hulka, mis annab neile selge huvi Smart-ID edendamiseks ja selle turvaprobleemide pisendamiseks.

Kuigi pangad kinnitavad avalikult, et klientide kaitsmine pettuste eest on neile väga oluline, tasub küsida, miks suurtest Eesti pankadest on ainult LHV kasutusele võtnud Smart-ID turvameetme, mis nõuab kasutajalt õige kontrollkoodi valimist mitme variandi seast. Põhjus on lihtne, teised pangad peavad isegi minimaalseid lisaturvameetmeid klientide jaoks lubamatuks ebamugavuseks, mis võib kahjustada nende konkurentsivõimet. Sisuliselt on LHV oma kaitset parandades asetanud end ebasoodsamasse konkurentsiolukorda.

Tegelikkuses saaksid pangad teha palju rohkem pettuste ennetamiseks ja varajaseks tuvastamiseks. Pangad töötlevad tohutul hulgal andmeid, mille abil oleks võimalik tuvastada kahtlast tegevust internetipanganduses – uued seadmed või ebatavalised asukohad, makselimiitide muutmised, ebatüüpilised tehingud, ligipääs riigist, mis erineb Smart-ID seadme asukohast, IP-aadresside maine jne. Ometi puuduvad avalikud tõendid selle kohta, et pangad neid võimalusi sisuliselt rakendaksid. Ja miks nad peaksidki, kui kahjud jäävad klientide, mitte pankade kanda?

Seaduse järgi ei ole pangad kohustatud hüvitama pettusega tehtud makseid, kui need on kinnitatud pangaga kokku lepitud autentimisviisil. Samal ajal on pangal kohustus mitte aktsepteerida ebaturvalisi autentimisviise. Ainult pank, mitte klient, mõistab täielikult erinevate autentimisvahendite riske ning suudab rakendada meetmeid klientide kaitsmiseks.

Eelmise aasta juunis tõi SK kasutusele Smart-ID+ turvafunktsiooni, mis nõuab kasutajalt toimingu algatamist QR-koodi skaneerimise teel. See muudab telefonikõnedele tuginevad õngitsusrünnakud oluliselt keerulisemaks. Veelgi enam, kui Smart-ID+ autentimine algatatakse samast mobiilseadmest, kus töötab Smart-ID rakendus, muutub autentimisprotsess täielikult õngitsuskindlaks, pakkudes ID-kaardi tasemel turvalisust. Hoolimata sellest ei näita pangad Smart-ID+ kasutuselevõtul mingit pakilist huvi.

Võib küsida, miks SK lubab pankadel kasutada Smart-ID-d ilma rangemaid turvanõudeid kehtestamata. Põhjus on lihtne: SK tasulised kliendid on pangad ja teenusepakkujad, mitte Smart-ID kasutajad. See loob selge stiimuli eelistada mugavust ja laialdast kasutuselevõttu turvameetmete arvelt ning kasutajatele ei anta võimalust tugevamat turvalisust ise valida.

Sisuliselt on Smart-ID kiire edu suurel määral rajatud õngitsusohvrite kannatustele, kes on kandnud mugavusele orienteeritud turvamudeli kulud. Mugavatel makselahendustel on oma koht, kuid pankade kohustus on arvestada vastavate tehnoloogiariskidega ja rakendada kaitsemeetmeid, nagu nad teevad viipemaksete puhul, millele kehtib 50-eurone tehingulimiit.

## Pankade vastutus oma teenuste turvalisuse eest

Vastutusest rääkides väidavad pangad, et ohvrid peavad kandma täielikku vastutust petturlike Smart-ID PIN2 maksepäringute kinnitamise eest, eirates asjaolu, et turvarike toimub enne PIN2 kinnitust, nimelt hetkel, kui pank annab petturile ligipääsu ohvri internetipangakontole. Just see ligipääs võimaldab petturil üldse esitada ohvri seadmesse petturliku PIN2 maksepäringu.

Kliendi vaatenurgast on selliste päringute kinnitamine täiesti mõistlik, kuna kliendid eeldavad õigustatult, et selliseid päringuid saavad algatada vaid nemad ise või panga volitatud esindaja. Klientidel on täielik õigus oodata, et pangad kasutavad piisavalt turvalisi süsteeme, kus kolmandad isikud ei saa ligipääsu internetipangale ega teha toiminguid kliendi nimel.
> Viimasel ajal on petturid hakanud ära kasutama ka nõrkusi Smart-ID väljastamise protsessis.

Probleem ei piirdu üksnes Smart-ID autentimisprotsessi puudulikus kindluses õngituspettustele. Viimasel ajal on petturid hakanud ära kasutama ka nõrkusi Smart-ID väljastamise protsessis. Vastutus selle eest, et elektroonilised identiteedivahendid jõuaksid üksnes nende õiguspäraste omanike kätte, lasub eelkõige Smart-ID teenusepakkujal SK-l.

Samal ajal peavad pangad mõistma, et autentimisvahendid, mille väljastamine ei hõlma füüsilist isikutuvastust, pakuvad olemuslikult nõrgemat turvet ning see tuleb vastavalt arvesse võtta pankade riskihindamises ja kaitsemeetmete rakendamises.

Arvestades, et pangakliendid ei saa mõjutada ei panga süsteemide ega nende poolt kasutatavate autentimisvahendite turvalisust, peaksid Smart-ID õngitsusohvrid lõpetama enda süüdistamise ja nõudma kahjude hüvitamist pankadelt. Panga tsiviilvastutus võib tuleneda mitte ainult õigusvastasest tegevusest, vaid ka üldise hoolsuskohustuse rikkumisest teenuste turvalisuse ja usaldusväärsuse tagamisel.

Nagu toodud näited kirjeldavad, on pangad käitunud süsteemselt hooletult, jättes kasutamata olemasolevad meetmed Smart-ID õngitsusrünnete ennetamiseks või nende mõju piiramiseks.

Kokkuvõtteks tuleb probleemi lahendamiseks tunnistada, et edukate Smart-ID õngitsusrünnete põhjus ei peitu inimestes, vaid ebaturvalises tehnoloogias, ning nõuda vastutust selle tegelikelt kandjatelt.

Pangad on väga tõhedad riskide juhtimisel, mille eest nad vastutavad, ning kuna just nemad on parimas positsioonis neid tehnoloogilisi riske maandama, on pankade vastutuse kehtestamine igati põhjendatud. Seda saab saavutada kas seadusandliku täpsustamise või kohtupraktika kaudu, mis kohustab panku vastutama oma lahenduste turvalisuse eest ja hüvitama Smart-ID õngitsusrünnetest põhjustatud kahjud.
