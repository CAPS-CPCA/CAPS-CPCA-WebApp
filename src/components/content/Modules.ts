import { images } from '../../assets';

const modules = [
    {
        id: 'M1',
        title: 'Mechanism of Action',
        content: ['In Canada, the medication abortion pills are packaged and sold as Mifegymiso. Mifegymiso comes in an outer white box, containing two smaller boxes: a green box containing mifepristone 200 mg (MIFE) and an orange box containing misoprostol 800 mcg (MISO) (four small tablets of 200 mcg each)[10].','MIFE is a progesterone receptor modulator. It is a potent anti-progestin that also exhibits strong antiglucocorticoid and weak antiandrogenic properties. It blocks progesterone receptors in early pregnancy, which leads to endometrial degeneration, synthesis of prostaglandins, and decline in beta-human chorionic gonadotropin (βhCG) secretion. These events promote cervical dilation and facilitate the onset of bleeding[10].','MISO is a potent synthetic prostaglandin E1 that induces cervical ripening and uterine contractions, which cause the pregnancy tissues to leave the body[10].','Click here to download the Product monograph.'],
        images: [{title: 'Mifegymiso', src: 'https://caps.sogc.org/wp-content/uploads/2024/01/Mifegysmo-Overview.png', alt: 'Mifegymiso' }],
    },
    {
        id: 'M2',
        title: 'Efficacy & Safety',
        content: ['<h2>Efficacy:</h2>',
            '<ul><li>MIFE / MISO is highly effective. The risk of ongoing pregnancy is 0.9% for pregnancies up to 49 days of gestation and 3.1% for pregnancies up to 70 days of gestation[10].',
            '<li>According to SOGC’s protocol for the provision of medication abortion via telemedicine, the patient should take a first dose of misoprostol buccally or vaginally 24-48 hours after taking mifepristone[7].',
            '<li>In addition, patients with gestational age 63 days or less should take the second dose of misoprostol if no bleeding occurs within the first 24 hours after the first misoprostol dose or as instructed by the clinician. Patients with a gestational age over 63 days should take a second dose of misoprostol 4 hours after the first dose[7].</li></ul>',
            '<h2>Side Effects and Complications[10]:</h2>',
            '<ul><li><strong>Very common (≥ 10%):</strong> Nausea, vomiting, diarrhea, dizziness, headache, chills / fever, weakness, fatigue, gastric discomfort, abdominal pain, vaginal bleeding, spotting, uterine contractions or cramping.',
            '<li><strong>Common (1-10%):</strong> Fainting, light or moderate gastrointestinal cramping, prolonged post-abortion bleeding, endometritis, breast tenderness, heavy bleeding (may or may not require surgical termination of pregnancy).',
            '<li><strong>Uncommon (0.1-1%):</strong> Arrhythmia, hemorrhagic shock, salpingitis, heavy bleeding requiring IV fluids or blood transfusion, infection, hot flushes, hypotension, bronchospasm, skin rash / pruritus.</ul>',
        ],
    },
    {
        id: 'M3',
        title: 'Indication & Contraindications',
        content: ['<h2>Indication</h2>',
        'MIFE / MISO is indicated by <a class="in" href="https://caps.sogc.org/wp-content/uploads/2024/01/C17-2.pdf">Health Canada</a> for pregnancy termination up to 63 days as counted from the first day of the last menstrual period (LMP) in a presumed 28-day cycle. The Society of Obstetricians and Gynaecologists of Canada indicates safe use up to 70 days after LMP. There is no absolute lower gestational age limit[5].',
        '<h2>Contraindications[6]:</h2>',
        '<ul><li>Ectopic pregnancy</li>',
        '<li>Chronic adrenal failure</li>',
        '<li>Inherited porphyria</li>',
        '<li>Uncontrolled asthma</li>',
        '<li>Hemorrhagic disorder or concurrent anticoagulant therapy</li>',
        '<li>Anemia (Hb level < 9.5 g/dL)</li>',
        '<li>Long-term systemic corticosteroid therapy</li>',
        '<li>Allergy or hypersensitivity to product ingredients</li>',
        '<li>IUD in situ (no longer a contraindication once removed)</li>',
        '<li>Serious systemic illnesses such as liver disease, cardiac disease, renal failure and seizure disorders (these illnesses should be evaluated individually)</li>',
        '<li>Uncertain gestational age</li>',
        '<li>Decisional uncertainty</li></ul>',
        '<h2>Breastfeeding / Chestfeeding[6]:</h2>',
        'Oral MISO is excreted into human breast milk in small amounts which are rapidly eliminated. No interruption of breastfeeding or chestfeeding is necessary when misoprostol is given by any route.',
        '<h2>Gestational Age > 63 days</h2>',
        '<a class="in" href="https://caps.sogc.org/wp-content/uploads/2024/01/C31.pdf">The Society of Obstetricians and Gynaecologists of Canada</a> and the <a class="in" href="https://caps.sogc.org/wp-content/uploads/2024/01/C6.pdf">National Abortion Federation</a> both endorse medication abortion (MA) with MIFE / MISO up to 70 days after LMP. They also recommend a second dose of MISO 800mcg four hours after the first dose of MISO 800mcg to increase the effectiveness of MA[5,13].',
        'The Society of Obstetricians and Gynaecologists of Canada also recommends a MIFE / MISO regimen from 70-84 days gestational age, with mifepristone 200mg followed in 24-48 hours with two doses of MISO 800mcg (buccal or vaginal), 4 hours apart.',
        'The effectiveness decreases as the gestational age approaches 70 days. Prescribers should counsel patients that this is off-label use, that there is a possibility of expelling and seeing an intact fetus, and that there are higher rates of bleeding and incomplete or failed abortion.',
        '<h2>Patients between 15 to 18 years of age<h2>',
        'Data is insufficient to establish efficacy and safety in patients younger than 15 years old. However, in patients aged between 15 and 18 years, safety and efficacy have been demonstrated with vomiting and pain being reported more frequently than in adults[11]. Thus, special considerations for patients in this age range can include counselling to prepare them for vomiting and pain, as well as psychosocial supports through the medication abortion process.',
        ],
    },
    {
        id: 'M5',
        title: 'Pre-abortion Counselling',
        content: [
            'Counselling is to ensure patients understand different options, the risks and benefits of each and make informed decisions. Counselling also helps prescribers understand patients’ preferences and circumstances to advise the best course of actions.',
            '<h2>Key counselling points include[4,6]:</h2>',
                '<ul><li><strong>Review pregnancy options</strong> when indicated: abortion, becoming a parent or child adoption.',
                '<li>Tailor the counselling to the needs of the patient (such as counteracting abortion stigma and/or providing emotional support).',
                '<li>Communicate the risk of advancing gestational age without putting time pressure on the patient.',
                '<li><strong>Use non-judgmental and inclusive language.</strong></ul>',
            '(If choosing abortion:)',
                '<ul><li>Review <a class="in" href="https://caps.sogc.org/prescribing/#1">abortion options</a>, including risks, efficacy, process and length of time of medication versus procedural abortion.',
                '<li><strong>Discuss the patient’s eligibility for medication abortion</strong>, including gestational age and medical history.',
                '<li><strong>Discuss the patient’s access to pharmacies, telephone, transportation, emergency care, and labs and imaging facilities</strong> if needed.',
                '<li>Discuss <a class="in" href="https://caps.sogc.org/prescribing/#1">the patient’s preferences and circumstances</a>, such as a safe place in their living situation to complete medication abortion. Share decision tools such as  <strong><a class="ex" href="https://www.sexandu.ca/its-my-choice/">It’s My Choice</a></strong> to help the patient choose the type of abortion that fits them.',
                '<li>Confirm that the decision is the patient’s own, reached without coercion.',
                '<li>Confirm the patient’s understanding that <strong>medication abortion is irreversible</strong> and that the patients must take an additional dose of the second medication or undergo procedural abortion in case of ongoing pregnancy.',
                '<li>Review the timing of examinations (ultrasound, blood tests, if needed), medications and follow-up appointments.',
                '<li>Discuss <a class="in" href="https://caps.sogc.org/prescribing/?heading=Post-abortion%20Assessment&subheading=Post-abortion%20Contraception#4">post-abortion contraception options</a>.</ul>',
        ],
    },

    {
        id: 'M6',
        title: 'Abortion Options',
        content: [
            '<strong>Medication abortion</strong> is suitable for patients who[6]:',
                '<ul><li>Prefer a non-invasive method.',
                '<li>Prefer to have an abortion in the comfort of their home.',
                '<li>Have the confidence of being able to manage the process and side effects at home.',
                '<li>Are able to take 1 to 3 days off work or other responsibilities to undergo the abortion process.',
                '<li>Lack means of transportation to travel to the clinic for a procedural abortion (but still need access to emergency services in event of complications).</ul>',
            '<strong>Procedural abortion</strong> is suitable for patients who[6]:',
                '<ul><li>Prefer to have in-person support and monitoring from healthcare professionals at a clinic or hospitals.',
                '<li>Want to have the abortion completed quickly to return to work or other responsibilities.',
                '<li>Are comfortable with the use of medical instruments and internal exams.',
                '<li>Are comfortable undergoing local or general anesthesia to manage pain.',
                '<li>Do not want to disclose the pregnancy and the abortion to those patients live with (such as partners, roommates, co-workers), as it might be difficult to conceal heavy bleeding and strong cramps.</ul>',
        ],
        images: [{title: 'Abortion Options', src: images.AbortionOptions, alt: 'Abortion Options' }],

    },

    {
        id: 'M14',
        title: 'Informed Consent',
        content: [
            'After the patient and the health provider determine that medication abortion (MA) is the right option, the health provider should[2,6,7,10]:',
                '<ol><li><strong>Obtain written or verbal informed consent</strong> (see examples by <a class="in" href="https://caps.sogc.org/wp-content/uploads/2024/01/C78.pdf">CAPS-CPCA platform</a> and the <a class="in" href="https://caps.sogc.org/wp-content/uploads/2024/01/C83.pdf">Bay Center for Birth Control</a>) and document it in the patients’ chart.',
                '<li><strong>Prescribe:</strong>',
                    '<ul><li>Mifepristone 200 mg (MIFE) orally and misoprostol 800 mcg (MISO) buccally or vaginally (this combination is packaged and branded as Mifegymiso).',
                    '<li>Additional dose of MISO buccally or vaginally in case of incomplete or failed abortion.',
                    '<li>Analgesics and antiemetics as per health provider / facility protocol.',
                    '<li>Antibiotic prophylaxis, if needed, as per health provider / facility protocol.</ul>',
                '<li>Provide instructions on <a class="in" href="https://caps.sogc.org/prescribing/#1">how to take the medication</a>.',
                '<li>Ensure patients know <a class="in" href="https://caps.sogc.org/prescribing/#1">how to manage side effects</a> and when and where to seek care for complications.',
                '<li>Consider informing patients if the MA procedure involves off-label, evidence-based practices.',
                    '<ul><li>Much of the MA off-label practices are based on low-resource availability and require a balance between health providers’ experience, patients’ safety and patients’ needs.',
                    '<li>It is recommended to inform patients about off-label practices so patients understand the risks involved and understand that off-label practices might vary depending on prescribers’ experience and comfort level.</ul>',
                '<li>Discuss post-abortion contraception options. <strong>Emphasize that patients can quickly return to fertility following the abortion.</strong>',
                '<li><strong>Set up follow-up appointment(s), either in-person or via phone/video.</strong> Do discuss any safety or privacy plan if needed.',
                '<li>Provide patients with patient instruction manuals (see an example by the <a class="in" href="https://caps.sogc.org/wp-content/uploads/2024/01/C73.pdf">SHORE center and the Planned Parenthood Ottawa</a>) and the contact details of healthcare providers and emergency health services.',
                '<li>Take note of patients’ preferred phone numbers and emergency contacts in case providers are unable to reach patients directly. Be mindful that the emergency contact that the patient gives during their visits for MA may be different from the emergency contact on file. Be sure not to contact any other individuals without the patient’s expressed consent.</ol>',
        ],
    },

    {
        id: 'M15',
        title: 'Administration instruction',
        images: [{title: 'Administration instruction', src: images.AdminInstructions, alt: 'Administration instruction' }],
    },

    {
        id: 'M33',
        title: 'Missed Doses',
        content: [
            'Both MIFE and MISO are teratogenic and have been associated with fetal abnormalities. Once the MIFE / MISO treatment has been started, there is a risk of embryotoxicity if the pregnancy is not terminated[10].',
            'If MISO is forgotten and > 48 hours have passed since MIFE: take MISO right away and inform the prescriber at follow-up[10].',
            '<h2>Buccal administration of MISO[10]</h2>',
                '<ul><li>If vomiting occurs < 1 hour after taking MIFE or during buccal absorption of MISO: contact a prescriber / pharmacist for assessment.',
                '<li>If vomiting occurs > 30 minutes after swallowing MISO fragments: No action is required.</ul>',
            '<h2>Vaginal insertion of MISO[10]</h2>',
                '<ul><li>If tablets fall out before bleeding starts: Re-insert the tablet or contact a healthcare professional if unable to reinsert.',
                '<li>If tablets come out while bleeding: No action is required; in most cases, a sufficient portion of the medication will have been absorbed.</ul>',
            'In any case, if bleeding does not start within a few hours, contact a healthcare professional.'
        ],
    },
    
    {
        id: 'M16',
        title: 'Side-effect Management',
        images: [{title: 'Side-effect Management', src: images.SideEffectsManage, alt: 'Side-effect Management' }],
    },

    {
        id: 'M8',
        title: 'Basic screening',
        content: ['Medical history must be taken to assess gestational age, evaluate contraindications and identify additional precautions. The history also provides a baseline for follow- up and helps determine suitable contraception options and whether additional tests are needed[6].',
        'Baseline vital signs and pelvic examination should be performed as directed by history. Practices may vary[6].', 
        ],
    },

    {
        id: 'M9',
        title: 'Pregnancy & Gestational Age Screening',
        content: ['A positive urine beta human chorionic gonadotropin test (βhCG) is sufficiently sensitive to confirm a pregnancy[6].',
        '<strong>Ultrasound</strong>: Ultrasound provides the most accurate measurement of gestational age (GA) but is not a routine requirement unless the patient is uncertain of their last menstrual period (or there are symptoms and risk factors for ectopic pregnancy as explained later). It is recommended to choose an ultrasound clinic whose staff are capable of offering non-judgmental sonography[6].',
        '<strong>Medical history:</strong If the patient is certain of their last menstrual period and if they were having regular periods without recent use of hormonal contraception, GA estimate that is based on their date would correlate closely with the results from ultrasound[6].',
        '<strong>Gynaecological examination:</strong> In the first trimester, determination of GA with bimanual exam has been shown to be accurate within 2 weeks of GA determined by ultrasound; however, accuracy varies with the prescriber’s experience and with the amount of adipose tissue and the presence of fibroids[6].',    
        '<strong>βhCG test:</strong> βhCG level rises linearly during the first 6 weeks of pregnancy but the high variability thereafter limits the utility of βhCG for dating[6].'
    ],
    },

    {
        id: 'M10',
        title: 'Ectopic Pregnancy',
        content: [
        '<strong>Ectopic pregnancy (EP)</strong> is rare. It occurs in 1 or 2 out of 100 pregnancies in the general population, and the rate is consistently lower among those seeking abortion. It is recommended that <strong>patients undergo ultrasound if they have significant medical risk factors, signs or symptoms of EP[6]</strong>.',
        '<h2>Significant risk factors, signs and symptoms of EP include[6]:</h2>',
            '<ul><li>Previous ectopic pregnancy.',
            '<li>IUD in place.',
            '<li>Pregnancy conceived with assisted reproduction techniques.',
            '<li>Previous surgery of the fallopian tubes such as tubal ligation.',
            '<li>History of salpingitis or pelvic inflammatory disease.',
            '<li>Symptoms of abdominal pain and vaginal bleeding.</ul>',
        '<strong>Multiple pregnancies</strong> is not a contraindication to medication abortion (MA), however the presence of multiples should be communicated to the patient if they agree to obtain information about the pregnancy[6].',
        '<strong>Missed and incomplete abortion</strong> should also be disclosed to the patients if they agree to obtain information about the ultrasound and should be managed either by MA or procedural abortion[6].'   ,
        'In case of <strong>molar pregnancy</strong>, procedural abortion with consideration for referral, histological review and follow-up of βhCG is essential, and MA is not appropriate[6].'
    ],
        images: [{title: 'Ectopic Pregnancy', src: images.EctopicPregnancy, alt: 'Ectopic Pregnancy' }],
    },

    {
        id: 'M11',
        title: 'Pregnancies of Unknown Location',
        content: [
        'Patients who have a <strong>pregnancy of unknown location (PUL)</strong> and request medication abortion (MA) should receive abortion care without delay, provided that they have no clinical symptoms of ectopic pregnancy (EP). Failure to identify a definite intrauterine pregnancy should not delay MA[6].',
        '<strong>If the serum βhCG is > 2000 IU / L and no intrauterine gestational sac is visualized on ultrasound[6]:</strong>',
        '<li>Further investigation is required.</li>',
        '<strong>In the absence of EP risk factors, if βhCG is ≤ 2000 IU / L or a likely gestational sac is present without a yolk sac or fetal pole[6]:</strong>',
        '<li>Patients with PUL can receive MA.',
        '<li>When PUL patients receive MA, they should be informed of the risks and symptoms of EP, and who to contact in case of emergency.',
        '<li>Follow-up βhCG within 7 days is recommended for PUL patients. A decrease of 50% at 3 days after mifepristone administration (or 24-48 hours after misoprostol) or 80% between 7 and 14 days after MIFE / MISO administration is expected; otherwise, EP should be ruled out.',    
        ],
    },
    
    {
        id: 'M12',
        title: 'Rhesus Screening',
        content: [
        'Guidelines on Rh screening have been updated.',
        'According to the <a class ="ex" href="https://www.jogc.com/article/S1701-2163(24)00260-3/abstract">SOGC’s Guideline on Prevention of RhD Alloimmunization</a> published in 2024, for non-sensitized Rh D-negative individuals who have experienced threatened, spontaneous or induced abortion after <strong>12 weeks gestation</strong>, administration of 300 μg of Rho(D) immune globulin is suggested.',
        'Prior to that, in 2022, <a class="in" href="https://caps.sogc.org/wp-content/uploads/2024/01/SFP1.pdf">the Society of Family Planning</a> and the <a class="in" href="https://caps.sogc.org/wp-content/uploads/2024/01/WHO1.pdf">World Health Organization</a> also recommends withholding Rh testing and administration prior to 12 weeks gestation for patients undergoing MA, spontaneous abortion or uterine aspiration abortion[8,20].'
    ],
    },

    {
        id: 'M13',
        title: 'Anemia, STIs & Others',
        images: [{title: 'Anemia, STIs & Others', src: images.AnemiaSTIOthers, alt: 'Anemia, STIs & Others' }],
    },

    {
        id: 'M17',
        title: 'Post-abortion Follow-up',
        images: [{title: 'Post-abortion Follow-up', src: images.PostAbortionFollowUp, alt: 'Post-abortion Follow-up' }],
        content: [
        'A follow-up appointment is required to confirm the termination of the pregnancy, manage complications, counsel on contraceptive plans and, if applicable, provide emotional support.',
        '<h2>Mode of follow-up:</h2>',
        '<strong>Emotional support[6]:</strong> Emotional response after MA often vary. Some people feel relieved and positive and some have feelings of grief, sadness, or guilt while others have mixed feelings. These emotions are normal, and they may or may not be related to socioeconomic circumstances, the lack of social support, moral discomfort, and family conflict.',
        'Patients can be supported by understanding that mixed emotions are normal and by exploring coping strategies and support. Useful resources include:',
        '<li><strong><a class="ex" href="https://exhaleprovoice.org/" >Exhale</a></strong>, a talk-line that provides emotional support, resources and information after abortion.',
        '<li><strong><a class="ex" href="https://www.all-options.org/" >All-Options</a></strong>, a talk-line to discuss past or current experience with abortion, adoption and parenting for people in Canada and the United States (1-888-493-0092).'
    ]
    },

    {
        id: 'M18',
        title: 'Abortion Completion Assessment ',
        content: [
        'Completion of medication abortion (MA) must be assessed by the provider. Depending on the circumstances, this can be done by obtaining a clinical history, ultrasonography, or urine or serum bhCG testing. This assessment can be done in person, by telephone or electronic communication as per clinical indication and the preferences of the patient and the provider.',
        '<strong>Clinical history[6]:</strong> The assessment of successful expulsion based on medical history is highly predictive of complete abortion (sensitivity 99.1%, specificity 45.5%). No bleeding or minimal bleeding after MISO, and continuing pregnancy symptoms are suggestive of an ongoing pregnancy.',
        '<h2>Urine bhCG[7]:</h2>',
        '<h2>Serum bhCG[3]:</h2>',
            '<ul><li>A drop by at least 50% from baseline at 3 days after MIFE administration (or 24 and 48 hours after MISO administration) is highly indicative of complete abortion.',
            '<li>A drop by 80% between 7 and 14 days after MIFE / MISO administration confirms abortion completion.',
            '<li>If bhCG drops < 80% between day 7 and 14, prescribers may order an ultrasound or repeat the test in a few days. Ultrasound should be ordered if 14 days have passed and a drop by 80% has not been reached.</ul>',
        '<strong>Ultrasonography[6]:</strong> Ultrasound provides definitive evidence of MA completion, but no evidence shows that it is superior to other methods. It is recommended in cases where the outcome is uncertain based on clinical history, or there are symptoms such as unexpected pain, prolonged heavy bleeding or inadequate bleeding.',
        ],
        images: [{title: 'Abortion Completion Assessment ', src: images.AbortionComplete, alt: 'Abortion Completion Assessment ' }],
    },

    {
        id: 'M19',
        title: 'Complication Management',
        content:[
        '<strong>Ongoing pregnancy[6]:</strong> Ongoing pregnancy after medication abortion is uncommon and can be treated with another dose of MISO or with procedural abortion. Procedural abortion is recommended if cardiac activity is present 14 to 21 days after taking MISO.',
        '<strong>Retained products of conception[6]:</strong> In the absence of ongoing pregnancy, retained products of conception can be managed by asking patients to wait for bleeding and cramping, offering them another dose of MISO, or providing them with or referring them for procedural abortion. Urgent procedural abortion is indicated in cases of heavy uncontrolled bleeding or retained products of conception associated with endometritis.',
        'Symptoms of retained products include unexpected heavy/prolonged bleeding or cramping, and failure to have expected bleeding.',
        '<strong>Post-abortion infections[6]:</strong> Treatment should be individualized and usually consists of broad-spectrum therapy. In mild cases, oral antibiotics can be used, but if infection is severe, patients should be hospitalized for treatment. Once patients start antibiotics, procedural abortion may be necessary to remove significant retained products of contraception.',
        'Symptoms of Post-Abortion Infections',
                '<ul><li>Abdominal or pelvic pain',
                '<li>Foul-smelling vaginal or cervical discharge',
                '<li>Prolonged vaginal bleeding or spotting',
                '<li>Fever or chills (more than 24 hours after MISO)',
                '<li>Uterine or adnexal tenderness',
                '<li>Elevated white blood cell count (upon lab examination)</ul>',
        '<strong>Toxic shock syndrome[6]:</strong> Toxic shock syndrome is associated with clostridium and Group A streptococcus. The majority of these infections are fulminant and rapidly progress to shock. Standard antibiotic therapy is not sufficient; thus, the treatment consists of supportive care, and empiric antibiotic treatment covering clostridial species and other organisms known to cause toxic shock, and surgical debridement, including possible hysterectomy.',
        'Symptoms of Toxic Shock Syndrome',
                '<ul><li>General malaise with nausea, vomiting, and diarrhea',
                '<li>Absence of fever (or mild fever)',
                '<li>Minimal abdominal pain',
                '<li>Weakness',
                '<li>Flu-like symptoms',
                '<li>Tachycardia / hypotension',
                '<li>Edema',
                '<li>High white blood cell counts or high hemoglobin level (upon lab examination)</ul>',
        ],
    },

    {
        id: 'M20',
        title: 'Post-abortion Contraception',
        content: [
        'Due to rapid return to fertility following medication abortion (MA), patients should be advised to have a method for contraception at the earlier visits[6].',
        'Patients seeking <strong>more information about contraception options</strong> can be referred to:',
            '<ul><li>Sex and U’s <strong><a class="ex" href="https://www.itsaplan.ca/" >It’s a plan</a></strong>, an online health information tool to determine the right contraception method.',
            '<li><strong><a class="ex" href="https://www.actioncanadashr.org/sexual-health-hub/birth-control" >Action Canada’s Sexual Health Hub</a></strong> on Birth Control, a website that contains information on birth control in Canada.</ul>',
        'Below is a list of <strong>contraception options and special considerations:</strong>',   
        ],
        images: [{title: 'Post-abortion Contraception', src: images.PostAbortionContraception, alt: 'Post-abortion Contraception' }],
    },

    {
        id: 'M21',
        title: 'Initial Steps',
        content: [
        '<strong>Virtual or hybrid provision of medication abortion</strong> (MA), which is also called no-touch or low-touch medication abortion, is one where some or all of the appointments are carried out virtually over phone and / or video by reducing or eliminating blood work and ultrasound. The purpose is to reduce patients’ risk of contracting transmissible infections (as in the case of COVID-19) or reduce the need for patients to travel long distances or wait for days or weeks to receive abortion.',
        'As explained elsewhere, virtual and hybrid provision of MA is based on low resource availability and requires <strong>a balance between prescribers’ experience, patients’ safety and patients’ needs.</strong>',
        'When receiving requests for virtual or hybrid medication abortion, prescribers should[7]:',
                '<ol><li>Confirm patient identity and ensure patient has privacy and safety to discuss.',
                '<li>Provide written information on medication and procedural abortion in advance of the consultation.',
                '<li>If not already done, ask the patient to obtain and take a qualitative urine high sensitivity pregnancy test from the pharmacy.',
                '<li>Schedule a first virtual visit via telephone or video.</ol>',
        ],
    },

    {
        id: 'M22',
        title: 'Virtual Assessment',
        content: [
        'The following assessments should be carried out[7,19]:',
                '<ol><li><strong>Review pregnancy options counselling.</strong>',
                '<li><strong>Establish pregnancy and gestational age.</strong>',
                '<li><strong>Exclude </strong><a class="in" href="https://caps.sogc.org/prescribing/?heading=About%20Mifegymiso&subheading=Indication%20&%20Contraindications#3" >contraindications</a>.',
                '<li><strong>Assess the need for an ultrasound to determine gestational age and the location of pregnancy[5]:</strong>',
                    '<ul><li>According to <a class="in" href="https://caps.sogc.org/wp-content/uploads/2024/01/C14.pdf" >SOGC’s protocol on medication abortion</a> via telemedicine, ultrasound should be obtained if LMP is uncertain, LMP is over 70 days, and the signs, symptoms and risk factors of ectopic pregnancy (EP) are present.',
                    '<li>Medication abortion performed without ultrasound is, by definition, <a class="in" href="https://caps.sogc.org/prescribing/?heading=Pre-abortion%20Medical%20Evaluation&subheading=Pregnancies%20of%20Unknown%20Location" >pregnancy of unknown location</a> and should be managed accordingly. Though the risk of unrecognized EP is low, close follow-up is required to ensure completion of the medication abortion.</ul>',
                '<li><strong>Assess the need for blood work to measure hemoglobin[7]:</strong>',
                    '<ul><li>According to Health Canada, hemoglobin should be over 9.5 g / dL before starting MA.',
                    '<li>Screen patients for increased risk of anemia through a detailed medical history.',
                    '<li>If patients are suspected to have an increased risk of anemia, complete blood count is indicated. Otherwise, measuring hemoglobin is unnecessary.</ul>',
                '<li><strong>Assess the need for blood work to determine </strong><a class="in" href="https://caps.sogc.org/prescribing/?heading=Pre-abortion%20Medical%20Evaluation&subheading=Rhesus%20Screening#5" >Rhesus status (Rh)</a>[7]:',
                    '<ul><li>As explained elsewhere, guidelines on Rh status have been updated and vary between organizations.',
                    '<li>According to the <strong><a class="ex" href="https://www.jogc.com/article/S1701-2163(24)00260-3/abstract" >SOGC’s Guideline on Prevention of RhD Alloimmunization</a></strong> published in 2024, for non-sensitized Rh D-negative individuals who have experienced threatened, spontaneous or induced abortion after 12 weeks gestation, administration of 300 μg of Rho(D) immune globulin is suggested.',
                    '<li><a class="in" href="https://caps.sogc.org/wp-content/uploads/2024/01/C6.pdf" >The National Abortion Federation</a>, the <a class="in" href="https://caps.sogc.org/wp-content/uploads/2024/01/SFP1.pdf" >Society of Family Planning</a> and the <a class="in" href="https://caps.sogc.org/wp-content/uploads/2024/01/WHO1.pdf" >World Health Organization</a> all recommend Rh testing and administration for patients who are 12 weeks gestation or beyond, but not for patients who are under 12 weeks LMP.</ul>',
                '<li><strong>Assess the need for</strong> <a class="in" href="https://caps.sogc.org/prescribing/?heading=Pre-abortion%20Medical%20Evaluation&subheading=Anemia,%20STIs%20&%20Others">STI testing</a>[7]:',
                    '<ul><li>Offer testing for chlamydia and gonorrhea if patients come to office.',
                    '<li>Otherwise, evaluate the risk of STIs and consider remote testing if risk factors are present, and discuss the potential need for antibiotic treatment.</ul></ol>',
        ],
    },
];


// this function returns the modules in accending order and doesn't repeat the modules if they are already in the list. Needs to be refactored to be more dynamic.
export const getModules = (ids: string[] = []): any[] => {
    if (ids.length === 0) return modules;
    return modules.filter((module) => ids.includes(module.id));
};