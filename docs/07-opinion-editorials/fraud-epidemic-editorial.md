---
title: "Teadlikult aktsepteeritud risk: Miks teie pangakonto tühjendamine on sisseprogrammeeritud valik?"
description: Investigative editorial on the institutional failures behind Estonia's Smart-ID fraud epidemic
---

# Teadlikult aktsepteeritud risk: Miks teie pangakonto tühjendamine on sisseprogrammeeritud valik?

**Eng:** Consciously Accepted Risk: Why Your Bank Account Being Emptied Was a Programmed Choice

**Author:** Tom Kristian Abel
**Classification:** Investigative Editorial
**Date:** 2026-02

---

## E-riigi müüri murenenud tellis

Eesti e-riigi edulugu on rajatud usaldusele. Meile on aastaid räägitud, et elame digitaalses kindluses, kus kodanik saab ajada asju turvalisemalt kui paberil. Kuid alates 2019. aastast on see müüt murenenud miljonite eurode väärtuses. Stsenaarium on alati sama: inimene saab teavituse, sisestab harjumuspäraselt PIN1-koodi ja hetk hiljem on tema elusäästud kadunud.

Pangad ja ametiasutused nimetavad seda ohvri "raskeks hooletuseks". Nad väidavad, et kasutaja andis vabatahtlikult kurjategijale võtmed. Kuid kas on tõenäoline, et tuhanded eestlased muutusid üleöö hooletuks, või on meie digitaalsesse vundamenti tekkinud pragu? Tõde on karmim kui lihtne kuritegevusstatistika. See ei ole kasutajate massiline rumalus, vaid süsteemne arhitektuurne praak, mida serveeritakse meile mugavusteenusena. Meie digitaalne lukk on katki, ja mis kõige hullem – lukuvalmistaja teab seda.

---

## SK ID Solutionsi arhitektuuriline reetmine

Probleemi tuum ei peitu häkkerite geniaalsuses, vaid Smart-ID lahenduse arhitektuuris, mille ainuvalitsejaks on SK ID Solutions AS. Tehniliselt on tegemist "päritolu sidumise" (origin binding) puudumisega. Erinevalt ID-kaardist, mis nõuab füüsilist kohalolu ja brauseri sidet, on Smart-ID "lahtiseotsaga" lahendus. See võimaldab ründajal seista kliendi ja panga vahel (*Man-in-the-Middle*), vahendades päringuid reaalajas.

See ei ole teoreetiline "auk", vaid disainivalik. Kui turvaeksperdid juhtisid tähelepanu Smart-ID vastuvõtlikkusele vahendusrünnetele (nagu QRLJacking), ei olnud vastuseks üllatus, vaid küüniline tunnistus. SK ID Solutionsi sisekirjavahetusest, mis on jõudnud vastutustundliku avalikustamise raames ekspertideni, vaatab vastu jahmatav lause: **"teatud perioodiks oleme seda riski teadlikult aktsepteerinud."**

Lugege seda uuesti. Teenusepakkuja, kelle käes on terve riigi digitaalne identiteet, valis teadlikult turvaaugu säilitamise, et mitte ohverdada kasutusmugavust (UX). Kontrollkoodide süsteem, mida meile pakutakse "turvameetmena", on sisuliselt teater. See delegeerib vastutuse krüptograafialt inimesele, nõudes kasutajalt eksimatut tähelepanu olukorras, kus süsteem ise peaks pakkuma kaitset. See on nagu ukselukk, mis avaneb ka võõra võtmega, eeldades, et omanik seisab alati ise ukse kõrval ja kontrollib tulijat nägupidi.

---

## Pankade süüdlaslik mugavuskartell

Miks on selline riskantne arhitektuur üldse lubatud? Siin tuleb vaadata SK ID Solutionsi omanikeringi: Swedbank, SEB ja Luminor. Pangad ei ole siin ohvrid, vaid kasusaajad. Nad on aastate jooksul süstemaatiliselt lammutanud turvalisemaid, kuid kallimaid autentimisviise (paroolikaardid, riistvaralised tokenid), asendades need odava ja mugava äpiga.

