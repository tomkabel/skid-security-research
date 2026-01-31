
**5. Tõendusmaterjal C: "Turvateater" – Kosmeetika krüptograafia asemel**
**Strateegiline eesmärk:** Paljastada, et SK ID pakutud "lahendused" (nt visuaalsed kontrollkoodid) on vaid silmapete, mis ei lahenda probleemi juurteni, luues vaid valeturvatunde.

Veelgi küünilisemaks muutub pilt, kui vaatame, mida SK ID on teinud probleemi *näiliseks* lahendamiseks. Vastuseks varasematele kriitikanooltele on kasutajaliidestesse lisatud värvilised ikoonid ja kontrollkoodid (VC - *Verification Codes*). Meile öeldakse: "Vaadake, kas pilt telefonis ühtib pildiga arvutiekraanil."

See on klassikaline "turvateater". Miks? Sest QRLJacking rünnaku olemus on **reaalajas toimuv vahendamine (relaying)**.

Kui ründaja istub teie ja panga vahel, siis ei näita ta teile oma suvalist koodi. Ta laeb taustal päris panga lehelt päris QR-koodi, kuvab selle teile oma võltslehel, ja kui süsteem genereerib kontrollkoodi (nt "0424"), siis kuvab ründaja automaatselt ka sedasama koodi. Teie telefonis ja ründaja lehel ongi numbrid samad. Klõpsate "Jah" – ja oletegi lõksus.

SK ID insenerid teavad suurepäraselt, et ilma krüptograafilise seoseta brauseri ja nutiseadme vahel (Channel Binding) on igasugune visuaalne kontroll vaid dekoratsioon. Nad valisid odava visuaalse muudatuse, mis näeb turundusmaterjalides hea välja, selle asemel, et ehitada kallis, kuid turvaline backend-lahendus. Nad andsid teile katkise auto, aga värvisid selle ukselingid punaseks, väites, et nüüd on sõiduk ohutu. See on teadlik eksitamine.

**6. Tõendusmaterjal D: Proprietaraarne lõks – Miks FIDO2 on tabu?**
**Strateegiline eesmärk:** Näidata, et turvaaugu parandamata jätmise taga on ärihuvid – soov hoida turgu lukus (vendor lock-in), vältides avatud ja turvalisemaid standardeid.

Küsige endalt: miks leiutab väike Eesti firma jalgratast, kui maailm sõidab ammu ringi F1 vormelitega? Maailmas eksisteerib avatud ja litsentsitasuta standard nimega FIDO2 / WebAuthn. See on tehnoloogia, mida kasutavad Google, Microsoft ja Apple. See on loodud algusest peale *phishing*-kindlaks. See teeb vahemeherünnakud matemaatiliselt võimatuks, sest võti ja domeen on krüptograafiliselt seotud.

SK ID teab seda. Aga SK ID keeldub FIDO-standardeid oma tuumikusse integreerimast. Miks? Sest see rikuks nende ärimudeli.

Smart-ID on ehitatud patenteeritud, suletud (proprietary) protokollile. See on "Vendor Lock-in" – panga ja teenusepakkuja sõltuvusse seadmine konkreetsest teenusepakkujast. Kui nad läheksid üle avatud FIDO2 standardile, kaoks nende unikaalne müügiargument. Turvalisus tähendaks konkurentsivõimalust. Säilitades oma haavatava, kuid unikaalse pärand-tehnoloogia ("legacy"), kindlustavad nad oma turuosa, ohverdades kasutaja turvalisuse kasumi altaril. Meid ei rünnata mitte tehnoloogia puudumise, vaid monopoli ahnuse tõttu hoida kinni oma iganenud "suletud aiast".

**7. Tõendusmaterjal E: Kasutaja kui "bioloogiline tulemüür"**
**Strateegiline eesmärk:** Rünnata Smart-ID filosoofilist alustala, mis veeretab tehnilise vastutuse (kontrollida serveri autentsust) inimesele, kes ei ole selleks võimeline.

Kõige šokeerivam tõend peitub aga Smart-ID kasutajatingimustes ja disainifilosoofias. Seal on peidus vaikiv kokkulepe: SK ID süsteem ei suuda tehniliselt eristada ründajat pangast, seega nad on delegeerinud selle ülesande teile – inimesele.

