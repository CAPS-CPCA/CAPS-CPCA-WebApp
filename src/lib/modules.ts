import { assets } from './assets';
import type { Modules } from './types';

export const modules: { [key: string]: Modules } = {
	en: [
		{
			id: 'M1',
			title: 'Mechanism of Action',
			content: {
				type: ['p', 'i-full'],
				data: [
					`In Canada, the medication abortion pills are packaged and sold as Mifegymiso. Mifegymiso comes in an outer white box, containing two smaller boxes: a green box containing mifepristone 200 mg (MIFE) and an orange box containing misoprostol 800 mcg (MISO) (four small tablets of 200 mcg each)[10].

          MIFE is a progesterone receptor modulator. It is a potent anti-progestin that also exhibits strong antiglucocorticoid and weak antiandrogenic properties. It blocks progesterone receptors in early pregnancy, which leads to endometrial degeneration, synthesis of prostaglandins, and decline in beta-human chorionic gonadotropin (βhCG) secretion. These events promote cervical dilation and facilitate the onset of bleeding[10].

          MISO is a potent synthetic prostaglandin E1 that induces cervical ripening and uterine contractions, which cause the pregnancy tissues to leave the body[10].

          Click here to download the [Product monograph](C17-2).`,
					assets.EnMifegymisoOverview
				]
			}
		},
		{
			id: 'M2',
			title: 'Efficacy & Safety',
			content: {
				type: ['h2', 'ul', 'h2', 'ul'],
				data: [
					'Efficacy:',
					`MIFE / MISO is <b>highly effective</b>. The risk of ongoing pregnancy is 0.9% for pregnancies up to 49 days of gestation and 3.1% for pregnancies up to 70 days of gestation[10].
        According to SOGC’s protocol for the provision of medication abortion via telemedicine, the patient should take a first dose of misoprostol buccally or vaginally <b>24-48 hours</b> after taking mifepristone[7].
        In addition, patients with gestational age 63 days or less should take <b>the second dose</b> of misoprostol if no bleeding occurs within the first 24 hours after the first misoprostol dose or as instructed by the clinician. Patients with a gestational age over 63 days should take a second dose of misoprostol 4 hours after the first dose[7].`,
					'Side Effects and Complications[10]:',
					`<b>Very common (≥ 10%):</b> Nausea, vomiting, diarrhea, dizziness, headache, chills / fever, weakness, fatigue, gastric discomfort, abdominal pain, vaginal bleeding, spotting, uterine contractions or cramping.
        <b>Common (1-10%):</b> Fainting, light or moderate gastrointestinal cramping, prolonged post-abortion bleeding, endometritis, breast tenderness, heavy bleeding (may or may not require surgical termination of pregnancy).
        <b>Uncommon (0.1-1%):</b> Arrhythmia, hemorrhagic shock, salpingitis, heavy bleeding requiring IV fluids or blood transfusion, infection, hot flushes, hypotension, bronchospasm, skin rash / pruritus.`
				]
			}
		},
		{
			id: 'M3',
			title: 'Indication & Contraindications',
			content: {
				type: ['h2', 'p', 'h2', 'ul', 'h2', 'p', 'h2', 'p', 'h2', 'p'],
				data: [
					'Indication',
					`MIFE / MISO is indicated by [Health Canada](C17-2) for pregnancy termination up to <b>63 days</b> as counted from the first day of the last menstrual period (LMP) in a presumed 28-day cycle. The Society of Obstetricians and Gynaecologists of Canada indicates safe use up to <b>70 days</b> after LMP. There is no absolute lower gestational age limit[5].`,
					'Contraindications[6]:',
					`Ectopic pregnancy
        Chronic adrenal failure
        Inherited porphyria
        Uncontrolled asthma
        Hemorrhagic disorder or concurrent anticoagulant therapy
        Anemia (Hb level < 9.5 g/dL)
        Long-term systemic corticosteroid therapy
        Allergy or hypersensitivity to product ingredients
        IUD in situ (no longer a contraindication once removed)
        Serious systemic illnesses such as liver disease, cardiac disease, renal failure and seizure disorders (these illnesses should be evaluated individually)
        Uncertain gestational age
        Decisional uncertainty`,
					'Breastfeeding / Chestfeeding[6]:',
					`Oral MISO is excreted into human breast milk in small amounts which are rapidly eliminated. No interruption of breastfeeding or chestfeeding is necessary when misoprostol is given by any route.`,
					'Gestational Age > 63 days',
					` [The Society of Obstetricians and Gynaecologists of Canada](C31) and the [National Abortion Federation](C6) both endorse medication abortion (MA) with MIFE / MISO up to 70 days after LMP. They also recommend a second dose of MISO 800mcg four hours after the first dose of MISO 800mcg to increase the effectiveness of MA[5,13].

        The Society of Obstetricians and Gynaecologists of Canada also recommends a MIFE / MISO regimen from 70-84 days gestational age, with mifepristone 200mg followed in 24-48 hours with two doses of MISO 800mcg (buccal or vaginal), 4 hours apart.
        
        The effectiveness decreases as the gestational age approaches 70 days. Prescribers should counsel patients that this is off-label use, that there is a possibility of expelling and seeing an intact fetus, and that there are higher rates of bleeding and incomplete or failed abortion.`,
					'Patients between 15 to 18 years of age',
					`Data is insufficient to establish efficacy and safety in patients younger than 15 years old. However, in patients aged between 15 and 18 years, safety and efficacy have been demonstrated with vomiting and pain being reported more frequently than in adults[11]. Thus, special considerations for patients in this age range can include counselling to prepare them for vomiting and pain, as well as psychosocial supports through the medication abortion process.`
				]
			}
		},
		{
			id: 'M5',
			title: 'Pre-abortion Counselling',
			content: {
				type: ['p', 'h2', 'ul', 'p', 'ul'],
				data: [
					`Counselling is to ensure patients understand different options, the risks and benefits of each and make informed decisions. Counselling also helps prescribers understand patients’ preferences and circumstances to advise the best course of actions.`,
					'Key counselling points include[4,6]:',
					`<b>Review pregnancy options</b> when indicated: abortion, becoming a parent or child adoption.
        Tailor the counselling to the needs of the patient (such as counteracting abortion stigma and / or providing emotional support).
        Communicate the risk of advancing gestational age without putting time pressure on the patient.
        <b>Use non-judgmental and inclusive language</b>.`,
					'<i>(If choosing abortion:)</i>',
					`Review <a href="#M6" class="in">abortion options</a>, including risks, efficacy, process and length of time of medication versus procedural abortion.
        <b>Discuss the patient’s eligibility for medication abortion</b>, including gestational age and medical history.
        <b>Discuss the patient’s access to pharmacies, telephone, transportation, emergency care, and labs and imaging facilities</b> if needed.
        Discuss the patient’s <a href="#M6" class="in">preferences and circumstances</a>, such as a safe place in their living situation to complete medication abortion. Share decision tools such as It’s My Choice to help the patient choose the type of abortion that fits them.
        Confirm that the decision is the patient’s own, reached without coercion.
        Confirm the patient’s understanding that <b>medication abortion is irreversible</b> and that the patients must take an additional dose of the second medication or undergo procedural abortion in case of ongoing pregnancy.
        Review the timing of examinations (ultrasound, blood tests, if needed), medications and follow-up appointments.
        Discuss <a href="./assessment#M20" class="in" target="_blank">post-abortion contraception options</a>.`
				]
			}
		},
		{
			id: 'M6',
			title: 'Abortion Options',
			content: {
				type: ['p', 'ul', 'p', 'ul', 'i-full'],
				data: [
					'<b>Medication abortion</b> is suitable for patients who[6]:',
					`Prefer a non-invasive method.
        Prefer to have an abortion in the comfort of their home.
        Have the confidence of being able to manage the process and side effects at home.
        Are able to take 1 to 3 days off work or other responsibilities to undergo the abortion process.
        Lack means of transportation to travel to the clinic for a procedural abortion (but still need access to emergency services in event of complications).`,
					'<b>Procedural abortion</b> is suitable for patients who[6]:',
					`Prefer to have in-person support and monitoring from healthcare professionals at a clinic or hospitals.
        Want to have the abortion completed quickly to return to work or other responsibilities.
        Are comfortable with the use of medical instruments and internal exams.
        Are comfortable undergoing local or general anesthesia to manage pain.
        Do not want to disclose the pregnancy and the abortion to those patients live with (such as partners, roommates, co-workers), as it might be difficult to conceal heavy bleeding and b cramps.`,
					assets.EnAbortionOptions
				]
			}
		},
		{
			id: 'M14',
			title: 'Informed Consent',
			content: {
				type: ['p', 'olul'],
				data: [
					'After the patient and the health provider determine that medication abortion (MA) is the right option, the health provider should[2,6,7,10]:',
					[
						`<b>Obtain written or verbal informed consent</b> (see examples by [CAPS-CPCA platform](C78) and the [Bay Center for Birth Control](C83)) and document it in the patients’ chart.
          <b>Prescribe:</b>`,
						`Mifepristone 200 mg (MIFE) orally and misoprostol 800 mcg (MISO) buccally or vaginally (this combination is packaged and branded as Mifegymiso).
          Additional dose of MISO buccally or vaginally in case of incomplete or failed abortion.
          Analgesics and antiemetics as per health provider / facility protocol.
          Antibiotic prophylaxis, if needed, as per health provider / facility protocol.`,
						`Provide instructions on <a href="patient-counselling#M15" class="in" target="_blank">how to take the medication</a>.
          Ensure patients know <a href="patient-counselling#M16" class="in" target="_blank">how to manage side effects</a> and when and where to seek care for complications.
          Consider informing patients if the MA procedure involves off-label, evidence-based practices.`,
						`Much of the MA off-label practices are based on low-resource availability and require a balance between health providers’ experience, patients’ safety and patients’ needs.
          It is recommended to inform patients about off-label practices so patients understand the risks involved and understand that off-label practices might vary depending on prescribers’ experience and comfort level.`,
						`Discuss post-abortion contraception options. <b>Emphasize that patients can quickly return to fertility following the abortion</b>.
          <b>Set up follow-up appointment(s), either in-person or via phone/video</b>. Do discuss any safety or privacy plan if needed.
          Provide patients with patient instruction manuals (see an example by the [SHORE center and the Planned Parenthood Ottawa](C73)) and the contact details of healthcare providers and emergency health services.
          Take note of patients’ preferred phone numbers and emergency contacts in case providers are unable to reach patients directly. Be mindful that the emergency contact that the patient gives during their visits for MA may be different from the emergency contact on file. Be sure not to contact any other individuals without the patient’s expressed consent.`
					]
				]
			}
		},
		{
			id: 'M15',
			title: 'Administration Instruction',
			content: {
				type: ['i-full'],
				data: [assets.EnAdminInstructions]
			}
		},
		{
			id: 'M33',
			title: 'Missed Doses',
			content: {
				type: ['p', 'h2', 'ul', 'h2', 'ul', 'p'],
				data: [
					`If MIFE is forgotten, the patient should take it as soon as they remember. If it has been more than 48 hours since the patient took MIFE, they should contact the prescriber for further instructions.

        If MISO is forgotten and it has been more than 48 hours since the patient took MIFE, the patient should take MISO right away and contact the prescriber at the follow-up appointment.`,
					'Buccal administration of MISO[10]',
					`If vomiting occurs less than 1 hour after taking MIFE or during buccal absorption of MISO, the patient should contact a prescriber / pharmacist for assessment.
        If vomiting occurs more than 30 minutes after swallowing MISO fragments, no action is required.`,
					'Vaginal insertion of MISO[10]',
					`If tablets fall out before bleeding starts, the patient should re-insert the tablet or contact a healthcare professional if unable to reinsert.
        If tablets come out while bleeding, no action is required; in most cases, a sufficient portion of the medication will have been absorbed.`,
					'In any case, if bleeding does not start within a few hours, the patient should contact a healthcare professional.'
				]
			}
		},
		{
			id: 'M16',
			title: 'Side-effect Management',
			content: {
				type: ['i-full'],
				data: [assets.EnSideEffects]
			}
		},
		{
			id: 'M8',
			title: 'Basic screening',
			content: {
				type: ['p'],
				data: [
					`Medical history must be taken to assess gestational age, evaluate contraindications and identify additional precautions. The history also provides a baseline for follow-up and helps determine suitable contraception options and whether additional tests are needed[6].

        Baseline vital signs and pelvic examination should be performed as directed by history. Practices may vary[6].`
				]
			}
		},
		{
			id: 'M9',
			title: 'Pregnancy & Gestational Age screening',
			content: {
				type: ['p'],
				data: [
					`A positive urine beta human chorionic gonadotropin test (βhCG) is sufficiently sensitive to confirm a pregnancy[6].

        <b>Ultrasound:</b> Ultrasound provides the most accurate measurement of gestational age (GA) but is not a routine requirement unless the patient is uncertain of their last menstrual period (or there are symptoms and risk factors for ectopic pregnancy as explained later). It is recommended to choose an ultrasound clinic whose staff are capable of offering non-judgmental sonography[6].

        <b>Medical history:</b> If the patient is certain of their last menstrual period and if they were having regular periods without recent use of hormonal contraception, GA estimate that is based on their date would correlate closely with the results from ultrasound[6].

        <b>Gynaecological examination:</b> In the first trimester, determination of GA with bimanual exam has been shown to be accurate within 2 weeks of GA determined by ultrasound; however, accuracy varies with the prescriber’s experience and with the amount of adipose tissue and the presence of fibroids[6].

        <b>βhCG test:</b> βhCG level rises linearly during the first 6 weeks of pregnancy but the high variability thereafter limits the utility of βhCG for dating[6].`
				]
			}
		},
		{
			id: 'M10',
			title: 'Ectopic Pregnancy',
			content: {
				type: ['left', 'p', 'ul', 'p'],
				data: [
					assets.Ectopic,
					`<b>Ectopic pregnancy (EP)</b> is rare. It occurs in 1 or 2 out of 100 pregnancies in the general population, and the rate is consistently lower among those seeking abortion. It is recommended that <b>patients undergo ultrasound if they have significant medical risk factors, signs or symptoms of EP</b>[6].


        <b>Significant risk factors, signs and symptoms of EP include[6]:</b>`,
					`Previous ectopic pregnancy.
        IUD in place.
        Pregnancy conceived with assisted reproduction techniques.
        Previous surgery of the fallopian tubes such as tubal ligation.
        History of salpingitis or pelvic inflammatory disease.
        Symptoms of abdominal pain and vaginal bleeding.`,
					`<b>Multiple pregnancies</b> is not a contraindication to medication abortion (MA), however the presence of multiples should be communicated to the patient if they agree to obtain information about the pregnancy[6].

        <b>Missed and incomplete abortion</b> should also be disclosed to the patients if they agree to obtain information about the ultrasound and should be managed either by MA or procedural abortion[6].

        In case of <b>molar pregnancy</b>, procedural abortion with consideration for referral, histological review and follow-up of βhCG is essential, and MA is not appropriate[6].`
				]
			}
		},
		{
			id: 'M11',
			title: 'Pregnancies of Unknown Location',
			content: {
				type: ['p', 'ul', 'p', 'ul'],
				data: [
					`Patients who have a <b>pregnancy of unknown location (PUL)</b> and request medication abortion (MA) should receive abortion care without delay, provided that they have no clinical symptoms of ectopic pregnancy (EP). Failure to identify a definite intrauterine pregnancy should not delay MA[6].

        <b>If the serum βhCG is > 2000 IU / L and no intrauterine gestational sac is visualized on ultrasound[6]:</b>`,
					`Further investigation is required.`,
					`<b>In the absence of EP risk factors, if βhCG is ≤ 2000 IU / L or a likely gestational sac is present without a yolk sac or fetal pole[6]:</b>`,
					`Patients with PUL can receive MA.
        When PUL patients receive MA, they should be informed of the risks and symptoms of EP, and who to contact in case of emergency.
        Follow-up βhCG within 7 days is recommended for PUL patients. A decrease of 50% at 3 days after mifepristone administration (or 24-48 hours after misoprostol) or 80% between 7 and 14 days after MIFE / MISO administration is expected; otherwise, EP should be ruled out.`
				]
			}
		},
		{
			id: 'M12',
			title: 'Rhesus screening',
			content: {
				type: ['p'],
				data: [
					`Guidelines on Rh screening have been updated.

        According to the SOGC’s Guideline on Prevention of RhD Alloimmunization published in 2024, for non-sensitized Rh D-negative individuals who have experienced threatened, spontaneous or induced abortion after <b>12 weeks gestation</b>, administration of 300 μg of Rho(D) immune globulin is suggested.

        Prior to that, in 2022, the [Society of Family Planning](SFP1) and the [World Health Organization](WHO1) also recommends withholding Rh testing and administration prior to 12 weeks gestation for patients undergoing MA, spontaneous abortion or uterine aspiration abortion[8,20].`
				]
			}
		},
		{
			id: 'M13',
			title: 'Anemia, STIs & others',
			content: {
				type: ['i-full'],
				data: [assets.EnAnemiaSTI]
			}
		},
		{
			id: 'M17',
			title: 'Post-abortion Follow-up',
			content: {
				type: ['p', 'h2', 'i-full', 'p', 'ul'],
				data: [
					`A follow-up appointment is required to confirm the termination of the pregnancy, manage complications, counsel on contraceptive plans and, if applicable, provide emotional support.`,
					'<b>Mode of follow-up:</b>',
					assets.EnPostabortionFollowup,
					`<b>Emotional support</b>[6]: Emotional response after MA often vary. Some people feel relieved and positive and some have feelings of grief, sadness, or guilt while others have mixed feelings. These emotions are normal, and they may or may not be related to socioeconomic circumstances, the lack of social support, moral discomfort, and family conflict.

        Patients can be supported by understanding that mixed emotions are normal and by exploring coping strategies and support. Useful resources include:`,
					`Exhale, a talk-line that provides emotional support, resources and information after abortion.
        All-Options, a talk-line to discuss past or current experience with abortion, adoption and parenting for people in Canada and the United States (1-888-493-0092).`
				]
			}
		},
		{
			id: 'M18',
			title: 'Abortion Completion Assessment',
			content: {
				type: ['p', 'i-full', 'p', 'ul', 'p'],
				data: [
					`Completion of medication abortion (MA) must be assessed by the provider. Depending on the circumstances, this can be done by obtaining a clinical history, ultrasonography, or urine or serum bhCG testing. This assessment can be done in person, by telephone or electronic communication as per clinical indication and the preferences of the patient and the provider.

        <b>Clinical history</b>[6]: The assessment of successful expulsion based on medical history is highly predictive of complete abortion (sensitivity 99.1%, specificity 45.5%). No bleeding or minimal bleeding after MISO, and continuing pregnancy symptoms are suggestive of an ongoing pregnancy.

        <b>Urine bhCG</b>[7]:`,
					assets.EnAbortionCompletion,
					`<b>Serum bhCG</b>[3]:`,
					`A drop by at least 50% from baseline at 3 days after MIFE administration (or 24 and 48 hours after MISO administration) is highly indicative of complete abortion.
        A drop by 80% between 7 and 14 days after MIFE / MISO administration confirms abortion completion.
        If bhCG drops < 80% between day 7 and 14, prescribers may order an ultrasound or repeat the test in a few days. Ultrasound should be ordered if 14 days have passed and a drop by 80% has not been reached.`,
					`<b>Ultrasonography</b>[6]: Ultrasound provides definitive evidence of MA completion, but no evidence shows that it is superior to other methods. It is recommended in cases where the outcome is uncertain based on clinical history, or there are symptoms such as unexpected pain, prolonged heavy bleeding or inadequate bleeding.`
				]
			}
		},
		{
			id: 'M19',
			title: 'Complication Management',
			content: {
				type: ['p', 'ul', 'p', 'ul'],
				data: [
					`<b>Ongoing pregnancy</b>[6]: Ongoing pregnancy after medication abortion is uncommon and can be treated with another dose of MISO or with procedural abortion. Procedural abortion is recommended if cardiac activity is present 14 to 21 days after taking MISO.

        <b>Retained products of conception</b>[6]: In the absence of ongoing pregnancy, retained products of conception can be managed by asking patients to wait for bleeding and cramping, offering them another dose of MISO, or providing them with or referring them for procedural abortion. Urgent procedural abortion is indicated in cases of heavy uncontrolled bleeding or retained products of conception associated with endometritis.

        Symptoms of retained products include unexpected heavy/prolonged bleeding or cramping, and failure to have expected bleeding.

        <b>Post-abortion infections</b>[6]: Treatment should be individualized and usually consists of broad-spectrum therapy. In mild cases, oral antibiotics can be used, but if infection is severe, patients should be hospitalized for treatment. Once patients start antibiotics, procedural abortion may be necessary to remove significant retained products of contraception.

        Symptoms of Post-Abortion Infections`,
					`Abdominal or pelvic pain
        Foul-smelling vaginal or cervical discharge
        Prolonged vaginal bleeding or spotting
        Fever or chills (more than 24 hours after MISO)
        Uterine or adnexal tenderness
        Elevated white blood cell count (upon lab examination)`,
					`<b>Toxic shock syndrome</b>[6]: Toxic shock syndrome is associated with clostridium and Group A streptococcus. The majority of these infections are fulminant and rapidly progress to shock. Standard antibiotic therapy is not sufficient; thus, the treatment consists of supportive care, and empiric antibiotic treatment covering clostridial species and other organisms known to cause toxic shock, and surgical debridement, including possible hysterectomy.
        
        Symptoms of Toxic Shock Syndrome`,
					`General malaise with nausea, vomiting, and diarrhea
        Absence of fever (or mild fever)
        Minimal abdominal pain
        Weakness
        Flu-like symptoms
        Tachycardia / hypotension
        Edema
        High white blood cell counts or high hemoglobin level (upon lab examination)`
				]
			}
		},
		{
			id: 'M20',
			title: 'Post-abortion Contraception',
			content: {
				type: ['p', 'ul', 'p', 'i-full'],
				data: [
					`Due to rapid return to fertility following medication abortion (MA), patients should be advised to have a method for contraception at the earlier visits[6].

        Patients seeking <b>more information about contraception options</b> can be referred to:`,
					`Sex and U’s It’s a plan, an online health information tool to determine the right contraception method.
        Action Canada’s Sexual Health Hub on Birth Control, a website that contains information on birth control in Canada.`,
					`Below is a list of <b>contraception options and special considerations:</b>`,
					assets.EnPostabortionContraception
				]
			}
		},
		{
			id: 'M21',
			title: 'Initial Steps',
			content: {
				type: ['p', 'ol'],
				data: [
					`<b>Virtual or hybrid provision of medication abortion</b> (MA), which is also called no-touch or low-touch medication abortion, is one where some or all of the appointments are carried out virtually over phone and / or video by reducing or eliminating blood work and ultrasound. The purpose is to reduce patients’ risk of contracting transmissible infections (as in the case of COVID-19) or reduce the need for patients to travel long distances or wait for days or weeks to receive abortion.

As explained elsewhere, virtual and hybrid provision of MA is based on low resource availability and requires <b>a balance between prescribers’ experience, patients’ safety and patients’ needs</b>.

When receiving requests for virtual or hybrid medication abortion, prescribers should[7]:
`,
					`Confirm patient identity and ensure patient has privacy and safety to discuss.
Provide written information on medication and procedural abortion in advance of the consultation.
If not already done, ask the patient to obtain and take a qualitative urine high sensitivity pregnancy test from the pharmacy.
Schedule a first virtual visit via telephone or video.`
				]
			}
		},
		{
			id: 'M22',
			title: 'Virtual Assessment',
			content: {
				type: ['p', 'olul'],
				data: [
					'The following assessments should be carried out[7,19]:',
					[
						`<b>Review pregnancy options counselling.</b>
        <b>Establish pregnancy and gestational age.</b>`,
						`Review date of last menstrual period (LMP) and date of positive qualitative pregnancy test.
            Review relevant medical history, including recent hormonal contraception and risk factors and signs of ectopic pregnancy.`,
						`<b>Exclude</b> <a href="about-mifegymiso#M3" class="in" target="_blank">contraindications</a>.
        <b>Assess the need for an ultrasound to determine gestational age and the location of pregnancy</b>[5]:`,
						`According to [SOGC’s protocol on medication abortion](C14) via telemedicine, ultrasound should be obtained if LMP is uncertain, LMP is over 70 days, and the signs, symptoms and risk factors of ectopic pregnancy (EP) are present.
            Medication abortion performed without ultrasound is, by definition, <a href="medical-evaluation#M11" class="in" target="_blank">pregnancy of unknown location</a> and should be managed accordingly. Though the risk of unrecognized EP is low, close follow-up is required to ensure completion of the medication abortion.`,
						`<b>Assess the need for blood work to measure hemoglobin</b>[7]:`,
						`According to Health Canada, hemoglobin should be over 9.5 g / dL before starting MA.
            Screen patients for increased risk of anemia through a detailed medical history.
            If patients are suspected to have an increased risk of anemia, complete blood count is indicated. Otherwise, measuring hemoglobin is unnecessary.`,
						`<b>Assess the need for blood work to determine</b> <a href="medical-evaluation#M12" class="in" target="_blank">Rh status (Rh)</a>[7]:`,
						`As explained elsewhere, guidelines on Rh status have been updated and vary between organizations.
            According to the SOGC’s Guideline on Prevention of RhD Alloimmunization published in 2024, for non-sensitized Rh D-negative individuals who have experienced threatened, spontaneous or induced abortion after 12 weeks gestation, administration of 300 μg of Rho(D) immune globulin is suggested.
            The [National Abortion Federation](C6), the [Society of Family Planning](SFP1) and the [World Health Organization](WHO1) all recommend Rh testing and administration for patients who are 12 weeks gestation or beyond, but not for patients who are under 12 weeks LMP.`,
						`<b>Assess the need for</b> <a href="medical-evaluation#M13" class="in" target="_blank">STI testing</a>[7]:`,
						`Offer testing for chlamydia and gonorrhea if patients come to office.
            Otherwise, evaluate the risk of STIs and consider remote testing if risk factors are present, and discuss the potential need for antibiotic treatment.`
					]
				]
			}
		},
		{
			id: 'M23',
			title: 'Follow-up',
			content: {
				type: ['p', 'olul'],
				data: [
					`The follow-up appointment should be scheduled <b>3 to 7 days</b> after taking misoprostol (MISO), and more than one follow-up appointment may be needed. The SOGC’s protocol on the provision of medication abortion by telemedicine advises 7 days[7], but some prescribers schedule the follow-up appointment as early as 3 days after MISO administration to avoid loss-of-contact and assess serum bhCG level. The actual practices depend on prescribers’ judgment and experiences.

        During the virtual follow-up, prescribers should[7]:`,
					[
						`<b>Review abortion experience and progress</b> with patients, including dates of taking medication, side effects, bleeding pattern, pain, occurrence of expulsion, and any current pregnancy symptoms.
          Advise an urgent assessment or emergency visit if signs of ectopic pregnancy, pelvic infection, heavy bleeding, or excessive pain exist.
          <b>If history suggests failed abortion or ongoing pregnancy</b>: obtain ultrasound and consider an additional dose of MISO or procedural abortion.
          <b>If history suggests successful abortion, no warning signs, and no current symptoms of pregnancy, normal bleeding and pain</b>: arrange the blood test to confirm serum bhCG level if the appointment is in-person or instruct the patient to perform qualitative urine pregnancy test.<br><br><b>Serum bhCG</b>[4]: If the serum bhCG level drops by >50% at Day 3 after MISO or 80% at Day 7-14 after MIFE / MISO administration, the successful completion of abortion is confirmed and no further appointment is needed. Ultrasound should be ordered if 14 days have passed and a drop by 80% has not been reached.<br><br><b>Urine bhCG</b>[7]:`,
						assets.EnAbortionCompletion,
						`Offer to discuss <a href="assessment#M20" class="in" target="_blank">contraception options</a> and provide emotional support if needed. Resources for emotional support include:`,
						`Exhale, a talk-line that provides emotional support, resources and information after abortion.
          All-Options, a talk-line to discuss past or current experience with abortion, adoption and parenting for people in Canada and the United States (1-888-493-0092).`
					]
				]
			}
		},
		{
			id: 'B1',
			title: 'Alberta',
			content: {
				type: ['p', 'h2', 'p', 'h2', 'p'],
				data: [
					`Alberta Health Services (AHS) has a billing manual that provides the most current information on billing codes for healthcare services in Alberta. The manual is updated regularly and is available online for healthcare providers to access.`,
					'Gynaecology',
					`Initial visit: <b>03.08A</b> Comprehensive consultation – $111.06
        Follow-up visit: <b>03.07B</b> Repeat consultation – $62.24`,
					'Primary Care',
					`Initial visit: <b>03.04A</b> Comprehensive visit – $83.37
        Follow-up visit: <b>03.03A</b> Office visit – $35.26`
				]
			}
		},
		{
			id: 'B2',
			title: 'British Columbia',
			content: {
				type: ['p', 'h2', 'p', 'h2', 'p'],
				data: [
					`The information below is updated as of March 2024.`,
					'Gynaecology',
					`Initial visit: <b>14545</b> Medication abortion – $170.95
        Follow-up visit: <b>4012</b> Limited consultation – $85.49
        <b>4007</b> Follow-up – $53.52
        Telehealth: <b>14545</b> Same code for consultation – $170.95
        <b>4072</b> Limited consultation – $85.49
        <b>4077</b> Follow-up – $53.52`,
					'Primary Care',
					`Initial visit: <b>14545</b> Medication abortion – $170.95
        Follow-up visit: <b>00100</b> Follow-up – $34.04
        Telehealth: <b>14545</b> Same code for consultation – $165.97
        <b>13437</b> Follow-up – $31.84

        <b>Notes:</b> For telehealth, methods of virtual care can include phone, video or provincial telehealth platform, all of which are equally billable at the moment. No need to have an ongoing physician-patient relationship for the physician to submit a claim for medication abortion via telehealth`
				]
			}
		},
		{
			id: 'B3',
			title: 'Manitoba',
			content: {
				type: ['p', 'h2', 'p', 'h2', 'p'],
				data: [
					`<i>The information below is updated as of March 2024.</i>`,
					'Gynaecology',
					`Initial visit: <b>8428</b> Medical management of elective pregnancy termination, including examination, management and monitoring of patient taking misoprostol. – $171.00
					<b>8499</b> Complete gynecological exam excluding pap test – $125.61
        Follow-up visit: <b>8505</b> Regional history and examination with gynaecological examination excluding pap test`,
					'Primary Care',
					`Initial visit: <b>8428</b> Medical management of elective pregnancy termination, including examination, management and monitoring of patient taking misoprostol. – $171.00
					<b>8499</b> Complete gynecological exam excluding pap test – $125.61
        Follow-up visit: <b>8471</b> Regional intermediate visit or subsequent visit with gynecological exam excluding pap smear – $54.16

        <b>Notes:</b> There are no specifications as to whether the codes are specific to specialists vs primary care in the billing manual for Manitoba. Thus, providers would have to look into the information and apply the rules of their billing codes.`
				]
			}
		},
		{
			id: 'B4',
			title: 'New Brunswick',
			content: {
				type: ['p', 'h2', 'p', 'h2', 'p'],
				data: [
					`<i>The information below is pending verification.</i>`,
					'Gynaecology',
					`Initial visit: <b>54</b> Major or regional consultation – CA$95.91
        <b>9015</b> Medical management of non-viable/unwanted pregnancy, including βhCG follow-up, add to initial visit or consultation – $136.22
        Follow-up visit: <b>49</b> Regional examination – $52.82
        Telehealth: <b>Same codes</b>, but the site code where the patient is physically located, must be recorded on the claim submission. When submitting claims for telemedicine, the number 8 should be written in front of the site code provided in order to specify that the service was given via telemedicine.
        <b>8717</b> Attendance – 1st patient seen, first 15 minutes or part thereof 40 units
        <b>8718</b> Add – per 15 minutes or part thereof 20 units`,
					'Primary Care',
					`Initial visit: <b>1</b> Office visit – $23.36
        <b>9142</b> Medical management of non-viable/unwanted pregnancy, including βhCG follow-up, add to initial visit or consultation – $74.48
        Follow-up visit: 1 Office visit – $23.36
        Telehealth: <b>Same codes</b>, but the site code where the patient is physically located, must be recorded on the claim submission. When submitting claims for telemedicine, the number 8 should be written in front of the site code provided in order to specify that the service was given via telemedicine.
        <b>8717</b> Attendance – 1st patient seen, first 15 minutes or part thereof 40 units
        <b>8718</b> Add – per 15 minutes or part thereof 20 units`
				]
			}
		},
		{
			id: 'B5',
			title: 'Newfoundland & Labrador',
			content: {
				type: ['p', 'h2', 'p', 'h2', 'p'],
				data: [
					`<i>The information below is updated as of March 2024.</i>`,
					'Gynaecology',
					`Initial visit and follow-up visit: <b>54607</b> Medication abortion – $187.46

        <i>Comprehensive fee which includes all services associated with medication abortion including the consultation and/or visit during which the medication is prescribed, counselling, ordering and/or performing and interpreting of laboratory tests and diagnostic imaging, and any follow-up communications or visits.</i>`,
					'Primary Care',
					`Initial visit and follow-up visit: <b>54607</b> Medication abortion – $187.49

        <i>Comprehensive fee which includes all services associated with medication abortion including the consultation and/or visit during which the medication is prescribed, counselling, ordering and/or performing and interpreting of laboratory tests and diagnostic imaging, and any follow-up communications or visits.</i>`
				]
			}
		},
		{
			id: 'B6',
			title: 'Northwest Territories',
			content: {
				type: ['p', 'h2', 'p', 'h2', 'p'],
				data: [
					`<i>The information below is pending verification.</i>`,
					'Gynaecology',
					`Initial visit and follow-up visit: <b>OB-025</b> Medical termination for gestation less than 7 weeks – includes all visits, ultrasound examinations and injections – $361.93
        Telehealth: <b>TE-001</b> Telehealth consultation by consultant using audio-video-data communication – $180.97
        <b>TE-002</b> Telehealth consultation – per 15 minutes – max of 1.5 hours per session – $54.29
        <b>TE-004</b> Emergency Department consultation from peripheral communities – CA$18.09
        <i>Does not need to be your own patient.</i>`,
					'Primary Care',
					`Initial visit: <b>GP-001</b> First visit requiring general assessment for new illness – $102.35
        Follow-up visit: <b>GP-002</b> Subsequent office visits other than a simple follow-up visit – $45.48
        Telehealth: <b>TE-001</b> Telehealth consultation by consultant using audio-video-data communication – $180.97
        <b>TE-002</b> Telehealth consultation – per 15 minutes – max of 1.5 hours per session – $54.29
        <b>TE-004</b> Emergency Department consultation from peripheral communities – CA$18.09
        <i>Does not need to be your own patient.</i>`
				]
			}
		},
		{
			id: 'B7',
			title: 'Nova Scotia',
			content: {
				type: ['p', 'h2', 'p', 'h2', 'p'],
				data: [
					`<i>The information below is updated as of March 2024.</i>`,
					'Gynaecology',
					`Initial visit: <b>3.03V</b> Medication abortion/Termination of early pregnancy – 67.03 units/$185.00
        Follow-up visit: <b>3.03</b> Subsequent visit – 13 units/$35.88
        Telehealth: Same as in-person, use <b>AP=PHON</b> for telephone and <b>AP=VIRC</b> for video platform.`,
					'Primary Care',
					`Initial visit: <b>3.03V</b> Medication abortion/Termination of early pregnancy – 67.03 units/ $185.00
        Follow-up visit: <b>3.03</b> Office visit – 13 units/$35.88
        Telehealth: Same as in-person, use <b>AP=PHON</b> for telephone and <b>AP=VIRC</b> for video platform.`
				]
			}
		},
		{
			id: 'B8',
			title: 'Nunavut',
			content: {
				type: ['p'],
				data: [`No content.`]
			}
		},
		{
			id: 'B9',
			title: 'Ontario',
			content: {
				type: ['p', 'h2', 'p', 'h2', 'p'],
				data: [
					`<i>The information below is updated as of March 2024.</i>`,
					'In-person',
					`Initial visit: <b>A920</b> Medical management of early pregnancy – initial service – $161.15
        Follow-up visit: <b>A921</b> Medical management of early pregnancy – follow-up visit (limited to two visit per patient, per pregnancy) – $36.85`,
					'Telehealth',
					`Initial visit: <b>A920</b> can be billed for telephone and video visits.
        Follow-up visit: <b>A921</b> – $36.85
        <b>A007</b> – $37.95
        <b>A102</b> – $15.00

        <b>Notes:</b> If you have billed A920 for the initial visit, you have established a relationship and for follow-up, you can use A921 (video only) or A007 (telephone). Virtual care services provided in the 24-months subsequent to the medication abortion may be claimed as Comprehensive Virtual Care Services because it implies an existing/ongoing patient-physician relationship. If you do not meet the patients at the initial visit (i.e. you do not bill A920 for the initial visit and thus do not have a pre-established relationship with the patient), you would use A102 for telephone follow-up, which pays $15.`
				]
			}
		},
		{
			id: 'B10',
			title: 'Prince Edward Island',
			content: {
				type: ['p', 'h2', 'p', 'h2', 'p'],
				data: [
					`<i>The information below is pending verification.</i>`,
					'Gynaecology',
					`Initial visit: <b>6010</b> Therapeutic abortion – $181.49
        Follow-up visit: <b>0762</b> Repeat consultation – $58.38
        <b>0713</b> Limited office visit – $42.00`,
					'Primary Care',
					`Initial visit: <b>0160</b> Therapeutic abortion – $181.49
        Follow-up visit: <b>0113</b> Limited office visit – $42.00
        <b>0163</b> Complete Re-examination by a medical specialist`
				]
			}
		},
		{
			id: 'B11',
			title: 'Quebec',
			content: {
				type: ['p', 'h2', 'p', 'h2', 'p'],
				data: [
					`<i>The information below is updated as of March 2024.</i>`,
					'Gynaecology',
					`Initial visit: <b>15850</b> Global evaluation for termination of pregnancy (<63 days) – $168.90
        <b>15852</b> <b>Ultrasound exam</b> – $60.95
        Follow-up visit: <b>15854</b> Follow-up medication abortion – $47.50
        <b>15857</b> US post medication abortion (<18 days) – $39.80`,
					'Primary Care',
					`Initial visit: Global evaluation for termination of pregnancy
        – <b>15313</b> Office – $139.50
        – <b>15407</b> CLSC – $20.00
        – <b>15314</b> Hospital – $104.60
        <b>Ultrasound exam</b>
        – <b>15315</b> Office – $38.15
        – <b>15316</b> Hospital – $13.10
        Follow-up visit: Follow-up termination of pregnancy
        – <b>15317</b> Office – $39.25
        – <b>15408</b> CLSC – $1.50
        – <b>15318</b> Hospital – $29.45
        <b>Ultrasound exam</b>
        – <b>15319</b> Office – $33.80
        – <b>15320</b> Hospital – $8.75`
				]
			}
		},
		{
			id: 'B12',
			title: 'Saskatchewan',
			content: {
				type: ['p', 'h2', 'p', 'h2', 'p', 'h2', 'p'],
				data: [
					`<i>The information below is updated as of March 2024.</i>`,
					'Gynaecology',
					`Initial visit: <b>150B</b> Medical management of termination of early pregnancy – includes 5 days of ongoing medical management – $170
        Follow-up visit: <b>11P</b> Repeat consultation – $41.90
        <b>7P</b> Follow-up assessment – $38.20`,
					'Primary Care',
					`Initial visit: <b>150B</b> Medical management of termination of early pregnancy – includes 5 days of ongoing medical management – $170
        Follow-up visit: <b>5-B</b> Subsequent visit – $39.80`,
					'Telehealth',
					`Initial visit: <b>732A</b> for any patient attended to using an approved telemedicine video link – $31.40
        <b>840B and 841B</b> – Counselling – for clinicians who do not have a video link setup such as telephone consultation. <b>840</b> is virtual counselling for the first 15 minutes and <b>841B</b> is for the subsequent 15 minutes – $33.75
        Follow-up visit: <b>734A</b> for any patient attended to using an approved telemedicine video links (maximum one per day for all patients) – $12.50
        <b>805B</b> – Virtual Partial Assessment – for clinicians who do not have a video link setup such as telephone follow-up – $31.85

        <b>Notes:</b> Saskatchewan has a designated in-person abortion code but not a virtual one, so providers can use the generic codes that are used for regular primary care telemedicine apps.`
				]
			}
		},
		{
			id: 'B13',
			title: 'Yukon',
			content: {
				type: ['p', 'h2', 'p', 'h2', 'p'],
				data: [
					`<i>The information below is pending verification.</i>`,
					'Gynaecology',
					`Initial visit: <b>4116</b> Medication abortion – $223.8
        Follow-up visit: <b>4012</b> Limited consultation – $104.40
        <b>4007</b> Subsequent office visit – $69.60`,
					'Primary Care',
					`Initial visit: <b>0101</b> Complete examination – $108.80
        Follow-up visit: <b>0100</b> Visit – $49.70`
				]
			}
		},
		{
			id: 'M26',
			title: 'Regulatory landscape',
			content: {
				type: ['p', 'ul', 'p', 'ul'],
				data: [
					`Abortion is <b>legal</b> in Canada, and patients do not require consent from partners or parents to seek an abortion. It is the <b>second most common</b> reproductive health service: one in three Canadian pregnancy-capable persons will seek abortion in their lifetime[1,2].

        Medication abortion uses medication pills to end a pregnancy. In Canada, the medication abortion pills are packaged and sold as Mifegymiso.`,
					`Mifegymiso is approved by Health Canada for gestational age up to 63 days, but has been shown by SOGC to be <b>safe and effective</b> for up to 70 days.
        It is provided <b>free-of-charge</b> to all patients with provincial health insurance and several categories of <a href="/dispensing/coverage-&-insurance#C1" class="in" target="_blank">federal health insurances</a>.
        Patients eligible for healthcare in one province, who attempt to access Mifegymiso in another province or territory, are eligible for counselling, assessments and follow-up but not for the medication itself.
        It can be prescribed through <b>in-person visits</b> or <a href="/prescribing/virtual-hybrid-care#M22" class="in" target="_blank">virtual consultations</a>, or a combination of the two.`,
					`<b>Scope of practice:</b> At the time of this writing, physicians and nurse practitioners in Canada are authorized to prescribe Mifegymiso. In most cases, pharmacists are in charge of dispensing the medication to patients, but some clinics are also authorized to dispense the medication directly to patients. With the exception of Quebec, midwives are currently not authorized to prescribe Mifegymiso but can provide medication abortion care by working closely with nurse practitioners or physicians.

        <b>Province-specific requirements:</b> Healthcare providers should check specific guidelines and scope of practices in their provinces or territories. For example, provinces may differ in their requirements on who can pick up the medication and whether pharmacists have to register with Celopharma, the manufacturer of Mifegymiso. [Click here to see the summary](PG1) of some province-specific regulations for dispensing Mifegymiso.

        <b>Training requirement:</b> Completing a training course is no longer required before prescribing or dispensing Mifegymiso, but healthcare providers may find the online courses below useful in learning about MA care.`,
					`SOGC’s Medical Abortion Training Program, updated in 2023 and provided at cost.
        NAF Canada’s Medication Abortion Training for Primary Care Providers, updated in 2023 and provided at cost.`
				]
			}
		},
		{
			id: 'M27',
			title: 'Facility Setup',
			content: {
				type: [
					'p',
					'h2',
					'right',
					'ul',
					'h2',
					'right',
					'ul',
					'h2',
					'right',
					'ul',
					'h2',
					'right',
					'ul',
					'h2',
					'right',
					'ul',
					'h2',
					'right',
					'ul',
					'h2',
					'right',
					'ul',
					'h2',
					'right',
					'ul'
				],
				data: [
					`Below is a general guide of the steps to be taken when initiating medication abortion (MA) services in your facility. Some of these may not apply, depending on your facility[12].`,
					'Review protocol:',
					assets.FaSetup1,
					`Review guidelines for MA.
        Prepare your protocol and invite the clinical team to review and give feedback on the protocol.
        Determine if purpose of offering MA is for occasional support for current primary care caseload or if it will be made available as a service in the community.
        Evaluate related protocols including contraception, STI testing and treatment and other sexual and reproductive healthcare services, and integrate them with the abortion protocols if appropriate.`,
					'Review regulations and compensation processes:',
					assets.FaSetup2,
					`Review provincial and territorial regulations and scope of practice for physicians and nurse practitioners, and assess the potential involvement of registered midwives in providing MA.
        For physicians, get familiar with provincial billing codes for provision of MA, including codes for any testing that you would be doing on-site.
        For nurse practitioners and registered midwives, review the compensation processes from the professional associations in your jurisdiction.`,
					'Address abortion concerns among your team:',
					assets.FaSetup3,
					`Explore the willingness to provide MA among all staff, address their concerns and determine how to best incorporate abortion services into your practice (see the <a href="#M28" class="in">next module</a>).`,
					'Prepare plans to support underserved populations:',
					assets.FaSetup4,
					`Evaluate your services for its ability to serve underserved population such as non-insured patients, patients from Indigenous communities and patients identified as 2SLGBTQI+.
        Consider incorporating trauma-informed care and harm-reduction approaches in your services.
        Prepare plans to provide low-barrier MA services for underserved populations, and review these plans with your staff.`,
					'Review staffing and administrative capacity:',
					assets.FaSetup5,
					`Review current clinic capacity to provide MA.
        Determine key person or team to be primarily responsible for MA patients.
        Assess best times for scheduling MA patients.
        Review your clinic’s on-call schedule or your local hospital’s call service to connect with obstetricians.
        For clinical staff, arrange in-depth training on counselling, provision of Mifegymiso, and complication management.
        For support staff, prepare phone scripts and other resources for them to review and use.`,
					'Set up your facility:',
					assets.FaSetup6,
					`Assess the design of waiting rooms, reception areas and counselling rooms to ensure they promote patient privacy.
        Review arrangements with a lab or in-house capacity for a quantitative βhCG test and Rhesus testing and administration.
        Identify ultrasound facilities in your community, if not available on-site.
        Determine what additional supplies or equipment are needed.`,
					'Identify clinics for referral:',
					assets.FaSetup7,
					`Find procedural abortion clinics if you do not provide procedural abortion service.
        Identify abortion clinics in your area who can accept prompt referrals if your schedule cannot accommodate patients in a timely manner to ensure that your patients do not miss the window for MA.
        Find pharmacies that regularly stock Mifegymiso and develop relationships with local pharmacies who could stock Mifegymiso.`,
					'Prepare communication materials:',
					assets.FaSetup8,
					`Obtain or develop patient education materials, consent forms and other charting forms.
        Develop, print and distribute posters to let your clients know that you prescribe MA.`
				]
			}
		},
		{
			id: 'M28',
			title: 'Addressing abortion concerns',
			content: {
				type: ['p', 'olul'],
				data: [
					`Below are suggestions on how to address opposition and concerns about medication abortion (MA) among your staff and colleagues, which will facilitate smooth integration of MA services into your practices[16].`,
					[
						`First, identify providers, administrators and support staff within your setting, who might be interested and committed to offering abortion services.
          Initiate informal discussions with colleagues about offering the service.
          Consider implementing an anonymous staff survey and patient survey to get an idea of people’s thoughts and feelings about MA.
          Consider organizing a workshop to clarify abortion beliefs, address opposition or discomfort, and determine ways for working together to provide MA. Abortion belief clarification workshop can be adapted using:`,
						` [Values clarification toolkits](C35) by National Abortion Federation.
           [Values clarification workshop](C58-10) materials by the Reproductive Health Access Project.`,
						`Consider establishing a planning committee to discuss goals, tasks, timelines, obstacles and solutions.
          Find out about other local health centres or providers who have successfully integrated abortion services into their practice and invite them to meetings, workshops and planning sessions, or invite them to provide feedback and consult on your process.
          Develop a protocol for staff members who feel that they are unable to participate in providing abortion services.
          When interviewing applicants for staff vacancies, discuss the idea of abortion. Include in the job posting that applicant should be open to all aspects of reproductive care including pregnancy termination.`
					]
				]
			}
		},
		{
			id: 'C1',
			title: 'Federal insurance schemes',
			content: {
				type: ['p', 'h2', 'p', 'h2', 'p', 'h2', 'p', 'h2', 'p', 'h2', 'p', 'h2', 'p'],
				data: [
					`Patients who are covered through Federal programs, may request a prescription for Mifegymiso and fill it at a pharmacy of their choice and it will be fully covered when the pharmacy submits the billing to the Federal Plan assuming all other requirements for utilizing Mifegymiso are met.`,
					'Non-Insured Health Benefits (NIHB) Program',
					`Eligible First Nations and Inuit clients are covered fully for the cost of Mifegymiso for medication abortion.
        The claim process follows the normal submission process for other prescription drugs.

        Link: nihb-ssna.express-scripts.ca(https://nihb-ssna.express-scripts.ca/en/0205140506092019/16/160407)
        `,
					'Veterans Affairs Canada',
					`Mifegymiso is currently listed as a standard benefit on the Veterans Affairs Canada (VAF) drug benefit list.
        This means that it is readily accessible to eligible clients with a valid prescription.

        VAC clients have a VAC healthcare identification card on which “A” and/or “B” is indicated under the heading “Program number 10”. Group A clients may only use their card to obtain health benefits directly related to the treatment of their VAC pensioned medical condition.

        Group B clients are eligible for approved benefits if they have demonstrated a health need and the benefits are not available to them under a provincial health plan.

        In addition, since veterans are covered for basic healthcare coverage through the provincial or territorial healthcare system, their access to Mifegymiso will follow the same provincial or territorial process as other residents.

        Link: www.veterans.gc.ca(https://www.veterans.gc.ca/en/financial-programs-and-services/medical-costs/coverage-services-prescriptions-and-devices)
        `,
					'Canadian Forces Health Services',
					`Mifegymiso is a regular benefit on the Canadian armed forces drug benefit list; no special authorization is required.

        Link: www.cmp-cpm.forces.gc.ca(http://www.cmp-cpm.forces.gc.ca/hs/en/drug-benefit-list/index.asp)
        `,
					'Royal Canadian Mounted Police (RCMP) Health Benefits Program',
					`RCMP officers are considered insured persons and receive basic healthcare through the healthcare system in the province or territory in which they reside, their access to Mifegymiso will follow the provincial or territorial process as other residents. Additionally, private plans that cover the cost of prescription drugs is also an option.

        Link: bc-cb.rcmp-grc.gc.ca(https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2234&languageId=1&contentId=58416)
        `,
					'Interim Federal Health Program (IFHP)',
					`Coverage for Mifegymiso with IFHP is available in provinces and territories that have the medication listed on their public drug formularies.

        Link: www.canada.ca(https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program/coverage-summary.html)
        `,
					'Programs from Correctional Services of Canada',
					`Service for people incarcerated in federal penitentiaries is provided directly from the pharmacy within the facility.`
				]
			}
		},
		{
			id: 'M36',
			title: 'Non-insured patients',
			content: {
				type: ['p', 'ulul'],
				data: [
					`Providers can support non-insured patients by:`,
					[
						`Determining the cost of Mifegymiso and medication abortion (MA) consultations fees as out-of-pocket expenses. Make a list of community health centers and discount reproductive health clinics where patients can get a MA prescription at low or no cost.
          Exploring processes for waiving fees or developing cost-sharing agreements with partner organizations or other service providers.
          Ensuring administrative and supporting staff are aware of the plan.
          Referring patients to the Emergency Fund by National Abortion Federation (NAF) Canada and Action Canada:`,
						`Patient Assistance Fund: To speak with someone about the Dr. Morgentaler Patient Assistance Fund, please call the NAF hotline at 1-800-772-9100.
          Norma Scarborough Fund | Action Canada: Visit actioncanadashr.org for more information.`
					]
				]
			}
		},
		{
			id: 'M37',
			title: '2SLGBTQIA+ patients',
			content: {
				type: ['p', 'h2', 'ul', 'h2', 'table'],
				data: [
					`Below are some suggestions to help clinicians create an inclusive environment where the needs of 2SLGBTQIA+ patients can be met. These suggestions are not exhaustive and providers are encouraged to consider other manuals and cultural competency training opportunities to provide inclusive care.

        <i>These suggestions were reproduced from [Gender Inclusive Language](PHSA1) by Trans Care BC, [The Trans-inclusive Abortion Services](C27) by the SHORE Centre and Fédération du Québec pour le planning des naissances, and the [Handbook for Healthcare Providers Working with Clients from Diverse Communities](C104-4) by Action Canada for Sexual Health & Rights. For more information on the myths about reproduction of LGBTQ2S+, the vocabulary and glossary to use and avoid, and case studies and recommendations to overcome obstacles, <b>please refer to these manuals.</b></i>`,
					'Do’s and Don’ts:',
					`Do have <b>accessible bathrooms for multiple genders</b> by removing “Male” and “Female” signs from washrooms, or replacing them with an “All Gender Bathroom” sign.
        Do display <b>2SLGBTQIA+ inclusive posters, pamphlets, and other materials</b> to let your patients know that they are welcome.
        Do use <b>inclusive clinical forms</b> (e.g., intake forms) that are inclusive of all sexual orientations and gender identities. Consider whether the questions you are asking are necessary to ask for clinical purposes, or if they are asked out of curiosity only.
        Do <b>ask which pronouns patients prefer</b> and use them consistently throughout their care.
        Do ask patients and observe what <b>words they use to refer to their body parts</b>, and mirror their language.
        Do respect trans <b>patients’ rights to educate</b> on trans issues or speak on behalf of the needs of trans patients.
        Do seek to remove barriers for 2SLGBTQIA+ patients.
        Do NOT use labels and terms derived from older versions of DSM and ICD such as transgenderism, transsexualism and gender identity disorder.
        Do NOT use derogatory terms and expressions even if your patient does.`,
					'Gender-inclusive language:',
					[
						['Say this', 'Instead of'],
						[
							'Person (person in the pink shirt, pregnant person)',
							'Man, woman, girl, boy, ladies, gentlemen, sir, ma’am (pregnant women, guy in pink shirt)'
						],
						['Parenthood', 'Motherhood, fatherhood'],
						['Assigned female, assigned male', 'Biological female, biological male'],
						['Cisgender', 'Not trans, normal, real'],
						['Chestfeeding', 'Breastfeeding'],
						['Transgender men, transgender women', 'A transgender, transgenders'],
						['External condom, internal condom', 'Male condom, female condom'],
						['Receptive intercourse, insertive intercourse', 'Vaginal sex'],
						['Monthly bleeding', 'Period, menses'],
						[
							'Sexual health screening, internal exam, cervical screening',
							'Pelvic exam, woman’s exam'
						],
						['Internal reproductive organs', 'Female reproductive organs'],
						['Internal gonads', 'Ovaries'],
						['External gonads', 'Testes, testicles'],
						['Internal genitals, genitals', 'Vagina'],
						['External genitals, erectile tissue, genitals', 'Penis']
					]
				]
			}
		},
		{
			id: 'M38',
			title: 'Indigenous patients',
			content: {
				type: ['p', 'h2', 'ul'],
				data: [
					`Below are suggestions to help non-Indigenous healthcare professionals create an inclusive environment for Indigenous patients. These suggestions are not exhaustive and providers are encouraged to consider other manuals and cultural competency training opportunities to provide inclusive care.

        A variety of factors and realities may affect how Indigenous Peoples access health services, including geographical access barriers, the unavailability of language and translation services, a lack of culturally safe health care settings or past experiences of racism, stigma, shame, fear or discrimination. Be mindful that <b>being Indigenous is not a risk factor in itself</b>, what actually puts people at risk are systemic issues like racism, colonialism, inter-generational trauma, and a lack of access to culturally safe care, treatment and supports.

        These recommendations were reproduced from [The Indigenous Ally Toolkit](VCOP1) by the Montreal Urban Aboriginal Community Strategy Network, and [the Handbook for Healthcare Providers Working with Clients from Diverse Communities](C104-1) by Action Canada for Sexual Health & Rights.`,
					'Quick tips for clinicians:',
					`Offer <b>translation services</b>, and where possible, translated resources.
        Connect with, and advocate for the involvement of, Indigenous patient navigators in your area.
        When hearing about difficult or violent experiences from patients, affirm their experiences and stories. <b>Avoid shaming them for the feelings they have, or the ways they use to cope.</b>
        <b>Create and maintain a list of available resources and cultural supports</b> within your region, including social services.
        <b>Support your patients to participate in the creation of their treatment plans</b>, including the incorporation of traditional and cultural resources and methods.
        Avoid saying “Canada’s Indigenous Peoples” or “Our Indigenous Peoples” – <b>The Indigenous Peoples are not owned by Canada or by any individual.</b>
        Avoid saying “The Indigenous culture” – <b>this phrase does not recognize that there are hundreds of Indigenous communities, nations, languages and cultures existing in Canada.</b> Instead of singular, try using plural forms “Indigenous cultures” or even better, being specific about the nation to avoid pan-Indigenizing.`
				]
			}
		},
		{
			id: 'C2',
			title: 'Alberta',
			content: {
				type: ['p'],
				data: [
					`Since July 24, 2017, Alberta Health, through the Women’s Choice Program, has been providing coverage for Mifegymiso through licensed pharmacies in Alberta to allow women to exercise their choice in sexual health. Alberta Blue Cross is facilitating payment of claims for Mifegymiso under this program. All Albertans with a valid Alberta Health Care Insurance Plan and Personal Health Number (PHN) are eligible for coverage; a pseudo-PHN of WC0000000 is used for Albertans without a valid PHN.

        There is no limit on the number of Mifegymiso prescriptions that a plan member may receive under the Women’s Choice Program; however, pharmacies may only claim one dose at a time for a plan member.

        The program provides for direct bill claims submission only. Plan members are not eligible to claim for reimbursement.

        Link: www.ab.bluecross.ca(https://www.ab.bluecross.ca/pdfs/pharmacy-benefacts/pharmacy-benefact-697.pdf)
        `
				]
			}
		},
		{
			id: 'C3',
			title: 'British Columbia',
			content: {
				type: ['p'],
				data: [
					`Mifegymiso is covered under the BC Pharmacare Assurance Plan (Plan Z and exceptional Plan Z) which provides 100% coverage. All residents of BC with active Medical Services Plan (MSP) coverage are eligible.

        Link: www2.gov.bc.ca(https://www2.gov.bc.ca/gov/content/health/practitioner-professional-resources/pharmacare/pharmacies/plan-z)
        `
				]
			}
		},
		{
			id: 'C4',
			title: 'Manitoba',
			content: {
				type: ['p'],
				data: [
					`All residents of Manitoba with a valid Manitoba Health Registration Card and a prescription for Mifegymiso are eligible for coverage. Clients presenting with a valid Manitoba Health card and a prescription from an authorized prescriber should not be charged any out-of-pocket costs and even if the client is enrolled in Pharmacare or another provincial drug program (e.g., Family Services/EIA), there is no requirement to meet a deductible or co-pay.

        Link: www.gov.mb.ca(https://www.gov.mb.ca/health/pharmacare/profdocs/csp_mifegymiso.pdf)
        `
				]
			}
		},
		{
			id: 'C5',
			title: 'New Brunswick',
			content: {
				type: ['p'],
				data: [
					`Coverage is available through the Medical Abortion Program. Manual claims will not be accepted, and claims must be submitted online.

        Link: www2.gnb.ca(https://www2.gnb.ca/content/gnb/en/departments/health/DrugPlans/NBDrugPlan/ForHealthCareProfessionals/medical_abortion_claims_submission.html)
        `
				]
			}
		},
		{
			id: 'C6',
			title: 'Newfoundland & Labrador',
			content: {
				type: ['p'],
				data: [
					`Coverage is available at no cost to individuals with a valid Medical Care Plan card. Individuals can receive a prescription through their healthcare provider, the regional health authorities, or the Athena Clinic in St. John’s. Those with private insurance will use this first, and then the province will cover any remaining cost as last payer. Claims can be submitted in real time through the Newfoundland and Labrador Prescription Drug Program (NLPDP) adjudication system regardless of eligibility.

        Link: www.gov.nl.ca(https://www.gov.nl.ca/hcs/files/prescription-provider-guide-program-claiming-policies.pdf)
        `
				]
			}
		},
		{
			id: 'C7',
			title: 'Northwest Territories',
			content: {
				type: ['p'],
				data: [
					`Coverage for Mifegymiso in the Northwest Territories is provided through the Northern Options for Women (NOW) Program*. The pharmacist will fill the prescription and bill your government/employer’s insurance (if applicable). The Department of Health and Social Services will be sent an invoice for any outstanding amount that your insurance plan does not cover, or will invoice the entire amount if you do not have any insurance coverage at all.

        *The NOW program is only available in Yellowknife and Inuvik currently. The Department will cover the medical travel costs for residents that live outside of Yellowknife and Inuvik who choose treatment options using Mifegymiso and are referred by a practitioner.

        Link: www.hss.gov.nt.ca(https://www.hss.gov.nt.ca/en/services/mifegymiso-northwest-territories) (see page 40/41)
        `
				]
			}
		},
		{
			id: 'C8',
			title: 'Nova Scotia',
			content: {
				type: ['p'],
				data: [
					`Effective November 1, 2017, coverage is available for all persons in Nova Scotia with a valid health card number. Any other sources of insurance, such as a private plan, must be billed first. The method for claims submission is outlined below. Should you have any questions, please contact the Pharmacare Office.

        Link: novascotia.ca(https://novascotia.ca/dhw/pharmacare/documents/Pharmacy-Guide.pdf) (see page 41)
        `
				]
			}
		},
		{
			id: 'C9',
			title: 'Nunavut',
			content: {
				type: ['p'],
				data: [
					`Abortions in Nunavut are free for First Nations beneficiaries and are covered under Nunavut Healthcare. An estimated 86% of Nunavut residents are eligible for coverage through the Non-Insured Health Benefits Program.

        Link: www.pharmacists.ca(https://www.pharmacists.ca/cpha-ca/assets/File/cpha-on-the-issues/Mifegymiso_Access_Scan.pdf)
        `
				]
			}
		},
		{
			id: 'C10',
			title: 'Ontario',
			content: {
				type: ['p'],
				data: [
					`Effective August 10, 2017, all Ontarians with a valid Ontario Health Insurance Plan (OHIP) and a valid prescription are eligible for Mifegymiso. This includes both Ontario Drug Benefit (ODB) recipients and non-ODB recipients. Pharmacies must ensure the eligible person’s date of birth, health card number and name (as it appears on the Ontario Health Card) are entered correctly as part of the Health Network Solution (HNS) claims submission. Mifegymiso supplied to patients with a valid prescription will be reimbursed by the ministry.

        Link: www.pharmacytechnologysolutions.ca(https://www.pharmacytechnologysolutions.ca/pharmaclik-rx-doc/Content/Resources/PDFs/ODBMifegymisoClaims.pdf)
        `
				]
			}
		},
		{
			id: 'C11',
			title: 'Prince Edward Island',
			content: {
				type: ['p'],
				data: [
					`Medication abortion Services are offered at no charge through Sexual Health, Options & Reproductive Services (SHORS) and the Women’s Wellness Program. However, a valid PEI Health Card is required.

        Link: www.princeedwardisland.ca(https://www.princeedwardisland.ca/en/information/health-pei/abortion-services)
        `
				]
			}
		},
		{
			id: 'C12',
			title: 'Quebec',
			content: {
				type: ['p', 'ul', 'p'],
				data: [
					`Anyone who is duly registered with the Régie de l’assurance maladie du Québec (Régie) and, who holds a prescription from a physician or medical resident for the claim slip, or temporary proof of eligibility for medication will have access to the Mife-Miso for abortion without cost. A person at least fourteen (14) years of age, but under eighteen (18) years of age who consents alone to the services provided by the program, in accordance with the provisions of the Civil Code, may benefit from the program even if they do not present a valid health insurance card or claim slip. Anyone eighteen (18) and over who does not present their health insurance card or a valid claim slip must pay the benefit; therefore, they may request reimbursement from the Régie using the form provided for this purpose.

        Any service obtained outside Quebec is not covered by this program. An exception to this principle is when:`,
					`The medication is supplied by a pharmacist, with whom the Régie has a special agreement for this purpose.
        The pharmacy is in a region bordering with Quebec.
        No pharmacy in Quebec serves the population within a radius of 32 kilometers from this pharmacy.`,
					`Link: www.ramq.gouv.qc.ca(https://www.ramq.gouv.qc.ca/sites/default/files/documents/liste_med_2022-12-14_en_0.pdf)
          `
				]
			}
		},
		{
			id: 'C13',
			title: 'Saskatchewan',
			content: {
				type: ['p'],
				data: [
					`Saskatchewan provides 100% coverage for Mifegymiso for residents eligible under the Saskatchewan Drug Plan. Claims may be submitted electronically to the Saskatchewan Drug Plan.

        Link: formulary.drugplan.ehealthsask.ca(https://formulary.drugplan.ehealthsask.ca/SearchFormulary)
        `
				]
			}
		},
		{
			id: 'C14',
			title: 'Yukon',
			content: {
				type: ['p', 'ul', 'p'],
				data: [
					`Through a partnership with the Yukon Hospital Corporation, the Government of Yukon is now offering universal coverage of Mifegymiso. This partnership ensures that Yukoners have low-barrier options and more equal access to abortion services.

        Physician Services for Mifegymiso are available in:`,
					`Whitehorse
        Haines Junction
        Dawson City
        Watson Lake`,
					`Yukon residents living in communities without resident physician services that are seeking to use Mifegymiso, will be required to travel to see a physician, who will assist in safely ending a pregnancy with this medication.

        In accordance with the Travel for Medical Treatment Act and Regulations, the Medical Travel Unit will provide a travel subsidy to eligible individuals who are travelling for the purpose of obtaining Mifegymiso outside of their home community.

        Link: open.yukon.ca(https://open.yukon.ca/sites/default/files/mt006-mIfe.pdf)
        `
				]
			}
		},
		{
			id: 'M32',
			title: 'Key counselling points',
			content: {
				type: ['p', 'ul', 'p', 'ul', 'p'],
				data: [
					`Prior to arriving at the pharmacy for MIFE / MISO, people seeking abortion, hereinafter called “patients”, will already have had a conversation with prescribers about medication abortion (MA) such as pregnancy options, eligibility, risks and efficacy[10].

					When counselling patients, dispensers should provide a <b>private space for counselling</b>, ensure confidentiality and go over the key points below using an <b>inclusive language</b>[10]:`,
					`Confirm that the decision is the patients’ own, reached without coercion.
        Verify the written date of the prescription; if the prescription was written 7 or more days from when the prescription was brought to the pharmacy, the pharmacist may want to follow-up with the prescriber.
        Emphasize that in the event of an ongoing pregnancy post-MA, another dose of MISO or procedural abortion is recommended as both MIFE and MISO are teratogenic.
        Exclude contraindications.
        Review the date and time patients plan to take MIFE / MISO.
        Review the date that patients have a follow up with their prescriber.`,
					'<b>Ensure patients have the following before leaving[10]:</b>',
					`Sanitary pads and liners.
        Pain medication and/or anti-nauseants (Over-the-counter or prescription).
        Access to emergency care.
        Support for childcare, transportation, and groceries.`,
					`<b>Ensure patients understand how to administer MIFE / MISO, how to manage side effects, and know when and how to seek care</b> (see below).`
				]
			}
		},
		{
			id: 'M34',
			title: 'Optional follow-up',
			content: {
				type: ['p', 'ul', 'p', 'ul'],
				data: [
					`Patients are required to have a follow-up consultation with prescribers.

        A follow-up with dispensers is optional and can take place 2 – 3 days after MISO administration. During the follow-up, dispensers can do the following[9,10]:`,
					`Verify appropriate administration
        Review side effect management
        Review contraception options
        Reinforce prescriber follow-up
        Provide emotional support`,
					`Emotional response after MA often vary. Some people feel relieved and positive and some have feelings of grief, sadness, or guilt while others have mixed feelings. These emotions are normal, and they may or may not be related to socioeconomic circumstances, the lack of social support, moral discomfort, and family conflict.

        Patients can be supported by understanding that mixed emotions are normal and by exploring coping strategies and support. Useful resources include:`,
					`Exhale, a talk-line that provides emotional support, resources and information after abortion.
        All-Options, a talk-line to discuss past or current experience with abortion, adoption and parenting for people in Canada and the United States (1-888-493-0092).`
				]
			}
		},
		{
			id: 'M29',
			title: 'Drug interactions',
			content: {
				type: ['p', 'ul', 'p'],
				data: [
					`MIFE is metabolized by CYP3A4 and is also an irreversible competitive inhibitor of CYP3A4 and, to a lesser extent, of CYPs 1A, 2B, 2D6 and 2E1. As MIFE binds CYP irreversibly and is slowly eliminated from the body, caution should be taken when MIFE is administered with drugs that are CYP3A4 substrates and have narrow therapeutic range[10].

        Drug interactions of importance in the clinical setting that may alter the metabolism of MIFE include[10]:`,
					`CYP3A4 inducers (glucocorticoids, macrolide antibiotics, rifampicin, carbamazepine, benzodiazepines, barbiturates, St. John’s wort).
        CYP3A4 inhibitors (cimetidine, ketoconazole, erythromycin, chloramphenicol, spironolactone, secobarbital, grapefruit juice).`,
					`MIFE has antiglucocorticoid activity; it may temporarily decrease the efficacy of corticosteroid therapy, including inhaled corticosteroids[10].

        As for MISO, there is no known drug interactions. Oral ingestion with food or antacids may decrease oral bioavailability[10].`
				]
			}
		},
		{
			id: 'M30',
			title: 'Pharmacokinetics',
			content: {
				type: ['p', 'ul'],
				data: [
					`MIFE taken orally shows non-linear pharmacokinetics. It is rapidly absorbed and distributed, reaching peak concentrations after 0.75 hours. It is 94-99% plasma-bound and is metabolized by CYP enzymes, mainly CYP3A4. Elimination is relatively slow with a half-life ranging between 83 and 90 hours[10].

        MISO‘s pharmacokinetic profile varies substantially depending on the route of administration[10]:`,
					`<b>Buccal</b>: time to first uterine contraction is 67 minutes, sustained for about 90 minutes and begins to decline at 5 hours after administration. The uterine response appears similar to that of vaginal administration, with less inter-individual variability.
        <b>Vaginal</b>: time to first uterine contraction is 82 minutes for dry tablets and 98 minutes for moistened tablets, sustained activity is attained at 106 minutes and 128 minutes, respectively, and uterine activity begins to decline at five hours after administration.
        <b>Sublingual</b>: tablets are absorbed through the mucosa within 20 minutes and MISO reaches peak serum concentration at 30 minutes. First-pass metabolism is avoided.`
				]
			}
		},
		{
			id: 'M31',
			title: 'Clinical assessments',
			content: {
				type: ['p', 'ulul'],
				data: [
					`Prescribers will provide clinical assessments prior to prescribing MIFE / MISO. With the new guideline by SOGC for the provision of medical abortion via telemedicine (MA), prescribers may eliminate blood work or ultrasound, or both, to ensure timely provision of MA[7].`,
					[
						`<b>Gestational age</b> is determined using medical history, urine or serum βhCG test, or ultrasound. Ultrasound is not required to determine gestational age, unless people seeking abortion are uncertain of their last menstrual period[6,7].
        <b>Ectopic pregnancy</b> is ruled out using medical history to screen for risk factors and symptoms. Ultrasound is recommended if there are significant risk factors or symptoms suggestive of ectopic pregnancy[6,7].
        Guideline on <b>Rhesus testing and administration</b> varies:`,
						`SOGC’s Guideline on Prevention of RhD Alloimmunization: Rh administration is suggested for non-sensitized Rh D-negative individuals who have experienced threatened, spontaneous, or induced abortion after 12 weeks gestation[21].
        The Society of Family Planning: Rh testing is not recommended prior to 12 weeks gestations for spontaneous, medications, or uterine aspiration abortion[8].`,
						`<b>Complete blood count</b> to measure hemoglobin level is indicated if there is an increased risk of anemia; otherwise, it is unnecessary[7].
        Routine <b>prophylactic antibiotics</b> are not required; screen-and-treat is the preferred management strategy and it is performed by the prescriber[6].`
					]
				]
			}
		},
		{
			id: 'M35',
			title: 'Facility Setup',
			content: {
				type: ['p', 'ul', 'p'],
				data: [
					`Below is a general guide of the steps to be taken when initiating medication abortion (MA) services at your pharmacy. Some of these may not apply and some other considerations not listed below may be needed, depending on your pharmacy.`,
					`Review product monographs and protocols to dispense Mifegymiso.
        Review clinical guidelines to prescribe medication abortion if needed.
        Get familiar with regulations by your provincial College of Pharmacists. This [summary](PG1) contains some but not all province-specific regulations.
        Prepare your own protocol, and invite other staff to review and give feedback.
        Become familiar with provincial insurance schemes and coverage of Mifegymiso.
        Explore the willingness to dispense Mifegymiso among all staff, including pharmacy assistants, technicians and administrators, address their concerns and stigma, and determine how to best initiate abortion services at your pharmacy.
        Review current pharmacy staffing to determine the capacity to provide MA.
        Determine a key person or team to be primarily responsible for MA patients.
        Develop, print and distribute posters to let clients and other healthcare providers know that you dispense Mifegymiso.`,
					'Adapted from the [Checklist for starting medical abortion services](C43) by National Abortion Federation.'
				]
			}
		},
		{
			id: 'M39',
			title: 'What is Medication Abortion',
			content: {
				type: ['p', 'i-full'],
				data: [
					`Abortion is <b>legal</b> in Canada, and patients do not require consent from partners or parents to seek an abortion. It is the <b>second most common</b> reproductive health service: one in three Canadian pregnancy-capable persons will seek abortion in their lifetime[2,14,15,18].

        Medication abortion uses medication pills to end a pregnancy. In Canada, the medication abortion pills are packaged and sold as Mifegymiso. It is approved by <a href="" class="in" target="_blank">Health Canada</a> for gestational age up to 63 days, but has been shown to be <b>safe and effective</b> up to 70 days by the Society of Obstetricians and Gynaecologists of Canada and 77 days by the World Health Organization. The counselling and the medication are provided <b>free-of-charge</b> to all patients with provincial health insurance and several categories of <a href="/dispensing/coverage-&-insurance#C1" class="in" target="_blank">federal health insurances</a>. However, it is important to note that patients eligible for healthcare in one province, who attempt to get medication abortion in another province or territory, are covered for counselling but not for the medication itself.

        <b>Mifegymiso</b> typically comes in two boxes: a green box containing mifepristone 200 mg (MIFE) and an orange box containing misoprostol 800 mcg (MISO). MIFE helps stop a pregnancy from growing and prepares the body to empty the uterus by softening the cervix and helping the lining of the uterus to break down. MISO causes the cervix to dilate and the uterus to contract, which makes the pregnancy tissues leave the body. It is also used for abortion and for other conditions (e.g., miscarriage, postpartum hemorrhage)[14].`,
					assets.EnMifegymisoOverview
				]
			}
		},
		{
			id: 'M40',
			title: 'Who Can Prescribe',
			content: {
				type: ['p', 'ul', 'p'],
				data: [
					`At the time of this writing, <b>physicians and nurse practitioners</b> in Canada are authorized to prescribe Mifegymiso. <b>Midwives</b> in all provinces and territories, except for Quebec, are not authorized to prescribe Mifegymiso but can provide medication abortion care when working closely with nurse practitioners or physicians.

        Providers of medication abortion can be found through:`,
					`Find medication abortion services portal by Action Canada for Sexual Health and Rights (please click the hyperlink and then select the option “Medical Abortion”)
        The list of abortion clinics by Action Canada for Sexual Health and Rights.
        The Choice Connect Abortion Referral App.`,
					`<b>Counselling and clinical assessments are required prior to prescribing Mifegymiso.</b> Counselling is to help patients make an informed decision by understanding their options (abortion versus term pregnancy, and medication abortion versus procedural abortion). Clinical assessments are to confirm that the gestational age does not exceed the threshold (63 days by Health Canada, 70 days by the Society of Obstetricians and Gynaecologists of Canada), rule out serious conditions such as ectopic pregnancy and anemia, and determine the need for bloodwork such as Rhesus testing[6].

        In cases of <b>virtual or hybrid provision of medication abortion</b> (also called no-touch or low-touch medication abortion), the number of visits is minimized by carrying out counselling, screening and follow- up appointments virtually over the phone or through video. The purpose is to <b>reduce the need for patients to travel long distance or wait for days or weeks to receive abortion</b>. However, the virtual provision of medication abortion may put patients at risk due to the lack of ultrasound screening that can provide accurate assessment of the gestational age or about the presence of ectopic pregnancy. In addition, virtual medication abortion may involve more frequent (phone) follow- up to monitor the symptoms and risk of ongoing pregnancy and ectopic pregnancy, and thus it often requires more clinical resources. For these reasons, whether virtual provision of medication abortion is possible depends on prescribers’ experiences, clinical resources, patients’ needs and patients’ safety[7].`
				]
			}
		},
		{
			id: 'M41',
			title: 'Where to Get the Medication',
			content: {
				type: ['p'],
				data: [
					`In most cases, <b>pharmacists</b> are in charge of dispensing the medication to patients, but some clinics are also authorized to dispense the medication directly to patients. Specific guidelines by the [College of Pharmacies](PG1) may differ between provinces and territories about whether patients need to be present in- person to pick up the medication, or whether the medication can be delivered to patients via postage services.`
				]
			}
		},
		{
			id: 'M42',
			title: 'How to Counsel Clients',
			content: {
				type: ['p', 'ul', 'p', 'ul', 'i-full'],
				data: [
					`Counselling is important to help clients make informed decisions by understanding their options (abortion versus becoming a parent, and medication abortion versus procedural abortion). During the counselling, it is also important to understand clients’ preferences and circumstances to advise the best course of action.

            <b>Medication abortion</b> is suitable for patients who[6]:`,
					`Prefer a non-invasive method.
            Prefer to have an abortion in the comfort of their home.
            Have the confidence of being able to manage the process and side effects at home.
            Are able to take 1 to 3 days off work or other responsibilities to undergo the abortion process.
            Lack means of transportation to travel to the clinic for a procedural abortion (but still have access to emergency services in event of complications).`,
					'<b>Procedural abortion</b> is suitable for patients who[6]:',
					`Prefer to have in-person support and monitoring from healthcare professionals at a clinic or hospital.
            Want to have the abortion completed quickly to return to work or other responsibilities.
            Are comfortable with the use of medical instruments and internal exams.
            Are comfortable undergoing local or general anesthesia to manage pain.
            Do not want to disclose the pregnancy and the abortion to those patients live with (such as partners, roommates, co-workers), as it might be difficult to conceal heavy bleeding and strong cramps.`,
					assets.EnAbortionOptions
				]
			}
		},
		{
			id: 'M43',
			title: 'How to Prepare for Medication Abortion',
			content: {
				type: ['p', 'ul'],
				data: [
					`Prior to taking medication abortion, clients should know how to administer the medication, what the side effects are, how to identify the signs of complications, and when to seek emergency care[2].

          Do ensure that clients have the following before they take medication abortion:`,
					`Sanitary pads and liners.
          Pain medication and / or anti-nauseants (over-the-counter or prescriptions).
          Access to emergency care.
          Support for childcare, transportation, and groceries.`
				]
			}
		},
		{
			id: 'M44',
			title: 'How to Support After Abortion',
			content: {
				type: ['p', 'ul', 'h2', 'p', 'i-full'],
				data: [
					`Clients who undergo medication abortion are required to have follow-up consultations with their prescribers to confirm the termination of the pregnancy, manage complications, receive counselling on contraception and get emotional support if needed. Clients may also require ultrasound or bloodwork to confirm the completion of the abortion and to rule out the possibility of ectopic pregnancy.

          <b>Mode of follow-up</b>[6]:

          In most situations, follow-up consultations are given 7 to 14 days after taking misoprostol (the second medication) but sometimes follow-up can take place as early as 3 days after misoprostol. The consultation can be over the phone or in-person, depending on the circumstances.

          <b>Emotional support[6]</b>:

          Emotional response after medication abortion often vary. Some people feel relieved and positive while some feel grief, sadness, or guilt, and have mixed feelings. These emotions are normal, and they may or may not be related to socioeconomic circumstances, the lack of social support, moral discomfort, and family conflict.

          People undergoing medication abortion can be supported by understanding that mixed emotions are normal and by exploring coping strategies and assistance. Useful resources include:`,
					`Exhale, a talk-line that provides emotional support, resources and information after abortion.
          All-Options, a talk-line to discuss past or current experience with abortion, adoption and parenting for people in Canada and the United States (1-888-493-0092).`,
					'Post-abortion Contraception:',
					`People taking medication abortion can <b>return to fertility</b> rapidly and hence should consider taking contraceptives.`,
					assets.EnPostabortionContraception
				]
			}
		},
		{
			id: 'F1',
			title: 'Medication',
			content: {
				type: ['p'],
				data: [
					`Q: When was the mifepristone (RU-486) / misoprostol drug regimen first approved in Canada? In other countries?
        A: Mifegymiso was approved by Health Canada in July 2015[1]. It was first approved in France and China in 1988, and is now approved for use in over 60 countries[2].

        Q: What is the approved MIFE200 / MISO800 dosing regimen in Canada?
        A: 200 mg mifepristone (oral) followed by 800 µg of misoprostol 24-48 hours after the dose of mifepristone (buccal, vaginal or sublingual).

        Q: If the person who consults me for a medication abortion has an absolute contraindication to using MIFE200 / MISO800, what are the other options for abortion?
        A: For pregnancies up to 63 days, you can offer the patient 50 mg methotrexate (oral or intramuscular) followed by 800 µg misoprostol (vaginal or buccal) 3-5 days later, if there are no contraindications[3]. The use of misoprostol only regimens can also be used for pregnancies up to 63 days, although this is less effective than other regimens[4-6]. You can also offer a procedural abortion.

        Q: Does medication abortion affect the patient’s fertility or future pregnancy outcomes?
        A: No. Fertility is rapidly restored after a medical abortion. Patients who have undergone medication abortion have no increased risk of pre-term delivery or low birth weight or low mean length compared with patients that have not had a previous abortion[7].`
				]
			}
		},
		{
			id: 'F2',
			title: 'Patient Counselling',
			content: {
				type: ['p', 'ul'],
				data: [
					`Q: What topics should I cover in the initial pregnancy options counseling session with the person seeking abortion?
        A: These sessions typically include a discussion of: (a) pregnancy options (abortion, term pregnancy, adoption); (b) abortion methods; (c) risks and benefits of each abortion method; (d) confirmation that the decision is voluntary and that support is present; (e) emotional needs, coping abilities and values; (f) contraceptive options.

        Q: How can I support the patient emotionally after the abortion?
        A: The emotional response to abortion can vary widely among patients. However, all patients will benefit from the provision of a disclosure-friendly and non-judgmental environment, normalizing common reactions and exploring supports and coping strategies. Patients who are not coping well, may benefit from further counseling, and may require referral[7-15]. Useful resources include:`,
					`Exhale, a talk-line that provides emotional support, resources and information after abortion.
        All-Options, a talk-line to discuss past or current experience with abortion, adoption and parenting for people in Canada and the United States (1-888-493-0092).`
				]
			}
		},
		{
			id: 'F3',
			title: 'Side effects & Complications',
			content: {
				type: ['p', 'ul', 'p'],
				data: [
					`Q: What will a person experience during the medication abortion with mifegymiso?
        A: A few hours after misoprostol administration, the person should expect bleeding heavier than a regular period with clots for 2-4 hours. If the pregnancy is less than 56 days gestation, they may pass tissue but not an obvious fetus. After 56 days, when the tissue is passed, fetal tissue may dissemble. Cramping and pain will occur before and at the time of expulsion[16]. Misoprostol can cause diarrhea, chills and fever, nausea, vomiting, headache and dizziness[17-20].

        Q: What factors influence the pain experienced by the person during medication abortion?
        A: The person under 18 more frequently report pain as compared to adults when using MIFE200 / MISO8005. Higher doses of misoprostol and older gestational age are also associated with more pain[21]. Less pain is reported by person with previous deliveries[21].

        Q: What symptom management can I offer to the person who is undergoing a MIFE200 / MISO800 medication abortion?
        A: NSAIDs for pain control can be used in most instances, such as ibuprofen 200-400 mg every 8 hours or naproxen 225-500 mg every 12 hours on an as-needed basis[21]. A mild opioid analgesic (e.g., codeine or oxycodone) prescription can also be offered as need to treat significant cramping or severe pain[21]. Dimenhydrinate, ondansetron, or diclectin can be offered to manage nausea.

        Q: How can I define “too much bleeding” to a person undergoing a medical abortion?
        A: If, after the abortion, for more than 2 consecutive hours the person is soaking 2 maxi pads per hour and / or if they are experiencing dizziness, light-headedness or a racing heart rate, this is “too much bleeding”[16]. You should provide the person with access to emergency medical care directly or via telephone[22].

        Q: Should a pharmacist obtain a new prescription from the physician or nurse practitioner prescribing Mifegymiso if vomiting occurs within 30 minutes following a MISO dose?
        A: Misoprostol is rapidly absorbed when administered buccally. Consensus suggests that most prescribers would evaluate the effect of the absorbed misoprostol over the first 48 hours. Should the pharmacist be certain that the dose was vomited in less than 30 minutes, they could follow-up directly with the prescribing healthcare prescriber to advise them of the situation.

        In the CAPS Pharmacist Resource Guide for Dispensing Mifegymiso, it states:`,
					`If vomiting occurs during buccal absorption of MISO, contact prescriber for assessment. If there is not any bleeding within 48 hours of MISO administration, another dose may be required.
        After swallowing MISO fragments 30 minutes after buccal administration: no action required; medication has already been absorbed.`,
					`Q: How can I tell if my patient is experiencing toxic shock due to a clostridial infection?
        A: Symptoms are vague and include general malaise with nausea, vomiting, and diarrhea, weakness, absence of fever (or mild fever), minimal abdominal pain, flu-like symptoms, hypotension, tachycardia, edema, high hemoglobin level (hemoconcentration) and a high white blood cell count[23-25].`
				]
			}
		},
		{
			id: 'F4',
			title: 'Breastfeeding',
			content: {
				type: ['p'],
				data: [
					`Q: Can I give Mifegymiso to a woman who is breastfeeding?
        A: The current available evidence suggests that for the current dose of Mifegymiso, breastfeeding does not need to be interrupted.

        The background information is from the National Library of Medicine LactMed database and from the National Abortion Federation Protocol for Mifepristone / misoprostol for Early Medical Abortion, in case you want the details. Hope this is helpful. Sheila Dunn.

        <b><i>Mifepristone Summary of Use during Lactation (NLM):</b></i>

        Limited information indicates that breastfeeding need not be interrupted after a single dose of mifepristone. A dose of 200 mg might be preferable to a 600 mg dose in nursing mothers

        <b>Drug Levels:</b>

        Maternal Levels. Twelve women (most 6 to 12 months postpartum) who had undergone a medical abortion using mifepristone and misoprostol provided milk samples for up to 5 days after the procedure for measurement of mifepristone. In the 2 women who received a single dose of 200 mg orally, mifepristone was undetectable (<5.6 mcg/L) in breastmilk at all times. Among the 10 women who received a single oral dose of 600 mg, average mifepristone breastmilk levels were 172 mcg/L on day 1 (n = 9); 66 mcg/L on day 2 (n = 9); 31 mcg/L on day 3 (n = 10); 24 mcg/L on day 4 (n = 4); and, 25 mcg/L on day 5 (n = 3). Breastmilk levels of mifepristone were highest in the samples collected between 6 and 9 hours after drug administration. Samples collected between 9 and 15 hours after the dose had much lower mifepristone levels. The authors estimated that a fully breastfed infant would receive a weight-adjusted dosage of 0.5% of the maternal dosage. They suggested that breastfeeding need not be interrupted after a single dose of mifepristone and that a dose of 200 mg might be preferable to a 600 mg dose in nursing mothers[26].

        <b><i>Misoprostol Summary:</b></i>

        Misoprostol is a prostaglandin E1 analogue. Prostaglandin E1 and other prostaglandins appear normally in colostrum and milk[27-29]. Because of the low levels of misoprostol in breastmilk, amounts ingested by the infant are small and would not be expected to cause any adverse effects in breastfed infants. No special precautions are required.

        No evidence supports pumping and discarding of breast milk while undergoing the medical abortion. Mifepristone levels in breast milk after a mother receives 600 mg of mifepristone are low and are undetectable after a 200 mg dose. Levels of misoprostol in breast milk are also low, and the small amounts ingested by infants should not cause any adverse effects[26]. (National Abortion Federation, revised April 2016).
        `
				]
			}
		},
		{
			id: 'F5',
			title: 'Multiple Gestation',
			content: {
				type: ['p', 'ul', 'p'],
				data: [
					`Q: Can Mifegymiso be used for the termination of multiple gestation (i.e. twin pregnancy)? What’s the evidence / success?
        A: Although one case- report revealed a failure of using mifepristone for medication abortion in a patient with a twin pregnancy, Hayes, J.L. et al., performed a secondary analysis of treatment efficacy and side effects on a population receiving mifepristone 200 mg orally and misoprostol 800 mcg vaginally for medication abortion up to 63 days and showed[30]:`,
					`Of 2208 subjects, 24 (1.1%) women had twins.
        Treatment success was not statistically different for twin and singleton gestations (91% vs 97%, p = 0.19).
        Perceived side effects, bleeding and pain were not statistically different between groups.`,
					`In the case report of one failure, Sorensen, E.C. et al., hypothesized that twin pregnancies may need higher dosage of mifepristone than single pregnancies[31]. But no trial has been performed to test this hypothesis and this article was highly criticized by Hausknecht, R. in an author reply. Looking at these results, we think it is reasonable to perform a medication abortion with mifepristone & misoprostol in patients with a twin pregnancy up to 63 days.`
				]
			}
		},
		{
			id: 'F6',
			title: 'Methadone',
			content: {
				type: ['p'],
				data: [
					`Q: Is there an interaction between methadone and mifepristone?

        <i>A: Bottom Line:</i>

        Post-marketing surveillance of mifepristone use in numerous countries for the past 25 years has not raised concerns about this interaction. Although there are limited trials and published literature on this drug interaction, the precautionary principle states that women using both drugs simultaneously be adequately informed, accompanied during the abortion process and followed for the occurrence of adverse events and completion of the abortion. Even if arrhythmia were not a potential side effect based on pharmacodynamics, it may emerge as an adverse drug reaction as mifepristone penetrates the population more widely including opioid/opiate dependent women.

        We include below an opinion from a Pharmacology professor at UBC. Additionally, three highly experienced leaders in mifepristone provision in the USA have offered their opinion that they have not seen evidence for any adverse effect interaction. The answer from a Drug Metabolism/Pharmacokinetic point of view is: probably not. The (slightly longer) explanation is as follows: Methadone primarily binds the “mu” opioid receptor similar to other opioids, which is why it is a replacement therapy for people with addictive and tolerant issues. Methadone does have some off-target effects at the N-methyl-D-aspartate (NMDA) receptor, which is a glutamate receptor, an excitatory receptor in the brain. In terms of metabolism and excretion, methadone is subjected to a great deal of CYP (cytochrome P450 enzymes) metabolism from CYP3A4, CYP2D6, and CYP2B6 as well. In addition, one of the problems with methadone is that it is readily transported by the P-gp (P-glycoprotein 1) transporter. This transporter protein is found in the human blood: brain barrier (few others are) and in the significant minority of people who express high P-gp, it makes methadone a “not very good” drug.

        In contrast, mifepristone (RU486) is a massively strong binder of the progesterone receptor (IC50 = 0.025 nM for the Progesterone Receptor according to Katzung). What that means for abortion is that the placenta cannot stay cleaved to the uterine wall (which requires progesterone signaling), and will slough off – that is the mechanism of action of mifepristone. Mifepristone itself acts as a moderate inhibitor of CYP3A4 metabolism and can thereby alter concentrations of other drugs. Due to its prolonged half-life and irreversible binding, potential interactions of mifepristone should be checked particularly for medications that have a narrow therapeutic index. Examples include: immune-suppressants (eg, cyclosporine, sirolimus, tacrolimus); cardiovascular drugs (eg, calcium channel blockers, anti-arrhythmics, others); analgesic/anesthetic agents (eg, fentanyl, ketamine, methadone, others). The effect of a single dose of mifepristone on metabolism and effect of other drugs highly dependent upon CYP3A4 for their metabolism or activation may persist for up to two weeks. Interactions with these medications should be checked prior to administration of mifepristone.

        There are no current reports in the literature about people on methadone having better or worse experiences with RU486 as an abortifacient, with the following two exceptions: (1) these patients are less likely to be compliant and so might report taking the drug without doing so and (2) there are conflicting reports re: methadone having effects on heart rhythm (this is odd) and that combined with mifepristone this might cause serious arrhythmia.

        In short, it would seem that Mifegymiso could slow the metabolism of methadone for a period of time and thus, methadone levels could be slightly higher.
        `
				]
			}
		},
		{
			id: 'S1',
			title: 'Checklists and Resource Guides',
			content: {
				type: ['p'],
				data: [
					`<b>Checklist for starting medical abortion services</b>, 
					National Abortion Federation.
					Link: naf-checklist(https://www.prochoice.org/pubs_research/publications/downloads/professional_education/medical_abortion/checklist_starting_services.pdf)
					
					<b>Medical abortion prescriber checklist resource guide</b>, 
					Planned Parenthood, the University of British Columbia & CART Access Project.
					Link: ma-resource-guide(https://caps-cpca.ubc.ca/AnnokiUploadAuth.php/8/8b/Medical_Abortion_Prescriber_Checklist_Resource_Guide.pdf)
					
					<b>Medical abortion prescriber checklist</b>, 
					Planned Parenthood, the University of British Columbia & CART Access Project.
					Link: ma-checklist(https://caps-cpca.ubc.ca/AnnokiUploadAuth.php/a/af/Medical_Abortion_Prescriber_Checklist.pdf)`
				]
			}
		},
		{
			id: 'S2',
			title: 'Training and Webinars',
			content: {
				type: ['p'],
				data: [
					`<b>SOGC’s medical abortion training program</b>, 2024
					Link: sogc-training(https://www.sogc.org/en/rise/Events/event-display.aspx?EventKey=MATP2)
					
					<b>NAF Canada’s medication abortion training for primary care providers</b>, 2023
					Link: nafc-training(https://nafcanada.org/medication-abortion-virtual-course/)`
				]
			}
		},
		{
			id: 'S3',
			title: 'Product Monographs, Guidelines and Protocols',
			content: {
				type: ['p'],
				data: [
					`<b>Health Canada MIFISO product monograph</b>, 2022
					Linepharma International Limited
					Link: hres.ca()

					<b>Medical abortion</b>, 2016
					Journal of Obstetrics and Gynaecology Canada
					Link: sogc-ma()

					<b>Canadian protocol for the provision of medical abortion via telemedicine</b>, 2020
					Society of Obstetrics and Gynaecology Canada
					Link: sogc-telemedicine()

					<b>Induced abortion: updated guidance during pandemics and periods of social disruption</b>, 2020
					Society of Obstetrics and Gynaecology Canada
					Link: sogc-guidance()

					<b>NAF Protocol for early abortion with mifepristone and misoprostol</b>, 2016
					National Abortion Federation Canada
					Link: nafc-protocol()

					<b>Society of Family Planning committee – Consensus on Rh testing in early pregnancy</b>, 2022
					Horvath S, Goyal V, Traxler S, Prager S. Contraception. 2022 Oct;114:1-5
					Link: sfp-guideline()

					<b>Client information about evidence-based telemedicine medication abortion</b>, 2020
					Women’s College Hospital
					Link: wch()

					<b>Abortion care guideline</b>, 2022
					World Health Organization
					Link: who-guideline()`
				]
			}
		},
		{
			id: 'S4',
			title: 'Consent Form samples',
			content: {
				type: ['p'],
				data: [
					`<b>Informed consent for mifepristone / misoprostol abortion in Canada</b>
					The CART Access Project
					
					<b>Consent to medical abortion</b>, 2017
					Planned Parenthood Ottawa and the SHORE Centre`
				]
			}
		},
		{
			id: 'S5',
			title: 'Patient Resources',
			content: {
				type: ['p'],
				data: [
					`<b>It’s My Choice</b>, 2024
					An interactive tool to help people choose between medication and procedural abortion
					Link: its-my-choice(https://www.sexandu.ca/its-my-choice/)

					<b>How to decide between medication and procedural Abortion</b>, 2024
					CART-GRAC and the Society of Obstetricians and Gynaecologists of Canada

					<b>Administration instruction</b>, 2024
					CART-GRAC and the Society of Obstetricians and Gynaecologists of Canada

					<b>How to manage side effects of medication abortion</b>, 2024
					CART-GRAC and the Society of Obstetricians and Gynaecologists of Canada

					<b>Post-abortion contraception options</b>, 2024
					CART-GRAC and the Society of Obstetricians and Gynaecologists of Canada

					<b>What to expect when ending a pregnancy at home</b>, 2023
					Canadian Pharmacists Association & The CART Access Project
					Link: cpha-what-to-expect(https://www.pharmacists.ca/cpha-ca/assets/File/education-practice-resources/SRH/SRH_OnePager_MedicationAbortion_EN.pdf)

					<b>What to expect during a medical abortion</b>, 2017
					Planned Parenthood Ottawa and the SHORE Centre

					<b>Medication abortion instruction</b>, 2017
					Planned Parenthood Ottawa and the SHORE Centre

					<b>Mifegymiso medication guide</b>
					Celopharma`
				]
			}
		},
		{
			id: 'S6',
			title: 'Toolkits for Addressing Abortion Concerns',
			content: {
				type: ['p'],
				data: [
					`<b>Debunking medication abortion myths</b>, 2023
					Canadian Pharmacists Association & The CART Access Project
					Link: cpha-debunking-myth(https://www.pharmacists.ca/cpha-ca/assets/File/education-practice-resources/SRH/SRH_Myths_and_Facts_EN.pdf)

					<b>The abortion options: A value clarification guide for health care professionals</b>, 2005
					National Abortion Federation
					Link: naf-value-clarification(https://prochoice.org/store/the-abortion-option-a-values-clarification-guide-for-health-professionals/)

					<b>Integrating early abortion services into primary care</b>, 2019
					Reproductive Health Access Project
					Link: rhap-abortion(https://www.reproductiveaccess.org/wp-content/uploads/2014/12/integrating_abortion.pdf)

					<b>Value clarification workshop</b>, 2022
					Reproductive Health Access Project
					Link: rhap-workshop(https://www.reproductiveaccess.org/resource/values-clarification-workshop/)`
				]
			}
		},
		{
			id: 'S7',
			title: 'Toolkits for Supporting Underserved Communities',
			content: {
				type: ['p'],
				data: [
					`
						<b>A handbook for healthcare providers working with clients from diverse communities</b>, 2019
						Action Canada for Sexual Health & Rights
						Link: action-canada-handbook(https://www.actioncanadashr.org/sites/default/files/2019-04/ActionCanadaSHR-SRH2017-Handbook-EN.pdf)

						<b>The Indigenous ally toolkit</b>, 2018
						Montreal Urban Aboriginal Community Strategy Network
						Link: ally-toolkit(https://www.segalcentre.org/common/sitemedia/201819_Shows/ENG_AllyTookit.pdf)

						<b>Norma Scarborough Fund, a travel fund for those who need access to abortion</b>
						Link: norma-scarborough-action-canada(https://secure.actioncanadashr.org/en/form/norma-scarborough-fund)

						<b>Patient Assistance Fund for those who need access to abortion</b> (1-800-722-9100)
						Link: patient-assistance-fund-naf(https://nafcanada.org/about/contact-us/)`
				]
			}
		},
		{
			id: 'S8',
			title: 'Checklists and Resource Guides',
			content: {
				type: ['p'],
				data: [
					`<b>A road map for all pharmacists</b>, 2023
					Canadian Pharmacists Association & The CART Access Project
					Link: cpha-roadmap()

					<b>Pharmacist resource guide for medical abortion</b>, 2018
					Judith Soon & Nevena Rebic; The CART Access Project
					Link: cart-resourceguide()

					<b>Pharmacist checklist for medical abortion</b>, 2018
					Judith Soon & Nevena Rebic; The CART Access Project
					Link: cart-checklist()`
				]
			}
		},
		{
			id: 'S9',
			title: 'Training and Webinars',
			content: {
				type: ['p'],
				data: [
					`<b>SOGC’s medical abortion training program</b>, 2024
					Link: sogc-training()

					<b>NAF Canada’s medication abortion training for primary care providers</b>, 2023
					Link: nafc-training()

					<b>Case-based quizzes on medication abortion for pharmacists</b>
					Link: pharmacy5in5()`
				]
			}
		},
		{
			id: 'S10',
			title: 'Product Monographs, Guidelines and Protocols',
			content: {
				type: ['p'],
				data: [
					`<b>Health Canada MIFISO product monograph</b>, 2022
					Linepharma International Limited
					Link: hres.ca()

					<b>Medical abortion</b>, 2016
					Journal of Obstetrics and Gynaecology Canada
					Link: sogc-ma()

					<b>Canadian protocol for the provision of medical abortion via telemedicine</b>, 2020
					Society of Obstetrics and Gynaecology Canada
					Link: sogc-telemedicine()

					<b>Induced abortion: updated guidance during pandemics and periods of social disruption</b>, 2020
					Society of Obstetrics and Gynaecology Canada
					Link: sogc-guidance()

					<b>NAF Protocol for early abortion with mifepristone and misoprostol</b>, 2016
					National Abortion Federation Canada
					Link: nafc-protocol()

					<b>Abortion care guideline</b>, 2022
					World Health Organization
					Link: who-guideline()`
				]
			}
		},
		{
			id: 'S11',
			title: 'Posters and Patient Materials',
			content: {
				type: ['p'],
				data: [
					`<b>Posters for pharmacies</b>, 2023
					Canadian Pharmacists Association & The CART Access Project
					Link: cpha-poster()

					<b>What to expect when ending a pregnancy at home</b>, 2023
					Canadian Pharmacists Association & The CART Access Project
					Link: cpha-what-to-expect()

					<b>How to decide between medication and procedural Abortion</b>, 2024
					CART-GRAC and the Society of Obstetricians and Gynaecologists of Canada

					<b>Administration instruction</b>, 2024
					CART-GRAC and the Society of Obstetricians and Gynaecologists of Canada

					<b>How to manage side effects of medication abortion</b>, 2024
					CART-GRAC and the Society of Obstetricians and Gynaecologists of Canada

					<b>Post-abortion contraception options</b>, 2024
					CART-GRAC and the Society of Obstetricians and Gynaecologists of Canada

					<b>What to expect during a medical abortion</b>, 2017
					Planned Parenthood Ottawa and the SHORE Centre
					Link: ppo-what-to-expect()

					<b>Medical abortion instruction</b>, 2017
					Planned Parenthood Ottawa and the SHORE Centre
					Link: ppo-ma-instruction()

					<b>Mifegymiso medication guide</b>
					Celopharma
					Link: medication-guide()`
				]
			}
		},
		{
			id: 'S12',
			title: 'Toolkits for Addressing Abortion Concerns',
			content: {
				type: ['p'],
				data: [
					`<b>Debunking medication abortion myths</b>, 2023
					Canadian Pharmacists Association & The CART Access Project
					Link: cpha-debunking-myth()

					<b>The Abortion options: A value clarification guide for health care professionals</b>, 2005
					National Abortion Federation
					Link: naf-value-clarification()

					<b>Integrating early abortion services into primary care</b>, 2019
					Reproductive Health Access Project
					Link: rhap-abortion()

					<b>Value clarification workshop</b>, 2022
					Reproductive Health Access Project
					Link: rhap-workshop()`
				]
			}
		},
		{
			id: 'S13',
			title: 'Toolkits for Supporting Underserved Communities',
			content: {
				type: ['p'],
				data: [
					`<b>A handbook for healthcare providers working with clients from diverse communities</b>, 2019
					Action Canada for Sexual Health & Rights
					Link: action-canada-handbook()

					<b>The Indigenous ally toolkit</b>, 2018
					Montreal Urban Aboriginal Community Strategy Network
					Link: ally-toolkit()

					<b>Norma Scarborough Fund, a travel fund for those who need access to abortion</b>
					Link: norma-scarborough-action-canada()

					<b>Patient Assistance Fund for those who need access to abortion</b> (1-800-722-9100)
					Link: patient-assistance-fund-naf()`
				]
			}
		},
		{
			id: 'S14',
			title: 'About Medication Abortion',
			content: {
				type: ['p'],
				data: [
					`<b>Update on medical abortion</b>, 2020
					Bancsi A & Grindrod K; Canadian Family Physician
					Link: cfp-ma()

					<b>Early abortion options</b>, 2022
					Reproductive Health Access Project
					Link: rhap-abortion-options()

					<b>Accessing abortion in Canada</b>
					Wellness Within
					Link: wellness-within()`
				]
			}
		},
		{
			id: 'S15',
			title: 'Locating Providers of Medication Abortion',
			content: {
				type: ['p'],
				data: [
					`<b>Find medication abortion services portal</b>
					Action Canada for Sexual Health and Rights
					Link: find-services()

					<b>List of abortion clinics</b>
					Action Canada for Sexual Health and Rights
					Link: arcc-abortion-clinics()

					<b>Choice Connect Abortion Referral App</b>
					Link: choice-connect()`
				]
			}
		},
		{
			id: 'S16',
			title: 'Guides for Managing Medication Abortion at Home',
			content: {
				type: ['p'],
				data: [
					`<b>What to expect when ending a pregnancy at home</b>, 2023
					Canadian Pharmacists Association & The CART Access Project
					Link: cpha-what-to-expect()

					<b>What to expect during a medical abortion</b>, 2017 
					Planned Parenthood Ottawa and the SHORE Centre
					Link: ppo-what-to-expect()

					<b>Medical abortion instruction</b>, 2017 
					Planned Parenthood Ottawa and the SHORE Centre
					Link: ppo-ma-instruction()

					<b>Mifegymiso medication guide</b>
					Celopharma
					Link: medication-guide()`
				]
			}
		},
		{
			id: 'S17',
			title: 'Talk-lines for Post-Abortion Emotional Support',
			content: {
				type: ['p'],
				data: [
					`<b>Norma Scarborough Fund, a travel fund for those who need access to abortion</b>
					Link: norma-scarborough-action-canada()

					<b>Patient Assistance Fund for those who need access to abortion</b> (1-800-722-9100)
					Link: patient-assistance-fund-naf()
					
					<b>Exhale, a talk-line that provides emotional support, resources and information after abortion</b>
					Link: exhale()

					<b>All-Options</b>, a talk-line to discuss past or current experience with abortion, adoption and parenting for people in Canada and the United States</b> (1-888-493-0092).
					Link: all-options()

					<b>Regina Abortion Support Network (RASN) for abortion access in southern Saskatchewan</b> (1-306-517-2558)
					Link: rasn()

					<b>Saskatoon Abortion Support Network by abortion doulas</b>
					Link: sasn()`
				]
			}
		},
		{
			id: 'S18',
			title: 'Toolkits for Addressing Abortion Concerns',
			content: {
				type: ['p'],
				data: [
					`<b>Debunking medication abortion myths</b>, 2023
					Canadian Pharmacists Association & The CART Access Project
					Link: cpha-debunking-myth()

					<b>The Abortion options: A value clarification guide for health care professionals</b>, 2005
					National Abortion Federation
					Link: naf-value-clarification()

					<b>Integrating early abortion services into primary care</b>, 2019
					Reproductive Health Access Project
					Link: rhap-abortion()

					<b>Value clarification workshop</b>, 2022
					Reproductive Health Access Project
					Link: rhap-workshop()`
				]
			}
		},
		{
			id: 'S19',
			title: 'Toolkits for Supporting Underserved Communities',
			content: {
				type: ['p'],
				data: [
					`<b>A handbook for healthcare providers working with clients from diverse communities</b>, 2019
					Action Canada for Sexual Health & Rights
					Link: action-canada-handbook()

					<b>The Indigenous ally toolkit</b>, 2018
					Montreal Urban Aboriginal Community Strategy Network
					Link: ally-toolkit()`
				]
			}
		}
	],
	fr: [
		{
			id: 'M1',
			title: 'Mécanisme d’action',
			content: {
				type: ['p', 'i-full'],
				data: [
					`Au Canada, la pilule abortive est emballée et vendue sous le nom de Mifé-Miso. Le Mifé-Miso est présenté comme une boîte extérieure blanche contenant deux plus petites boîtes: une boîte verte contenant 200 mg de mifépristone (MIFE) et une boîte orange contenant 800 mcg de misoprostol (MISO) (quatre petits comprimés de 200 mcg chacun)[10].

          La MIFÉ est un modulateur des récepteurs de la progestérone. C’est un puissant antiprogestatif qui présente également de fortes propriétés antiglucocorticoïdes et de faibles propriétés anti-androgènes. Il bloque les récepteurs de la progestérone en début de grossesse, entraînant une dégénérescence de l’endomètre, la synthèse de prostaglandines et une diminution de la sécrétion de bêta-gonadotrophine chorionique humaine (βhCG). Ces événements favorisent la dilatation cervicale et facilitent le début des saignements[10].

          Le MISO est un puissant analogue synthétique de la prostaglandine E1 qui induit la maturation cervicale et les contractions utérines, provoquant l’expulsion des produits de conception[10].

          Cliquez ici pour télécharger la [monographie du produit](C17-2).`,
					assets.FrMifegymisoOverview
				]
			}
		},
		{
			id: 'M2',
			title: 'Efficacité et sécurité',
			content: {
				type: ['h2', 'ul', 'h2', 'ul'],
				data: [
					'Efficacité:',
					`Le MIFÉ / MISO est <b>très efficace</b>. Le risque de poursuite de la grossesse est de 0,9 % pour les grossesses jusqu’à 49 jours d’âge gestationnel et de 3,1 % pour les grossesses jusqu’à 70 jours d’âge gestationnel[10].
          Selon le protocole de la SOGC pour l’avortement médicamenteux par télémédecine, la personne doit prendre une première dose de MISO par voie buccale ou vaginale <b>24 à 48 heures</b> après avoir pris de la MIFÉ[7].
          De plus, les personnes dont l’âge gestationnel est de 63 jours ou moins doivent prendre <b>la deuxième dose de</b> MISO si aucun saignement ne survient dans les 24 heures suivant la première dose de MISO ou selon les instructions du clinicien. Les personnes dont l’âge gestationnel est supérieur à 63 jours doivent prendre une deuxième dose de MISO 4 heures après la première dose[7].`,
					'Effets secondaires et complications[10]:',
					`<b>Très fréquent (≥ 10 %):</b> nausées, vomissements, diarrhée, étourdissements, maux de tête, frissons/fièvre, faiblesse, fatigue, inconfort gastrique, douleurs abdominales, saignements vaginaux, microrragies, contractions ou crampes utérines.
          <b>Fréquent (1-10 %):</b> évanouissement, crampes gastro-intestinales légères ou modérées, saignements post-avortement prolongés, endométrite, sensibilité des seins, saignements abondants (pouvant ou non nécessiter un avortement par instruments).
          <b>Peu fréquent (0,1-1 %):</b> arythmie, choc hémorragique, salpingite, saignements abondants nécessitant des liquides IV ou une transfusion sanguine, infection, bouffées de chaleur, hypotension, bronchospasme, éruption cutanée / prurit.`
				]
			}
		},
		{
			id: 'M3',
			title: 'Indications et contre-indications',
			content: {
				type: ['h2', 'p', 'h2', 'ul', 'h2', 'p', 'h2', 'p', 'h2', 'p'],
				data: [
					'Indication:',
					`MIFE / MISO est indiqué par [Santé Canada](C17-2) pour l’interruption de grossesse jusqu’à 63 jours à compter de la date de début des dernières menstruations (DDM) dans un cycle présumé de 28 jours. La SOGC indique une utilisation sécuritaire jusqu’à <b>70 jours</b> des DDM. Il n’y a pas de limite inférieure absolue d’âge gestationnel[5].`,
					'Contre-indications[6]:',
					`Grossesse ectopique
          Insuffisance surrénalienne chronique
          Porphyrie héréditaire
          Asthme incontrôlé
          Trouble hémorragique ou traitement anticoagulant concomitant
          Anémie (taux d’Hb < 95 g/L)
          Corticothérapie systémique au long cours
          Allergies ou hypersensibilité aux ingrédients du produit
          DIU in situ (n’est plus une contre-indication une fois retiré)
          Maladies systémiques graves telles que maladies du foie, maladies cardiaques, insuffisance rénale et troubles épileptiques (ces maladies doivent être évaluées individuellement)
          Âge gestationnel incertain
          Incertitude décisionnelle`,
					'Allaitement[6]:',
					`Le MISO oral est excrété dans le lait maternel en petites quantités qui sont rapidement éliminées. Aucune interruption de l’allaitement n’est nécessaire lorsque le MISO est administré par quelque voie que ce soit.`,
					'Âge gestationnel > 63 jours',
					`La [Société des Obstétriciens et Gynécologues du Canada](C31) et la [National Abortion Federation (NAF)](C6) approuvent toutes deux l’avortement par médicaments (AM) avec MIFÉ / MISO jusqu’à 70 jours après la LMP. Elles recommandent également une deuxième dose de MISO 800mcg quatre heures après la première dose de MISO 800mcg pour augmenter l’efficacité de l’AM[5,13].

          La Société des Obstétriciens et Gynécologues du Canada recommande également un régime MIFÉ / MISO à partir de 70 à 84 jours d’âge gestationnel, avec 200 mg de mifépristone suivi dans 24 à 48 heures de deux doses de 800 mcg de MISO (buccale ou vaginale), à 4 heures d’intervalle.

          L’efficacité diminue à mesure que l’âge gestationnel approche 70 jours. Les prescripteurs doivent informer les personnes qu’il s’agit d’une utilisation non conforme, qu’il existe une possibilité d’expulsion et d’observation un fœtus intact et qu’il existe des taux plus élevés de saignements et d’avortement incomplet ou échoué.`,
					'Personnes âgées de 15 à 18 ans',
					`Les données sont insuffisantes pour établir l’efficacité et la sécurité chez les personnes de moins de 15 ans. Cependant, chez les personnes âgées de 15 à 18 ans, la sécurité et l’efficacité ont été démontrées avec des vomissements et des douleurs étant rapportés plus fréquemment que chez les adultes.[11]. Ainsi, les considérations particulières pour les personnes de cette tranche d’âge peuvent inclure du counseling pour les préparer aux vomissements et à la douleur, ainsi qu’un soutien psychosocial tout au long du processus d’avortement par médicaments.`
				]
			}
		},
		{
			id: 'M5',
			title: 'Counseling pré-avortement',
			content: {
				type: ['p', 'h2', 'ul', 'p', 'ul'],
				data: [
					`Le counseling est important pour s’assurer que les personnes comprennent leurs options, les risques et les avantages de chacune, et pour prendre des décisions éclairées. Le counseling aide également les prescripteurs à comprendre les préférences et les circonstances des personnes afin de recommander la meilleure démarche à suivre.`,
					'Les points clés du counseling comprennent[4,6]:',
					`<b>Examiner les options de grossesse</b>  lorsque cela est indiqué: avortement, devenir parent ou confier l’enfant en adoption.
        Adapter le counseling aux besoins de la personne (par exemple contrer la stigmatisation de l’avortement et/ou fournir un soutien émotionnel).
        Communiquer les risques liés à la progression de la grossesse sans exercer de pression temporelle à la personne.
        <b>Utilisez un langage sans jugement et inclusif</b>.`,
					'<i>(Si le choix est l’avortement:)</i>',
					`Examiner les <a href="#M6" class="in">options d’avortement</a>, y compris les risques, l’efficacité, le processus et la durée du traitement par médicaments par rapport à l’avortement par instruments.
          <b>Discuter de l’éligibilité de la personne à l’avortement par médicaments</b>, y compris l’âge gestationnel et les antécédents médicaux.
          <b>Discuter de l’accès de la personne aux pharmacies, au téléphone, aux transports, aux soins d’urgence, ainsi qu’aux installations de laboratoires et d’imagerie</b> si nécessaire.
          Discuter des <a href="#M6" class="in">préférences et des circonstances de la personne</a>, comme par exemple un endroit sécuritaire à leur domicile pour réaliser l’avortement par médicaments.
          Confirmer que la décision appartient à la personne, prise librement.
          Confirmer que la personne comprend que <b>l’avortement par médicaments est irréversible</b> et qu’elle devra prendre une dose supplémentaire du deuxième médicament ou procéder à un avortement par instruments en cas d’échec (poursuite de la grossesse).
          Revoir le calendrier des examens (échographie, prises de sang, si nécessaire), des médicaments et des rendez-vous de suivi.
          Discuter des <a href="evaluation-post-avortement#M20" class="in" target="_blank">options de contraception post-avortement</a>.`
				]
			}
		},
		{
			id: 'M6',
			title: 'Options d’avortement',
			content: {
				type: ['p', 'ul', 'p', 'ul', 'i-full'],
				data: [
					'<b>L’avortement par médicaments</b> convient aux personnes qui[6]:',
					`Préfèrent une méthode non-invasive.
          Préfèrent être dans le confort de leur foyer.
          Ont la confiance de pouvoir gérer le processus et les effets secondaires à la maison.
          Sont en mesure de prendre 1 à 3 jours de congé ou d’autres responsabilités pour procéder à l’avortement.
          Manquent de transport pour se rendre à la clinique pour un avortement par instruments (mais ont néanmoins accès aux services d’urgence en cas de complications).`,
					'<b>L’avortement par instruments</b> convient aux personnes qui[6]:',
					`Préfèrent bénéficier du soutien en personne ainsi qu’une surveillance par des professionnels de la santé en clinique ou à l’hôpital.
          Souhaitent que l’avortement soit fourni rapidement afin de pouvoir reprendre le travail ou d’autres responsabilités.
          Se sentent à l’aise avec l’examen gynécologique et l’utilisation d’instruments médicaux.
          Sont confortables avec une anesthésie locale ou générale pour gérer la douleur.
          Ne veulent pas divulguer la grossesse et l’avortement aux personnes avec qui elles vivent (comme les partenaires, les colocataires, les collègues de travail), car il pourrait être difficile de cacher des saignements abondants et des crampes fortes.`,
					assets.FrAbortionOptions
				]
			}
		},
		{
			id: 'M14',
			title: 'Consentement éclairé',
			content: {
				type: ['p', 'olul'],
				data: [
					'Une fois que la personne et le professionnel de la santé ont déterminé que l’avortement par médicaments (AM) est la bonne option, le professionnel de la santé devrait[2,6,7,10]:',
					[
						`<b>Obtenir un consentement éclairé écrit ou verbal</b> (voir exemples sur [la plateforme CAPS-CPCA](C78) et le [Bay Center for Birth Control](C83)) et le documenter dans le dossier de la personne.
          <b>Prescrire:</b>`,
						`Mifépristone 200 mg (MIFÉ) par voie orale et misoprostol 800 mcg (MISO) par voie buccale ou vaginale (cette combinaison est commercialisée et marquée sous le nom de Mifé-Miso).
          Dose supplémentaire de MISO par voie buccale ou vaginale en cas d’avortement incomplet.
          Analgésiques et antiémétiques selon le protocole du professionnel de la santé ou de l’établissement.
          Antibioprophylaxie, si nécessaire, selon le protocole du professionnel de la santé ou de l’établissement.`,
						`Fournir des instructions sur <a href="counseling-de-la-personne#M15" class="in" target="_blank">la façon de prendre le médicament</a>.
          S’assurer que les personnes savent <a href="counseling-de-la-personne#M16" class="in" target="_blank">comment gérer les effets secondaires</a> ainsi que quand et où consulter en cas de complications.
          Envisager d’informer les personnes si la procédure d’AM implique des pratiques hors normes mais fondées sur des preuves.`,
						`Une grande partie des pratiques hors normes d’AM sont basées sur une faible quantité de ressources et nécessite un équilibre entre l’expérience des professionnels de la santé et la sécurité et les besoins des personnes qui ont recours à un avortement.
          Il est recommandé d’informer les personnes des pratiques hors normes afin de comprendre les risques associés et savoir que ces pratiques hors normes peuvent varier en fonction de l’expérience et du niveau de confort des prescripteurs.`,
						`Discuter des options de contraception après un avortement. <b>Souligner le fait que les personnes peuvent rapidement retrouver leur fertilité après un avortement</b>.
          <b>Planifier des rendez-vous de suivi, soit en personne, soit par téléphone/vidéo</b>. Discuter d’un plan de sécurité ou de confidentialité si nécessaire.
          Fournir aux personnes des manuels d’instructions (voir des exemples: [SHORE center et Planned Parenthood Ottawa](C73)) ainsi que les coordonnées des professionnels de santé et des services de santé d’urgence.
          Prendre note des numéros de téléphone et des contacts d’urgence fournis en lien avec l’AM par la personne au cas où les professionnels de la santé ne seraient pas en mesure de la joindre directement. Se rappeler que les contacts d’urgence fournis par les personnes lors de leurs visites d’AM peuvent être différents des contacts d’urgence figurant dans le dossier. Veiller à ne contacter aucune autre personne sans son consentement explicite en lien avec l’AM.`
					]
				]
			}
		},
		{
			id: 'M15',
			title: 'Instructions d’administration',
			content: {
				type: ['i-full'],
				data: [assets.FrAdminInstructions]
			}
		},
		{
			id: 'M33',
			title: 'Doses manquées',
			content: {
				type: ['p', 'h2', 'ul', 'h2', 'ul', 'p'],
				data: [
					`La MIFÉ et le MISO sont tous deux tératogènes et ont été associés à des anomalies fœtales. Une fois le traitement MIFÉ / MISO débuté, il existe un risque d’embryotoxicité si la grossesse n’est pas interrompue[10].

          Si le MISO est oublié et que > 48 heures se sont écoulées depuis la MIFÉ: prendre immédiatement le MISO et informer le professionnel de la santé lors du suivi[10].`,
					'Administration buccale de MISO[10]',
					`Si des vomissements surviennent < 1 heure après la prise de MIFÉ ou lors de l’absorption buccale du MISO: Contacter un professionnel de la santé / pharmacien pour une évaluation.
          Si des vomissements surviennent > 30 minutes après l’ingestion de fragments de MISO: Aucune action n’est requise.`,
					'Insertion vaginale de MISO[10]',
					`Si les comprimés tombent avant le début des saignements: Réinsérer le comprimé ou contacter un professionnel de la santé, s’il est impossible de le réinsérer.
          Si les comprimés sortent lors des saignements: Aucune action n’est nécessaire ; dans la plupart des cas, une portion suffisante du médicament aura été absorbée.`,
					'Dans tous les cas, si les saignements ne démarrent pas au bout de quelques heures, contacter un professionnel de la santé.'
				]
			}
		},
		{
			id: 'M16',
			title: 'Gestion des effets secondaires',
			content: {
				type: ['i-full'],
				data: [assets.FrSideEffects]
			}
		},
		{
			id: 'M8',
			title: 'Dépistage de base',
			content: {
				type: ['p'],
				data: [
					`Les antécédents médicaux doivent être évalués pour déterminer l’âge gestationnel, évaluer les contre-indications et identifier les précautions supplémentaires. Les antécédents fournissent également une base de référence pour le suivi et aident à déterminer les options de contraception appropriées et si des tests supplémentaires sont nécessaires[6].

          Les signes vitaux de base et l’examen pelvien devraient être effectués en fonction des antécédents. Les pratiques peuvent varier[6].`
				]
			}
		},
		{
			id: 'M9',
			title: 'Détermination de l’âge gestationnel',
			content: {
				type: ['p'],
				data: [
					`Un test urinaire positif à la bêta-gonadotrophine chorionique humaine (βhCG) est suffisamment sensible pour confirmer une grossesse[6].

        <b>Échographie:</b> L’échographie est la mesure la plus précise de l’âge gestationnel (AG), mais ne constitue pas une exigence de routine, sauf si la personne n’est pas certaine de la date de ses dernières menstruations (DDM) (ou s’il existe des symptômes et des facteurs de risque de grossesse ectopique, comme expliqué, ci-dessous). Il est recommandé de choisir une clinique d’échographie dont le personnel offre des échographies sans jugement[6].

        <b>Antécédents médicaux:</b> Si la personne est certaine de la date de ses dernières menstruations (DDM) et si elle a eu des menstruations régulières sans utilisation récente de contraception hormonale, l’estimation de l’AG en fonction de sa date serait étroitement corrélée aux résultats de l’échographie[6].

        <b>Examen gynécologique:</b> Au premier trimestre, la détermination de l’AG par un examen bimanuel a été démontrée comme précise à deux semaines près de l’AG déterminée par échographie; cependant, la précision varie en fonction de l’expérience du technicien, de la quantité de tissu adipeux et de la présence de fibromes[6].

        <b>Test βhCG:</b> Le taux de βhCG augmente de manière linéaire au cours des 6 premières semaines de grossesse mais varie fortement par la suite et limite son utilité pour la datation[6].`
				]
			}
		},
		{
			id: 'M10',
			title: 'Grossesse ectopique',
			content: {
				type: ['left', 'p', 'ul', 'p'],
				data: [
					assets.Ectopic,
					`<b>La grossesse ectopique (GE) est rare. Elle survient dans 1 ou 2 grossesses sur 100 dans la population générale et le taux est systématiquement plus faible chez les personnes qui ont reours à l’avortement. Il est recommandé de prescrire une échographie aux personnes qui présentent des facteurs de risque, des signes ou des symptômes de GE.[6].</b>


        <b>Les principaux facteurs de risque, signes et symptômes de la GE comprennent</b>[6]:`,
					`Grossesse ectopique (GE) antérieure.
          Dispositif intra-utérin (DIU) en place.
          Recours à des techniques de procréation assistée.
          Chirurgie antérieure des trompes de Fallope telle que ligature des trompes.
          Antécédents de salpingite ou de maladie inflammatoire pelvienne.
          Symptômes de douleurs abdominales et de saignements vaginaux.`,
					`<b>Les grossesses multiples</b> ne constituent pas une contre-indication à l’avortement par médicaments (AM), cependant la présence d’une grossesse multiple doit être communiquée à la personne si elle accepte d’obtenir des informations sur la grossesse[6].

        <b>Les avortements manqués et incomplets</b> doivent également être divulgués aux personnes si elles acceptent d’obtenir des informations échographiques et doivent être gérés soit par AM, soit par avortement par instruments[6].

        En cas de <b>grossesse môlaire</b>, une consultation, une analyse histologique des produits de conception et une surveillance des niveaux de βhCG sont essentiels avant l’avortement par instruments. L’AM n’est pas appropriée.[6].`
				]
			}
		},
		{
			id: 'M11',
			title: 'Grossesse de localisation indéterminée',
			content: {
				type: ['p', 'ul', 'p', 'ul'],
				data: [
					`Les personnes qui ont une grossesse de localisation indéterminée (GLI) et demandent un avortement par médicaments (AM) doivent bénéficier d’un avortement sans délai, à condition qu’elles ne présentent aucun symptôme clinique de grossesse ectopique (GE). L’incapacité d’identifier une grossesse intra-utérine ne devrait pas retarder l’AM[6].

          <b>Si le taux de βhCG sérique est > 2000 UI/L et qu’aucun sac gestationnel intra-utérin n’est visualisé à l’échographie</b>[6]:`,
					`Une évaluation plus approfondie est nécessaire.`,
					`<b>En l’absence de facteurs de risque de GE, si le taux de βhCG est ≤ 2 000 UI/L ou si un sac gestationnel probable est présent sans vésicule vitelline ni pôle fœtal</b>[6]:`,
					`Les personnes peuvent recevoir un AM.
          Lorsque ces personnes reçoivent un AM, elles doivent être informées des risques et des symptômes de GE, ainsi que la personne à contacter en cas d’urgence.
          Un suivi de la βhCG dans les 7 jours est recommandée en cas de GLI. Une réduction de 50 % est attendue 3 jours après l’administration de MIFÉ (ou 24 à 48 heures après le MISO) ou de 80 % entre 7 et 14 jours après l’administration de MIFÉ / MISO; sinon, la possibilité d’une GE doit être éliminée.`
				]
			}
		},
		{
			id: 'M12',
			title: 'Dépistage du statut Rh',
			content: {
				type: ['p'],
				data: [
					`Les lignes directrices sur le dépistage du Rh ont été mises à jour.

          Selon les lignes directrices de la SOGC sur la prévention de l’allo-immunisation RhD publiées en 2024, l’administration de 300 μg d’immunoglobuline Rho(D) est suggérée aux personnes Rh D-négatives non sensibilisées qui ont subi une menace d’avortement, un avortement spontané ou provoqué <b>après 12 semaines de gestation</b>.

          Auparavant, en 2022, la [Society of Family Planning](SFP1) et [l’Organisation mondiale de la santé (OMS)](WHO1) ont également recommandé de suspendre le test et l’administration du Rh avant 12 semaines de gestation pour les personnes subissant un avortement par médicaments (AM), un avortement spontané ou un avortement par aspiration utérine[8,20].`
				]
			}
		},
		{
			id: 'M13',
			title: 'Anémie, ITSS et autres',
			content: {
				type: ['i-full'],
				data: [assets.FrAnemiaSTI]
			}
		},
		{
			id: 'M17',
			title: 'Suivi post-avortement',
			content: {
				type: ['p', 'h2', 'i-full', 'p', 'ul'],
				data: [
					`Un rendez-vous de suivi est nécessaire pour confirmer la fin de la grossesse, gérer les complications, discuter de la contraception et et offrir un soutien émotif, si requis.`,
					'<b>Mode de suivi:</b>',
					assets.FrPostabortionFollowup,
					`<b>Soutien émotionnel</b>[6]:  Les réponses émotionnelles après l’AM varient. Certaines personnes se sentent soulagées et positives, tandis que d’autres éprouvent des sentiments de chagrin, de tristesse ou de culpabilité, et d’autres encore ont des sentiments mitigés. Ces émotions sont normales et peuvent ou non être liées aux circonstances socio-économiques, au manque de soutien social, au malaise moral et aux conflits familiaux.

          Les personnes peuvent être soutenus en affirmant que les émotions mitigées sont normales et en explorant des stratégies d’adaptation et de soutien. Les ressources utiles comprennent:`,
					`Exhale, une ligne téléphonique qui fournit un soutien émotionnel, des ressources et des informations après un avortement.
          All-Options, une ligne de discussion pour discuter des expériences passées ou actuelles en matière d’avortement, d’adoption et de parentalité pour les personnes au Canada et aux États-Unis (1-888-493-0092).`
				]
			}
		},
		{
			id: 'M18',
			title: 'Évaluation du succès de l’avortement',
			content: {
				type: ['p', 'i-full', 'p', 'ul', 'p'],
				data: [
					`La complétion d’un avortement par médicaments (AM) doit être évaluée par le professionnel de la santé. Selon les circonstances, cela peut être fait en obtenant les antécédents cliniques, une échographie ou un test urinaire ou de βhCG sérique. Cette évaluation peut être effectuée en personne, par téléphone ou par communication électronique en fonction de l’indication clinique et des préférences de la personne et du professionnel de la santé.

        <b>Histoire clinique</b>[6]: L’évaluation de l’expulsion complète basée sur l’histoire médicale est fortement prédictive d’un avortement complet (sensibilité 99,1 %, spécificité 45,5 %). L’absence ou un saignement minime après la prise de MISO, ainsi que la persistance des symptômes de grossesse, suggèrent la poursuite de la grossesse.

        <b>βhCG urinaire</b>[7]:`,
					assets.FrAbortionCompletion,
					`<b>βhCG sérique</b>[3]:`,
					`Une baisse d’au moins 50 % par rapport à la valeur initiale 3 jours après l’administration de MIFÉ (ou 24 et 48 heures après l’administration de MISO) est fortement indicative d’un avortement complet.
          Une baisse de 80% entre 7 et 14 jours après l’administration de MIFÉ / MISO confirme un avortement complet.
          Si la βhCG chute < 80 % entre le jour 7 et le jour 14, on peut prescrire une échographie ou répéter le test dans quelques jours. Une échographie doit être prescrite si 14 jours se sont écoulés et qu'une diminution de 80 % n'a pas été atteinte.`,
					`<b>Échographie</b>[6]: L’échographie fournit une preuve définitive d’un AM complet, <b>mais rien ne prouve que cette technique est supérieure aux autres méthodes.</b> L’échographie est recommandée dans les cas où le résultat est incertain en fonction de l’histoire clinique ou en cas de symptômes tels qu’une douleur inattendue, des saignements abondants prolongés ou insuffisants.`
				]
			}
		},
		{
			id: 'M19',
			title: 'Gestion des complications',
			content: {
				type: ['p', 'ul', 'p', 'ul'],
				data: [
					`<b>Poursuite de la grossesse</b>[6]: La poursuite de la grossesse après un avortement par médicaments (AM) est rare et peut être traitée par une dose répétée de MISO ou par un avortement par instruments. Un avortement par instruments est recommandé si une activité cardiaque est présente de 14 à 21 jours après la prise du MISO.

        <b>Retention des produits de conception</b>[6]: En l’absence d’une grossesse évolutive, la rétention des produits de conception peut être gérée de façon conservatrice (attendre les saignements et les crampes spontanées), par une dose additionnelle de MISO, ou via une aspiration uterine. L’avortement par instruments d’urgence est indiqué en cas de saignements abondants incontrôlés ou d’une infection (endométrite).

        Les symptômes comprennent des saignements abondants ou prolongés, des crampes inattendues, ou des saignements insuffisants suite au MISO.

        <b>Infections post-avortement</b>[6]: Le traitement devrait être individualisé et consiste généralement en une thérapie à large spectre. Dans les cas bénins, des antibiotiques oraux peuvent être utilisés, mais dans le cas d’infection grave, les personnes doivent être hospitalisées pour traitement intraveineux. Une fois que les personnes commencent à prendre des antibiotiques, un avortement par instruments peut être nécessaire pour éliminer les produits de conception retenus.

        Les symptômes des infections post-avortement comprennent`,
					`Douleurs abdominales ou pelviennes
          Pertes vaginales ou cervicales nauséabondes
          Saignements vaginaux prolongés ou microrragie
          Fièvre ou frissons (plus de 24 heures après le MISO
          Sensibilité utérine ou annexielle
          Leucocytose (élévation des globules blans lors d’un examen de laboratoire)`,
					`<b>Syndrome de choc toxique</b>[6]: Le syndrome de choc toxique est associé à Clostridium et au streptocoque du groupe A. La majorité de ces infections sont fulminantes et évoluent rapidement vers le choc. L’antibiothérapie standard n’est pas suffisante. Le traitement consiste en des soins de soutien et un traitement antibiotique empirique couvrant les espèces de Clostridium et d’autres organismes connus pour provoquer un choc toxique, ainsi qu’un débridement chirurgical, y compris une éventuelle hystérectomie.

          Les symptômes du syndrome de choc toxique comprennent`,
					`Malaise général avec nausées, vomissements et diarrhée
          Absence de fièvre (ou fièvre légère)
          Douleurs abdominales minimes
          Faiblesse
          Symptômes pseudo-grippaux
          Tachycardie/hypotension
          Œdème
          Nombre élevé de globules blancs ou taux d’hémoglobine élevé (lors d’un examen en laboratoire)`
				]
			}
		},
		{
			id: 'M20',
			title: 'Contraception post-avortement',
			content: {
				type: ['p', 'ul', 'p', 'i-full'],
				data: [
					`En raison du retour rapide à la fertilité après l’avortement par médicaments (AM), il est conseillé de choisir une méthode contraceptive dès les premières visites[6].

        Les personnes recherchant <b>plus d’informations sur les options de contraception</b> peuvent être orientées vers :`,
					`Ça se planifie du site Le Sexe et moi, un outil d’information santé en ligne pour déterminer la méthode contraceptive appropriée.
          Contraception d’Action Canada pour la santé et les droits sexuels, un site Web des informations sur la contraception au Canada.`,
					`Les options de contraception et les considérations particulières comprennent:`,
					assets.FrPostabortionContraception
				]
			}
		},
		{
			id: 'M21',
			title: 'Étapes initiales',
			content: {
				type: ['p', 'ol'],
				data: [
					`<b>L’avortement par médicaments</b> (AM) virtuel ou hybride, également appelé sans contact ou à faible contact, est une formule dans laquelle certains ou tous les rendez-vous sont effectués virtuellement par téléphone et/ou vidéo en réduisant ou en éliminant les analyses sanguines et les échographies. L’objectif est de réduire le risque pour les personnes de contracter des infections transmissibles (comme dans le cas du COVID-19) ou de réduire la distance à parcourir ou des délais avant d’avoir accès à l’avortement.

          Comme expliqué précédement, les soins virtuels et hybrides de l’AM peuvent être offerts dans un contexte de ressources limitées et nécessitent <b>un équilibre entre l’expérience du prescripteur, la sécurité de la personne et ses besoins</b>.

          Lorsqu’ils reçoivent des demandes d’avortement par médicaments virtuel ou hybride, les prescripteurs doivent[7]:`,
					`Confirmer l’identité de la personne et s’assurer qu’elle peut discuter de façon confidentielle et en sécurité.
          Fournir des informations écrites sur l’avortement par médicaments et l’avortement par instruments avant la consultation.
          Demander de passer un test de grossesse urinaire de pharmacie.
          Planifier une première visite virtuelle par téléphone ou vidéo.`
				]
			}
		},
		{
			id: 'M22',
			title: 'Évaluation virtuelle',
			content: {
				type: ['p', 'olul'],
				data: [
					'Les évaluations suivantes doivent être réalisées[7,19]:',
					[
						`<b>Revoir le counseling sur les options de grossesse.</b>
        <b>Confirmer la grossesse et établir l’âge gestationnel.</b>`,
						`Questionner la date des dernières menstruations (DDM) et la date du test de grossesse qualitatif positif.
            Questionner les antécédents médicaux pertinents, y compris la contraception hormonale récente et les facteurs de risque et signes de grossesse ectopique.`,
						`<b>Exclure les contre-indications</b>.
        <b>Évaluer la nécessité d’une échographie pour déterminer l’âge gestationnel et la localisation de la grossesse</b>[5]:`,
						`Selon le protocole de la SOGC sur l’avortement par médicaments via télémédecine, une échographie doit être obtenue si la date des dernières menstruations (DDM) est incertaine, si la DDM dépasse 70 jours et si les signes, symptômes ou facteurs de risque de grossesse ectopique (GE) sont présents.
            L’avortement par médicaments réalisé en l’absence d’échographie est, par définition, une grossesse de localisation indéterminée (GLI) et doit être géré en conséquence. Bien que le risque de GE non détectée soit faible, une surveillance étroite est nécessaire pour s’assurer que l’avortement est complet.`,
						`<b>Déterminer la nécessité d’analyses sanguines pour mesurer l’hémoglobine</b>[7]:`,
						`Selon Santé Canada, l’hémoglobine doit être supérieure à 9,5 g / dL avant de commencer l’AM.
            Dépister les personnes à risque accru d’anémie via les antécédents médicaux détaillés.
            Si l’on soupçonne un risque accru d’anémie, une formule sanguine complète est indiquée. Sinon, la mesure de l’hémoglobine n’est pas nécessaire.`,
						`<b>Évaluer la nécessité d’analyses sanguines pour déterminer le facteur Rhésus (Rh)</b>[7]:`,
						`Comme expliqué précédement, les lignes directrices sur le facteur Rh ont été mises à jour et varient d’une organisation à l’autre.
            La SOGC recommande la vérification et l’administration des immunoglobulines humaines anti-Rho pour les personnes dont la DDM dépasse 7 semaines. La SOGC conseille également de réserver l’administration lorsque la DDM dépassait 10 semaines pendant la pandémie de COVID-19.
            La Fédération Nationale de l’Avortement (NAF), Society of Family Planning et l’Organisation mondiale de la santé (OMS) recommandent toutes le dépistage et l’administration des immunoglobulines humaines anti-Rho lorsque la DDM dépasse 12 semaines de gestation.`,
						`<b>Évaluer la nécessité de tester les ITSS</b>`,
						`Proposer un dépistage de la chlamydia et de la gonorrhée lorsque la visite est en présentiel.
            Sinon, évaluer le risque d’ITSS et envisager un test à distance si des facteurs de risque sont présents, et discuter de la nécessité potentielle d’un traitement antibiotique.`
					]
				]
			}
		},
		{
			id: 'M23',
			title: 'Suivi',
			content: {
				type: ['p', 'olul'],
				data: [
					`Le rendez-vous de suivi devrait être planifié de 3 à 7 jours après la prise du misoprostol (MISO), et il peut être nécessaire de prévoir plusieurs rendez-vous de suivi. Le protocole de La SOGC pour l’avortement par médicaments via télémédecine recommande 7 jours[7], mais certains prescripteurs fixent le rendez-vous de suivi dès 3 jours après l’administration du MISO), afin d’éviter toute perte de contact et d’évaluer le taux de βhCG sérique. Les pratiques réelles dépendent du jugement et de l’expérience des prescripteurs.

          Lors du suivi virtuel, les prescripteurs doivent[7]:`,
					[
						`<b>Questionner le déroulement de l’avortement</b> y compris les dates de prise des médicaments, les effets secondaires, la description des saignements, la douleur, le moment d’expulsion des produits de conception, et tout symptôme indiquant une grossesse évolutive.
          Recommander une visite d’urgence en cas de signes de grossesse ectopique, d’infection pelvienne, de saignements abondants ou de douleur excessive.
          <b>Si l’histoire suggère un échec d’avortement ou une grossesse évolutive</b>: envisager une dose supplémentaire de MISO ou un avortement par instruments: obtenir une échographie.
          <b>Si l’histoire suggère un avortement réussi sans signe d’alerte ni symptôme de grossesse évolutive ainsi que des saignements et des douleurs normaux</b>: organiser les analyses de sang pour confirmer le taux de βhCG sérique si le rendez-vous est en personne, sinon demander à la personne d’effectuer un test de grossesse urinaire qualitatif.<br><br><b>βhCG sérique</b>[4]: Si le taux de βhCG sérique chute de > 50 % au jour 3 après la mifépristone ou de 80 % aux jours 7 à 14 après l’administration de la mifépristone / misoprostol, l’avortement est complet et aucun autre rendez-vous n’est nécessaire. Une échographie devrait être demandée si 14 jours se sont écoulés et qu’une diminution de 80 % n’a pas été atteinte.<br><br><b>βhCG urinaire</b>[7]:`,
						assets.FrAbortionCompletion,
						`Proposer de discuter des <a href="evaluation-post-avortement#M20" class="in" target="_blank">options de contraception</a> et de fournir un soutien émotionnel si nécessaire. Les ressources de soutien émotionnel comprennent:`,
						`Exhale, une ligne téléphonique qui fournit un soutien émotionnel, des ressources et de l’information après un avortement.
            All-Options, une ligne de discussion des expériences passées ou actuelles en matière d’avortement, d’adoption et de parentalité pour les personnes au Canada et aux États-Unis (1-888-493-0092).`
					]
				]
			}
		},
		{
			id: 'B1',
			title: 'Alberta',
			content: {
				type: ['p', 'h2', 'p', 'h2', 'p'],
				data: [
					`<i>Les informations ci-dessous sont en attente de vérification.</i>`,
					'Gynécologie',
					`Première visite: <b>03.08A</b> Consultation complète – $111.06
            Visite de suivi: 03.07B</b> Consultation de suivi – $62.24`,
					'Premiers soins',
					`Première visite: <b>03.04A</b> Visite complète – $83.37
            Visite de suivi: <b>03.03A</b> Visite de bureau – $35.26`
				]
			}
		},
		{
			id: 'B2',
			title: 'Colombie-Britannique',
			content: {
				type: ['p', 'h2', 'p', 'h2', 'p'],
				data: [
					`<i>Les informations ci-dessous sont mises à jour en mars 2024.</i>`,
					'Gynécologie',
					`Première visite: <b>14545</b> Avortement par médicaments – $170.95
          Visite de suivi: <b>4012</b> Consultation limitée – $85.49
          <b>4007</b> Suivi – $53.52`,
					'Premiers soins',
					`Première visite: <b>14545</b> Avortement par médicaments – $170.95
          Visite de suivi: <b>00100</b> Suivi – $34.04
          Télésanté: <b>14545</b> Même code pour la consultation – $165.97
          <b>13437</b> Suivi – $31.84

        <b>Remarque:</b> Pour la télésanté, les méthodes de soins virtuels peuvent inclure le téléphone, la vidéo ou la plateforme provinciale de télésanté, qui sont toutes également facturables pour le moment. Il n’est pas nécessaire d’avoir une relation médecin-patient continue pour que le médecin puisse soumettre une demande d’avortement par médicaments par télésanté.`
				]
			}
		},
		{
			id: 'B3',
			title: 'Manitoba',
			content: {
				type: ['p', 'h2', 'p', 'h2', 'p'],
				data: [
					`<i>Les informations ci-dessous sont mises à jour en mars 2024.</i>`,
					'Gynécologie',
					`Première visite: <b>8428</b> Gestion médicale de l’interruption volontaire de grossesse, comprenant l’examen, la gestion et le suivi de la personne prenant du misoprostol. – $171.00
<b>8499</b> Examen gynécologique complet excluant le test Pap – $125.61
Visite de suivi: <b>8505</b> Antécédents et examen régionaux avec examen gynécologique excluant le test Pap.`,
					'Premiers soins',
					`Première visite: <b>8428</b> Gestion médicale de l’interruption volontaire de grossesse, comprenant l’examen, la gestion et le suivi de la personne prenant du misoprostol. – $171.00
<b>8499</b> Examen gynécologique complet excluant le test Pap – $125.61
Visite de suivi: <b>8471</b> Visite intermédiaire régionale ou visite suivante avec examen gynécologique excluant le test Pap – $54.16

        <b>Remarque:</b> Il n’y a aucune précision quant à savoir si les codes sont spécifiques aux spécialistes ou aux soins primaires dans le manuel de facturation du Manitoba. Ainsi, les fournisseurs devraient examiner les informations et appliquer les règles de leurs codes de facturation.`
				]
			}
		},
		{
			id: 'B4',
			title: 'Nouveau Brunswick',
			content: {
				type: ['p', 'h2', 'p', 'h2', 'p'],
				data: [
					`<i>Les informations ci-dessous sont en attente de vérification.</i>`,
					'Gynécologie',
					`Première visite: <b>54</b> Consultation majeure ou régionale – CA$95.91
          <b>9015</b> Gestion médicale d’une grossesse non-viable/non désirée, y compris le suivi de la βhCG, à ajouter à la visite ou à la consultation initiale – $136.22
          Visite de suivi: <b>49</b> Examen régional – $52.82
          Télésanté: <b>Les mêmes codes</b>, mais la code du site où se trouve physiquement le patient, doivent être enregistrés sur la soumission de la demande de règlement. Lors de la soumission d’une demande de télémédecine, le chiffre 8 doit être écrit devant le code du site fourni afin de préciser que le service a été rendu par télémédecine.
          <b>8717</b> Présence – 1ère personne vue, premières 15 minutes ou partie de, 40 unités.
          <b>8718</b> Ajouter – par 15 minutes ou partie de, 20 unités.`,
					'Premiers soins',
					`Première visite: 1 visite du bureau – $23.36
          <b>9142</b> Gestion médicale d’une grossesse non-viable/non désirée, y compris le suivi de la βhCG, à ajouter à la visite ou à la consultation initiale – $74.48
          Visite de suivi: 1 visite du bureau – $23.36
          Télésanté: <b>Les mêmes codes</b>, ainsi que le code du site où se trouve physiquement le patient, doivent être enregistrés sur la soumission de la demande de règlement. Lors de la soumission d’une demande de télémédecine, le chiffre 8 doit être écrit devant le code du site.
          <b>8717</b> Présence – 1ère personne vue, premières 15 minutes ou partie de, 40 unités.
          <b>8718</b> Ajouter – par 15 minutes ou partie de, 20 unités.`
				]
			}
		},
		{
			id: 'B5',
			title: 'Terre-Neuve et Labrador',
			content: {
				type: ['p', 'h2', 'p', 'h2', 'p'],
				data: [
					`<i>Les informations ci-dessous sont mises à jour en mars 2024.</i>`,
					'Gynécologie',
					`Visite initiale et visite de suivi: <b>54607</b> Avortement par médicaments – $187.49
          <i>Frais complet incluant tous les services liés à l’avortement par médicaments, y compris la consultation et/ou la visite au cours de laquelle le médicament est prescrit, le counseling, la commande et/ou la réalisation et l’interprétation d’analyses de laboratoire et d’imagerie diagnostique, ainsi que toute communication ou visite de suivi.</i>`,
					'Premiers soins',
					`Visite initiale et visite de suivi: <b>54607</b> Avortement par médicaments – $187.49
          <i>Frais complet incluant tous les services liés à l’avortement par médicaments, y compris la consultation et/ou la visite au cours de laquelle le médicament est prescrit, le counseling, la commande et/ou la réalisation et l’interprétation d’analyses de laboratoire et d’imagerie diagnostique, ainsi que toute communication ou visite de suivi.</i>`
				]
			}
		},
		{
			id: 'B6',
			title: 'Territoires du Nord-Ouest',
			content: {
				type: ['p', 'h2', 'p', 'h2', 'p'],
				data: [
					`<i>Les informations ci-dessous sont en attente de vérification.</i>`,
					'Gynécologie',
					`Visite initiale et visite de suivi: <b>OB-025</b> Avortement par médicaments de gestation de moins de 7 semaines – comprend toutes les visites, échographies et injections – $361.93
          Télésanté: <b>TE-001</b> Consultation de télésanté par un consultant utilisant la communication audio-vidéo-données – $180.97
          <b>TE-002</b> Consultation en télésanté – par 15 minutes – maximum de 1,5 heures par séance – $54.29
          <b>TE-004</b> Consultation au service des urgences des communautés périphériques – CA$18.09
          <i>N’a pas besoin d’être votre propre client.</i>`,
					'Premiers soins',
					`Première visite: <b>GP-001</b> Première visite nécessitant une évaluation générale pour une nouvelle maladie – $102.35
          Visite de suivi: <b>GP-002</b> Visites suivantes du bureau autre qu’une simple visite – $45.48
          Télésanté: <b>TE-001</b> Consultation de télésanté par un consultant utilisant la communication audio-vidéo-donnée – $180.97
          <b>TE-002</b> Consultation en télésanté – par 15 minutes – maximum de 1,5 heures par séance – $54.29
          <b>TE-004</b> Consultation au service des urgences des communautés périphériques – CA$18.09
          <i>N’a pas besoin d’être votre propre client.</i>`
				]
			}
		},
		{
			id: 'B7',
			title: 'Nouvelle-Écosse',
			content: {
				type: ['p', 'h2', 'p', 'h2', 'p'],
				data: [
					`<i>Les informations ci-dessous sont mises à jour en mars 2024.</i>`,
					'Gynécologie',
					`Première visite: <b>3.03V</b> Avortement par médicaments / Interruption de grossesse précoce – 67.03 unités / $185.00
          Visite de suivi: <b>.03</b> Visites suivantes – 13 unités / $35.88
          Télésanté: Comme en personne, utiliser <b>AP=PHON</b> pour le téléphone et <b>AP=VIRC</b> pour la plateforme vidéo`,
					'Premiers soins',
					`Première visite: <b>3.03V</b> Avortement par médicaments / Interruption de grossesse précoce – 67.03 unités / $185.00
          Visite de suivi: <b>3.03</b> Visites suivantes – 13 unités / $35.88
          Télésanté: Comme en personne, utiliser <b>AP=PHON</b> pour le téléphone et <b>AP=VIRC</b> pour la plateforme vidéo`
				]
			}
		},
		{
			id: 'B8',
			title: 'Nunavut',
			content: {
				type: ['p'],
				data: [`Pas de contenu.`]
			}
		},
		{
			id: 'B9',
			title: 'Ontario',
			content: {
				type: ['p', 'h2', 'p', 'h2', 'p'],
				data: [
					`<i>Les informations ci-dessous sont mises à jour en mars 2024.</i>`,
					'En personne',
					`Première visite: <b>A920</b> Gestion médicale de la grossesse précoce – service initial – $161.15
          Visite de suivi: <b>A921</b> Gestion médicale de la grossesse précoce – Visite de suivi (limitée à deux par personne par grossesse) – $36.85`,
					'Télésanté',
					`Première visite: A920 peut être facturé pour les visites téléphoniques et vidéo.
          Visite de suivi: <b>A921</b> – $36.85
          <b>A007</b> – $37.95
          <b>A102</b> – $15.00

          <b>Remarques:</b> Si vous avez facturé le A920 pour la visite initiale, vous avez établi une relation et pour le suivi, vous pouvez utiliser le A921 (vidéo seulement) ou le A007 (téléphone). Les services de soins virtuels fournis dans les 24 mois suivant l’avortement par médicaments peuvent être considérés comme des services de soins virtuels complets car ils impliquent une relation patient-médecin existante/continue. Si vous ne rencontrez pas les patients lors de la première visite (c’est-à-dire que vous ne facturez pas le A920 pour la première visite et que vous n’avez donc pas de relation préétablie avec le patient), vous utiliserez le A102 pour un suivi téléphonique, qui rapporte $15.00.`
				]
			}
		},
		{
			id: 'B10',
			title: 'Île-du-Prince-Édouard',
			content: {
				type: ['p', 'h2', 'p', 'h2', 'p'],
				data: [
					`<i>Les informations ci-dessous sont en attente de vérification.</i>`,
					'Gynécologie',
					`Première visite: <b>6010</b> Avortement thérapeutique – $181.49
          Visite de suivi: <b>0762</b> Consultation de suivi – $58.38
          <b>0713</b> Visite limitée du bureau – $42.00`,
					'Premiers soins',
					`Première visite: <b>6010</b> Avortement thérapeutique – $181.49
          Visite de suivi: <b>0113</b> Visite limitée du bureau – $42.00
          <b>0163</b> Réexamen complet par un médecin spécialiste`
				]
			}
		},
		{
			id: 'B11',
			title: 'Quebec',
			content: {
				type: ['p', 'h2', 'p', 'h2', 'p'],
				data: [
					`<i>Les informations ci-dessous sont mises à jour en mars 2024.</i>`,
					'Gynécologie',
					`Première visite: <b>15850</b> Évaluation globale pour interruption d’une grossesse (< 63 jours) – $168.90
          <b>15852</b> Examen d’ultrasonographie – $60.95
          Visite de suivi: <b>15854</b> Suivi d’un avortement par médicaments – $47.50
          <b>15857</b> Échographie après avortement par médicaments (<18 jours) – $39.80`,
					'Premiers soins',
					`Première visite: Évaluation globale pour interruption d’une grossesse
          – <b>15313</b> Bureau – $139.50
          – <b>15407</b> CLSC – $20.00
          – <b>15314</b> Hôpital – $104.60
          <b>Examen d’ultrasonographie</b>
          – <b>15315</b> Bureau – $38.15
          – <b>15316</b> Hôpital – $13.10
          Visite de suivi: Suivi interruption de grossesse
          – <b>15317</b> Bureau – $39.25
          – <b>15408</b> CLSC – $1.50
          – <b>15318</b> Hôpital – $29.45
          <b>Examen d’ultrasonographie</b>
          – <b>15319</b> Bureau – $33.80
          – <b>15320</b> Hôpital – $8.75`
				]
			}
		},
		{
			id: 'B12',
			title: 'Saskatchewan',
			content: {
				type: ['p', 'h2', 'p', 'h2', 'p', 'h2', 'p'],
				data: [
					`<i>Les informations ci-dessous sont mises à jour en mars 2024.</i>`,
					'Gynécologie',
					`Première visite: <b>150B</b> Gestion médicale de l’interruption de grossesse précoce – comprend 5 jours de gestion médicale continue – $170
          Visite de suivi: <b>11P</b> Consultation de suivi – $41.90
          <b>7P</b> Évaluation de suivi – $38.20`,
					'Premiers soins',
					`Première visite: <b>150B</b> Gestion médicale de l’interruption de grossesse précoce – comprend 5 jours de gestion médicale continue – $170
          Visite de suivi: <b>5-B</b> Consultation de suivi – $39.80`,
					'Télésanté',
					`Première visite: <b>732A</b> pour tout patient soigné via une liaison vidéo de télémédecine agréée – $31.40
         <b>840B</b> et <b>841B</b> – Counseling – pour les cliniciens qui ne disposent pas d’une configuration de liaison vidéo telle qu’une consultation téléphonique.
		 <b>840</b> est un conseil virtuel pendant les 15 premières minutes et <b>841B</b> est pour les 15 minutes suivantes – $33.75
          Visite de suivi: <b>734A</b> pour tout patient soigné à l’aide d’une liaison vidéo de télémédecine approuvée (maximum une par jour pour tous les patients) – $12.50
          <b>805B</b> – Évaluation partielle virtuelle – pour les cliniciens qui ne disposent pas d’une configuration de liaison vidéo telle qu’un suivi téléphonique – $31.85

          <b>Remarques:</b> La Saskatchewan dispose d’un code désigné pour l’avortement en personne, mais pas d’un code virtuel, de sorte que les prestataires peuvent utiliser les codes génériques utilisés pour les applications régulières de télémédecine pour les soins primaires.`
				]
			}
		},
		{
			id: 'B13',
			title: 'Yukon',
			content: {
				type: ['p', 'h2', 'p', 'h2', 'p'],
				data: [
					`<i>Les informations ci-dessous sont en attente de vérification.</i>`,
					'Gynécologie',
					`Première visite: <b>4116</b> Avortement par médicaments – $223.80
          Visite de suivi: <b>4012</b> Consultation limitée – $104.40
          <b>4007</b> Visite suivant du bureau – $69.60`,
					'Premiers soins',
					`Première visite: <b>0101</b> Examen complet – $108.80
          Visite de suivi: <b>0100</b> Visite – $49.70`
				]
			}
		},
		{
			id: 'M26',
			title: 'Contexte réglementaire',
			content: {
				type: ['p', 'ul', 'p', 'ul'],
				data: [
					`L’avortement est <b>légal</b> au Canada et personne n’a besoin du consentement de son partenaire ou d’un parent pour avorter. Il s’agit du <b>deuxième service de santé reproductive le plus répandu</b> au Canada: le tiers des personnes ayant la capacité d’être enceinte auront recours à un avortement au cours de leur vie.[1,2].

          L’avortement par médicaments utilise des pilules médicamenteuses pour mettre fin à une grossesse. Au Canada, les pilules abortives sont commercialisées et vendues sous le nom de Mifé-Miso.`,
					`Le Mifé-Miso est approuvé par Santé Canada pour l’âge gestationnel jusqu’à 63 jours, mais La SOGC a démontré qu’il est <b>sécuritaire et efficace</b> jusqu’à 70 jours.
          Il est fourni <b>gratuitement</b> à toutes les personnes bénéficiant d’une assurance maladie provinciale et de plusieurs catégories d’assurance maladie fédérale.
          Les personnes admissibles aux soins de santé dans une province qui tentent d’accéder au Mifé-Miso dans une autre province ou territoire sont admissibles au counseling, aux évaluations et au suivi, mais pas au médicament lui-même.
          Il peut être prescrit lors de <b>visites en personne</b> ou <b>virtuelles</b>, ou d’une combinaison des deux.`,
					`<b>Champ de pratique:</b> Au moment de rédiger ces lignes, les médecins et les infirmières praticiennes spécialisées au Canada sont autorisées à prescrire le Mifé-Miso. Dans la plupart des cas, les pharmaciens sont responsables de la distribution des médicaments, mais certaines cliniques sont également autorisées à les fournir directement. À l’exception du Québec, les sages-femmes ne sont actuellement pas autorisées à prescrire du Mifé-Miso, mais elles peuvent fournir des soins d’avortement par médicaments en étroite collaboration avec des infirmières praticiennes spécialisées ou des médecins.

          <b>Exigences spécifiques à la province:</b> Les professionnels de la santé devraient vérifier les lignes directrices spécifiques et le champ d’exercise de leur province ou territoire. Par exemple, les exigences des provinces peuvent différer quant à savoir qui peut récupérer le médicament et si les pharmaciens doivent s’inscrire auprès de Celopharma, le fabricant du Mifé-Miso. [Cliquez ici pour voir le résumé](PG1) de certains règlements spécifiques à la province pour la distribution du Mifé-Miso.

          <b>Exigence de formation:</b> Il n’est plus nécessaire de suivre une formation avant de prescrire ou de délivrer le Mifé-Miso, mais les professionnels de la santé peuvent trouver utiles les cours en ligne ci-dessous pour en savoir plus sur les soins d’avortement par médicaments.`,
					`Programme de formation sur l’avortement par médicaments, de La SOGC, mis à jour en 2023 et offert au prix coûtant.
          Medication Abortion Training for Primary Care Providers de la Fédération Nationale de l’Avortement, mis à jour en 2023 et offert au prix coûtant.`
				]
			}
		},
		{
			id: 'M27',
			title: 'Configuration des installations',
			content: {
				type: [
					'p',
					'h2',
					'right',
					'ul',
					'h2',
					'right',
					'ul',
					'h2',
					'right',
					'ul',
					'h2',
					'right',
					'ul',
					'h2',
					'right',
					'ul',
					'h2',
					'right',
					'ul',
					'h2',
					'right',
					'ul',
					'h2',
					'right',
					'ul'
				],
				data: [
					`Voici un guide général des étapes à suivre lors du lancement de services d’avortement par médicaments (AM) dans votre établissement. Certaines de ces étapes peuvent ne pas s’appliquer, selon votre établissement[12].`,
					'Réviser les protocoles:',
					assets.FaSetup1,
					`Examiner les directives pour l’AM.
          Préparer votre protocole et inviter l’équipe clinique à l’examiner et à fournir ses commentaires.
          Déterminer si l’objectif d’offrir l’AM est d’ajouter ce service aux soins primaires déjà offerts ou s’il sera un service rendu à l’ensemble de la communauté.
          Évaluer les protocoles associés, notamment la contraception, le dépistage et le traitement des ITSS, ainsi que d’autres services de santé sexuelle et reproductive, et les intégrer aux protocoles d’avortement, le cas échéant.`,
					'Examiner les réglements et la rémunération:',
					assets.FaSetup2,
					`Examiner les règlements provinciaux et territoriaux et le champ d’exercice des médecins et des infirmières praticiennes spécialisées, et évaluer la participation potentielle des sages-femmes autorisées à fournir un AM.
          Pour les médecins, se familiariser avec les codes de facturation provinciaux pour la fourniture d’AM, y compris les codes pour tous les tests qui seraient effectués sur place.
          Pour les infirmières praticiennes et les sages-femmes autorisées, examiner les processus de rémunération des associations professionnelles de votre juridiction.`,
					'Répondre aux préoccupations liées à l’avortement au sein de votre équipe:',
					assets.FaSetup3,
					`Explorer la volonté de fournir un AM parmi tout le personnel, répondre à leurs préoccupations et déterminer la meilleure façon d’intégrer les services d’avortement dans votre pratique (voir le <a class="in" href="#M28">module suivant</a>).`,
					'Préparer des plans pour soutenir les populations mal desservies:',
					assets.FaSetup4,
					`Évaluer la capacité de vos services à servir des populations mal desservies telles que les personnes non assurées, les personnes issues des communautés autochtones et les personnes identifiées comme 2ELGBTQIA+.
          Envisager d’intégrer des soins tenant compte des traumatismes et des approaches de réduction des méfaits dans vos services.
          Planifier des services d’AM en réduisant les barrières pour les populations mal desservies et examiner ces plans avec votre personnel.`,
					'Examiner la capacité du personnel et de l’administration:',
					assets.FaSetup5,
					`Examiner la capacité actuelle de la clinique à fournir un AM.
          Déterminer la personne ou l’équipe clé qui sera principalement responsable des personnes ayant recours à l’AM.
          Évaluer les meilleurs moments pour planifier des rendez-vous pour les personnes ayant recours à l’AM.
          Consulter l’horaire de garde de votre clinique ou le service d’appel de votre hôpital local pour contacter les gynécologues-obstétriciens le cas échéant.
          Pour le personnel clinique, organiser une formation approfondie sur le counseling, la fourniture de Mifé-Miso et la gestion des complications.
          Pour le personnel de soutien, préparer des réponses téléphoniques et d’autres ressources pour leur faire référence et leur utilisation.`,
					'Configurer votre établissement:',
					assets.FaSetup6,
					`Évaluer la conception des salles d’attente, des zones de réception et des salles de counseling pour s’assurer qu’elles favorisent la confidentialité et l’intimité.
          Examiner les ententes avec un laboratoire ou la capacité intra-établissement pour le test quantitatif de βhCG ainsi que des tests et de l’administration du facteur Rhésus.
          Identifier les cliniques ou départements d’échographie dans votre communauté, si elles ne sont pas disponibles sur place.
          Déterminer les fournitures ou équipements supplémentaires nécessaires.`,
					'Identifier les cliniques de référence:',
					assets.FaSetup7,
					`Trouver des cliniques d’avortement par instruments, si vous n’offrez pas ce service.
          Identifier les cliniques d’avortement dans votre région qui peuvent accepter des références rapides, si votre emploi du temps ne peut pas accueillir les personnes en temps opportun, afin de garantir que ces personnes ne manquent pas la fenêtre pour un AM.
          Trouver des pharmacies qui stockent régulièrement du Mifé-Miso et établir des relations avec des pharmacies locales qui pourraient stocker Mifé-Miso.`,
					'Préparer les documents de communication:',
					assets.FaSetup8,
					`Obtenir ou développer du matériel éducatif, des formulaires de consentement et d’autres formulaires de suivi.
          Concevoir, imprimer et distribuer des affiches pour informer la population que vous prescrivez l’AM.`
				]
			}
		},
		{
			id: 'M28',
			title: 'Répondre aux préoccupations liées à l’avortement',
			content: {
				type: ['p', 'olul'],
				data: [
					`La liste ci-dessous suggère des façons de répondre à l’opposition et aux préoccupations concernant l’avortement par médicaments (AM) parmi votre personnel et vos collègues, ce qui facilitera l’intégration harmonieuse des services d’AM dans vos pratiques[16].`,
					[
						`Tout d’abord, identifier les professionnels de la santé, les administrateurs et le personnel de soutien au sein de votre environnement, qui sont intéressés et engagés à fournir des services d’avortement.
            Initier des discussions informelles avec vos collègues sur l’offre de services.
            Envisager de mener une enquête anonyme auprès du personnel et des clients pour avoir une idée de leurs opinions et de leurs sentiments à l’égard de l’AM.
            Envisager d’organiser un atelier pour clarifier les valeurs sur l’avortement, aborder l’opposition ou l’inconfort et déterminer les moyens de travailler ensemble pour fournir l’AM. Un atelier de clarification des valeurs liées à l’avortement peut être adapté en utilisant:`,
						`[Values clarification toolkits](C35)</a> de la Fédération Nationale de l’Avortement.
            Matériel sur le [Values clarification workshop](C58-10) du Reproductive Health Access Project.`,
						`Envisager de créer un comité de planification pour discuter des objectifs, des tâches, des échéanciers, des obstacles et des solutions.
            Se renseigner sur d’autres centres de santé ou professionnels de la santé locaux qui ont intégré avec succès les services d’avortement dans leur pratique. Les inviter à des réunions, des ateliers et des séances de planification, ou solliciter leurs commentaires et conseils sur votre processus.
            Élaborer un protocole pour les membres du personnel qui se sentent incapables de participer aux soins d’avortement.
            Lors des entrevues d’embauche, discuter de l’avortement. Indiquer dans l’offre d’emploi que le candidat doit être ouvert à tous les aspects des soins reproductifs, y compris l’avortement.`
					]
				]
			}
		},
		{
			id: 'C1',
			title: 'Régimes d’assurance fédéraux',
			content: {
				type: ['p', 'h2', 'p', 'h2', 'p', 'h2', 'p', 'h2', 'p', 'h2', 'p', 'h2', 'p'],
				data: [
					`Les personnes couvertes par les programmes fédéraux peuvent demander une ordonnance de Mifegymiso et la faire exécuter dans la pharmacie de leur choix. L’ordonnance sera entièrement couverte lorsque la pharmacie soumettra sa facturation au régime fédéral, en supposant que toutes les autres conditions d’utilisation de Mifegymiso soient remplies.`,
					'Programme des services de santé non assurés (SSNA)',
					`Les personnes admissibles des Premières Nations et des Inuits sont entièrement couvertes pour le coût de Mifegymiso dans le context de l’avortement par médicaments. Le processus de réclamation suit le processus de soumission normal pour les autres médicaments sur ordonnance.

          Lien: nihb-ssna.express-scripts.ca(https://nihb-ssna.express-scripts.ca/en/0205140506092019/16/160407)
          `,
					'Anciens Combattants Canada (ACC)',
					`Le Mifegymiso figure actuellement comme médicament standard sur la liste des médicaments d’Anciens Combattants Canada. Cela signifie que le Mifegymiso est facilement accessible aux clients éligibles disposant d’une ordonnance valide.

          Les clients d’ACC ont une carte d’identité de soins de santé d’ACC marqué “A” et/ou “B” sous “Programme numéro 10”. Les clients du groupe A ne peuvent utiliser leur carte que pour obtenir des soins de santé directement liées au traitement de leur maladie ouvrant droit à pension par ACC.

          Les clients du groupe B sont admissibles aux prestations approuvées s’ils ont démontré un besoin en matière de santé et que les prestations ne leur sont pas accessibles en vertu d’un régime de santé provincial.

          De plus, puisque les clients sont couverts par le système de santé provincial ou territorial, leur accès au Mifegymiso suivra le processus provincial ou territorial comme les autres résidents.

          Lien: www.veterans.gc.ca(https://www.veterans.gc.ca/eng/financial-support/medical-costs/coverage-services-prescriptions-devices#toc10)
          `,
					'Services de santé des Forces canadiennes',
					`Le Mifegymiso est un médicament régulier figurant sur la liste des médicaments des Forces armées canadiennes; aucune autorisation spéciale n’est requise.

          Lien: www.cmp-cpm.forces.gc.ca(http://www.cmp-cpm.forces.gc.ca/hs/en/drug-benefit-list/index.asp)
          `,
					'Programme de soins de santé de la Gendarmerie royale du Canada (GRC)',
					`Les agents de la GRC sont considérés comme des personnes assurées et recoivent des soins de santé de base par l’intermédiaire du système de santé de la province ou du territoire où ils résident. L’accès des agents de la GRC au Mifegymiso suit le processus provincial ou territorial comme pour les autres résidents. De plus, des régimes privés couvrant les coûts des médicaments sur ordonnance sont également une option.

          Lien: bc-cb.rcmp-grc.gc.ca(https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2234&languageId=1&contentId=58416)
          `,
					'Programme fédéral de santé intérimaire (PFSI)',
					`La couverture du PFSI pour Mifegymiso est disponible dans les provinces et territoires où le médicament est inscrit sur leur liste de medicaments publique.

          Lien: www.canada.ca(https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program/coverage-summary.html)
          `,
					'Programmes du Service correctionnel du Canada (SCC)',
					`Les services aux personnes incarcérées dans les pénitenciers fédéraux sont fournis directement par la pharmacie au sein de l’établissement.`
				]
			}
		},
		{
			id: 'M36',
			title: 'Personnes non-assurées',
			content: {
				type: ['p', 'ulul'],
				data: [
					`Les professionnels de la santé peuvent soutenir les personnes non assurées en:`,
					[
						`Déterminant le coût du Mifé-Miso et des frais de consultation pour l’avortement par médicaments (AM) en tant que dépenses directes. Élaborer une liste de centres de santé communautaires et de cliniques de santé reproductive gérés par la ville où les personnes peuvent obtenir une prescription d’AM à faible coût ou sans frais.
            Explorant les processus permettant de renoncer aux frais ou d’élaborer des accords de partage des coûts avec des organisations partenaires ou d’autres prestataires de services.
            S’assurant que le personnel administratif et de soutien est au courant du plan.
            Référant les personnes vers le fonds d’urgence de la Fédération Nationale de l’Avortement et d’Action Canada pour la santé et les droits sexuels:`,
						`Patient Assistance Fund: Pour parler avec quelqu’un du Dr. Morgentaler Patient Assistance Fund, veuillez appeler la ligne téléphonique sans frais NAF au 1-800-772-9100.
            Norma Scarborough Fund | Action Canada pour la santé et les droits sexuels (actioncanadashr.org)`
					]
				]
			}
		},
		{
			id: 'M37',
			title: 'Personnes 2ELGBTQIA+',
			content: {
				type: ['p', 'h2', 'ul', 'h2', 'table'],
				data: [
					`Voici quelques suggestions pour aider les cliniciens à créer un environnement inclusif qui répond aux besoins des personnes 2ELGBTQIA+. Ces suggestions ne sont pas exhaustives et il est recommandé aux professionnels de la santé de consulter d’autres manuels et opportunités de formation en compétence culturelle pour fournir des soins inclusifs.

          <i>Ces suggestions ont été reproduites à partir de [Gender Inclusive Language](PHSA1) de Trans Care BC, [The Trans-inclusive Abortion Services](C27) du SHORE Centre et la Fédération du Québec pour le planning des naissances, et du [Handbook for Healthcare Providers Working with Clients from Diverse Communities](C104-1) d’Action Canada pour la santé et les droits sexuels. Pour plus d’informations sur les mythes concernant la reproduction des personnes 2ELGBTQIA+, le vocabulaire et le glossaire à utiliser et à éviter, ainsi que des études de cas et des recommandations pour surmonter les obstacles, veuillez vous référer à ces manuels.</i>`,
					'À faire et à ne pas faire:',
					`Rendre des <b>toilettes non genrées</b> en supprimant les panneaux “Hommes” et “Femmes” des toilettes, ou en les remplaçant par un panneau “Toilettes tous genres”.
          Publier <b>des affiches, des dépliants et d’autres documents 2ELGBTQIA+ inclusifs</b> pour faire savoir à tous qu’ils sont les bienvenus.
          Utiliser des <b>formulaires cliniques inclusifs</b> (par exemple, des formulaires d’admission) qui tiennent compte de toutes les orientations sexuelles et identités de genre. Déterminer si les questions posées sont nécessaires à des fins cliniques ou si elles sont posées par curiosité.
          Demander <b>quels pronoms les personnes préfèrent</b> et utiliser-les de manière cohérente tout au long de leurs soins.
          Interroger les personnes et observez les mots qu’ils utilisent pour parler de leurs parties du corps et utiliser leur langage.
          Respecter le droit des personnes trans de fournir de l’information sur les problèmes ou besoins de la communauté trans ou de parler au nom de la communauté trans.
          Chercher à éliminer les barrières pour les personnes 2ELGBTQIA+.
          N’utiliser PAS d’étiquettes et de termes dérivés d’anciennes versions du DSM et de la CIM, tels que transsexuel, transsexualité et trouble de l’identité de genre.
          N’utiliser PAS de termes et expressions péjoratives même si la personne le fait.`,
					'Vocabulaire inclusif:',
					[
						['Dire', 'Au lieu de'],
						[
							'Personne (personne en chemise rose, personne enceinte)',
							'Homme, femme, fille, garçon, dames, messieurs, monsieur, madame (femmes enceintes, gars en chemise rose)'
						],
						['La parentalité', 'Maternité, paternité'],
						['Femme assignée, homme assigné', 'Femelle biologique, mâle biologique'],
						['Cisgenre', 'Non trans, normal, ou vrai'],
						['Allaitement', 'Allaitement maternel'],
						['Hommes transgenres, femmes transgenres', 'Un transexuel'],
						[
							'Préservatif externe, préservatif interne',
							'Préservatif masculin, préservatif féminin'
						],
						['Sexe réceptif, sexe insertif', 'Sexe vaginal'],
						['Saignements mensuels', 'Période, règles, menstruations'],
						[
							'Dépistage de santé sexuelle, examen interne, dépistage cervical',
							'Examen pelvien, examen de la femme, examen gynécologique'
						],
						['Organes reproducteurs internes', 'Organes reproducteurs féminins'],
						['Gonades internes', 'Ovaires'],
						['Gonades externes', 'Testules, testicules'],
						['Organes génitaux internes, organes génitaux', 'Vagin, vulve'],
						['Organes génitaux externes, tissu érectile, organes génitaux', 'Pénis']
					]
				]
			}
		},
		{
			id: 'M38',
			title: 'Personnes autochtones',
			content: {
				type: ['p', 'h2', 'ul'],
				data: [
					`Voici des suggestions pour aider les professionnels de la santé non autochtones à créer un environnement inclusif pour les personnes autochtones. Ces suggestions ne sont pas exhaustives et il est recommandé aux professionnels de la santé d’envisager d’autres manuels et opportunités de formation aux compétences culturelles pour fournir des soins inclusifs.

          Divers facteurs et réalités peuvent affecter la façon dont les peuples autochtones accèdent aux services de santé, notamment les obstacles liés à l’accès géographique, l’indisponibilité de services linguistiques et de traduction, le manque de soins de santé culturellement sécuritaires ou les expériences passées de racisme, de stigmatisation, de honte, de peur ou de discrimination. Gardez à l’esprit qu’être autochtone n’est pas en soi un facteur de risque ; ce qui met réellement les gens en danger, ce sont des problèmes systémiques comme le racisme, le colonialisme, les traumatismes intergénérationnels et le manque d’accès à des soins, des traitements et des soutiens culturellement sécuritaires.

          <i>Ces recommandations sont tirées de la [Trousse d’outils pour les allié-es aux luttes autochtones](VCOP1) du Réseau stratégique urbain de la communauté autochtone de Montréal et du [Guide pour les professionnels de la santé qui travaillent avec des client(e)s provenant de différentes communautés](C104-1) d’Action Canada pour la santé et les droits sexuels.</i>`,
					'Conseils rapides pour les cliniciens:',
					`Proposer des <b>services de traduction</b> et, si possible, des ressources traduites.
          Établir des liens et revendiquer pour l’accès à des membres de la communauté autochtone de votre région qui peuvent agir en tant que navigateurs dans le système de santé.
          Lorsqu’on entend parler d’expériences difficiles ou violentes de la part des personnes, affirmer leurs expériences et leur vécu. <b>Éviter de les stigmatiser pour leurs sentiments ou la façon dont ils gèrent leurs émotions.</b>
          <b>Créer et maintenir une liste des ressources disponibles et de soutien culturel</b> dans votre région, y compris les services sociaux.
          <b>Les soutenir dans la création de leur propre plan de traitement</b>, y compris l’intégration de ressources culturellement sécurisantes et méthodes de guérison traditionnelles.
          Éviter de dire “Les peuples autochtones du Canada” ou “Nos peuples autochtones.” – <b>Les peuples autochtones n’appartiennent pas au Canada ni à aucun individu.</b>
          Éviter de dire “La culture autochtone.” – <b>Cette phrase ne reconnaît pas qu’il existe des centaines de communautés, nations, langues et cultures autochtones au Canada. Au lieu du singulier, essayer d’utiliser des formes plurielles comme “Les cultures autochtones” ou mieux encore, être précis sur la nation pour éviter la pan-indigénisation.</b>`
				]
			}
		},
		{
			id: 'C2',
			title: 'Alberta',
			content: {
				type: ['p'],
				data: [
					`Depuis le 24 juillet 2017, Alberta Health, par l’intermédiaire du programme Women’s Choice, offre une couverture pour le Mifegymiso via des pharmacies agréées en Alberta, afin de permettre aux personnes d’exercer leur choix en matière de santé sexuelle. La Croix Bleue de l’Alberta facilite le paiement des réclamations du Mifegymiso dans le cadre de ce programme. Tous les Albertains disposant d’un régime d’assurance-maladie de l’Alberta valide et d’un numéro d’assurance-maladie personnel (NAM) sont admissibles à la couverture ; un pseudo-NAM de WC0000000 est utilisé pour les Albertains sans NAM valide.

          Il n’y a aucune limite quant au nombre d’ordonnances de Mifegymiso qu’un membre du régime peut recevoir dans le cadre du programme Women’s Choice ; cependant, les pharmacies ne peuvent réclamer qu’une seule dose à la fois pour une personne participant au régime.

          Le programme prévoit uniquement la soumission de demandes de facturation directe. Les personnes participant au régime ne sont pas admissibles à un remboursement.

          Lien: www.ab.bluecross.ca(https://www.ab.bluecross.ca/pdfs/pharmacy-benefacts/pharmacy-benefact-697.pdf)
          `
				]
			}
		},
		{
			id: 'C3',
			title: 'Colombie-Britannique',
			content: {
				type: ['p'],
				data: [
					`Le Mifegymiso est couvert par le BC Pharmacare Assurance Plan (Plan Z et Exceptionnel Plan Z) qui offre une couverture à 100 %. Toutes les personnes résidant en Colombie-Britannique et bénéficiant d’une couverture active du Medical Services Plan (MSP) sont éligibles.

          Lien: www2.gov.bc.ca(https://www2.gov.bc.ca/gov/content/health/practitioner-professional-resources/pharmacare/pharmacies/plan-z)
          `
				]
			}
		},
		{
			id: 'C4',
			title: 'Manitoba',
			content: {
				type: ['p'],
				data: [
					`Toute personne résidant au Manitoba et possédant une carte d’immatriculation Santé Manitoba valide et une ordonnance de Mifegymiso est admissible à la couverture.

          Les personnes possédant une carte Santé Manitoba valide et une ordonnance d’un prescripteur autorisé ne devraient pas avoir à payer de frais. Même si la personne est inscrite à un régime d’assurance médicaments ou à un autre programme de soins de santé provincial de médicaments (par exemple, Familles/AER), elle n’a aucune obligation de payer une franchise ou une quote-part.

          Lien: www.gov.mb.ca(https://www.gov.mb.ca/health/pharmacare/profdocs/csp_mifegymiso.pdf)
          `
				]
			}
		},
		{
			id: 'C5',
			title: 'Nouveau Brunswick',
			content: {
				type: ['p'],
				data: [
					`La couverture est disponible via le Programme d’avortement par médicaments. Les réclamations manuscrites ne seront pas acceptées et les réclamations doivent être soumises en ligne.

          Lien: www2.gnb.ca(https://www2.gnb.ca/content/gnb/en/departments/health/prescription-drug-plan/NBDrugPlan/ForHealthCareProfessionals/medical_abortion_claims_submission.html)
          `
				]
			}
		},
		{
			id: 'C6',
			title: 'Terre neuve & Labrador',
			content: {
				type: ['p'],
				data: [
					`La couverture est offerte sans frais aux personnes détentant une carte d’assurance maladie valide. Les personnes peuvent recevoir une ordonnance auprès de leur professionnel de la santé, des régies régionales de la santé ou de l’Athena Health Centre à St. John’s. Les personnes bénéficiant d’une assurance privée l’utiliseront en premier, puis la province couvrira tous les coûts restants en tant que payeur final. Les réclamations peuvent être soumises en temps réel via le système d’évaluation du Programme de médicaments sur ordonnance de Terre-Neuve-et-Labrador (NLPDP), quelle que soit l’admissibilité.

Lien: www.gov.nl.ca(https://www.gov.nl.ca/hcs/files/prescription-provider-guide-program-claiming-policies.pdf)
`
				]
			}
		},
		{
			id: 'C7',
			title: 'Territoires du Nord-Ouest',
			content: {
				type: ['p'],
				data: [
					`La couverture du Mifegymiso dans les Territoires du Nord-Ouest est assurée par le programme Northern Options for Women (NOW)*. Le pharmacien exécutera l’ordonnance et facturera l’assurance gouvernementale/employeur (le cas échéant). Health and Social Services recevra une facture pour tout montant impayé non couvert par le régime d’assurance, ou facturera le montant s’il n’y a pas de couverture d’assurance.

*Le programme NOW n’est actuellement disponible qu’à Yellowknife et Inuvik. Health and Social Services couvrira les frais de déplacement médical des résidents vivant à l’extérieur de Yellowknife et d’Inuvik qui choisissent des options de traitement utilisant Mifegymiso et qui sont recommandées par un professionnel de la santé.

Lien: www.hss.gov.nt.ca(https://www.hss.gov.nt.ca/en/services/mifegymiso-northwest-territories) (voir pages 40/41)
`
				]
			}
		},
		{
			id: 'C8',
			title: 'Nouvelle-Écosse',
			content: {
				type: ['p'],
				data: [
					`En vigueur depuis le 1er novembre 2017, la couverture est offerte à toute personne en Nouvelle-Écosse possédant une carte d’assurance maladie valide. Toutes autres sources d’assurance, comme un régime privé, doivent être facturées en premier. La procédure à suivre pour soumettre une demande de remboursement est expliquée ci-dessous. Si vous avez des questions, veuillez contacter Nova Scotia Pharmacare.

Lien: novascotia.ca(https://novascotia.ca/dhw/pharmacare/documents/Pharmacy-Guide.pdf) (voir page 41)
`
				]
			}
		},
		{
			id: 'C9',
			title: 'Nunavut',
			content: {
				type: ['p'],
				data: [
					`Au Nunavut, les avortements sont gratuits pour les bénéficiaires des Premières Nations et sont couverts par le Régime de l’assurance maladie du Nunavut. Environ 86 % des résidents du Nunavut sont admissibles à la couverture du Programme des services de santé non assurés (SSNA).

Lien: www.pharmacists.ca(https://www.pharmacists.ca/cpha-ca/assets/File/cpha-on-the-issues/Mifegymiso_Access_Scan.pdf)
`
				]
			}
		},
		{
			id: 'C10',
			title: 'Ontario',
			content: {
				type: ['p'],
				data: [
					`Depuis le 10 août 2017, toutes personnes possédant une carte d’Assurance-santé de l’Ontario (OHIP) valide ainsi qu’une ordonnance valide sont admissibles au Mifegymiso. Cela comprend à la fois les bénéficiaires du Programme de médicaments de l’Ontario (PMO) et les non-bénéficiaires du PMO. Les pharmaciens doivent s’assurer que la date de naissance, le numéro de carte Santé et le nom de la personne admissible (tel qu’il apparaît sur la carte Santé de l’Ontario) sont correctement saisis lors de la soumission des demandes via le Système du réseau de santé (SRS). Le Mifegymiso, fourni aux personnes munies d’une ordonnance valide, sera remboursé par le ministère.

Lien: www.pharmacytechnologysolutions.ca(https://www.pharmacytechnologysolutions.ca/pharmaclik-rx-doc/Content/Resources/PDFs/ODBMifegymisoClaims.pdf)
`
				]
			}
		},
		{
			id: 'C11',
			title: 'Île-du-Prince Édouard',
			content: {
				type: ['p'],
				data: [
					`L’avortement par médicaments est offert gratuitement par le biais des Services de santé sexuelle et reproductive en matière d’options (SHORS) et du Women’s Wellness Program. Cependant, une carte santé de l’Î.-P.-É. valide est requise.

Lien: www.princeedwardisland.ca(https://www.princeedwardisland.ca/en/information/health-pei/abortion-services)
`
				]
			}
		},
		{
			id: 'C12',
			title: 'Québec',
			content: {
				type: ['p', 'ul', 'p'],
				data: [
					`Toute personne dûment inscrite à la Régie de l’assurance maladie du Québec (RAMQ) et munie d’une ordonnance d’un médecin ou infirmière praticienne spécialisée (IPS), d’un carnet de réclamation ou d’une preuve temporaire d’admissibilité aux médicaments, peut bénéficier du programme de gratuité. Une personne âgée d’au moins quatorze (14) ans, mais de moins de dix-huit (18) ans, qui consent seule aux services fournis par le programme, conformément aux dispositions du Code civil, peut bénéficier du programme même si elle ne présente pas de carte d’assurance maladie ou de carnet de réclamation valide. Toute personne de dix-huit (18) ans et plus qui ne présente pas sa carte d’assurance maladie ou un carnet de réclamation valide doit payer le service ; ils peuvent donc demander un remboursement à la Régie en utilisant le formulaire prévu à cet effet.

Tout service obtenu hors du Québec n’est pas couvert par ce programme. Une exception à ce principe se produit lorsque:`,
					`Le médicament est fourni par un pharmacien qui a une entente particulière avec la Régie à cet effet.
La pharmacie est située dans une région frontalière au Québec.
Aucune pharmacie au Québec ne dessert la population dans un rayon de 32 kilomètres.`,
					`Lien: www.ramq.gouv.qc.ca(https://www.ramq.gouv.qc.ca/sites/default/files/documents/liste_med_2022-12-14_en_0.pdf)
          `
				]
			}
		},
		{
			id: 'C13',
			title: 'Saskatchewan',
			content: {
				type: ['p'],
				data: [
					`La Saskatchewan couvre le Mifegymiso à 100 % ayx personnes éligibles dans le cadre du régime d’assurance médicaments de la Saskatchewan. Les réclamations peuvent être soumises par voie électronique au régime d’assurance médicaments de la Saskatchewan.

Lien: formulary.drugplan.ehealthsask.ca(https://formulary.drugplan.ehealthsask.ca/SearchFormulary)
`
				]
			}
		},
		{
			id: 'C14',
			title: 'Yukon',
			content: {
				type: ['p', 'ul', 'p'],
				data: [
					`Grâce à un partenariat avec la Yukon Hospital Corporation, le gouvernement du Yukon offre désormais une couverture universelle du Mifegymiso. Ce partenariat facilite l’accès aux options disponibles au Yukon et garantit un accès plus équitable aux services d’avortement.

Les services médicaux pour le Mifegymiso sont disponibles à:`,
					`Whitehorse
Haines Junction
Dawson City
Watson Lake`,
					`Les personnes résidant au Yukon et vivant dans des communautés sans service médical local devront se déplacer pour consulter un médecin qui les aidera à mettre fin à une grossesse en toute sécurité avec le Mifegymiso.

Conformément à la Loi sur les frais de déplacement liés aux soins médicaux et à ses règlements, le service des déplacements pour soins médicaux fournira une subvention de voyage aux personnes éligibles qui voyagent dans le but d’obtenir le Mifegymiso en dehors de leur communauté d’origine.

Lien: open.yukon.ca(https://open.yukon.ca/sites/default/files/mt006-mIfe.pdf)
`
				]
			}
		},
		{
			id: 'M32',
			title: 'Points clés du counseling',
			content: {
				type: ['p', 'ul', 'p', 'ul', 'p'],
				data: [
					`Avant de se rendre à la pharmacie pour obtenir le MIFÉ / MISO, les personnes souhaitant avorter, ci-après dénommés “les personnes”, auront déjà eu une conversation avec les prescripteurs sur l’avortement par médicaments (AM), tels que les options de grossesse, l’éligibilité, les risques et l’efficacité[10].

Lorsqu’ils conseillent les personnes, les prescripteurs doivent fournir un espace privé pour le couseling, afin de garantir la confidentialité et de revoir les points clés ci-dessous en utilisant un langage inclusif[10]:`,
					// 'Counselling Points:',
					`Confirmer que la décision appartient à la personne, prise sans contrainte.
          Vérifier la date inscrite sur l’ordonnance ; si l’ordonnance a été rédigée 7 jours ou plus avant d’être apportée à la pharmacie, le pharmacien souhaitera peut-être faire un suivi auprès du prescripteur.
          Souligner qu’en cas de grossesse évolutive après l’AM, une nouvelle dose de MISO ou un avortement par instruments est recommandé car la MIFÉ et le MISO sont tératogènes.
          Exclure les contre-indications.
          Examiner la date et l’heure auxquelles les personnes prévoient prendre le MIFÉ / MISO.
          Revoir la date à laquelle la personne a un suivi avec leur prescripteur.`,
					'<b>S’assurer que la personne dispose des éléments suivants avant de partir</b>[10]:',
					`Serviettes et protections hygiéniques.
          Médicaments contre la douleur et/ou contre la nausée (en vente libre ou sur ordonnance).
          Accès aux soins d’urgence.
          Aide à la garde d’enfants, au transport et à l’épicerie.`,
					`<b>S’assurer que les personnes comprennent comment administrer MIFÉ / MISO, comment gérer les effets secondaires, et savent quand et comment demander des soins (voir ci-dessous)</b>.`
				]
			}
		},
		{
			id: 'M34',
			title: 'Suivi facultatif',
			content: {
				type: ['p', 'ul', 'p', 'ul'],
				data: [
					`Les personnes <b>doivent avoir</b> un suivi avec un professionnel de la santé

Un suivi auprès des pharmaciens est facultatif et peut avoir lieu 2 à 3 jours après l’administration du MISO. Au cours du suivi, les pharmaciens peuvent effectuer les opérations suivantes[9,10]:`,
					`Vérifier la bonne administration
Examiner la gestion des effets secondaires
Examiner les options de contraception
Renforcer le suivi des professionnels de la santé
Apporter un soutien émotionnel`,
					`Les réponses émotionnelles après un avortement par médicaments (AM) varient souvent. Certaines personnes se sentent soulagées et positives, tandis que d’autres éprouvent des sentiments de chagrin, de tristesse ou de culpabilité. D’autres peuvent avoir des sentiments mitigés. Ces émotions sont normales et peuvent ou non être liées aux circonstances socio-économiques, au manque de soutien social, à l’inconfort moral et aux conflits familiaux.

          Les personnes peuvent être soutenus en affirmant que les émotions mitigées sont normales et en explorant des stratégies d’adaptation et du soutien. Les ressources utiles incluent:`,
					`Exhale, une ligne téléphonique qui fournit un soutien émotionnel, des ressources et des informations après un avortement.
All-Options, une ligne pour discuter des expériences passées ou actuelles en matière d’avortement, d’adoption et de parentalité pour les personnes au Canada et aux États-Unis (1-888-493-0092).`
				]
			}
		},
		{
			id: 'M29',
			title: 'Interactions médicamenteuses',
			content: {
				type: ['p', 'ul', 'p'],
				data: [
					`La MIFÉ est métabolisée par le CYP3A4 et est également un inhibiteur compétitif irréversible du CYP3A4 et, dans une moindre mesure, des CYP 1A, 2B, 2D6 et 2E1. Étant donné que la MIFÉ se lie de manière irréversible au CYP et est lentement éliminée de l’organisme, des précautions doivent être prise lors de l’administration de la MIFÉ avec des médicaments qui sont des substrats du CYP3A4 et ont une marge thérapeutique étroite[10].

Les interactions médicamenteuses qui peuvent modifier le métabolisme de la MIFÉ comprennent[10]:`,
					`Inducteurs du CYP3A4 (glucocorticoïdes, antibiotiques macrolides, rifampicine, carbamazépine, benzodiazépines, barbituriques, millepertuis)
Inhibiteurs du CYP3A4 (cimétidine, kétoconazole, érythromycine, chloramphénicol, spironolactone, sécobarbital, jus de pamplemousse).`,
					`La MIFÉ a une activité antiglucocorticoïde ; cela peut diminuer temporairement l’efficacité de la corticothérapie, y compris les corticostéroïdes inhalés.[10].

Quant au MISO, il n’y a aucune interaction médicamenteuse connue. L’ingestion orale avec de la nourriture ou des antiacides peut réduire la biodisponibilité orale[10].`
				]
			}
		},
		{
			id: 'M30',
			title: 'Pharmacocinétique',
			content: {
				type: ['p', 'ul'],
				data: [
					`La MIFÉ pris par voie orale présente une pharmacocinétique non linéaire. Elle est rapidement absorbée et distribuée, atteignant des concentrations maximales après 0,75 heure. Elle est liée au plasma à 94-99 % et est métabolisée par les enzymes CYP, principalement le CYP3A4. L’élimination est relativement lente avec une demi-vie comprise entre 83 et 90 heures[10].

Le profil pharmacocinétique du MISO varie considérablement selon la voie d’administration[10]:`,
					`<b>Buccale</b>: le délai jusqu’à la première contraction utérine est de 67 minutes, soutenu pendant environ 90 minutes et commence à diminuer 5 heures suivant l’administration. La réponse utérine semble similaire à celle de l’administration vaginale, avec moins de variabilité interindividuelle.
<b>Vaginale</b>: le délai jusqu’à la première contraction utérine est de 82 minutes pour les comprimés secs et de 98 minutes pour les comprimés humidifiés, une activité soutenue est atteinte à 106 minutes et 128 minutes, respectivement. L’activité utérine commence à diminuer cinq heures après l’administration.
<b>Sublinguale</b>: les comprimés sont absorbés par la muqueuse en 20 minutes et le MISO atteint sa concentration sérique maximale à 30 minutes. Le métabolisme de premier passage est évité.`
				]
			}
		},
		{
			id: 'M31',
			title: 'Évaluation clinique',
			content: {
				type: ['p', 'ulul'],
				data: [
					`Les prescripteurs fourniront des évaluations cliniques avant de prescrire le MIFÉ / MISO. Grâce aux nouvelles lignes directrices de La SOGC concernant l’avortement par médicaments (AM) via télémédecine, les prescripteurs peuvent éviter les analyses sanguines et/ou l’échographie, pour assurer la prestation rapide de l’AM[7].`,
					[
						`<b>L’âge gestationnel</b> est déterminé à l’aide des antécédents médicaux, d’un test urinaire ou βhCG sérique, ou d’une échographie. L’échographie n’est pas nécessaire pour déterminer l’âge gestationnel, sauf en cas d’incertiture de la date des dernières menstruations (DDM).[6,7].
            <b>Une grossesse ectopique</b> est exclue en utilisant les antécédents médicaux pour dépister les facteurs de risque et les symptômes. L’échographie est recommandée s’il existe des facteurs de risque importants ou des symptômes évocateurs d’une grossesse ectopique.[6,7].
            Les ligne directrices pour <b>le test et l’administration du facteur Rhésus (Rh)</b> varient:`,
						`Ligne directrice clinique de La SOGC sur l’AM : le test Rh est recommandé lorsque l’âge gestationnel est supérieur à 47 jours[6].
            Ligne directrice de télémédecine de La SOGC sur l’AM: le test Rh peut être suspendu jusqu’à 70 jours d’âge gestationnel[7].
            Society of Family Planning: le test Rh n’est pas recommandé avant 12 semaines de gestation en cas d’avortement spontané, par médicaments ou par instruments[8].`,
						`<b>Une formule sanguine complète</b> pour mesurer le taux d’hémoglobine est indiquée en cas de risque accru d’anémie ; sinon c’est inutile[7].
            Une <b>antibioprophylaxie</b> de routine n’est pas nécessaire; le dépistage et le traitement au besoin constituent la stratégie de prise en charge privilégiée et est effectué par le prescripteur[6].`
					]
				]
			}
		},
		{
			id: 'M35',
			title: 'Configuration des installations',
			content: {
				type: ['p', 'ul', 'p'],
				data: [
					`Voici un guide général des étapes à suivre pour initier les services d’avortement par médicaments (AM) dans votre pharmacie. Certaines de ces étapes peuvent ne pas s’appliquer et d’autres considérations non répertoriées ci-dessous peuvent être nécessaires, en fonction de votre pharmacie.`,
					`Examiner les monographies de produit et les protocoles de délivrance de Mifégymiso.
            Consulter les directives cliniques pour prescrire l’avortement par médicaments au besoin.
            Se familiariser avec les règlements de votre ordre des pharmaciens provincial. Ce [résumé](PG1) contient certains règlements spécifiques aux provinces, mais pas tous.
            Préparer votre propre protocole et inviter d’autres membres du personnel à l’examiner et à fournir les commentaires.
            Se familiariser avec les régimes d’assurance provinciaux et la couverture de Mifégymiso.
            Explorer la volonté de délivrer le Mifégymiso parmi tout le personnel, y compris les assistants en pharmacie, les techniciens et les administrateurs de pharmacie, répondre à leurs préoccupations et à leurs possibles perceptions négatives, et déterminer la meilleure façon de lancer des services d’avortement dans votre pharmacie.
            Examiner le personnel actuel de la pharmacie pour déterminer la capacité à fournir un AM.
            Déterminer une personne ou une équipe clé qui aura la responsabilité principale des personnes ayant subi un AM.
            Développer, imprimer et distribuer des affiches pour faire savoir aux clients et aux autres professionnels de la santé que vous distribuez Mifégymiso.`,
					'Adapté de la [Checklist for starting medical abortion services](C43) de la Fédération Nationale de l’Avortement.'
				]
			}
		},
		{
			id: 'M39',
			title: 'À propos du MIFÉ-MISO',
			content: {
				type: ['p', 'i-full'],
				data: [
					`L’avortement est <b>légal</b> au Canada et les personnes n’ont pas besoin du consentement de leur partenaire ou d’un parent pour avorter. Il s’agit du <b>deuxième service de santé reproductive le plus répandu</b> au Canada: le tiers des personnes ayant la capacité d’être enceinte auront recours à un avortement au cours de leur vie.[2,14,15,18].

        L’avortement par médicaments utilise des pilules médicamenteuses pour mettre fin à une grossesse. Au Canada, les pilules abortives médicamenteuses sont combinées et vendues sous le nom de Mifegymiso. Le médicament est approuvé par Santé Canada jusqu’à 63 jours d’âge gestationnel, mais s’est avéré <b>sécuritaire et efficace</b> jusqu’à 70 jours par La SOGC du Canada et 77 jours par l’Organisation mondiale de la santé (OMS). Le counselling et les médicaments sont fournis <b>gratuitement</b> à toutes les personnes bénéficiant d’une assurance maladie provinciale et de plusieurs catégories <a href="/dispenser/couverture-et-assurance#C1" class="in" target="_blank">d’assurance maladie fédérale</a>. Cependant, il est important de noter que les personnes admissibles aux soins de santé dans une province, qui tentent d’accéder à un avortement par médicaments dans une autre province ou territoire, sont admissibles au counseling, mais pas aux médicaments eux-mêmes.

        <b>Mifegymiso</b> se présente généralement en deux boîtes: une boîte verte contenant 200 mg de mifépristone (MIFÉ) et une boîte orange contenant 800 mcg de misoprostol (MISO). Le MISO est utilisé pour l’avortement et pour d’autres conditions (par exemple, fausse couche, hémorragie post-partum). La MIFÉ aide à arrêter la croissance d’une grossesse et prépare le corps à vider l’utérus en ramollissant le col et en aidant la muqueuse de l’utérus à se décomposer. Le MISO provoque la dilatation du col et la contraction de l’utérus, provoquant ainsi la sortie des tissus issus de la grossesse du corps[14].`,
					assets.FrMifegymisoOverview
				]
			}
		},
		{
			id: 'M40',
			title: 'Qui peut prescrire',
			content: {
				type: ['p', 'ul', 'p'],
				data: [
					`Au moment d’écrire ces lignes, <b>les médecins et les infirmières praticiennes spécialisées</b> au Canada sont autorisés à prescrire Mifegymiso. <b>Les sages-femmes</b> de toutes les provinces et territoires, à l’exception du Québec, ne sont pas autorisées à prescrire Mifegymiso, mais elles peuvent prodiguer des soins d’avortement par médicaments lorsqu’elles travaillent en étroite collaboration avec des infirmières praticiennes spécialisées ou des médecins.

          Les prestataires d’avortement par médicaments peuvent être trouvés via:`,
					`Le portail des services d’avortement par médicaments d’Action Canada pour la santé et les droits sexuels (cliquer sur l’hyperlien puis sélectionner l’option “Avortement par médicaments”)
          La liste des cliniques d’Action Canada pour la santé et les droits sexuels.
          Application de référence à l’avortement de Choice Connect.`,
					`<b>Le counseling et l’évaluation clinique sont nécessaires avant de prescrire Mifegymiso.</b> Le counseling vise à aider les personnes à prendre une décision éclairée en comprenant leurs options (avortement versus poursuivre la grossesse, et avortement par médicaments versus avortement par instruments). Les évaluations cliniques visent à confirmer que l’âge gestationnel ne dépasse pas le seuil (63 jours selon Santé Canada, 70 jours selon la Société des obstétriciens et gynécologues du Canada), pour exclure des conditions graves telles que la grossesse ectopique et l’anémie, et pour déterminer la nécessité d’analyses sanguines telles que le test du facteur Rh[6].

          Dans les cas de <b>soins virtuels ou hybride d’avortement par médicaments</b> (également appelé avortement sans contact ou à faible contact), le nombre de visites est minimisé en effectuant des rendez-vous de counseling, de dépistage et de suivi virtuellement par téléphone ou par vidéo. L’objectif est de <b>réduire la nécessité de parcourir de longues distances ou des délais pour avorter</b>. Cependant, les soins virtuels de l’avortement par médicaments peuvent mettre les personnes à risque en l’absence d’échographie, qui permet une évaluation précise de l’âge gestationnel ou de la présence d’une grossesse ectopique. De plus, l’avortement par médicaments virtuel peut nécessiter un suivi (téléphonique) plus fréquent pour surveiller les symptômes et le risque de grossesse évolutive et de grossesse ectopique, nécessitant ainsi souvent davantage de ressources cliniques. Pour ces raisons, la possibilité de proposer un avortement par médicaments via télémédecine dépend de l’expérience des prescripteurs, des ressources cliniques, des besoins des personnes et de leur sécurité[7].`
				]
			}
		},
		{
			id: 'M41',
			title: 'Où obtenir le médicament',
			content: {
				type: ['p'],
				data: [
					`Dans la plupart des cas, <b>les pharmaciens</b> sont responsables de la délivrance des médicaments aux personnes, mais certaines cliniques sont également autorisées à délivrer les médicaments directement. Les lignes directrices des [Ordres professionnels des pharmaciens](PG1) de chaque province ou territoire peuvent varier quant à savoir si les personnes doivent récupérer leurs médicaments en personne ou si les médicaments peuvent être livrés aux personnes par des services postaux.`
				]
			}
		},
		{
			id: 'M42',
			title: 'Comment conseiller la personne',
			content: {
				type: ['p', 'ul', 'p', 'ul', 'i-full'],
				data: [
					`Le counseling est important pour aider les personnes à prendre des décisions éclairées en comprenant leurs options (avortement versus parentalité, et avortement par médicaments versus par instruments). Lors du counseling, il est également important de comprendre les préférences et les circonstances des personnes afin de les conseiller sur la meilleure marche à suivre.

          <b>L’avortement par médicaments</b> convient aux personnes qui[6]:`,
					`Préfèrent une méthode non-invasive.
          Préfèrent être dans le confort de leur foyer.
          Ont la confiance de pouvoir gérer le processus et les effets secondaires à la maison.
          Sont en mesure de prendre 1 à 3 jours de congé ou d’autres responsabilités pour procéder à l’avortement.
          Manquent de transport pour se rendre à la clinique pour un avortement par instruments (mais nécessite néanmoins l’accès aux services d’urgence en cas de complications).`,
					'<b>L’avortement par instruments</b> convient aux personnes qui[6]:',
					`Préfèrent bénéficier du soutien en personne ainsi qu’une surveillance par des professionnels de la santé en clinique ou à l’hôpital.
          Souhaitent que l’avortement soit fourni rapidement afin de pouvoir reprendre le travail ou d’autres responsabilités.
          Se sentent à l’aise avec l’examen gynécologique et l’utilisation d’instruments médicaux.
          Sont confortable avec une anesthésie locale ou générale pour gérer la douleur.
          Ne veulent pas divulguer la grossesse et l’avortement aux personnes avec qui elles vivent (comme les partenaires, les colocataires, les collègues de travail), car il pourrait être difficile de cacher des saignements abondants et des crampes fortes.`,
					assets.FrAbortionOptions
				]
			}
		},
		{
			id: 'M43',
			title: 'Se préparer à l’avortement par médicaments',
			content: {
				type: ['p', 'ul'],
				data: [
					`Avant de procéder à un avortement par médicaments, la personne doit savoir comment administrer le médicament, quels sont les effets secondaires, comment identifier les signes de complications et quand demander des soins d’urgence[2].

          S’assurer que la personne dispose des éléments suivants avant de procéder à un avortement par médicaments:`,
					`Serviettes et protections hygiéniques.
          Médicaments contre la douleur et/ou contre les nausées (en vente libre ou sur ordonnance).
          Accès aux soins d’urgence.
          Aide à la garde d’enfants, au transport et à l’épicerie.`
				]
			}
		},
		{
			id: 'M44',
			title: 'Offrir du soutien post-avortement',
			content: {
				type: ['p', 'ul', 'h2', 'p', 'i-full'],
				data: [
					`Les personnes qui choisissent un avortement par médicaments devraient avoir un suivi avec leur professionnel de la santé pour confirmer la complétion de l’avortement, gérer les complications, recevoir du counseling en matière de contraception et obtenir un soutien émotionnel si nécessaire. Les personnes peuvent également avoir besoin d’une échographie ou d’analyses sanguines pour confirmer que l’avortement est complet et exclure la possibilité d’une grossesse ectopique.

            <b>Mode de suivi</b>[6]:

            Dans la plupart des situations, les suivis sont prévus 7 à 14 jours après la prise du misoprostol (le deuxième médicament), mais parfois le suivi peut avoir lieu dès 3 jours après le misoprostol. Le suivi peut se faire par téléphone ou en personne, selon les circonstances.

            <b>Soutien émotionnel</b>[6]:

            Les réactions émotionnelles après un avortement par médicaments varient souvent. Certaines personnes se sentent soulagées et positives, tandis que d’autres éprouvent des sentiments de deuil, de tristesse ou de culpabilité, et d’autres encore éprouvent des sentiments mitigés. Ces émotions sont normales et peuvent être liées ou non aux circonstances socio-économiques, au manque de soutien social, au malaise moral et aux conflits familiaux.

            Les personnes qui choisissent un avortement par médicaments peuvent être soutenues en affirmant que les émotions mitigées sont normales et en explorant des stratégies d’adaptation et du soutien. Les ressources utiles incluent:`,
					`Exhale, une ligne téléphonique qui fournit un soutien émotionnel, des ressources et des informations après un avortement.
            All-Options, une ligne téléphonique pour discuter des expériences passées ou actuelles en matière d’avortement, d’adoption et de parentalité pour les personnes au Canada et aux États-Unis (1-888-493-0092).`,
					'Contraception post-avortement:',
					`Les personnes qui subissent un avortement par médicaments peuvent retrouver rapidement leur fertilité et devraient donc envisager de prendre une contraception.`,
					assets.FrPostabortionContraception
				]
			}
		},
		{
			id: 'F1',
			title: 'Médicaments',
			content: {
				type: ['p'],
				data: [
					`Q: Quand le régime mifépristone (RU-486) / misoprostol a-t-il été approuvé pour la première fois au Canada? Dans d’autres pays?
R: Le Mifé-Miso a été approuvé par Santé Canada en juillet 2015.1 Il a été approuvé pour la première fois en France et en Chine en 1988, et son utilisation est maintenant approuvée dans plus de 60 pays[2].

        Q: Quel est le schéma posologique approuvé pour MIFE 200 / MISO 800 au Canada?
R: 200 mg de mifépristone (orale) suivi de 800 μg de misoprostol 24 à 48 heures après la dose de mifépristone (buccale, vaginale ou sublinguale).

Q: Si la personne souhaitant un avortement par médicaments a une contre-indication absolue à l’utilisation de MIFE200 / MISO800, quelles sont les autres options d’avortement?
R: Pour les grossesses jusqu’à 63 jours, vous pouvez proposer à la personne 50 mg de méthotrexate (oral ou intramusculaire) suivi de 800 μg de misoprostol (vaginal ou buccal) 3 à 5 jours plus tard, s’il n’y a pas de contre-indications.3 L’utilisation de schémas thérapeutiques contenant uniquement du misoprostol peut également être utilisée pour les grossesses allant jusqu’à 63 jours, bien que cela soit moins efficace que d’autres schémas thérapeutiques[4-6]. Vous pouvez également proposer un avortement par instruments.

Q: L’avortement par médicaments affecte-t-il la fertilité de la personne ou l’issue des grossesses futures?
R: Non. La fertilité est rapidement rétablie après un avortement par médicaments. Les personnes ayant un antécédant d’avortement par médicaments ne présentent pas de risque accru d’accouchement prématuré ou de petit poids de naissance par rapport aux personnes n’ayant jamais eu d’avortement[7].`
				]
			}
		},
		{
			id: 'F2',
			title: 'Counseling',
			content: {
				type: ['p', 'ul'],
				data: [
					`Q: Quels sujets devrais-je aborder lors de la séance initiale de counseling sur les options de grossesse avec la personne souhaitant avorter?
R: Ces séances comprennent généralement une discussion sur: (a) les options de grossesse (avortement, parentalité, adoption); (b) les méthodes d’avortement; (c) les risques et les avantages de chaque méthode d’avortement; (d) la confirmation que la décision est volontaire et que le soutien est présent; (e) les besoins émotionnels, les capacités d’adaptation et les valeurs; (f) les options de contraception.

Q: Comment puis-je soutenir émotionnellement la personne après l’avortement?
A: La réaction émotionnelle à l’avortement peut varier considérablement d’une personne à l’autre. Cependant, tous bénéficieront d’un environnement propice à la divulgation et sans jugement, la normalisation des réactions courantes et l’exploration de stratégies de soutien et d’adaptation. Certaines personnes peuvent bénéficier de counseling supplémentaire et avoir besoin d’être orientées vers des ressources additionnelles[7-15].`,
					`Exhale, une ligne téléphonique qui fournit un soutien émotionnel, des ressources et des informations après un avortement.
All-Options, une ligne d’assistance téléphonique pour discuter des expériences passées ou actuelles en matière d’avortement, d’adoption et de parentalité pour les personnes au Canada et aux États-Unis (1-888-493-0092).`
				]
			}
		},
		{
			id: 'F3',
			title: 'Effets secondaires et complications',
			content: {
				type: ['p', 'ul', 'p'],
				data: [
					`Q: Que ressentira une personne lors d’un avortement par médicaments avec Mifé-Miso?
R: Quelques heures après l’administration du misoprostol, la personne doit s’attendre à des saignements plus abondants que d’habitude avec des caillots pendant 2 à 4 heures. Si la grossesse est inférieure à 56 jours d’âge gestationnel, les tissus peuvent passer sans qu’il y ait évidence d’un fœtus. Après 56 jours d’âge gestationnel, les tissus fœtaux peuvent se dissimuler lors de l’expulsion16. Le misoprostol peut provoquer de la diarrhée, des frissons et de la fièvre, des nausées, des vomissements, des maux de tête et des étourdissements[17-20].

Q: Quels facteurs influencent la douleur qu’une personne ressent lors d’un avortement par médicaments?
R: Les personnes de moins de 18 ans signalent plus fréquemment des douleurs que les adultes lorsqu’elles utilisent MIFE200 / MISO800[19]. Des doses plus élevées de misoprostol et un âge gestationnel plus avancé sont également associés à davantage de douleur.7 Moins de douleur est signalée par les personnes ayant déjà accouché[21].

Q: Quels conseils pour la gestion des symptômes puis-je proposer à la personne qui subit un avortement par médicaments MIFE200 / MISO800?
R: Les AINS peuvent être utilisés pour le contrôle de la douleur dans la plupart des cas, tels que l’ibuprofène 200 à 400 mg toutes les 8 heures ou le naproxen 250 à 500 mg toutes les 12 heures au besoin[21]. Une prescription d’analgésiques opioïdes légers (par exemple, codéine ou oxycodone) peuvent également être proposés au besoin pour traiter des crampes ou des douleurs intenses[21]. Le dimenhydrinate, l’ondansétron ou le diclectin peuvent être proposés pour gérer les nausées

Q: Comment définit-on « trop de saignements » pour une personne qui a recours à un avortement par médicaments?
R: Si, après l’avortement, deux serviettes hygiéniques maxi sont trempées par heure pendant plus de deux (2) heures consécutives et/ou si la personne ressent des étourdissements, des vertiges ou un rythme cardiaque accéléré, il s’agit de “trop de saignements.”1 Vous devez diriger la personne vers des soins médicaux d’urgence[22].

Q: Un pharmacien devrait-il obtenir une nouvelle prescription du médecin ou de l’infirmière praticienne spécialisée qui a prescrit le Mifé-Miso, si des vomissements surviennent dans les 30 minutes suivant la prise de la dose de MISO?
R : Le misoprostol est rapidement absorbé lorsqu’il est administré par voie buccale. Le consensus suggère que la plupart des prescripteurs observeraient l’effet du misoprostol absorbé pendant 48 heures. Si le pharmacien est certain que la dose a été vomie en moins de 30 minutes, il peut faire un suivi directement auprès du prescripteur pour le tenir informé de la situation.

Le Guide de ressources du pharmacien pour la distribution de Mifé-Miso de la CPCA indique:`,
					`En cas de vomissements lors de l’absorption buccale de MISO, contacter le prescripteur pour une évaluation. Si aucun saignement n’apparaît dans les 48 heures suivant l’administration de MISO, une autre dose peut être nécessaire.
Si vomissement des fragments de MISO 30 minutes après l’administration buccale : aucune action requise ; le médicament a déjà été absorbé.`,
					`Q: Comment savoir si une personne subit un choc toxique dû à une infection à Clostridium?
R: Les symptômes sont vagues et comprennent un malaise général avec des nausées, des vomissements et de la diarrhée, une faiblesse, une absence de fièvre (ou une légère fièvre), des douleurs abdominales minimes, des symptômes pseudo-grippaux, une hypotension, une tachycardie, un œdème, un taux élevé d’hémoglobine (hémoconcentration), et un nombre élevé de globules blancs[23-25].`
				]
			}
		},
		{
			id: 'F4',
			title: 'Allaitement',
			content: {
				type: ['p'],
				data: [
					`Q: Le Mifé-Miso peut-il être administré à une femme qui allaite?
R: Les données actuellement disponibles suggèrent qu’avec la dose actuelle de Mifé-Miso, l’allaitement n’a pas besoin d’être interrompu.

L’information provient de la National Library of Medicine LactMed database et de la National Abortion Federation Protocol for Mifepristone / misoprosol for Early Medical Abortion.

<b><i>Résumé de l’utilisation de la mifépristone pendant l’allaitement (NLM):</i></b>

Des informations limitées indiquent qu’il n’est pas nécessaire d’interrompre l’allaitement après une dose unique de mifépristone. Une dose de 200 mg pourrait être préférable à une dose de 600 mg chez les mères qui allaitent.

<b>Niveaux de médicaments:</b>

Niveaux maternels. Douze femmes (la plupart entre 6 à 12 mois après l’accouchement), ayant eu recours à un avortement par médicaments avec mifépristone et misoprostol, ont fourni des échantillons de lait jusqu’à 5 jours après la procédure pour mesurer la mifépristone.

Chez les 2 femmes ayant reçu une dose unique de 200 mg par voie orale, la mifépristone était à tout moment indétectable (<5,6 mcg/L) dans le lait maternel. Parmi les 10 femmes ayant reçu une seule dose orale de 600 mg, les taux moyens de mifépristone dans le lait maternel étaient de 172 mcg/L le jour 1 (n = 9) ; 66 mcg/L le jour 2 (n = 9) ; 31 mcg/L le jour 3 (n = 10) ; 24 mcg/L le jour 4 (n = 4) ; et 25 mcg/L le jour 5 (n = 3).

Les taux de mifépristone dans le lait maternel étaient les plus élevés dans les échantillons prélevés entre 6 et 9 heures après l’administration du médicament. Les échantillons prélevés entre 9 et 15 heures après la dose présentaient des taux de mifépristone beaucoup plus faibles. Les auteurs ont estimé qu’un nourrisson entièrement allaité recevrait une dose ajustée en fonction du poids de 0,5 % de la dose maternelle. Les auteurs ont suggéré qu’il n’était pas nécessaire d’interrompre l’allaitement après une dose unique de mifépristone et qu’une dose de 200 mg pourrait être préférable à une dose de 600 mg chez les mères qui allaitent[26].

Résumé du misoprostol: Le misoprostol est un analogue de la prostaglandine E1. La prostaglandine E1 et d’autres prostaglandines apparaissent normalement dans le colostrum et le lait[27-29]. En raison des faibles niveaux de misoprostol dans le lait maternel, les quantités ingérées par le nourrisson sont faibles et ne devraient pas provoquer d’effets indésirables chez les nourrissons allaités. Aucune précaution particulière n’est requise.

Aucune preuve ne soutient la nécessité de tirer et jeter sonlait lors d’un avortement par médicaments lorsqu’une personne allaite. Les niveaux de mifépristone dans le lait maternel après qu’une personne ait reçu 600 mg de mifépristone sont faibles et indétectables après une dose de 200 mg. Les niveaux de misoprostol dans le lait maternel sont également faibles et les petites quantités ingérées par les nourrissons ne devraient pas provoquer d’effets indésirables[26]. (Fédération Nationale de l’Avortement, révisé en avril 2016).`
				]
			}
		},
		{
			id: 'F5',
			title: 'Grossesse multiple',
			content: {
				type: ['p', 'ul', 'p'],
				data: [
					`Q: Mifé-Miso peut-il être utilisé pour interrompre une grossesse multiple (c’est-à-dire une grossesse gémellaire)? Quelles sont les preuves / le taux de réussite?
R: Bien qu’un rapport de cas ait révélé un échec de l’utilisation de la mifépristone pour l’avortement par médicaments chez une personne ayant une grossesse gémellaire, Hayes, J.L. et al. a effectué une analyse secondaire de l’efficacité du traitement et des effets secondaires sur une population recevant 200 mg de mifépristone par voie orale et 800 mcg de misoprostol par voie vaginale pour un avortement par médicaments jusqu’à 63 jours et ont montré[30]:`,
					`Sur 2 208 sujets, 24 (1,1 %) femmes ont eu des jumeaux.
Le succès du traitement n’était pas statistiquement différent pour les grossesses gémellaires et uniques (91 % contre 97 %, p = 0,19).
Les effets secondaires perçus, les saignements et la douleur n’étaient pas statistiquement différents entre les groupes.`,
					`Dans une étude de cas d’un échec d’avortement médical, Sorensen, E.C. et al. ont émis l’hypothèse que les grossesses gémellaires pourraient nécessiter une dose de mifépristone plus élevée que les grossesses uniques[31]. Mais aucun essai n’a été réalisé pour tester cette hypothèse et cet article a été fortement critiqué par Hausknecht, R. en réponse à l’auteur. Compte tenu de ces résultats, il est raisonnable de pratiquer un avortement par médicaments avec de la mifépristone et du misoprostol en présence d’une grossesse gémellaire jusqu’à 63 jours.`
				]
			}
		},
		{
			id: 'F6',
			title: 'Methadone',
			content: {
				type: ['p'],
				data: [
					`Q: Y a-t-il une interaction entre la méthadone et la mifépristone?
        R: Conclusion:

La surveillance post-commercialisation de l’utilisation de la mifépristone dans de nombreux pays au cours des 25 dernières années n’a pas soulevé de préoccupations quant à cette interaction. Bien qu’il existe peu d’essais et de littérature publiés sur cette interaction médicamenteuse, le principe de précaution stipule que les personnes utilisant les deux médicaments simultanément soient correctement informées, accompagnées pendant le processus d’avortement et suivies pour la survenue d’événements indésirables et l’achèvement de l’avortement. Même si l’arythmie n’était pas un effet secondaire potentiel basé sur la pharmacodynamie, elle pourrait apparaître comme un effet indésirable du médicament dans la mesure où la mifépristone pénètre plus largement dans certaines populations, y compris chez les personnes dépendantes aux opioïdes/aux opiacés.

Vous trouverez ci-dessous l’opinion d’un professeur de pharmacologie à l’Université de la Colombie-Britannique (UBC). De plus, trois leaders très expérimentés dans la fourniture de mifépristone aux États-Unis ont exprimé leur opinion selon laquelle ils n’ont vu aucune preuve d’une quelconque interaction ou effets indésirables. La réponse, du point de vue du métabolisme/pharmacocinétique des médicaments, est: probablement pas.

L’explication (légèrement plus longue) est la suivante : La méthadone se lie principalement au récepteur opioïde “mu” de manière similaire à d’autres opioïdes, c’est pourquoi il s’agit d’une thérapie de remplacement pour les personnes ayant des problèmes de dépendance et de tolérance. La méthadone a effectivement certains effets hors cible au niveau du récepteur N-méthyl-D-aspartate (NMDA), qui est un récepteur du glutamate ou un récepteur excitateur dans le cerveau. En termes de métabolisme et d’excrétion, la méthadone est également soumise à un métabolisme assez important du CYP (enzymes du cytochrome P450) provenant du CYP3A4, du CYP2D6 et du CYP2B6. De plus, l’un des problèmes de la méthadone est qu’elle est facilement transportée par le transporteur P-gp (P-glycoprotéine 1). Cette protéine de transport se trouve dans le sang humain: la barrière cérébrale (peu d’autres le sont) et chez la minorité significative de personnes qui expriment une P-gp élevée, elle fait de la méthadone un médicament “moins efficace.”

En revanche, la mifépristone (RU486) est un liant extrêmement puissant du récepteur de la progestérone (IC50 = 0,025 nM pour le récepteur de la progestérone selon Katzung). Lors d’un avortement, le trophoblaste (precurseur du placenta) se détache de la paroi utérine (ce qui nécessite une signalisation de la progestérone) – c’est le mécanisme d’action de la mifépristone. La mifépristone elle-même agit en tant qu’inhibiteur modéré du métabolisme par le CYP3A4 et peut ainsi modifier les concentrations d’autres médicaments. En raison de sa demi-vie prolongée et de sa liaison irréversible au CYP, les interactions potentielles de la mifépristone doivent être vérifiées, en particulier, pour les médicaments ayant un index thérapeutique étroit. Les exemples incluent: les immunosuppresseurs (par ex. la cyclosporine, le sirolimus, le tacrolimus); les médicaments cardiovasculaires (par ex. les bloqueurs des canaux calciques, les antiarythmiques, autres); les agents analgésiques/anesthésiques (par ex. le fentanyl, la kétamine, la méthadone, autres). L’effet d’une dose unique de mifépristone sur le métabolisme et l’effet d’autres médicaments fortement dépendants du CYP3A4 pour leur métabolisme ou leur activation peuvent persister jusqu’à deux semaines. Les interactions avec ces médicaments doivent être vérifiées avant l’administration de la mifépristone.

Il n’y a actuellement aucune littérature indiquant que les personnes sous méthadone ont des expériences meilleures ou pires avec la RU486 comme abortif, à l’exception des deux points suivants : (1) elles peuvent être plus susceptibles d’être exposés à des difficultés à suivre le traitement tel qu’indiqué et pourraient donc déclarer avoir pris le médicament sans l’avoir fait, et (2) il existe des rapports contradictoires concernant les effets de la méthadone sur le rythme cardiaque (fait étrange) et qu’associée à la mifépristone pourrait provoquer des arythmies graves.

En résumé, il semble que Mifé-Miso pourrait ralentir le métabolisme de la méthadone pendant un certain temps, ce qui pourrait entraîner des niveaux légèrement plus élevés de méthadone.`
				]
			}
		},
		{
			id: 'S1',
			title: 'Guides et aides-mémoires',
			content: {
				type: ['p'],
				data: [
					`<b>Checklist for starting medical abortion services</b>, 
					National Abortion Federation.
					Link: naf-checklist(https://www.prochoice.org/pubs_research/publications/downloads/professional_education/medical_abortion/checklist_starting_services.pdf)
					
					<b>Medical abortion prescriber checklist resource guide</b>, 
					Planned Parenthood, the University of British Columbia & CART Access Project.
					Link: ma-resource-guide(https://caps-cpca.ubc.ca/AnnokiUploadAuth.php/8/8b/Medical_Abortion_Prescriber_Checklist_Resource_Guide.pdf)
					
					<b>Medical abortion prescriber checklist</b>, 
					Planned Parenthood, the University of British Columbia & CART Access Project.
					Link: ma-checklist(https://caps-cpca.ubc.ca/AnnokiUploadAuth.php/a/af/Medical_Abortion_Prescriber_Checklist.pdf)`
				]
			}
		},
		{
			id: 'S2',
			title: 'Formations et webinaires',
			content: {
				type: ['p'],
				data: [
					`<b>SOGC’s medical abortion training program</b>, 2024
					Link: sogc-training(https://www.sogc.org/en/rise/Events/event-display.aspx?EventKey=MATP2)
					
					<b>NAF Canada’s medication abortion training for primary care providers</b>, 2023
					Link: nafc-training(https://nafcanada.org/medication-abortion-virtual-course/)`
				]
			}
		},
		{
			id: 'S3',
			title: 'Monographies, lignes directrices et protocoles',
			content: {
				type: ['p'],
				data: [
					`<b>Health Canada MIFISO product monograph</b>, 2022
					Linepharma International Limited
					Link: hres.ca()

					<b>Medical abortion</b>, 2016
					Journal of Obstetrics and Gynaecology Canada
					Link: sogc-ma()

					<b>Canadian protocol for the provision of medical abortion via telemedicine</b>, 2020
					Society of Obstetrics and Gynaecology Canada
					Link: sogc-telemedicine()

					<b>Induced abortion: updated guidance during pandemics and periods of social disruption</b>, 2020
					Society of Obstetrics and Gynaecology Canada
					Link: sogc-guidance()

					<b>NAF Protocol for early abortion with mifepristone and misoprostol</b>, 2016
					National Abortion Federation Canada
					Link: nafc-protocol()

					<b>Society of Family Planning committee – Consensus on Rh testing in early pregnancy</b>, 2022
					Horvath S, Goyal V, Traxler S, Prager S. Contraception. 2022 Oct;114:1-5
					Link: sfp-guideline()

					<b>Client information about evidence-based telemedicine medication abortion</b>, 2020
					Women’s College Hospital
					Link: wch()

					<b>Abortion care guideline</b>, 2022
					World Health Organization
					Link: who-guideline()`
				]
			}
		},
		{
			id: 'S4',
			title: 'Exemples de formulaires de consentement',
			content: {
				type: ['p'],
				data: [
					`<b>Informed consent for mifepristone / misoprostol abortion in Canada</b>
					The CART Access Project
					
					<b>Consent to medical abortion</b>, 2017
					Planned Parenthood Ottawa and the SHORE Centre`
				]
			}
		},
		{
			id: 'S5',
			title: 'Instructions pour la patientèle',
			content: {
				type: ['p'],
				data: [
					`<b>It’s My Choice</b>, 2024
					An interactive tool to help people choose between medication and procedural abortion
					Link: its-my-choice(https://www.sexandu.ca/its-my-choice/)

					<b>How to decide between medication and procedural Abortion</b>, 2024
					CART-GRAC and the Society of Obstetricians and Gynaecologists of Canada

					<b>Administration instruction</b>, 2024
					CART-GRAC and the Society of Obstetricians and Gynaecologists of Canada

					<b>How to manage side effects of medication abortion</b>, 2024
					CART-GRAC and the Society of Obstetricians and Gynaecologists of Canada

					<b>Post-abortion contraception options</b>, 2024
					CART-GRAC and the Society of Obstetricians and Gynaecologists of Canada

					<b>What to expect when ending a pregnancy at home</b>, 2023
					Canadian Pharmacists Association & The CART Access Project
					Link: cpha-what-to-expect(https://www.pharmacists.ca/cpha-ca/assets/File/education-practice-resources/SRH/SRH_OnePager_MedicationAbortion_EN.pdf)

					<b>What to expect during a medical abortion</b>, 2017
					Planned Parenthood Ottawa and the SHORE Centre

					<b>Medication abortion instruction</b>, 2017
					Planned Parenthood Ottawa and the SHORE Centre

					<b>Mifegymiso medication guide</b>
					Celopharma`
				]
			}
		},
		{
			id: 'S6',
			title: "Boîtes à outils pour répondre aux préoccupations liées à l'avortement",
			content: {
				type: ['p'],
				data: [
					`<b>Debunking medication abortion myths</b>, 2023
					Canadian Pharmacists Association & The CART Access Project
					Link: cpha-debunking-myth(https://www.pharmacists.ca/cpha-ca/assets/File/education-practice-resources/SRH/SRH_Myths_and_Facts_EN.pdf)

					<b>The abortion options: A value clarification guide for health care professionals</b>, 2005
					National Abortion Federation
					Link: naf-value-clarification(https://prochoice.org/store/the-abortion-option-a-values-clarification-guide-for-health-professionals/)

					<b>Integrating early abortion services into primary care</b>, 2019
					Reproductive Health Access Project
					Link: rhap-abortion(https://www.reproductiveaccess.org/wp-content/uploads/2014/12/integrating_abortion.pdf)

					<b>Value clarification workshop</b>, 2022
					Reproductive Health Access Project
					Link: rhap-workshop(https://www.reproductiveaccess.org/resource/values-clarification-workshop/)`
				]
			}
		},
		{
			id: 'S7',
			title: 'Boîtes à outils pour soutenir les communautés mal desservies',
			content: {
				type: ['p'],
				data: [
					`
						<b>A handbook for healthcare providers working with clients from diverse communities</b>, 2019
						Action Canada for Sexual Health & Rights
						Link: action-canada-handbook(https://www.actioncanadashr.org/sites/default/files/2019-04/ActionCanadaSHR-SRH2017-Handbook-EN.pdf)

						<b>The Indigenous ally toolkit</b>, 2018
						Montreal Urban Aboriginal Community Strategy Network
						Link: ally-toolkit(https://www.segalcentre.org/common/sitemedia/201819_Shows/ENG_AllyTookit.pdf)

						<b>Norma Scarborough Fund, a travel fund for those who need access to abortion</b>
						Link: norma-scarborough-action-canada(https://secure.actioncanadashr.org/en/form/norma-scarborough-fund)

						<b>Patient Assistance Fund for those who need access to abortion</b> (1-800-722-9100)
						Link: patient-assistance-fund-naf(https://nafcanada.org/about/contact-us/)`
				]
			}
		},
		{
			id: 'S8',
			title: 'Guides et aides-mémoires',
			content: {
				type: ['p'],
				data: [
					`<b>A road map for all pharmacists</b>, 2023
					Canadian Pharmacists Association & The CART Access Project
					Link: cpha-roadmap()

					<b>Pharmacist resource guide for medical abortion</b>, 2018
					Judith Soon & Nevena Rebic; The CART Access Project
					Link: cart-resourceguide()

					<b>Pharmacist checklist for medical abortion</b>, 2018
					Judith Soon & Nevena Rebic; The CART Access Project
					Link: cart-checklist()`
				]
			}
		},
		{
			id: 'S9',
			title: 'Formations et webinaires',
			content: {
				type: ['p'],
				data: [
					`<b>SOGC’s medical abortion training program</b>, 2024
					Link: sogc-training()

					<b>NAF Canada’s medication abortion training for primary care providers</b>, 2023
					Link: nafc-training()

					<b>Case-based quizzes on medication abortion for pharmacists</b>
					Link: pharmacy5in5()`
				]
			}
		},
		{
			id: 'S10',
			title: 'Monographies, lignes directrices et protocoles',
			content: {
				type: ['p'],
				data: [
					`<b>Health Canada MIFISO product monograph</b>, 2022
					Linepharma International Limited
					Link: hres.ca()

					<b>Medical abortion</b>, 2016
					Journal of Obstetrics and Gynaecology Canada
					Link: sogc-ma()

					<b>Canadian protocol for the provision of medical abortion via telemedicine</b>, 2020
					Society of Obstetrics and Gynaecology Canada
					Link: sogc-telemedicine()

					<b>Induced abortion: updated guidance during pandemics and periods of social disruption</b>, 2020
					Society of Obstetrics and Gynaecology Canada
					Link: sogc-guidance()

					<b>NAF Protocol for early abortion with mifepristone and misoprostol</b>, 2016
					National Abortion Federation Canada
					Link: nafc-protocol()

					<b>Abortion care guideline</b>, 2022
					World Health Organization
					Link: who-guideline()`
				]
			}
		},
		{
			id: 'S11',
			title: 'Affiches et documents pour la patientèle',
			content: {
				type: ['p'],
				data: [
					`<b>Posters for pharmacies</b>, 2023
					Canadian Pharmacists Association & The CART Access Project
					Link: cpha-poster()

					<b>What to expect when ending a pregnancy at home</b>, 2023
					Canadian Pharmacists Association & The CART Access Project
					Link: cpha-what-to-expect()

					<b>How to decide between medication and procedural Abortion</b>, 2024
					CART-GRAC and the Society of Obstetricians and Gynaecologists of Canada

					<b>Administration instruction</b>, 2024
					CART-GRAC and the Society of Obstetricians and Gynaecologists of Canada

					<b>How to manage side effects of medication abortion</b>, 2024
					CART-GRAC and the Society of Obstetricians and Gynaecologists of Canada

					<b>Post-abortion contraception options</b>, 2024
					CART-GRAC and the Society of Obstetricians and Gynaecologists of Canada

					<b>What to expect during a medical abortion</b>, 2017
					Planned Parenthood Ottawa and the SHORE Centre
					Link: ppo-what-to-expect()

					<b>Medical abortion instruction</b>, 2017
					Planned Parenthood Ottawa and the SHORE Centre
					Link: ppo-ma-instruction()

					<b>Mifegymiso medication guide</b>
					Celopharma
					Link: medication-guide()`
				]
			}
		},
		{
			id: 'S12',
			title: 'Boîtes à outils pour répondre aux préoccupations liées à l’avortement',
			content: {
				type: ['p'],
				data: [
					`<b>Debunking medication abortion myths</b>, 2023
					Canadian Pharmacists Association & The CART Access Project
					Link: cpha-debunking-myth()

					<b>The Abortion options: A value clarification guide for health care professionals</b>, 2005
					National Abortion Federation
					Link: naf-value-clarification()

					<b>Integrating early abortion services into primary care</b>, 2019
					Reproductive Health Access Project
					Link: rhap-abortion()

					<b>Value clarification workshop</b>, 2022
					Reproductive Health Access Project
					Link: rhap-workshop()`
				]
			}
		},
		{
			id: 'S13',
			title: 'Boîtes à outils pour soutenir les communautés mal desservies',
			content: {
				type: ['p'],
				data: [
					`<b>A handbook for healthcare providers working with clients from diverse communities</b>, 2019
					Action Canada for Sexual Health & Rights
					Link: action-canada-handbook()

					<b>The Indigenous ally toolkit</b>, 2018
					Montreal Urban Aboriginal Community Strategy Network
					Link: ally-toolkit()

					<b>Norma Scarborough Fund, a travel fund for those who need access to abortion</b>
					Link: norma-scarborough-action-canada()

					<b>Patient Assistance Fund for those who need access to abortion</b> (1-800-722-9100)
					Link: patient-assistance-fund-naf()`
				]
			}
		},
		{
			id: 'S14',
			title: 'À propos de l’avortement par medicaments',
			content: {
				type: ['p'],
				data: [
					`<b>Update on medical abortion</b>, 2020
					Bancsi A & Grindrod K; Canadian Family Physician
					Link: cfp-ma()

					<b>Early abortion options</b>, 2022
					Reproductive Health Access Project
					Link: rhap-abortion-options()

					<b>Accessing abortion in Canada</b>
					Wellness Within
					Link: wellness-within()`
				]
			}
		},
		{
			id: 'S15',
			title: 'Trouver des prestataires d’avortement par medicaments',
			content: {
				type: ['p'],
				data: [
					`<b>Find medication abortion services portal</b>
					Action Canada for Sexual Health and Rights
					Link: find-services()

					<b>List of abortion clinics</b>
					Action Canada for Sexual Health and Rights
					Link: arcc-abortion-clinics()

					<b>Choice Connect Abortion Referral App</b>
					Link: choice-connect()`
				]
			}
		},
		{
			id: 'S16',
			title: 'Guides pour gérer l’avortement par médicaments à domicile',
			content: {
				type: ['p'],
				data: [
					`<b>What to expect when ending a pregnancy at home</b>, 2023
					Canadian Pharmacists Association & The CART Access Project
					Link: cpha-what-to-expect()

					<b>What to expect during a medical abortion</b>, 2017 
					Planned Parenthood Ottawa and the SHORE Centre
					Link: ppo-what-to-expect()

					<b>Medical abortion instruction</b>, 2017 
					Planned Parenthood Ottawa and the SHORE Centre
					Link: ppo-ma-instruction()

					<b>Mifegymiso medication guide</b>
					Celopharma
					Link: medication-guide()`
				]
			}
		},
		{
			id: 'S17',
			title: 'Lignes d’écoute pour le soutien émotionnel',
			content: {
				type: ['p'],
				data: [
					`<b>Norma Scarborough Fund, a travel fund for those who need access to abortion</b>
					Link: norma-scarborough-action-canada()

					<b>Patient Assistance Fund for those who need access to abortion</b> (1-800-722-9100)
					Link: patient-assistance-fund-naf()
					
					<b>Exhale, a talk-line that provides emotional support, resources and information after abortion</b>
					Link: exhale()

					<b>All-Options</b>, a talk-line to discuss past or current experience with abortion, adoption and parenting for people in Canada and the United States</b> (1-888-493-0092).
					Link: all-options()

					<b>Regina Abortion Support Network (RASN) for abortion access in southern Saskatchewan</b> (1-306-517-2558)
					Link: rasn()

					<b>Saskatoon Abortion Support Network by abortion doulas</b>
					Link: sasn()`
				]
			}
		},
		{
			id: 'S18',
			title: 'Boîtes à outils pour répondre aux préoccupations liées à l’avortement',
			content: {
				type: ['p'],
				data: [
					`<b>Debunking medication abortion myths</b>, 2023
					Canadian Pharmacists Association & The CART Access Project
					Link: cpha-debunking-myth()

					<b>The Abortion options: A value clarification guide for health care professionals</b>, 2005
					National Abortion Federation
					Link: naf-value-clarification()

					<b>Integrating early abortion services into primary care</b>, 2019
					Reproductive Health Access Project
					Link: rhap-abortion()

					<b>Value clarification workshop</b>, 2022
					Reproductive Health Access Project
					Link: rhap-workshop()`
				]
			}
		},
		{
			id: 'S19',
			title: 'Boîtes à outils pour soutenir les communautés mal desservies',
			content: {
				type: ['p'],
				data: [
					`<b>A handbook for healthcare providers working with clients from diverse communities</b>, 2019
					Action Canada for Sexual Health & Rights
					Link: action-canada-handbook()

					<b>The Indigenous ally toolkit</b>, 2018
					Montreal Urban Aboriginal Community Strategy Network
					Link: ally-toolkit()`
				]
			}
		}
	]
};

