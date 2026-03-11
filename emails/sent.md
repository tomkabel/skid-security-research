From: Tom Kristian Abel <tomkristian.abel@proksiabel.ee>
To: ria@ria.ee, helen.raamat@ria.ee
Bcc: cert@cert.ee
Subject: Mõtted "Olukorrast digiriigis" järel: Smart-ID+ arhitektuur, QRLJacking ja eID turvalisus
Date: Fri Mar  6 15:33:47 2026
Attachments: 2026-03-06_10-59.png, Smart-ID-PoC.2 (1).tar.gpg

Tervist, Helen ja RIA eID meeskond!

Kuulasin just "Olukorrast digiriigis" hiljaaegu eetris olnud osa. Jutt läks
korraks Smart-ID+ usaldatud brauserite ja IP-kontrolli peale ning mul
hakkas kohe tuluke põlema. Kas teil on selliste uute plaanide kohta juba
midagi paberile kirja pandud, mida saaks uurida? Ma isiklikult sellele
IP-kontrollile suurt edu ei ennusta – olukorras, kus CGNAT teeb oma töö
ning töötaja kontori VPN koos Telia 5G mobiilandmesidega nutitelefonis on
igapäevane nähtus, lööb see IP-põhise kontrolli lihtsalt uppi.

Kirjutan tegelikult hoopis seetõttu, et mul on hiljutisest suhtlusest SK ID
Solutionsiga ikka veel natuke šokk ees.

Proovisin nendega detsembri paiku rääkida Smart-ID+ puuduvast
context-binding kontrollist cross-device flow’de puhul. Pakkusin isegi
varasemast kogemusest välja ühe konkreetse defense-in-depth lahenduse
proximity-kontrollide asemele. Vastu saadeti standardne "aitäh raporti
eest" kiri. Boonusena lubasid nad oma aegunud GPG-võtmed ära uuendada, sest
jah, neil istus incident@skidsolutions.eu
<https://www.google.com/url?sa=E&q=mailto%3Aincident%40skidsolutions.eu>
all septembrist novembrini aegunud võti.

Peale selle tuli igati vasturääkiv kommunikatsioon, kus väideti, et minu
kirjeldatud QRLJacking polevat turvaauk. See on neil hoopis
arhitektuuriline disain ja juhitud risk. Väidetavalt teadsid nad probleemi
juba varajases arendusfaasis, aga kuna head lahendust polnud valmis, jäeti
see lihtsalt tuimalt sisse. SK turunduses ja dokumentatsioonis viidatakse
<https://sk-eid.github.io/smart-id-documentation/rp-api/introduction.html>
aga endiselt QR-koodipõhisele auth flow'le kui maksimaalselt tugevale
kaitsele õngitsusrünnakute vastu. Ehk siis... risk, mis lihtsalt kaetakse
kinni oma turunduseelarvega?
[image: 2026-03-06_10-59.png]


See kontrollitud riski jutt ajab segadusse, kui vaadata, mida teevad samal
ajal
<https://fidoalliance.org/biometric-update-nfc-based-idv-with-liveness-delivers-zero-fraud-fewer-support-calls-for-bankid-norway/>
meie Põhjamaade naabrid. Lugesin just värskelt, kuidas BankID Norway on oma
autentimise ja device re-binding'u viinud reaalselt phishing-resistant
tasemele. Nemad kombineerivad device-bound passkey’d NFC-põhise
dokumendilugemise ja pidevalt uueneva biometric liveness kontrolliga
(iProov). Tulemus? Sadu miljoneid turvalisi kandeid ja sellel teekonnal
absoluutne zero fraud. Nad saavad aru, et account recovery on ründajate
lemmiksihtmärk ning pelgalt paroolist või nõrgast sidumisest ei piisa.

Mis mind jahmatab, on see, et nii SK ID kui ka Norra BankID pakkuja (Stø
AS) on mõlemad eIDAS-e raamistikus delegeeritud QTSP-d. Kohalik ja Euroopa
seadusandlus nõuab neilt kõrgeima turvataseme tagamist kõige
uuenduslikemate tehnoloogiliste võimalustega. Aga reaalsus on drastiliselt
erinev: üks rakendab FIDO standarditele vastavaid tehnilisi lahendusi, et
ründeid eos tõrjuda, teine aga teeb näo, et cross-device ründed on
paratamatus, millega tuleb lihtsalt leppida.

Kuna eID osakond veab lõppkokkuvõttes kogu seda riiklikku autentimise
infrat ja usaldusteenuseid (ning RIA peaks justkui tegema ka riiklikku
järelevalvet), siis tahan otse küsida: kuidas RIA sellele vaatab? Kas me ei
peaks riigina eeldama, et SK ID täidab oma QTSP kohustusi päriselt ja lapib
selle QRLJackingu nõrkuse, mitte ei nimeta paljast õhust tekkinud
disainiviga paratamatuseks?

Riikliku tähtsusega identiteedipartner ei saa ega tohiks käituda nagu mingi
move-fast-and-break-things idufirma.

Kas RIA-l oleks ehk huvi teha järgmisel nädalal sel teemal üks lühike kõne?
Sooviksin vestelda eeskätt sellest, mida RIA on planeerinud, mida annaks
ära teha nüüd ja praegu ning kuidas seda Smart-ID+ arhitektuurilist apsakat
reaalselt lahendada. Minu eesmärk ei ole nõuda ülaltoodud teemal ametlikke
seisukohti ega selgitusi, vaid keskenduda edasivaatavatele lahendustele.

Leian, et RIA-l ja riigi autentimisteenusel on unikaalne eripära ja seeläbi
eos eelis rakendada tipptasemel küberründeid raskendavat Smart-ID+
QR-koodi cross-device
flow lahendust. Tulevikku vaadates oleks võimalik korraga raskendada
(kuritegevuse kiire AI kasutuse tõtttu) küberohtude eest mitte üksnes ühe
teenusepakkuja, vaid terve Eesti riigi e-teenused ja kõik muu, mis toetub
riigi autentimisele. Nii pettus kui ka küberrünnak algavad info kogumisest
ja recon'ist. Kui riik suudab kavandatava rünnaku tõrjuda juba selle
algfaasis ega lase juhtuda sarnastel intsidentidel nagu eesti.ee-ga, siis
ennustan Eesti küberruumi lähituleviku osas palju optimistlikumat
stsenaariumit.

Mõned vihjed, mida ma pakun välja osana kaitsestrateegiast leidub mu
GitHubi Google turvasüsteemide analüüsis. Eri strateegiaid on mtimeid,
mõned mis peast võtta on ehk: LLM-vaenulik frontend struktureerimine,
staatilise/dünaamilise analüüsi raskendamine, CPU-in-JavaScript, JA3/JA4 ja
kliendi riistvaralise sõrmejälgede sanity check jne.

Lugupidamisega
Tom Kristian Abel
Security Engineer | ProksiAbel OÜ | +372 5666 6981 | PGP public-key.asc
<https://proksiabel.ee/public-key.asc>
tom@proksiabel.ee | github.com/tomkabel | linkedin.com/in/hr-abel/
<https://www.linkedin.com/in/hr-abel/>