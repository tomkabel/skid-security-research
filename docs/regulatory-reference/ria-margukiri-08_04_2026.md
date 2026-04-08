Riigi Infosüsteemi Amet
eID osakond / Küberturvalisuse teenistus (Järelevalveosakond)
Pärnu mnt 139a, 15169 Tallinn
ria@ria.ee
MÄRGUKIRI
08.04.2026
Lugupeetud Riigi Infosüsteemi Ame� eID ja järelevalve valdkonna juhid
Pöördun Teie poole, et juh�da tähelepanu Ees� digiiden�teedi ökosüsteemis tekkinud struktuursele
turutõrkele, mis jätab Ees� elanikud ja ﬁnantssektori tarbetult avatuks massilistele automa�seeritud
õngitsusrünnetele (AiTM – Adversary-in-the-Middle).
Probleemi tuum ei ole tehnoloogiline, vaid äriline. Tehniline konsensus on saavutatud: Smart-ID v2
teavitustepõhine voog on pärandtehnoloogia, mille andmepüügivastane kaitse ei vasta tänapäevasele
ohupildile, samas kui v3 (QR/App-to-App) maandab need riskid. Paraku näitab turu käitumine, et
erasektor ei suuda isereguleeruvalt turvalisemale lahendusele üle minna, mistõ�u on vajalik RIA kui
riikliku järelevalveasutuse strateegiline ja sihistatud sekkumine.
1. Probleemi olemus: Lepinguline ummseis ja turutõrge
Prak�ka näitab, et SK ID Solu�ons AS (SK) ei suuda ega soovi iseseisvalt v2 pärand-API-t sulgeda, kuna
nad on seotud pikaajaliste teenuslepingutega (SLA) eraõiguslike e-teenuste pakkujatega (RP – Relying
Par�es). Paljud neist teenusepakkujatest keelduvad eraldamast IT-arenduse ressursse oma süsteemide
(nt e-poed, iseteenindusportaalid, kliendibaasid) migreerimiseks turvalisemale v3 voole.
See on klassikaline turutõrge:
Teenusepakkujad (RP-d) hoiavad kokku lühiajaliste arenduskulude pealt, jätkates v2 kasutamist.
SK ID Solu�ons ei saa v2 voogu ühepoolselt sulgeda ilma lepinguid rikkumata ja ärikliente kaotamata või
pahandamata.
Pankadele ja kodanikele eksternaliseeritakse kogu risk ja kulu. Ründajad kasutavad v2 kaudu kaaperdatud
PIN1 sessioone (pääsedes ligi isikuandmetele) edukaks sotsiaalinseneeriaks, et pe�a kasutajatelt välja
PIN2 ja teostada ﬁnantspe�usi, mille kahjud kannab lõpuks ﬁnantssektor ja ühiskond.
Äriline mugavus trumpab hetkel üle riikliku küberturvalisuse. SK on langenud omaenda pärandlepingute
pantvangiks ning vajab väljastpoolt tulevat regula�ivset tõuget, et olukorda lahendada.
2. Küberturvalisuse seadus (KÜTS/NIS2) ja RP-de vastutus
Alates NIS2 direk�ivi ülevõtmisest ja KÜTS-i kaasajastamisest on oluline osa Smart-ID-d kasutavatest
teenusepakkujatest (nt telekomid, energiae�evõ�ed, suured e-kaubanduse platvormid, elutähtsa
teenuse osutajad) seaduse mõistes olulised või elutähtsad üksused.
KÜTS § 15 kohustab neid rakendama proportsionaalseid ja tehnika arengutasemele (state of the art)
vastavaid turvameetmeid. Mitmefaktoriline auten�mine (MFA), mis on vastuvõtlik lihtsatele
puhverserveri rünnetele ajal, mil teenuseosutaja (SK) pakub ametlikult andmepüügikindlamat alterna�ivi
(v3), ei vasta enam tehnika arengutasemele. Seega ei ole probleem mi�e ainult SK-s, vaid eelkõige KÜTS-i
kohuslastest teenusepakkujates, kes eiravad oma hoolsuskohustust.
3. Taotletavad sammud: Regula�ivne hoob SK vabastamiseks
Selle turutõrke lahendamiseks ei ole vaja RIA-l algatada SK suhtes ründavat järelevalvemenetlust. SK
vajab, et RIA "teeks n-ö halba politseid" ja annaks neile juriidilise argumendi (nn regula�ivse force
majeure'i), millele toetudes saavad nad oma kliente sundida uuendusi tegema.
Teeme RIA-le e�epaneku astuda järgmised proportsionaalsed ja halduslikult teostatavad sammud:
Ametliku järelevalvesuunise (Juhise) väljastamine: Palume RIA-l (koostöös CERT-EE-ga) avaldada ametlik
suunis, mis deklareerib selgelt, et Smart-ID v2 teavitustepõhine auten�misvoog ei vasta enam KÜTS-is
nõutud tehnika arengutasemele ning seda ei tohiks kasutada isikuandmete, ﬁnantsandmete või muude
tundlike süsteemide auten�miseks. Mõju: See suunis annab SK-le seadusliku ja regula�ivse aluse
(haldusorgani e�ekirjutus/suunis) käivitada oma API depreca�on-plaan ja nõuda RP-delt migreerumist
v3-le, ilma et see liigituks lepingurikkumiseks.
KÜTS kohuslaste auditeerimise fookus: Lisada RIA regulaarsetesse KÜTS-i kohuslaste
järelevalveaudi�tesse kontrollküsimus auten�mislahenduste turvalisuse (sh v3 kasutamise) kohta. Kui
oluliste teenuste osutajad tajuvad, et RIA käsitleb v2 kasutamist audi� puudusena, teevad nad
migratsiooniotsuse ise ja kiires�.
Koostöö Finantsinspektsiooni ja Pangaliiduga: Kaasata diskussiooni pangad, kes kannavad peamist
rahalist ja mainekahju. SK tuumikomanike (suurpankade) huvides on pe�uste vähendamine. RIA ametlik
suunis aitab pankade pe�ustevastastel osakondadel (Fraud Departments) survestada SK juhtkonda API
sulgemise tähtaegu paika panema.
Kokkuvõte
Ees� ei saa lubada olukorda, kus riiklik eID ökosüsteem stagneerub ja küberkuritegevus õitseb vaid
seetõ�u, et osad erasektori e-teenused keelduvad tasumast oma IT-süsteemide kaasajastamise kulusid,
hoides SK-d pärandlepingutega lõksus.
Käesolev märgukiri pakub RIA-le võimaluse lahendada see ummseis elegantselt – luues ametliku
regula�ivse ootuse, mis sunnib turgu liikuma, vabastab SK lepingulistest käeraudadest ja tõstab
hüppeliselt kogu riigi e-teenuste turvataset.
Olen valmis soovi korral teemat täpsustama ning kohtuma RIA vastavate spetsialis�dega.
Palun vastata mulle kirjalikult e-pos�ga.
Lugupidamisega
(allkirjastatud digitaalselt)
Tom Kris�an Abel
Märgukirja esitaja
Tom Kris�an Abel
Lisad:
_______________