Nad eeldavad, et tavakasutaja – olgu ta väsinud õde pärast 12-tunnist vahetust või kiirustav ema lapsevankriga – suudab auditeerida veebiaadressi (URL-i) ja märgata, et "seb.ee" asemel on aadressireal "seb-login-secure.net". See on absurdne. Turvauuringud on korduvalt tõestanud, et inimsilm ei ole suuteline eristama kõrgekvaliteedilist pettust pingelises olukorras.

See on disainivalik: teha inimestest süsteemi viimane kaitseliin ehk "bioloogiline tulemüür". See on tehnoloogilise pankroti tunnistus. Autopiloot ei tohiks lasta lennukil alla kukkuda lihtsalt sellepärast, et piloot oli hetkeks unine. Kuid Smart-ID teeb just seda – süsteem lubab ründaja sisse, jättes ukse lahti, ja süüdistab pärast majaomanikku, et see kurjategijat uksel piisavalt kurja pilguga ei vaadanud.

SK ID on ehitanud süsteemi, kus masina (serveri) töö – autentsuse kontrollimine – on lükatud inimese õlgadele. Ja kui inimene eksib (mis on paratamatu), peseb teenusepakkuja käed puhtaks. See pole teenus. See on lõks.


***


This research analysis evaluates the effectiveness of public awareness campaigns and end-user education in mitigating scams and fraud, synthesizing data from peer-reviewed studies, government statistics (UK, Singapore, Australia, USA), and industry reports.

### **Executive Summary**

The evidence suggests that while public awareness and education are essential "first lines of defense," they are **insufficient on their own** to stop fraud. Educational interventions succeed in increasing **reporting rates** and **confidence**, but their ability to consistently reduce **victimization** is mixed due to the "knowing-doing" gap and the rapid evolution of scam tactics (e.g., AI deepfakes). The most effective strategies move beyond static "classroom" learning to **"Just-in-Time" (JiTT)** interventions—real-time alerts and "friction" during transactions—combined with **technological safety nets** (e.g., bank-level blocking).

---

### **1. Quantitative Impact: Mixed Results on Victimization**

Statistical evidence presents a complex picture where education increases awareness but does not always linearly reduce financial losses.

* **Reduction in Phishing Susceptibility:** Corporate training platforms demonstrate clear quantitative success. **KnowBe4** reports that the "Phish-prone Percentage" of users drops from **34.3%** to **18.9%** within 90 days of training, and further to **4.6%** after one year of continuous testing.
* **Revictimization Rates:** Targeted interventions work. A randomized control trial by the **U.S. Postal Inspection Service (USPIS)** found that sending a "Fraud Fighter" warning letter to older victims reduced revictimization rates by **8.6%**, while multiple follow-up mailings reduced it by **22.4%** over four months.
* **Macro-Level Discrepancies:**
  * **UK:** The Home Office reported a **13% drop in fraud** following the launch of its Fraud Strategy (including the "Stop! Think Fraud" campaign).
  * **Singapore:** Conversely, despite robust campaigns like **ScamShield**, scam cases **rose by 10.6%** and financial losses surged by **70.6%** (to $1.1 billion) in 2024. This suggests that as users get smarter, scammers escalate their tactics (e.g., using malware or coercion that bypasses "awareness").
* **University Students:** A study published in *Atlantis Press* found a strong positive correlation (Pearson coefficient 0.805) between anti-fraud education and fraud awareness among students, yet this demographic remains highly targeted.

### **2. Behavioral Change: The "Knowing-Doing" Gap**

Education shifts attitudes and reporting behavior but struggles to overcome psychological manipulation in "hot states" (moments of urgency).

