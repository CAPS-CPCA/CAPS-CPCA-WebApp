import { images } from '../assets'

type ContentType = {
  type: string[]
  data: (string | string[])[]
}

type ModuleType = {
  id: string
  title: string
  content: ContentType
}

export type Modules = ModuleType[]

export const modules: { [key: string]: Modules } = {
  en: [
    {
      id: 'M1',
      title: 'Mifegymiso Overview',
      content: {
        type: ['p', 'i-full'],
        data: [
          `In Canada, the medication abortion pills are packaged and sold as Mifegymiso. Mifegymiso comes in an outer white box, containing two smaller boxes: a green box containing mifepristone 200 mg (MIFE) and an orange box containing misoprostol 800 mcg (MISO) (four small tablets of 200 mcg each)[10].

        MIFE is a progesterone receptor modulator. It is a potent anti-progestin that also exhibits b antiglucocorticoid and weak antiandrogenic properties. It blocks progesterone receptors in early pregnancy, which leads to endometrial degeneration, synthesis of prostaglandins, and decline in beta-human chorionic gonadotropin (βhCG) secretion. These events promote cervical dilation and facilitate the onset of bleeding[10].

        MISO is a potent synthetic prostaglandin E1 that induces cervical ripening and uterine contractions, which cause the pregnancy tissues to leave the body[10].

        Click here to download the Product monograph.`,
          images.MifegysmoOverview,
        ],
      },
    },
    {
      id: 'M2',
      title: 'Efficacy & Safety',
      content: {
        type: ['h2', 'ul', 'h2', 'ul'],
        data: [
          'Efficacy:',
          `MIFE / MISO is highly effective. The risk of ongoing pregnancy is 0.9% for pregnancies up to 49 days of gestation and 3.1% for pregnancies up to 70 days of gestation[10].
        According to SOGC’s protocol for the provision of medication abortion via telemedicine, the patient should take a first dose of misoprostol buccally or vaginally 24-48 hours after taking mifepristone[7].
        In addition, patients with gestational age 63 days or less should take the second dose of misoprostol if no bleeding occurs within the first 24 hours after the first misoprostol dose or as instructed by the clinician. Patients with a gestational age over 63 days should take a second dose of misoprostol 4 hours after the first dose[7].`,
          'Side Effects and Complications[10]:',
          `Very common (≥ 10%): Nausea, vomiting, diarrhea, dizziness, headache, chills / fever, weakness, fatigue, gastric discomfort, abdominal pain, vaginal bleeding, spotting, uterine contractions or cramping.
        Common (1-10%): Fainting, light or moderate gastrointestinal cramping, prolonged post-abortion bleeding, endometritis, breast tenderness, heavy bleeding (may or may not require surgical termination of pregnancy).
        Uncommon (0.1-1%): Arrhythmia, hemorrhagic shock, salpingitis, heavy bleeding requiring IV fluids or blood transfusion, infection, hot flushes, hypotension, bronchospasm, skin rash / pruritus.`,
        ],
      },
    },
    {
      id: 'M3',
      title: 'Indication & Contraindications',
      content: {
        type: ['h2', 'p', 'h2', 'ul', 'h2', 'p', 'h2', 'p', 'h2', 'p'],
        data: [
          'Indication',
          `MIFE / MISO is indicated by Health Canada for pregnancy termination up to 63 days as counted from the first day of the last menstrual period (LMP) in a presumed 28-day cycle. The Society of Obstetricians and Gynaecologists of Canada indicates safe use up to 70 days after LMP. There is no absolute lower gestational age limit[5].`,
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
          `The Society of Obstetricians and Gynaecologists of Canada and the National Abortion Federation both endorse medication abortion (MA) with MIFE / MISO up to 70 days after LMP. They also recommend a second dose of MISO 800mcg four hours after the first dose of MISO 800mcg to increase the effectiveness of MA[5,13].

        The Society of Obstetricians and Gynaecologists of Canada also recommends a MIFE / MISO regimen from 70-84 days gestational age, with mifepristone 200mg followed in 24-48 hours with two doses of MISO 800mcg (buccal or vaginal), 4 hours apart.
        
        The effectiveness decreases as the gestational age approaches 70 days. Prescribers should counsel patients that this is off-label use, that there is a possibility of expelling and seeing an intact fetus, and that there are higher rates of bleeding and incomplete or failed abortion.`,
          'Patients between 15 to 18 years of age',
          `Data is insufficient to establish efficacy and safety in patients younger than 15 years old. However, in patients aged between 15 and 18 years, safety and efficacy have been demonstrated with vomiting and pain being reported more frequently than in adults[11]. Thus, special considerations for patients in this age range can include counselling to prepare them for vomiting and pain, as well as psychosocial supports through the medication abortion process.`,
        ],
      },
    },
    {
      id: 'M5',
      title: 'Pre-abortion Counselling',
      content: {
        type: ['p', 'h2', 'ul', 'h2', 'ul'],
        data: [
          `Counselling is to ensure patients understand different options, the risks and benefits of each and make informed decisions. Counselling also helps prescribers understand patients’ preferences and circumstances to advise the best course of actions.`,
          'Key counselling points include[4,6]:',
          `Review pregnancy options when indicated: abortion, becoming a parent or child adoption.
        Tailor the counselling to the needs of the patient (such as counteracting abortion stigma and / or providing emotional support).
        Communicate the risk of advancing gestational age without putting time pressure on the patient.
        Use non-judgmental and inclusive language.`,
          '(If choosing abortion:)',
          `Review abortion options, including risks, efficacy, process and length of time of medication versus procedural abortion.
        Discuss the patient’s eligibility for medication abortion, including gestational age and medical history.
        Discuss the patient’s access to pharmacies, telephone, transportation, emergency care, and labs and imaging facilities if needed.
        Discuss the patient’s preferences and circumstances, such as a safe place in their living situation to complete medication abortion. Share decision tools such as It’s My Choice to help the patient choose the type of abortion that fits them.
        Confirm that the decision is the patient’s own, reached without coercion.
        Confirm the patient’s understanding that medication abortion is irreversible and that the patients must take an additional dose of the second medication or undergo procedural abortion in case of ongoing pregnancy.
        Review the timing of examinations (ultrasound, blood tests, if needed), medications and follow-up appointments.
        Discuss post-abortion contraception options.`,
        ],
      },
    },
    {
      id: 'M6',
      title: 'Abortion Options',
      content: {
        type: ['p', 'ul', 'p', 'ul', 'i-full'],
        data: [
          'Medication abortion is suitable for patients who[6]:',
          `Prefer a non-invasive method.
        Prefer to have an abortion in the comfort of their home.
        Have the confidence of being able to manage the process and side effects at home.
        Are able to take 1 to 3 days off work or other responsibilities to undergo the abortion process.
        Lack means of transportation to travel to the clinic for a procedural abortion (but still need access to emergency services in event of complications).`,
          'Procedural abortion is suitable for patients who[6]:',
          `Prefer to have in-person support and monitoring from healthcare professionals at a clinic or hospitals.
        Want to have the abortion completed quickly to return to work or other responsibilities.
        Are comfortable with the use of medical instruments and internal exams.
        Are comfortable undergoing local or general anesthesia to manage pain.
        Do not want to disclose the pregnancy and the abortion to those patients live with (such as partners, roommates, co-workers), as it might be difficult to conceal heavy bleeding and b cramps.`,
          images.AbortionOptions,
        ],
      },
    },
    {
      id: 'M14',
      title: 'Informed Consent',
      content: {
        type: ['p', 'olul'],
        data: [
          'After the patient and the health provider determine that medication abortion (MA) is the right option, the health provider should[2,6,7,10]:',
          [
            `Obtain written or verbal informed consent (see examples by CAPS-CPCA platform and the Bay Center for Birth Control) and document it in the patients’ chart.
          Prescribe:`,
            `Mifepristone 200 mg (MIFE) orally and misoprostol 800 mcg (MISO) buccally or vaginally (this combination is packaged and branded as Mifegymiso).
          Additional dose of MISO buccally or vaginally in case of incomplete or failed abortion.
          Analgesics and antiemetics as per health provider / facility protocol.
          Antibiotic prophylaxis, if needed, as per health provider / facility protocol.`,
            `Provide instructions on how to take the medication.
          Ensure patients know how to manage side effects and when and where to seek care for complications.
          Consider informing patients if the MA procedure involves off-label, evidence-based practices.`,
            `Much of the MA off-label practices are based on low-resource availability and require a balance between health providers’ experience, patients’ safety and patients’ needs.
          It is recommended to inform patients about off-label practices so patients understand the risks involved and understand that off-label practices might vary depending on prescribers’ experience and comfort level.`,
            `Discuss post-abortion contraception options. Emphasize that patients can quickly return to fertility following the abortion.
          Set up follow-up appointment(s), either in-person or via phone/video. Do discuss any safety or privacy plan if needed.
          Provide patients with patient instruction manuals (see an example by the SHORE center and the Planned Parenthood Ottawa) and the contact details of healthcare providers and emergency health services.
          Take note of patients’ preferred phone numbers and emergency contacts in case providers are unable to reach patients directly. Be mindful that the emergency contact that the patient gives during their visits for MA may be different from the emergency contact on file. Be sure not to contact any other individuals without the patient’s expressed consent.`,
          ],
        ],
      },
    },
    {
      id: 'M15',
      title: 'Administration Instruction',
      content: {
        type: ['i-full'],
        data: [images.AdminInstructions],
      },
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
          'In any case, if bleeding does not start within a few hours, the patient should contact a healthcare professional.',
        ],
      },
    },
    {
      id: 'M16',
      title: 'Side-effect Management',
      content: {
        type: ['i-full'],
        data: [images.SideEffectsManage],
      },
    },
    {
      id: 'M8',
      title: 'Basic screening',
      content: {
        type: ['p'],
        data: [
          `Medical history must be taken to assess gestational age, evaluate contraindications and identify additional precautions. The history also provides a baseline for follow-up and helps determine suitable contraception options and whether additional tests are needed[6].

        Baseline vital signs and pelvic examination should be performed as directed by history. Practices may vary[6].`,
        ],
      },
    },
    {
      id: 'M9',
      title: 'Pregnancy & Gestational Age screening',
      content: {
        type: ['p'],
        data: [
          `A positive urine beta human chorionic gonadotropin test (βhCG) is sufficiently sensitive to confirm a pregnancy[6].

        Ultrasound: Ultrasound provides the most accurate measurement of gestational age (GA) but is not a routine requirement unless the patient is uncertain of their last menstrual period (or there are symptoms and risk factors for ectopic pregnancy as explained later). It is recommended to choose an ultrasound clinic whose staff are capable of offering non-judgmental sonography[6].

        Medical history: If the patient is certain of their last menstrual period and if they were having regular periods without recent use of hormonal contraception, GA estimate that is based on their date would correlate closely with the results from ultrasound[6].

        Gynaecological examination: In the first trimester, determination of GA with bimanual exam has been shown to be accurate within 2 weeks of GA determined by ultrasound; however, accuracy varies with the prescriber’s experience and with the amount of adipose tissue and the presence of fibroids[6].

        βhCG test: βhCG level rises linearly during the first 6 weeks of pregnancy but the high variability thereafter limits the utility of βhCG for dating[6].`,
        ],
      },
    },
    {
      id: 'M10',
      title: 'Ectopic Pregnancy',
      content: {
        type: ['left', 'p', 'ul', 'p'],
        data: [
          images.EctopicPregnancy,
          `Ectopic pregnancy (EP) is rare. It occurs in 1 or 2 out of 100 pregnancies in the general population, and the rate is consistently lower among those seeking abortion. It is recommended that patients undergo ultrasound if they have significant medical risk factors, signs or symptoms of EP[6].


        Significant risk factors, signs and symptoms of EP include[6]:`,
          `Previous ectopic pregnancy.
        IUD in place.
        Pregnancy conceived with assisted reproduction techniques.
        Previous surgery of the fallopian tubes such as tubal ligation.
        History of salpingitis or pelvic inflammatory disease.
        Symptoms of abdominal pain and vaginal bleeding.`,
          `Multiple pregnancies is not a contraindication to medication abortion (MA), however the presence of multiples should be communicated to the patient if they agree to obtain information about the pregnancy[6].

        Missed and incomplete abortion should also be disclosed to the patients if they agree to obtain information about the ultrasound and should be managed either by MA or procedural abortion[6].

        In case of molar pregnancy, procedural abortion with consideration for referral, histological review and follow-up of βhCG is essential, and MA is not appropriate[6].`,
        ],
      },
    },
    {
      id: 'M11',
      title: 'Pregnancy of unknown locations',
      content: {
        type: ['p', 'ul', 'p', 'ul'],
        data: [
          `Patients who have a pregnancy of unknown location (PUL) and request medication abortion (MA) should receive abortion care without delay, provided that they have no clinical symptoms of ectopic pregnancy (EP). Failure to identify a definite intrauterine pregnancy should not delay MA[6].

        If the serum βhCG is > 2000 IU / L and no intrauterine gestational sac is visualized on ultrasound[6]:`,
          `Further investigation is required.`,
          `In the absence of EP risk factors, if βhCG is ≤ 2000 IU / L or a likely gestational sac is present without a yolk sac or fetal pole[6]:`,
          `Patients with PUL can receive MA.
        When PUL patients receive MA, they should be informed of the risks and symptoms of EP, and who to contact in case of emergency.
        Follow-up βhCG within 7 days is recommended for PUL patients. A decrease of 50% at 3 days after mifepristone administration (or 24-48 hours after misoprostol) or 80% between 7 and 14 days after MIFE / MISO administration is expected; otherwise, EP should be ruled out.`,
        ],
      },
    },
    {
      id: 'M12',
      title: 'Rhesus screening',
      content: {
        type: ['p'],
        data: [
          `Guidelines on Rh screening have been updated.

        According to the SOGC’s Guideline on Prevention of RhD Alloimmunization published in 2024, for non-sensitized Rh D-negative individuals who have experienced threatened, spontaneous or induced abortion after 12 weeks gestation, administration of 300 μg of Rho(D) immune globulin is suggested.

        Prior to that, in 2022, the Society of Family Planning and the World Health Organization also recommends withholding Rh testing and administration prior to 12 weeks gestation for patients undergoing MA, spontaneous abortion or uterine aspiration abortion[8,20].`,
        ],
      },
    },
    {
      id: 'M13',
      title: 'Anemia, STIs & others',
      content: {
        type: ['i-full'],
        data: [images.AnemiaSTIOthers],
      },
    },
    {
      id: 'M17',
      title: 'Post-abortion Follow-up',
      content: {
        type: ['p', 'h2', 'i-full', 'p', 'ul'],
        data: [
          `A follow-up appointment is required to confirm the termination of the pregnancy, manage complications, counsel on contraceptive plans and, if applicable, provide emotional support.`,
          'Mode of follow-up:',
          images.PostAbortionFollowUp,
          `Emotional support[6]: Emotional response after MA often vary. Some people feel relieved and positive and some have feelings of grief, sadness, or guilt while others have mixed feelings. These emotions are normal, and they may or may not be related to socioeconomic circumstances, the lack of social support, moral discomfort, and family conflict.

        Patients can be supported by understanding that mixed emotions are normal and by exploring coping strategies and support. Useful resources include:`,
          `Exhale, a talk-line that provides emotional support, resources and information after abortion.
        All-Options, a talk-line to discuss past or current experience with abortion, adoption and parenting for people in Canada and the United States (1-888-493-0092).`,
        ],
      },
    },
    {
      id: 'M18',
      title: 'Abortion Completion Assessment',
      content: {
        type: ['p', 'i-full', 'p', 'ul', 'p'],
        data: [
          `Completion of medication abortion (MA) must be assessed by the provider. Depending on the circumstances, this can be done by obtaining a clinical history, ultrasonography, or urine or serum bhCG testing. This assessment can be done in person, by telephone or electronic communication as per clinical indication and the preferences of the patient and the provider.

        Clinical history[6]: The assessment of successful expulsion based on medical history is highly predictive of complete abortion (sensitivity 99.1%, specificity 45.5%). No bleeding or minimal bleeding after MISO, and continuing pregnancy symptoms are suggestive of an ongoing pregnancy.

        Urine bhCG[7]:`,
          images.AbortionComplete,
          `Serum bhCG[3]:`,
          `A drop by at least 50% from baseline at 3 days after MIFE administration (or 24 and 48 hours after MISO administration) is highly indicative of complete abortion.
        A drop by 80% between 7 and 14 days after MIFE / MISO administration confirms abortion completion.
        If bhCG drops < 80% between day 7 and 14, prescribers may order an ultrasound or repeat the test in a few days. Ultrasound should be ordered if 14 days have passed and a drop by 80% has not been reached.`,
          `Ultrasound[6]: Ultrasound provides definitive evidence of MA completion, but no evidence shows that it is superior to other methods. It is recommended in cases where the outcome is uncertain based on clinical history, or there are symptoms such as unexpected pain, prolonged heavy bleeding or inadequate bleeding.`,
        ],
      },
    },
    {
      id: 'M19',
      title: 'Complication Management',
      content: {
        type: ['p', 'ul', 'p', 'ul'],
        data: [
          `Ongoing pregnancy[6]: Ongoing pregnancy after medication abortion is uncommon and can be treated with another dose of MISO or with procedural abortion. Procedural abortion is recommended if cardiac activity is present 14 to 21 days after taking MISO.

        Retained products of conception[6]: In the absence of ongoing pregnancy, retained products of conception can be managed by asking patients to wait for bleeding and cramping, offering them another dose of MISO, or providing them with or referring them for procedural abortion. Urgent procedural abortion is indicated in cases of heavy uncontrolled bleeding or retained products of conception associated with endometritis.

        Symptoms of retained products include unexpected heavy/prolonged bleeding or cramping, and failure to have expected bleeding.

        Post-abortion infections[6]: Treatment should be individualized and usually consists of broad-spectrum therapy. In mild cases, oral antibiotics can be used, but if infection is severe, patients should be hospitalized for treatment. Once patients start antibiotics, procedural abortion may be necessary to remove significant retained products of contraception.

        Symptoms of Post-Abortion Infections`,
          `Abdominal or pelvic pain
        Foul-smelling vaginal or cervical discharge
        Prolonged vaginal bleeding or spotting
        Fever or chills (more than 24 hours after MISO)
        Uterine or adnexal tenderness
        Elevated white blood cell count (upon lab examination)`,
          `Toxic shock syndrome[6]: Toxic shock syndrome is associated with clostridium and Group A streptococcus. The majority of these infections are fulminant and rapidly progress to shock. Standard antibiotic therapy is not sufficient; thus, the treatment consists of supportive care, and empiric antibiotic treatment covering clostridial species and other organisms known to cause toxic shock, and surgical debridement, including possible hysterectomy.
        
        Symptoms of Toxic Shock Syndrome`,
          `General malaise with nausea, vomiting, and diarrhea
        Absence of fever (or mild fever)
        Minimal abdominal pain
        Weakness
        Flu-like symptoms
        Tachycardia / hypotension
        Edema
        High white blood cell counts or high hemoglobin level (upon lab examination)`,
        ],
      },
    },
    {
      id: 'M20',
      title: 'Post-abortion Contraception',
      content: {
        type: ['p', 'ul', 'p', 'i-full'],
        data: [
          `Due to rapid return to fertility following medication abortion (MA), patients should be advised to have a method for contraception at the earlier visits[6].

        Patients seeking more information about contraception options can be referred to:`,
          `Sex and U’s It’s a plan, an online health information tool to determine the right contraception method.
        Action Canada’s Sexual Health Hub on Birth Control, a website that contains information on birth control in Canada.`,
          `Below is a list of contraception options and special considerations:`,
          images.PostAbortionContraception,
        ],
      },
    },
    {
      id: 'M21',
      title: 'Initial Steps',
      content: {
        type: ['p', 'ol'],
        data: [
          `Virtual or hybrid provision of medication abortion (MA), which is also called no-touch or low-touch medication abortion, is one where some or all of the appointments are carried out virtually over phone and / or video by reducing or eliminating blood work and ultrasound. The purpose is to reduce patients’ risk of contracting transmissible infections (as in the case of COVID-19) or reduce the need for patients to travel long distances or wait for days or weeks to receive abortion.

As explained elsewhere, virtual and hybrid provision of MA is based on low resource availability and requires a balance between prescribers’ experience, patients’ safety and patients’ needs.

When receiving requests for virtual or hybrid medication abortion, prescribers should[7]:
`,
          `Confirm patient identity and ensure patient has privacy and safety to discuss.
Provide written information on medication and procedural abortion in advance of the consultation.
If not already done, ask the patient to obtain and take a qualitative urine high sensitivity pregnancy test from the pharmacy.
Schedule a first virtual visit via telephone or video.`,
        ],
      },
    },
    {
      id: 'M22',
      title: 'Virtual Assessment',
      content: {
        type: ['p', 'olul'],
        data: [
          'The following assessments should be carried out[7,19]:',
          [
            `Review pregnancy options counselling.
        Establish pregnancy and gestational age.`,
            `Review date of last menstrual period (LMP) and date of positive qualitative pregnancy test.
            Review relevant medical history, including recent hormonal contraception and risk factors and signs of ectopic pregnancy.`,
            `Exclude contraindications.
        Assess the need for an ultrasound to determine gestational age and the location of pregnancy[5]:`,
            `According to SOGC’s protocol on medication abortion via telemedicine, ultrasound should be obtained if LMP is uncertain, LMP is over 70 days, and the signs, symptoms and risk factors of ectopic pregnancy (EP) are present.
            Medication abortion performed without ultrasound is, by definition, pregnancy of unknown location and should be managed accordingly. Though the risk of unrecognized EP is low, close follow-up is required to ensure completion of the medication abortion.`,
            `Assess the need for blood work to measure hemoglobin[7]:`,
            `According to Health Canada, hemoglobin should be over 9.5 g / dL before starting MA.
            Screen patients for increased risk of anemia through a detailed medical history.
            If patients are suspected to have an increased risk of anemia, complete blood count is indicated. Otherwise, measuring hemoglobin is unnecessary.`,
            `Assess the need for blood work to determine Rh status (Rh)[7]:`,
            `As explained elsewhere, guidelines on Rh status have been updated and vary between organizations.
            According to the SOGC’s Guideline on Prevention of RhD Alloimmunization published in 2024, for non-sensitized Rh D-negative individuals who have experienced threatened, spontaneous or induced abortion after 12 weeks gestation, administration of 300 μg of Rho(D) immune globulin is suggested.
            The National Abortion Federation, the Society of Family Planning and the World Health Organization all recommend Rh testing and administration for patients who are 12 weeks gestation or beyond, but not for patients who are under 12 weeks LMP.`,
            `Assess the need for STI testing[7]:`,
            `Offer testing for chlamydia and gonorrhea if patients come to office.
            Otherwise, evaluate the risk of STIs and consider remote testing if risk factors are present, and discuss the potential need for antibiotic treatment.`,
          ],
        ],
      },
    },
    {
      id: 'M23',
      title: 'Follow-up',
      content: {
        type: ['p', 'olul'],
        data: [
          `The follow-up appointment should be scheduled 3 to 7 days after taking misoprostol (MISO), and more than one follow-up appointment may be needed. The SOGC’s protocol on the provision of medication abortion by telemedicine advises 7 days[7], but some prescribers schedule the follow-up appointment as early as 3 days after MISO administration to avoid loss-of-contact and assess serum bhCG level. The actual practices depend on prescribers’ judgment and experiences.

        During the virtual follow-up, prescribers should[7]:`,
          [
            `Review abortion experience and progress with patients, including dates of taking medication, side effects, bleeding pattern, pain, occurrence of expulsion, and any current pregnancy symptoms.
          Advise an urgent assessment or emergency visit if signs of ectopic pregnancy, pelvic infection, heavy bleeding, or excessive pain exist.
          If history suggests failed abortion or ongoing pregnancy: obtain ultrasound and consider an additional dose of MISO or procedural abortion.
          If history suggests successful abortion, no warning signs, and no current symptoms of pregnancy, normal bleeding and pain: arrange the blood test to confirm serum bhCG level if the appointment is in-person or instruct the patient to perform qualitative urine pregnancy test.<br><br>Serum bhCG[4]: If the serum bhCG level drops by >50% at Day 3 after MISO or 80% at Day 7-14 after MIFE / MISO administration, the successful completion of abortion is confirmed and no further appointment is needed. Ultrasound should be ordered if 14 days have passed and a drop by 80% has not been reached.<br><br>Urine bhCG[7]:`,
            images.AbortionComplete,
            `Offer to discuss contraception options and provide emotional support if needed. Resources for emotional support include:`,
            `Exhale, a talk-line that provides emotional support, resources and information after abortion.
          All-Options, a talk-line to discuss past or current experience with abortion, adoption and parenting for people in Canada and the United States (1-888-493-0092).`,
          ],
        ],
      },
    },
    {
      id: 'B1',
      title: 'Alberta',
      content: {
        type: ['p', 'h2', 'p', 'h2', 'p'],
        data: [
          `Alberta Health Services (AHS) has a billing manual that provides the most current information on billing codes for healthcare services in Alberta. The manual is updated regularly and is available online for healthcare providers to access.`,
          'Gynaecology',
          `Initial visit: 03.08A Comprehensive consultation – $111.06
        Follow-up visit: 03.07B Repeat consultation – $62.24`,
          'Primary Care',
          `Initial visit: 03.04A Comprehensive visit – $83.37
        Follow-up visit: 03.03A Office visit – $35.26`,
        ],
      },
    },
    {
      id: 'B2',
      title: 'British Columbia',
      content: {
        type: ['p', 'h2', 'p', 'h2', 'p'],
        data: [
          `The information below is updated as of March 2024.`,
          'Gynaecology',
          `Initial visit: 14545 Medication abortion – $170.95
        Follow-up visit: 4012 Limited consultation – $85.49
        4007 Follow-up – $53.52
        Telehealth: 14545 Same code for consultation – $170.95
        4072 Limited consultation – $85.49
        4077 Follow-up – $53.52`,
          'Primary Care',
          `Initial visit: 14545 Medication abortion – $170.95
        Follow-up visit: 00100 Follow-up – $34.04
        Telehealth: 14545 Same code for consultation – $165.97
        13437 Follow-up – $31.84

        Notes: For telehealth, methods of virtual care can include phone, video or provincial telehealth platform, all of which are equally billable at the moment. No need to have an ongoing physician-patient relationship for the physician to submit a claim for medication abortion via telehealth`,
        ],
      },
    },
    {
      id: 'B3',
      title: 'Manitoba',
      content: {
        type: ['p', 'h2', 'p', 'h2', 'p'],
        data: [
          `The information below is updated as of March 2024.`,
          'Gynaecology',
          `Initial visit: 8428 Medical management of elective pregnancy termination, including examination, management and monitoring of patient taking misoprostol. – $171.00
        8499 Complete gynecological exam excluding pap test – $125.61
        Follow-up visit: 8505 Regional history and examination with gynaecological examination excluding pap test`,
          'Primary Care',
          `Initial visit: 8428 Medical management of elective pregnancy termination, including examination, management and monitoring of patient taking misoprostol. – $171.00
        8499 Complete gynecological exam excluding pap test – $125.61
        Follow-up visit: 8471 Regional intermediate visit or subsequent visit with gynecological exam excluding pap smear – $54.16

        Notes: There are no specifications as to whether the codes are specific to specialists vs primary care in the billing manual for Manitoba. Thus, providers would have to look into the information and apply the rules of their billing codes.`,
        ],
      },
    },
    {
      id: 'B4',
      title: 'New Brunswick',
      content: {
        type: ['p', 'h2', 'p', 'h2', 'p'],
        data: [
          `The information below is pending verification.`,
          'Gynaecology',
          `Initial visit: 54 Major or regional consultation – CA$95.91
        9015 Medical management of non-viable/unwanted pregnancy, including βhCG follow-up, add to initial visit or consultation – $136.22
        Follow-up visit: 49 Regional examination – $52.82
        Telehealth: Same codes, but the site code where the patient is physically located, must be recorded on the claim submission. When submitting claims for telemedicine, the number 8 should be written in front of the site code provided in order to specify that the service was given via telemedicine.
        8717 Attendance – 1st patient seen, first 15 minutes or part thereof 40 units
        8718 Add – per 15 minutes or part thereof 20 units`,
          'Primary Care',
          `Initial visit: 1 Office visit – $23.36
        9142 Medical management of non-viable/unwanted pregnancy, including βhCG follow-up, add to initial visit or consultation – $74.48
        Follow-up visit: 1 Office visit – $23.36
        Telehealth: Same codes, but the site code where the patient is physically located, must be recorded on the claim submission. When submitting claims for telemedicine, the number 8 should be written in front of the site code provided in order to specify that the service was given via telemedicine.
        8717 Attendance – 1st patient seen, first 15 minutes or part thereof 40 units
        8718 Add – per 15 minutes or part thereof 20 units`,
        ],
      },
    },
    {
      id: 'B5',
      title: 'Newfoundland & Labrador',
      content: {
        type: ['p', 'h2', 'p', 'h2', 'p'],
        data: [
          `The information below is pending verification.`,
          'Gynaecology',
          `Initial visit and follow-up visit: 54607 Medication abortion – $187.46

        Comprehensive fee which includes all services associated with medication abortion including the consultation and/or visit during which the medication is prescribed, counselling, ordering and/or performing and interpreting of laboratory tests and diagnostic imaging, and any follow-up communications or visits.`,
          'Primary Care',
          `Initial visit and follow-up visit: 54607 Medication abortion – $187.49

        Comprehensive fee which includes all services associated with medication abortion including the consultation and/or visit during which the medication is prescribed, counselling, ordering and/or performing and interpreting of laboratory tests and diagnostic imaging, and any follow-up communications or visits.`,
        ],
      },
    },
    {
      id: 'B6',
      title: 'Northwest Territories',
      content: {
        type: ['p', 'h2', 'p', 'h2', 'p'],
        data: [
          `The information below is pending verification.`,
          'Gynaecology',
          `Initial visit and follow-up visit: OB-025 Medical termination for gestation less than 7 weeks – includes all visits, ultrasound examinations and injections – $361.93
        Telehealth: TE-001 Telehealth consultation by consultant using audio-video-data communication – $180.97
        TE-002 Telehealth consultation – per 15 minutes – max of 1.5 hours per session – $54.29
        TE-004 Emergency Department consultation from peripheral communities – CA$18.09
        
        Does not need to be your own patient.`,
          'Primary Care',
          `Initial visit: GP-001 First visit requiring general assessment for new illness – $102.35
        Follow-up visit: GP-002 Subsequent office visits other than a simple follow-up visit – $45.48
        Telehealth: TE-001 Telehealth consultation by consultant using audio-video-data communication – $180.97
        TE-002 Telehealth consultation – per 15 minutes – max of 1.5 hours per session – $54.29
        TE-004 Emergency Department consultation from peripheral communities – CA$18.09

        Does not need to be your own patient.`,
        ],
      },
    },
    {
      id: 'B7',
      title: 'Nova Scotia',
      content: {
        type: ['p', 'h2', 'p', 'h2', 'p'],
        data: [
          `The information below is pending verification.`,
          'Gynaecology',
          `Initial visit: 3.03V Medication abortion/Termination of early pregnancy – 67.03 units/$185.00
        Follow-up visit: 3.03 Subsequent visit – 13 units/$35.88
        Telehealth: Same as in-person, use AP=PHON for telephone and AP=VIRC for video platform.`,
          'Primary Care',
          `Initial visit: 3.03V Medication abortion/Termination of early pregnancy – 67.03 units/ $185.00
        Follow-up visit: 3.03 Office visit – 13 units/$35.88
        Telehealth: Same as in-person, use AP=PHON for telephone and AP=VIRC for video platform.`,
        ],
      },
    },
    {
      id: 'B8',
      title: 'Nunavut',
      content: {
        type: ['p'],
        data: [`No content.`],
      },
    },
    {
      id: 'B9',
      title: 'Ontario',
      content: {
        type: ['p', 'h2', 'p', 'h2', 'p'],
        data: [
          `The information below is updated as of March 2024.`,
          'In-person',
          `Initial visit: A920 Medical management of early pregnancy – initial service – $161.15
        Follow-up visit: A921 Medical management of early pregnancy – follow-up visit (limited to two visit per patient, per pregnancy) – $36.85`,
          'Telehealth',
          `Initial visit: A920 can be billed for telephone and video visits.
        Follow-up visit: A921 – $36.85
        A007 – $37.95
        A102 – $15.00

        Notes: If you have billed A920 for the initial visit, you have established a relationship and for follow-up, you can use A921 (video only) or A007 (telephone). Virtual care services provided in the 24-months subsequent to the medication abortion may be claimed as Comprehensive Virtual Care Services because it implies an existing/ongoing patient-physician relationship. If you do not meet the patients at the initial visit (i.e. you do not bill A920 for the initial visit and thus do not have a pre-established relationship with the patient), you would use A102 for telephone follow-up, which pays $15.`,
        ],
      },
    },
    {
      id: 'B10',
      title: 'Prince Edward Island',
      content: {
        type: ['p', 'h2', 'p', 'h2', 'p'],
        data: [
          `The information below is pending verification.`,
          'Gynaecology',
          `Initial visit: 6010 Therapeutic abortion – $181.49
        Follow-up visit: 0762 Repeat consultation – $58.38
        0713 Limited office visit – $42.00`,
          'Primary Care',
          `Initial visit: 0160 Therapeutic abortion – $181.49
        Follow-up visit: 0113 Limited office visit – $42.00
        0163 Complete Re-examination by a medical specialist`,
        ],
      },
    },
    {
      id: 'B11',
      title: 'Quebec',
      content: {
        type: ['p', 'h2', 'p', 'h2', 'p'],
        data: [
          `The information below is pending verification.`,
          'Gynaecology',
          `Initial visit: 15850 Global evaluation for termination of pregnancy (<63 days) – $168.90
        15852 Ultrasound exam – $60.95
        Follow-up visit: 15854 Follow-up medication abortion – $47.50
        15857 US post medication abortion (<18 days) – $39.80`,
          'Primary Care',
          `Initial visit: Global evaluation for termination of pregnancy
        – 15313 Office – $139.50
        – 15407 CLSC – $20.00
        – 15314 Hospital – $104.60
        Ultrasound exam
        – 15315 Office – $38.15
        – 15316 Hospital – $13.10
        Follow-up visit: Follow-up termination of pregnancy
        – 15317 Office – $39.25
        – 15408 CLSC – $1.50
        – 15318 Hospital – $29.45
        Ultrasound exam
        – 15319 Office – $33.80
        – 15320 Hospital – $8.75`,
        ],
      },
    },
    {
      id: 'B12',
      title: 'Saskatchewan',
      content: {
        type: ['p', 'h2', 'p', 'h2', 'p', 'h2', 'p'],
        data: [
          `The information below is updated as of March 2024.`,
          'Gynaecology',
          `Initial visit: 150B Medical management of termination of early pregnancy – includes 5 days of ongoing medical management – $170
        Follow-up visit: 11P Repeat consultation – $41.90
        7P Follow-up assessment – $38.20`,
          'Primary Care',
          `Initial visit: 150B Medical management of termination of early pregnancy – includes 5 days of ongoing medical management – $170
        Follow-up visit: 5-B Subsequent visit – $39.80`,
          'Telehealth',
          `Initial visit: 732A for any patient attended to using an approved telemedicine video link – $31.40
        840B and 841B – Counselling – for clinicians who do not have a video link setup such as telephone consultation. 840 is virtual counselling for the first 15 minutes and 841B is for the subsequent 15 minutes – $33.75
        Follow-up visit: 734A for any patient attended to using an approved telemedicine video links (maximum one per day for all patients) – $12.50
        805B – Virtual Partial Assessment – for clinicians who do not have a video link setup such as telephone follow-up – $31.85

        Notes: Saskatchewan has a designated in-person abortion code but not a virtual one, so providers can use the generic codes that are used for regular primary care telemedicine apps.`,
        ],
      },
    },
    {
      id: 'B13',
      title: 'Yukon',
      content: {
        type: ['p', 'h2', 'p', 'h2', 'p'],
        data: [
          `The information below is pending verification.`,
          'Gynaecology',
          `Initial visit: 4116 Medication abortion – $223.8
        Follow-up visit: 4012 Limited consultation – $104.40
        4007 Subsequent office visit – $69.60`,
          'Primary Care',
          `Initial visit: 0101 Complete examination – $108.80
        Follow-up visit: 0100 Visit – $49.70`,
        ],
      },
    },
    {
      id: 'M26',
      title: 'Regulatory landscape',
      content: {
        type: ['p', 'ul', 'p', 'ul'],
        data: [
          `Abortion is legal in Canada, and patients do not require consent from partners or parents to seek an abortion. It is the second most common reproductive health service: one in three Canadian pregnancy-capable persons will seek abortion in their lifetime[1,2].

        Medication abortion uses medication pills to end a pregnancy. In Canada, the medication abortion pills are packaged and sold as Mifegymiso.`,
          `Mifegymiso is approved by Health Canada for gestational age up to 63 days, but has been shown by SOGC to be safe and effective for up to 70 days.
        It is provided free-of-charge to all patients with provincial health insurance and several categories of federal health insurances.
        Patients eligible for healthcare in one province, who attempt to access Mifegymiso in another province or territory, are eligible for counselling, assessments and follow-up but not for the medication itself.
        It can be prescribed through in-person visits or virtual consultations, or a combination of the two.`,
          `Scope of practice: At the time of this writing, physicians and nurse practitioners in Canada are authorized to prescribe Mifegymiso. In most cases, pharmacists are in charge of dispensing the medication to patients, but some clinics are also authorized to dispense the medication directly to patients. With the exception of Quebec, midwives are currently not authorized to prescribe Mifegymiso but can provide medication abortion care by working closely with nurse practitioners or physicians.

        Province-specific requirements: Healthcare providers should check specific guidelines and scope of practices in their provinces or territories. For example, provinces may differ in their requirements on who can pick up the medication and whether pharmacists have to register with Celopharma, the manufacturer of Mifegymiso. Click here to see the summary of some province-specific regulations for dispensing Mifegymiso.

        Training requirement: Completing a training course is no longer required before prescribing or dispensing Mifegymiso, but healthcare providers may find the online courses below useful in learning about MA care.`,
          `SOGC’s Medical Abortion Training Program, updated in 2023 and provided at cost.
        NAF Canada’s Medication Abortion Training for Primary Care Providers, updated in 2023 and provided at cost.`,
        ],
      },
    },
    {
      id: 'M27',
      title: 'Facility Setup',
      content: {
        type: [
          'p',
          'h2',
          'ul',
          'h2',
          'ul',
          'h2',
          'ul',
          'h2',
          'ul',
          'h2',
          'ul',
          'h2',
          'ul',
          'h2',
          'ul',
          'h2',
          'ul',
        ],
        data: [
          `Below is a general guide of the steps to be taken when initiating medication abortion (MA) services in your facility. Some of these may not apply, depending on your facility[12].`,
          'Review protocol:',
          `Review guidelines for MA.
        Prepare your protocol and invite the clinical team to review and give feedback on the protocol.
        Determine if purpose of offering MA is for occasional support for current primary care caseload or if it will be made available as a service in the community.
        Evaluate related protocols including contraception, STI testing and treatment and other sexual and reproductive healthcare services, and integrate them with the abortion protocols if appropriate.`,
          'Review regulations and compensation processes:',
          `Review provincial and territorial regulations and scope of practice for physicians and nurse practitioners, and assess the potential involvement of registered midwives in providing MA.
        For physicians, get familiar with provincial billing codes for provision of MA, including codes for any testing that you would be doing on-site.
        For nurse practitioners and registered midwives, review the compensation processes from the professional associations in your jurisdiction.`,
          'Address abortion concerns among your team:',
          `Explore the willingness to provide MA among all staff, address their concerns and determine how to best incorporate abortion services into your practice (see the next module).`,
          'Prepare plans to support underserved populations:',
          `Evaluate your services for its ability to serve underserved population such as non-insured patients, patients from Indigenous communities and patients identified as 2SLGBTQI+.
        Consider incorporating trauma-informed care and harm-reduction approaches in your services.
        Prepare plans to provide low-barrier MA services for underserved populations, and review these plans with your staff.`,
          'Review staffing and administrative capacity:',
          `Review current clinic capacity to provide MA.
        Determine key person or team to be primarily responsible for MA patients.
        Assess best times for scheduling MA patients.
        Review your clinic’s on-call schedule or your local hospital’s call service to connect with obstetricians.
        For clinical staff, arrange in-depth training on counselling, provision of Mifegymiso, and complication management.
        For support staff, prepare phone scripts and other resources for them to review and use.`,
          'Set up your facility:',
          `Assess the design of waiting rooms, reception areas and counselling rooms to ensure they promote patient privacy.
        Review arrangements with a lab or in-house capacity for a quantitative βhCG test and Rhesus testing and administration.
        Identify ultrasound facilities in your community, if not available on-site.
        Determine what additional supplies or equipment are needed.`,
          'Identify clinics for referral:',
          `Find procedural abortion clinics if you do not provide procedural abortion service.
        Identify abortion clinics in your area who can accept prompt referrals if your schedule cannot accommodate patients in a timely manner to ensure that your patients do not miss the window for MA.
        Find pharmacies that regularly stock Mifegymiso and develop relationships with local pharmacies who could stock Mifegymiso.`,
          'Prepare communication materials:',
          `Obtain or develop patient education materials, consent forms and other charting forms.
        Develop, print and distribute posters to let your clients know that you prescribe MA.`,
        ],
      },
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
            `Values clarification toolkits by National Abortion Federation.
          Values clarification workshop materials by the Reproductive Health Access Project.`,
            `Consider establishing a planning committee to discuss goals, tasks, timelines, obstacles and solutions.
          Find out about other local health centres or providers who have successfully integrated abortion services into their practice and invite them to meetings, workshops and planning sessions, or invite them to provide feedback and consult on your process.
          Develop a protocol for staff members who feel that they are unable to participate in providing abortion services.
          When interviewing applicants for staff vacancies, discuss the idea of abortion. Include in the job posting that applicant should be open to all aspects of reproductive care including pregnancy termination.`,
          ],
        ],
      },
    },
    {
      id: 'C1',
      title: 'Federal insurance schemes',
      content: {
        type: [
          'p',
          'h2',
          'p',
          'h2',
          'p',
          'h2',
          'p',
          'h2',
          'p',
          'h2',
          'p',
          'h2',
          'p',
        ],
        data: [
          `Patients who are covered through Federal programs, may request a prescription for Mifegymiso and fill it at a pharmacy of their choice and it will be fully covered when the pharmacy submits the billing to the Federal Plan assuming all other requirements for utilizing Mifegymiso are met.`,
          'Non-Insured Health Benefits (NIHB) Program',
          `Eligible First Nations and Inuit clients are covered fully for the cost of Mifegymiso for medication abortion.
        The claim process follows the normal submission process for other prescription drugs.

        Link: https://nihb-ssna.express-scripts.ca/en/0205140506092019/16/160407`,
          'Veterans Affairs Canada',
          `Mifegymiso is currently listed as a standard benefit on the Veterans Affairs Canada (VAF) drug benefit list.
        This means that it is readily accessible to eligible clients with a valid prescription.

        VAC clients have a VAC healthcare identification card on which “A” and/or “B” is indicated under the heading “Program number 10”. Group A clients may only use their card to obtain health benefits directly related to the treatment of their VAC pensioned medical condition.

        Group B clients are eligible for approved benefits if they have demonstrated a health need and the benefits are not available to them under a provincial health plan.

        In addition, since veterans are covered for basic healthcare coverage through the provincial or territorial healthcare system, their access to Mifegymiso will follow the same provincial or territorial process as other residents.

        Link: https://www.veterans.gc.ca/en/financial-programs-and-services/medical-costs/coverage-services-prescriptions-and-devices`,
          'Canadian Forces Health Services',
          `Mifegymiso is a regular benefit on the Canadian armed forces drug benefit list; no special authorization is required.

        Link: http://www.cmp-cpm.forces.gc.ca/hs/en/drug-benefit-list/index.asp`,
          'Royal Canadian Mounted Police (RCMP) Health Benefits Program',
          `RCMP officers are considered insured persons and receive basic healthcare through the healthcare system in the province or territory in which they reside, their access to Mifegymiso will follow the provincial or territorial process as other residents. Additionally, private plans that cover the cost of prescription drugs is also an option.

        Link: https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2234&languageId=1&contentId=58416`,
          'Interim Federal Health Program (IFHP)',
          `Coverage for Mifegymiso with IFHP is available in provinces and territories that have the medication listed on their public drug formularies.

        Link: https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program/coverage-summary.html`,
          'Programs from Correctional Services of Canada',
          `Service for people incarcerated in federal penitentiaries is provided directly from the pharmacy within the facility.`,
        ],
      },
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
          Norma Scarborough Fund | Action Canada: Visit actioncanadashr.org for more information.`,
          ],
        ],
      },
    },
    {
      id: 'M37',
      title: '2SLGBTQIA+ patients',
      content: {
        type: ['p', 'h2', 'ul'],
        data: [
          `Below are some suggestions to help clinicians create an inclusive environment where the needs of 2SLGBTQIA+ patients can be met. These suggestions are not exhaustive and providers are encouraged to consider other manuals and cultural competency training opportunities to provide inclusive care.

        These suggestions were reproduced from Gender Inclusive Language by Trans Care BC, The Trans-inclusive Abortion Services by the SHORE Centre and Fédération du Québec pour le planning des naissances, and the Handbook for Healthcare Providers Working with Clients from Diverse Communities by Action Canada for Sexual Health & Rights. For more information on the myths about reproduction of LGBTQ2S+, the vocabulary and glossary to use and avoid, and case studies and recommendations to overcome obstacles, please refer to these manuals.`,
          'Do’s and Don’ts:',
          `Do have accessible bathrooms for multiple genders by removing “Male” and “Female” signs from washrooms, or replacing them with an “All Gender Bathroom” sign.
        Do display 2SLGBTQIA+ inclusive posters, pamphlets, and other materials to let your patients know that they are welcome.
        Do use inclusive clinical forms (e.g., intake forms) that are inclusive of all sexual orientations and gender identities. Consider whether the questions you are asking are necessary to ask for clinical purposes, or if they are asked out of curiosity only.
        Do ask which pronouns patients prefer and use them consistently throughout their care.
        Do ask patients and observe what words they use to refer to their body parts, and mirror their language.
        Do respect trans patients’ rights to educate on trans issues or speak on behalf of the needs of trans patients.
        Do seek to remove barriers for 2SLGBTQIA+ patients.
        Do NOT use labels and terms derived from older versions of DSM and ICD such such as transgenderism, transsexualism and gender identity disorder.
        Do NOT use derogatory terms and expressions even if your patient does.`,
          'Gender-inclusive language:',
        ],
      },
    },
    {
      id: 'M38',
      title: 'Indigenous patients',
      content: {
        type: ['p', 'h2', 'ul'],
        data: [
          `Below are suggestions to help non-Indigenous healthcare professionals create an inclusive environment for Indigenous patients. These suggestions are not exhaustive and providers are encouraged to consider other manuals and cultural competency training opportunities to provide inclusive care.

        A variety of factors and realities may affect how Indigenous Peoples access health services, including geographical access barriers, the unavailability of language and translation services, a lack of culturally safe health care settings or past experiences of racism, stigma, shame, fear or discrimination. Be mindful that being Indigenous is not a risk factor in itself, what actually puts people at risk are systemic issues like racism, colonialism, inter-generational trauma, and a lack of access to culturally safe care, treatment and supports.

        These recommendations were reproduced from The Indigenous Ally Toolkit by the Montreal Urban Aboriginal Community Strategy Network, and the Handbook for Healthcare Providers Working with Clients from Diverse Communities by Action Canada for Sexual Health & Rights.`,
          'Quick tips for clinicians:',
          `Offer translation services, and where possible, translated resources.
        Connect with, and advocate for the involvement of, Indigenous patient navigators in your area.
        When hearing about difficult or violent experiences from patients, affirm their experiences and stories. Avoid shaming them for the feelings they have, or the ways they use to cope.
        Create and maintain a list of available resources and cultural supports within your region, including social services.
        Support your patients to participate in the creation of their treatment plans, including the incorporation of traditional and cultural resources and methods.
        Avoid saying “Canada’s Indigenous Peoples” or “Our Indigenous Peoples” – The Indigenous Peoples are not owned by Canada or by any individual.
        Avoid saying “The Indigenous culture” – this phrase does not recognize that there are hundreds of Indigenous communities, nations, languages and cultures existing in Canada. Instead of singular, try using plural forms “Indigenous cultures” or even better, being specific about the nation to avoid pan-Indigenizing.`,
        ],
      },
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

        Link: https://www.ab.bluecross.ca/pdfs/pharmacy-benefacts/pharmacy-benefact-697.pdf`,
        ],
      },
    },
    {
      id: 'C3',
      title: 'British Columbia',
      content: {
        type: ['p'],
        data: [
          `Mifegymiso is covered under the BC Pharmacare Assurance Plan (Plan Z and exceptional Plan Z) which provides 100% coverage. All residents of BC with active Medical Services Plan (MSP) coverage are eligible.

        Link: www2.gov.bc.ca/gov/content/health/practitioner-professional-resources/pharmacare/pharmacies/plan-z`,
        ],
      },
    },
    {
      id: 'C4',
      title: 'Manitoba',
      content: {
        type: ['p'],
        data: [
          `All residents of Manitoba with a valid Manitoba Health Registration Card and a prescription for Mifegymiso are eligible for coverage. Clients presenting with a valid Manitoba Health card and a prescription from an authorized prescriber should not be charged any out-of-pocket costs and even if the client is enrolled in Pharmacare or another provincial drug program (e.g., Family Services/EIA), there is no requirement to meet a deductible or co-pay.

        Link: https://www.gov.mb.ca/health/pharmacare/profdocs/csp_mifegymiso.pdf`,
        ],
      },
    },
    {
      id: 'C5',
      title: 'New Brunswick',
      content: {
        type: ['p'],
        data: [
          `Coverage is available through the Medical Abortion Program. Manual claims will not be accepted, and claims must be submitted online.

        Link: https://www2.gnb.ca/content/gnb/en/departments/hea.../medical_abortion_claims_submission.html`,
        ],
      },
    },
    {
      id: 'C6',
      title: 'Newfoundland & Labrador',
      content: {
        type: ['p'],
        data: [
          `Coverage is available at no cost to individuals with a valid Medical Care Plan card. Individuals can receive a prescription through their healthcare provider, the regional health authorities, or the Athena Clinic in St. John’s. Those with private insurance will use this first, and then the province will cover any remaining cost as last payer. Claims can be submitted in real time through the Newfoundland and Labrador Prescription Drug Program (NLPDP) adjudication system regardless of eligibility.

        Link: www.gov.nl.ca/hcs/files/prescription-provider-guide-program-claiming-policies.pdf`,
        ],
      },
    },
    {
      id: 'C7',
      title: 'Northwest Territories',
      content: {
        type: ['p'],
        data: [
          `Coverage for Mifegymiso in the Northwest Territories is provided through the Northern Options for Women (NOW) Program*. The pharmacist will fill the prescription and bill your government/employer’s insurance (if applicable). The Department of Health and Social Services will be sent an invoice for any outstanding amount that your insurance plan does not cover, or will invoice the entire amount if you do not have any insurance coverage at all.

        *The NOW program is only available in Yellowknife and Inuvik currently. The Department will cover the medical travel costs for residents that live outside of Yellowknife and Inuvik who choose treatment options using Mifegymiso and are referred by a practitioner.

        Link (page 40/41): www.hss.gov.nt.ca/en/services/mifegymiso-northwest-territories`,
        ],
      },
    },
    {
      id: 'C8',
      title: 'Nova Scotia',
      content: {
        type: ['p'],
        data: [
          `Effective November 1, 2017, coverage is available for all persons in Nova Scotia with a valid health card number. Any other sources of insurance, such as a private plan, must be billed first. The method for claims submission is outlined below. Should you have any questions, please contact the Pharmacare Office.

        Link (see page 41): novascotia.ca/dhw/pharmacare/documents/Pharmacy-Guide.pdf`,
        ],
      },
    },
    {
      id: 'C9',
      title: 'Nunavut',
      content: {
        type: ['p'],
        data: [
          `Abortions in Nunavut are free for First Nations beneficiaries and are covered under Nunavut Healthcare. An estimated 86% of Nunavut residents are eligible for coverage through the Non-Insured Health Benefits Program.

        Link: www.pharmacists.ca/cpha-ca/assets/File/cpha-on-the-issues/Mifegymiso_Access_Scan.pdf`,
        ],
      },
    },
    {
      id: 'C10',
      title: 'Ontario',
      content: {
        type: ['p'],
        data: [
          `Effective August 10, 2017, all Ontarians with a valid Ontario Health Insurance Plan (OHIP) and a valid prescription are eligible for Mifegymiso. This includes both Ontario Drug Benefit (ODB) recipients and non-ODB recipients. Pharmacies must ensure the eligible person’s date of birth, health card number and name (as it appears on the Ontario Health Card) are entered correctly as part of the Health Network Solution (HNS) claims submission. Mifegymiso supplied to patients with a valid prescription will be reimbursed by the ministry.

        Link: https://www.pharmacytechnologysolutions.ca/pharmaclik-rx-doc/Content/Resources/PDFs/ODBMifegymisoClaims.pdf`,
        ],
      },
    },
    {
      id: 'C11',
      title: 'Prince Edward Island',
      content: {
        type: ['p'],
        data: [
          `Medication abortion Services are offered at no charge through Sexual Health, Options & Reproductive Services (SHORS) and the Women’s Wellness Program. However, a valid PEI Health Card is required.

        Link: www.princeedwardisland.ca/en/information/health-pei/abortion-services`,
        ],
      },
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
          `Link: https://www.ramq.gouv.qc.ca/sites/default/files/documents/liste_med_2022-12-14_en_0.pdf`,
        ],
      },
    },
    {
      id: 'C13',
      title: 'Saskatchewan',
      content: {
        type: ['p'],
        data: [
          `Saskatchewan provides 100% coverage for Mifegymiso for residents eligible under the Saskatchewan Drug Plan. Claims may be submitted electronically to the Saskatchewan Drug Plan.

        Link: https://formulary.drugplan.ehealthsask.ca/SearchFormulary`,
        ],
      },
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

        Link: https://open.yukon.ca/sites/default/files/mt006-mIfe.pdf`,
        ],
      },
    },
    {
      id: 'M32',
      title: 'Key counselling points',
      content: {
        type: ['p', 'h2', 'ul', 'p', 'ul', 'p'],
        data: [
          `Prior to arriving at the pharmacy for MIFE / MISO, people seeking abortion, hereinafter called “patients”, will already have had a conversation with prescribers about medication abortion (MA) such as pregnancy options, eligibility, risks and efficacy[10].`,
          'Counselling Points:',
          `Confirm that the decision is the patients’ own, reached without coercion.
        Verify the written date of the prescription; if the prescription was written 7 or more days from when the prescription was brought to the pharmacy, the pharmacist may want to follow-up with the prescriber.
        Emphasize that in the event of an ongoing pregnancy post-MA, another dose of MISO or procedural abortion is recommended as both MIFE and MISO are teratogenic.
        Exclude contraindications.
        Review the date and time patients plan to take MIFE / MISO.
        Review the date that patients have a follow up with their prescriber.`,
          'Ensure patients have the following before leaving[10]:',
          `Sanitary pads and liners.
        Pain medication and/or anti-nauseants (Over-the-counter or prescription).
        Access to emergency care.
        Support for childcare, transportation, and groceries.`,
          `Ensure patients understand how to administer MIFE / MISO, how to manage side effects, and know when and how to seek care.`,
        ],
      },
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
        All-Options, a talk-line to discuss past or current experience with abortion, adoption and parenting for people in Canada and the United States (1-888-493-0092).`,
        ],
      },
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

        As for MISO, there is no known drug interactions. Oral ingestion with food or antacids may decrease oral bioavailability[10].`,
        ],
      },
    },
    {
      id: 'M30',
      title: 'Pharmacokinetics',
      content: {
        type: ['p', 'ul'],
        data: [
          `MIFE taken orally shows non-linear pharmacokinetics. It is rapidly absorbed and distributed, reaching peak concentrations after 0.75 hours. It is 94-99% plasma-bound and is metabolized by CYP enzymes, mainly CYP3A4. Elimination is relatively slow with a half-life ranging between 83 and 90 hours[10].

        MISO‘s pharmacokinetic profile varies substantially depending on the route of administration[10]:`,
          `Buccal: time to first uterine contraction is 67 minutes, sustained for about 90 minutes and begins to decline at 5 hours after administration. The uterine response appears similar to that of vaginal administration, with less inter-individual variability.
        Vaginal: time to first uterine contraction is 82 minutes for dry tablets and 98 minutes for moistened tablets, sustained activity is attained at 106 minutes and 128 minutes, respectively, and uterine activity begins to decline at five hours after administration.
        Sublingual: tablets are absorbed through the mucosa within 20 minutes and MISO reaches peak serum concentration at 30 minutes. First-pass metabolism is avoided.`,
        ],
      },
    },
    {
      id: 'M31',
      title: 'Clinical assessments',
      content: {
        type: ['p', 'ul', 'p'],
        data: [
          `Prescribers will provide clinical assessments prior to prescribing MIFE / MISO. With the new guideline by SOGC for the provision of medical abortion via telemedicine (MA), prescribers may eliminate blood work or ultrasound, or both, to ensure timely provision of MA[7].

        Gestational age is determined using medical history, urine or serum βhCG test, or ultrasound. Ultrasound is not required to determine gestational age, unless people seeking abortion are uncertain of their last menstrual period[6,7].

        Ectopic pregnancy is ruled out using medical history to screen for risk factors and symptoms. Ultrasound is recommended if there are significant risk factors or symptoms suggestive of ectopic pregnancy[6,7].

        Guideline on Rhesus testing and administration varies:`,
          `SOGC’s Guideline on Prevention of RhD Alloimmunization: Rh administration is suggested for non-sensitized Rh D-negative individuals who have experienced threatened, spontaneous, or induced abortion after 12 weeks gestation[21].
        The Society of Family Planning: Rh testing is not recommended prior to 12 weeks gestations for spontaneous, medications, or uterine aspiration abortion[8].`,
          `Complete blood count to measure hemoglobin level is indicated if there is an increased risk of anemia; otherwise, it is unnecessary[7].

        Routine prophylactic antibiotics are not required; screen-and-treat is the preferred management strategy and it is performed by the prescriber[6].`,
        ],
      },
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
        Get familiar with regulations by your provincial College of Pharmacists. This contains some but not all province-specific regulations.
        Prepare your own protocol, and invite other staff to review and give feedback.
        Become familiar with provincial insurance schemes and coverage of Mifegymiso.
        Explore the willingness to dispense Mifegymiso among all staff, including pharmacy assistants, technicians and administrators, address their concerns and stigma, and determine how to best initiate abortion services at your pharmacy.
        Review current pharmacy staffing to determine the capacity to provide MA.
        Determine a key person or team to be primarily responsible for MA patients.
        Develop, print and distribute posters to let clients and other healthcare providers know that you dispense Mifegymiso.`,
          'Adapted from the Checklist for starting medical abortion services by National Abortion Federation.',
        ],
      },
    },
    {
      id: 'M39',
      title: 'What is Medication Abortion',
      content: {
        type: ['p', 'i-full'],
        data: [
          `Abortion is legal in Canada, and patients do not require consent from partners or parents to seek an abortion. It is the second most common reproductive health service: one in three Canadian pregnancy-capable persons will seek abortion in their lifetime[2,14,15,18].

        Medication abortion uses medication pills to end a pregnancy. In Canada, the medication abortion pills are packaged and sold as Mifegymiso. It is approved by Health Canada for gestational age up to 63 days, but has been shown to be safe and effective up to 70 days by the Society of Obstetricians and Gynaecologists of Canada and 77 days by the World Health Organization. The counselling and the medication are provided free-of-charge to all patients with provincial health insurance and several categories of federal health insurances. However, it is important to note that patients eligible for healthcare in one province, who attempt to get medication abortion in another province or territory, are covered for counselling but not for the medication itself.

        Mifegymiso typically comes in two boxes: a green box containing mifepristone 200 mg (MIFE) and an orange box containing misoprostol 800 mcg (MISO). MIFE helps stop a pregnancy from growing and prepares the body to empty the uterus by softening the cervix and helping the lining of the uterus to break down. MISO causes the cervix to dilate and the uterus to contract, which makes the pregnancy tissues leave the body. It is also used for abortion and for other conditions (e.g., miscarriage, postpartum hemorrhage)[14].`,
          images.MifegysmoOverview,
        ],
      },
    },
    {
      id: 'M40',
      title: 'Who Can Prescribe',
      content: {
        type: ['p', 'ul', 'p'],
        data: [
          `At the time of this writing, physicians and nurse practitioners in Canada are authorized to prescribe Mifegymiso. Midwives in all provinces and territories, except for Quebec, are not authorized to prescribe Mifegymiso but can provide medication abortion care when working closely with nurse practitioners or physicians.

        Providers of medication abortion can be found through:`,
          `Find medication abortion services portal by Action Canada for Sexual Health and Rights (please click the hyperlink and then select the option “Medical Abortion”)
        The list of abortion clinics by Action Canada for Sexual Health and Rights.
        The Choice Connect Abortion Referral App.`,
          `Counselling and clinical assessments are required prior to prescribing Mifegymiso. Counselling is to help patients make an informed decision by understanding their options (abortion versus term pregnancy, and medication abortion versus procedural abortion). Clinical assessments are to confirm that the gestational age does not exceed the threshold (63 days by Health Canada, 70 days by the Society of Obstetricians and Gynaecologists of Canada), rule out serious conditions such as ectopic pregnancy and anemia, and determine the need for bloodwork such as Rhesus testing[6].

        In cases of virtual or hybrid provision of medication abortion (also called no-touch or low-touch medication abortion), the number of visits is minimized by carrying out counselling, screening and follow- up appointments virtually over the phone or through video. The purpose is to reduce the need for patients to travel long distance or wait for days or weeks to receive abortion. However, the virtual provision of medication abortion may put patients at risk due to the lack of ultrasound screening that can provide accurate assessment of the gestational age or about the presence of ectopic pregnancy. In addition, virtual medication abortion may involve more frequent (phone) follow- up to monitor the symptoms and risk of ongoing pregnancy and ectopic pregnancy, and thus it often requires more clinical resources. For these reasons, whether virtual provision of medication abortion is possible depends on prescribers’ experiences, clinical resources, patients’ needs and patients’ safety[7].`,
        ],
      },
    },
    {
      id: 'M41',
      title: 'Where to Get the Medication',
      content: {
        type: ['p'],
        data: [
          `In most cases, pharmacists are in charge of dispensing the medication to patients, but some clinics are also authorized to dispense the medication directly to patients. Specific guidelines by the College of Pharmacies may differ between provinces and territories about whether patients need to be present in- person to pick up the medication, or whether the medication can be delivered to patients via postage services.`,
        ],
      },
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
        A: No. Fertility is rapidly restored after a medical abortion. Patients who have undergone medication abortion have no increased risk of pre-term delivery or low birth weight or low mean length compared with patients that have not had a previous abortion[7].`,
        ],
      },
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
        All-Options, a talk-line to discuss past or current experience with abortion, adoption and parenting for people in Canada and the United States (1-888-493-0092).`,
        ],
      },
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
        A: Symptoms are vague and include general malaise with nausea, vomiting, and diarrhea, weakness, absence of fever (or mild fever), minimal abdominal pain, flu-like symptoms, hypotension, tachycardia, edema, high hemoglobin level (hemoconcentration) and a high white blood cell count[23-25].`,
        ],
      },
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

        Mifepristone Summary of Use during Lactation (NLM):

        Limited information indicates that breastfeeding need not be interrupted after a single dose of mifepristone. A dose of 200 mg might be preferable to a 600 mg dose in nursing mothers

        Drug Levels:

        Maternal Levels. Twelve women (most 6 to 12 months postpartum) who had undergone a medical abortion using mifepristone and misoprostol provided milk samples for up to 5 days after the procedure for measurement of mifepristone. In the 2 women who received a single dose of 200 mg orally, mifepristone was undetectable (<5.6 mcg/L) in breastmilk at all times. Among the 10 women who received a single oral dose of 600 mg, average mifepristone breastmilk levels were 172 mcg/L on day 1 (n = 9); 66 mcg/L on day 2 (n = 9); 31 mcg/L on day 3 (n = 10); 24 mcg/L on day 4 (n = 4); and, 25 mcg/L on day 5 (n = 3). Breastmilk levels of mifepristone were highest in the samples collected between 6 and 9 hours after drug administration. Samples collected between 9 and 15 hours after the dose had much lower mifepristone levels. The authors estimated that a fully breastfed infant would receive a weight-adjusted dosage of 0.5% of the maternal dosage. They suggested that breastfeeding need not be interrupted after a single dose of mifepristone and that a dose of 200 mg might be preferable to a 600 mg dose in nursing mothers[26].

        Misoprostol Summary:

        Misoprostol is a prostaglandin E1 analogue. Prostaglandin E1 and other prostaglandins appear normally in colostrum and milk[27-29]. Because of the low levels of misoprostol in breastmilk, amounts ingested by the infant are small and would not be expected to cause any adverse effects in breastfed infants. No special precautions are required.

        No evidence supports pumping and discarding of breast milk while undergoing the medical abortion. Mifepristone levels in breast milk after a mother receives 600 mg of mifepristone are low and are undetectable after a 200 mg dose. Levels of misoprostol in breast milk are also low, and the small amounts ingested by infants should not cause any adverse effects[26]. (National Abortion Federation, revised April 2016).
        `,
        ],
      },
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
          `In the case report of one failure, Sorensen, E.C. et al., hypothesized that twin pregnancies may need higher dosage of mifepristone than single pregnancies[31]. But no trial has been performed to test this hypothesis and this article was highly criticized by Hausknecht, R. in an author reply. Looking at these results, we think it is reasonable to perform a medication abortion with mifepristone & misoprostol in patients with a twin pregnancy up to 63 days.`,
        ],
      },
    },
    {
      id: 'F6',
      title: 'Methadone',
      content: {
        type: ['p'],
        data: [
          `Q: Is there an interaction between methadone and mifepristone?
        A: Bottom Line:

        Post-marketing surveillance of mifepristone use in numerous countries for the past 25 years has not raised concerns about this interaction. Although there are limited trials and published literature on this drug interaction, the precautionary principle states that women using both drugs simultaneously be adequately informed, accompanied during the abortion process and followed for the occurrence of adverse events and completion of the abortion. Even if arrhythmia were not a potential side effect based on pharmacodynamics, it may emerge as an adverse drug reaction as mifepristone penetrates the population more widely including opioid/opiate dependent women.

        We include below an opinion from a Pharmacology professor at UBC. Additionally, three highly experienced leaders in mifepristone provision in the USA have offered their opinion that they have not seen evidence for any adverse effect interaction. The answer from a Drug Metabolism/Pharmacokinetic point of view is: probably not. The (slightly longer) explanation is as follows: Methadone primarily binds the “mu” opioid receptor similar to other opioids, which is why it is a replacement therapy for people with addictive and tolerant issues. Methadone does have some off-target effects at the N-methyl-D-aspartate (NMDA) receptor, which is a glutamate receptor, an excitatory receptor in the brain. In terms of metabolism and excretion, methadone is subjected to a great deal of CYP (cytochrome P450 enzymes) metabolism from CYP3A4, CYP2D6, and CYP2B6 as well. In addition, one of the problems with methadone is that it is readily transported by the P-gp (P-glycoprotein 1) transporter. This transporter protein is found in the human blood: brain barrier (few others are) and in the significant minority of people who express high P-gp, it makes methadone a “not very good” drug.

        In contrast, mifepristone (RU486) is a massively strong binder of the progesterone receptor (IC50 = 0.025 nM for the Progesterone Receptor according to Katzung). What that means for abortion is that the placenta cannot stay cleaved to the uterine wall (which requires progesterone signaling), and will slough off – that is the mechanism of action of mifepristone. Mifepristone itself acts as a moderate inhibitor of CYP3A4 metabolism and can thereby alter concentrations of other drugs. Due to its prolonged half-life and irreversible binding, potential interactions of mifepristone should be checked particularly for medications that have a narrow therapeutic index. Examples include: immune-suppressants (eg, cyclosporine, sirolimus, tacrolimus); cardiovascular drugs (eg, calcium channel blockers, anti-arrhythmics, others); analgesic/anesthetic agents (eg, fentanyl, ketamine, methadone, others). The effect of a single dose of mifepristone on metabolism and effect of other drugs highly dependent upon CYP3A4 for their metabolism or activation may persist for up to two weeks. Interactions with these medications should be checked prior to administration of mifepristone.

        There are no current reports in the literature about people on methadone having better or worse experiences with RU486 as an abortifacient, with the following two exceptions: (1) these patients are less likely to be compliant and so might report taking the drug without doing so and (2) there are conflicting reports re: methadone having effects on heart rhythm (this is odd) and that combined with mifepristone this might cause serious arrhythmia.

        In short, it would seem that Mifegymiso could slow the metabolism of methadone for a period of time and thus, methadone levels could be slightly higher.
        `,
        ],
      },
    },
  ],
  fr: [],
}

function getModules(ids: string[], modules: Modules) {
  const moduleMap = new Map(modules.map((module: any) => [module.id, module]))
  return ids.map((id) => moduleMap.get(id)).filter(Boolean)
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
    '/prescribing/clinical-resources': [''],
    '/prescrire/ressources-cliniques': [''],
    '/dispensing/coverage-&-insurance': ['C1', 'M36', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12', 'C13', 'C14'],
    '/dispenser/couverture-et-assurance': ['C1', 'M36', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12', 'C13', 'C14'],
    '/dispensing/patient-communication': ['M32', 'M15', 'M33', 'M16', 'M19', 'M34', 'M20'],
    '/dispenser/communication': ['M32', 'M15', 'M33', 'M16', 'M19', 'M34', 'M20'],
    '/dispensing/about-mifegymiso': ['M1', 'M29', 'M30', 'M2', 'M3', 'M31'],
    '/dispenser/a-propos-du-mife-miso': ['M1', 'M29', 'M30', 'M2', 'M3', 'M31'],
    '/dispensing/regulations-inclusivity': ['M26', 'M35', 'M299', 'M37', 'M38'],
    '/dispenser/reglements-inclusivite': ['M26', 'M35', 'M299', 'M37', 'M38'],
    '/dispensing/clinical-resources': [''],
    '/dispenser/ressources-cliniques': [''],
    '/supporting-roles/medication-abortion': ['M39', 'M3', 'M40', 'M41'],
    '/r%C3%B4les-de-soutien/avortement-par-medicaments': ['M39', 'M3', 'M40', 'M41'],
    '/supporting-roles/client-counselling': ['M42', 'M43', 'M15', 'M33', 'M16', 'M44'],
    '/r%C3%B4les-de-soutien/counseling-de-la-personne': ['M42', 'M43', 'M15', 'M33', 'M16', 'M44'],
    '/supporting-roles/resources': [''],
    '/r%C3%B4les-de-soutien/ressources': [''],
    '/faq': ['F1', 'F2', 'F3', 'F4', 'F5', 'F6'],
  };

  return getModules(modulePaths[path] || [''], modules)
}