Tekkinud on perversne huvide konflikt. Pangad, kes peaksid kaitsma meie raha, omavad ettevõtet, mis loob turvastandardid. Nad on loonud süsteemi, kus tehingute kiirus ja maht toodavad kasumit, kuid paratamatu pettuserisk on täies ulatuses veeretatud kliendi õlule. Kui LHV on püüdnud juurutada täiendavat kontrolli (nt koodide sobitamine maksetel), siis suurpangad on tõrjunud turvalisemaid lahendusi (nagu QR-koodi põhine sessioonisidumine), viidates "konkurentsivõimele". Sisuliselt on loodud mugavuskartell, kus turvalisus on teisejärguline, sest kahjud ei tule panga kasumi arvelt, vaid tavainimese rahakotist.

---

## Regulaatorite halvatus teadaoleva ohu ees

Veelgi murettekitavam on riiklik järelevalve – Riigi Infosüsteemi Ameti (RIA) ja Tarbijakaitse ja Tehnilise Järelevalve Ameti (TTJA) – halvatus. Kuidas saab teenus, mille arendaja tunnistab "teadlikult aktsepteeritud riske", omada kõrgeimat usaldusväärsuse taset (High LoA)?

Euroopa eIDAS määrus ja GDPR nõuavad "turvalisust disaini kaudu" (*security by design*). Ometi on regulaatorid vaadanud pealt, kuidas Smart-ID arhitektuurijulgeolek on jäänud maha moodsast standardist (FIDO2/WebAuthn), mida kasutavad tehnoloogiahiiud nagu Google ja Apple. Kui miljardite dollaritega tehnoloogiafirmad peavad päritolu sidumist (origin binding) elementaarseks, siis miks Eesti regulaatorid lubavad meie e-riigi alustalal opereerida madalamate standarditega?

"Riskianalüüs" ei ole vabandus turvaaugu jätmiseks, eriti kui see auk on kurjategijate peamine sissetungitee. Riigi tegevusetus on muutnud nad vaikivaks kaasosaliseks selles "digitaalses taskuvarguses". Eesti 2017. aasta ROCA kriis, kus RIA peatas 750 000 ID-kaardi sertifikaadi enne rünnakuid, näitab, et regulaator suudab tegutseda – kui tahab.

---

## Stagneerunud reformid ja tulevikuprognoos

SK ID Solutionsi vastused kriitikale on olnud ümarad: "analüüsime lahendusi" ja "otsime tasakaalu". See on bürokraatlik venitamistaktika. Samal ajal, kui nemad "analüüsivad", tühjenevad Eesti perede kontod.

Kui see epideemia ei lõppe, seisame silmitsi palju suurema ohuga kui raha kaotus – see on usalduse kollaps. Kui Smart-ID kvalifitseeritud staatus tuleks turvaintsidentide tõttu tühistada, paiskaks see Eesti digiriigi kaosesse. Meie sõltuvus ühest monopoolsest, turvalisuse osas kompromisse tegevast teenusepakkujast on muutunud riiklikuks julgeolekuriskiks. Me ei saa oodata, kuni "mugavus" on söönud ära viimasegi riisme meie digitaalsest turvatundest.

---

## Parandus on olemas – aga keegi ei taha seda kasutada

On aeg lõpetada ohvrite süüdistamine ja nõuda vastutust arhitektidelt. Lahendus ei ole utoopiline, see on tehnoloogiliselt olemas ja standardiseeritud (FIDO2/WebAuthn).

Esiteks, RIA peab väljastama konkreetse ettekirjutuse: Smart-ID peab hiljemalt 2026. aasta veebruariks implementeerima krüptograafilise konteksti sidumise. Teiseks, pangad peavad koheselt muutma kohustuslikuks kontrollkoodide automaatse sobitamise või QR-põhise autentimise, lõpetades ebaturvalise "lihtsa" sisselogimise toetamise.

Me ei saa nimetada end digiriigiks, kui meie digitaalsed võtmed on disainitud nii, et neid saab varastada. On aeg lõpetada teater, tunnistada "teadlikult aktsepteeritud" viga ja parandada lukk enne, kui meil pole enam midagi, mida lukustada.

---

*See on osa sõltumatust turvauuringust. Vaata täielikku uurimist: [Smart-ID Security Analysis](../01-core-research/smartid-security-analysis.md).*