function getModules(ids: string[], modules: Modules) {
	const moduleMap = new Map(modules.map((module: any) => [module.id, module]));
	return ids.map((id) => moduleMap.get(id)).filter(Boolean);
}

// prettier-ignore
export function modulePath(path: string, modules: Modules) {
  const modulePaths: { [key: string]: string[] } = {
    '/prescribing/about-mifegymiso': ['M1', 'M2', 'M3'],
    '/prescrire/a-propos-du-mife-miso': ['M1', 'M2', 'M3'],
    '/prescribing/patient-counselling': ['M5', 'M6', 'M14', 'M15', 'M33', 'M16'],
    '/prescrire/counseling-de-la-personne': ['M5', 'M6', 'M14', 'M15', 'M33', 'M16'],
    '/prescribing/medical-evaluation': ['M8', 'M9', 'M10', 'M11', 'M12', 'M13'],
    '/prescrire/evaluation-medicale': ['M8', 'M9', 'M10', 'M11', 'M12', 'M13'],
    '/prescribing/assessment': ['M17', 'M18', 'M19', 'M20'],
    '/prescrire/evaluation-post-avortement': ['M17', 'M18', 'M19', 'M20'],
    '/prescribing/virtual-hybrid-care': ['M21', 'M22', 'M14', 'M23'],
    '/prescrire/soins-virtuels-hybrides': ['M21', 'M22', 'M14', 'M23'],
    '/prescribing/billing-codes': ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10', 'B11', 'B12', 'B13'],
    '/prescrire/codes-de-facturation': ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10', 'B11', 'B12', 'B13'],
    '/prescribing/regulations-insurance-inclusivity': ['M26', 'M27', 'M28', 'C1', 'M36', 'M37', 'M38'],
    '/prescrire/reglements-assurance-inclusivite': ['M26', 'M27', 'M28', 'C1', 'M36', 'M37', 'M38'],
    '/prescribing/clinical-resources': ['S1','S2','S3','S4','S5','S6','S7'],
    '/prescrire/ressources-cliniques': ['S1','S2','S3','S4','S5','S6','S7'],
    '/dispensing/coverage-&-insurance': ['C1', 'M36', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12', 'C13', 'C14'],
    '/dispenser/couverture-et-assurance': ['C1', 'M36', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12', 'C13', 'C14'],
    '/dispensing/patient-communication': ['M32', 'M15', 'M33', 'M16', 'M19', 'M34', 'M20'],
    '/dispenser/communication': ['M32', 'M15', 'M33', 'M16', 'M19', 'M34', 'M20'],
    '/dispensing/about-mifegymiso': ['M1', 'M29', 'M30', 'M2', 'M3', 'M31'],
    '/dispenser/a-propos-du-mife-miso': ['M1', 'M29', 'M30', 'M2', 'M3', 'M31'],
    '/dispensing/regulations-inclusivity': ['M26', 'M35', 'M28', 'M37', 'M38'],
    '/dispenser/reglements-inclusivite': ['M26', 'M35', 'M28', 'M37', 'M38'],
    '/dispensing/clinical-resources': ['S8','S9','S10','S11','S12','S13'],
    '/dispenser/ressources-cliniques': ['S8','S9','S10','S11','S12','S13'],
    '/supporting-roles/medication-abortion': ['M39', 'M3', 'M40', 'M41'],
    '/r%C3%B4les-de-soutien/avortement-par-medicaments': ['M39', 'M3', 'M40', 'M41'],
    '/supporting-roles/client-counselling': ['M42', 'M43', 'M15', 'M33', 'M16', 'M44'],
    '/r%C3%B4les-de-soutien/counseling-de-la-client': ['M42', 'M43', 'M15', 'M33', 'M16', 'M44'],
    '/supporting-roles/resources': ['S14','S15','S16','S17','S18','S19'],
    '/r%C3%B4les-de-soutien/ressources': ['S14','S15','S16','S17','S18','S19'],
    '/faq': ['F1', 'F2', 'F3', 'F4', 'F5', 'F6'],
  };

  return getModules(modulePaths[path] || [''], modules)
  }