* **Increased Reporting:** Awareness campaigns successfully drive action. In Australia, **ScamWatch** noted reporting spikes during awareness weeks. In the UK, VMO2’s "Daisy" campaign (using an AI "granny" to waste scammers' time) led to an **8% month-over-month increase** in fraud reports to the 7726 text service.
* **The "Pause" Reflex:** Singapore Police reported that **80%** of callers to their ScamShield helpline called *before* acting on a suspicious request, indicating that education effectively instilled a "verify first" habit in that subset of the population.
* **Confidence vs. Competence:** Research indicates that while training boosts user confidence, it can sometimes lead to **overconfidence**. Users may feel equipped to spot "obvious" scams (e.g., Nigerian Prince emails) but remain vulnerable to sophisticated social engineering or "spear phishing."

### **3. Comparative Efficacy: Delivery Methods Matter**

Static warnings are losing effectiveness compared to interactive and timely interventions.

| Method | Efficacy & Findings |
| :--- | :--- |
| **Classroom / Formal Training** | **High retention, low engagement.** Some studies rank instructor-led training as most effective for deep learning, but it is expensive and hard to scale. |
| **Gamification** | **High engagement.** Gamified phishing challenges can boost participation from **10% to 70%** and improve motivation. However, some studies suggest it may be less effective than classroom settings for long-term retention of complex concepts. |
| **Just-in-Time (JiTT) & Friction** | **High potential, mixed adherence.** Real-time banking alerts (e.g., "Are you sure this is not a scam?") attempt to break the "hot state." **DBS Bank (Singapore)** uses "cognitive breaks" (delays/verification) to success. However, UK research suggests up to **2/3 of users ignore generic warning pop-ups**, viewing them as nuisance friction. |
| **Simulated Phishing** | **Effective but perishable.** "Teachable moments" (failing a fake phish) work, but benefits decay rapidly—often within **1 to 6 months**—requiring continuous reinforcement. |

### **4. Limitations and Challenges**

Several factors critically undermine the success of awareness campaigns:

* **Security Fatigue & Habituation:** Users become desensitized to constant warnings. Research confirms that the brain habituates to static security alerts ("warning fatigue"), causing users to click through them without reading. Polymorphic warnings (which change appearance) are needed to maintain attention.
* **The "Hot State" Override:** Scammers deliberately induce panic (urgency) or desire (greed). In these emotional "hot states," cognitive training is often bypassed. A highly educated user can still fall for a "grandparent scam" if they believe a loved one is in immediate danger.
* **Rapid Evolution of Tactics:** Education lags behind threats. As training emphasized "checking for typos" or "poor grammar," scammers moved to **GenAI** to create flawless text and **deepfake** voice/video, rendering old advice obsolete.
* **Demographic Nuances:** There is no "one-size-fits-all."
  * **Older Adults:** Suffer higher *monetary* loss per case; respond well to paper-based/mailed interventions (USPIS).
  * **Younger Adults (20-39):** More *frequently* scammed (53% of victims in Singapore); often overconfident in digital literacy.

### **5. Global Best Practices**

Successful frameworks combine broad awareness with targeted tools and industry collaboration.

* **Singapore (The Ecosystem Approach):**
  * **ScamShield:** A suite including an app (blocks calls), a helpline (human verification), and public education.
  * **Banking:** **DBS Bank** integrates "friction" (payment controls, anti-malware tools that block app access if sideloaded apps are detected) rather than relying solely on user judgment.
* **United Kingdom (Creative Engagement):**
  * **"Take Five to Stop Fraud":** A national campaign focusing on the simple behavior of "pausing."
  * **VMO2 "Daisy":** Used AI to counter-scam, generating massive viral engagement and raising awareness through entertainment rather than dry instruction.
* **Australia (Unified Messaging):**
  * **"Stop. Check. Protect.":** A unified national message (similar to "Slip, Slop, Slap" for sun safety) to create a consistent behavioral reflex across the population.
  * **National Anti-Scam Centre:** Coordinates government and industry data to provide faster alerts.
* **USA (Targeted Intervention):**
  * **FBI "Take a Beat":** Focuses on the psychological aspect of resisting urgency.
  * **USPIS:** Proves the value of direct mail interventions for at-risk demographics (elderly) who may be less reachable via digital channels.

### **Conclusion**

Education is a necessary but insufficient condition for scam prevention. The most effective strategies accept that **human error is inevitable**. Therefore, the "gold standard" approach combines **continuous, gamified education** (to maintain baseline awareness) with **Just-in-Time friction** (to interrupt impulsive decisions) and **technological safeguards** (to block malicious acts when education fails). Future campaigns must pivot from "teaching users to spot scams" (which is becoming impossible with AI) to "teaching users to pause and verify" through trusted secondary channels.
