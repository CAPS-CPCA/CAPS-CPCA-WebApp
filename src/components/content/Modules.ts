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
        content: ['<strong>Efficacy:</strong>',
            '<ul>',
            '<li>MIFE / MISO is highly effective. The risk of ongoing pregnancy is 0.9% for pregnancies up to 49 days of gestation and 3.1% for pregnancies up to 70 days of gestation[10].',
            '<li>According to SOGC’s protocol for the provision of medication abortion via telemedicine, the patient should take a first dose of misoprostol buccally or vaginally 24-48 hours after taking mifepristone[7].',
            '<li>In addition, patients with gestational age 63 days or less should take the second dose of misoprostol if no bleeding occurs within the first 24 hours after the first misoprostol dose or as instructed by the clinician. Patients with a gestational age over 63 days should take a second dose of misoprostol 4 hours after the first dose[7].</li>',
            '</ul>',
            '<strong>Side Effects and Complications</strong>[10]:',
            '<ul>',
            '<li><strong>Very common (≥ 10%):</strong> Nausea, vomiting, diarrhea, dizziness, headache, chills / fever, weakness, fatigue, gastric discomfort, abdominal pain, vaginal bleeding, spotting, uterine contractions or cramping.',
            '<li><strong>Common (1-10%):</strong> Fainting, light or moderate gastrointestinal cramping, prolonged post-abortion bleeding, endometritis, breast tenderness, heavy bleeding (may or may not require surgical termination of pregnancy).',
            '<li><strong>Uncommon (0.1-1%):</strong> Arrhythmia, hemorrhagic shock, salpingitis, heavy bleeding requiring IV fluids or blood transfusion, infection, hot flushes, hypotension, bronchospasm, skin rash / pruritus.',
            '</ul>'
        ],
    },
    {
        id: 'M3',
        title: 'Indication & Contraindications',
        content: ['<strong>Indication:</strong>',
        'MIFE / MISO is indicated by Health Canada for pregnancy termination up to 63 days as counted from the first day of the last menstrual period (LMP) in a presumed 28-day cycle. The Society of Obstetricians and Gynaecologists of Canada indicates safe use up to 70 days after LMP. There is no absolute lower gestational age limit[5].',
        '<strong>Contraindications</strong>[6]:',
        '<ul>',
        '<li>Ectopic pregnancy',
        '<li>Chronic adrenal failure',
        '<li>Inherited porphyria',
        '<li>Uncontrolled asthma',
        '<li>Hemorrhagic disorder or concurrent anticoagulant therapy',
        '<li>Anemia (Hb level < 9.5 g/dL)',
        '<li>Long-term systemic corticosteroid therapy',
        '<li>Allergy or hypersensitivity to product ingredients',
        '<li>IUD in situ (no longer a contraindication once removed)',
        '<li>Serious systemic illnesses such as liver disease, cardiac disease, renal failure and seizure disorders (these illnesses should be evaluated individually)',
        '<li>Uncertain gestational age',
        '<li>Decisional uncertainty',
        '</ul>',
        '<strong>Breastfeeding / Chestfeeding</strong>[6]:',
        'Oral MISO is excreted into human breast milk in small amounts which are rapidly eliminated. No interruption of breastfeeding or chestfeeding is necessary when misoprostol is given by any route.',
        '<strong>Gestational Age > 63 days</strong>',
        '<a href="https://caps.sogc.org/wp-content/uploads/2024/01/C31.pdf" style="color: blue;">The Society of Obstetricians and Gynaecologists of Canada</a> and the <a href="https://caps.sogc.org/wp-content/uploads/2024/01/C6.pdf" style="color: blue;">National Abortion Federation</a> both endorse medication abortion (MA) with MIFE / MISO up to 70 days after LMP. They also recommend a second dose of MISO 800mcg four hours after the first dose of MISO 800mcg to increase the effectiveness of MA[5,13].',
        'The Society of Obstetricians and Gynaecologists of Canada also recommends a MIFE / MISO regimen from 70-84 days gestational age, with mifepristone 200mg followed in 24-48 hours with two doses of MISO 800mcg (buccal or vaginal), 4 hours apart.',
        'The effectiveness decreases as the gestational age approaches 70 days. Prescribers should counsel patients that this is off-label use, that there is a possibility of expelling and seeing an intact fetus, and that there are higher rates of bleeding and incomplete or failed abortion.',
        '<strong>Patients between 15 to 18 years of age</strong>',
        'Data is insufficient to establish efficacy and safety in patients younger than 15 years old. However, in patients aged between 15 and 18 years, safety and efficacy have been demonstrated with vomiting and pain being reported more frequently than in adults[11]. Thus, special considerations for patients in this age range can include counselling to prepare them for vomiting and pain, as well as psychosocial supports through the medication abortion process.',
        ],
    },

    {
        id: 'M5',
        title: 'Indication & contraindications',
        content: [''],
        images: [{title: 'Adverse Effects', src: 'https://via.placeholder.com/800x400', alt: 'Adverse Effects' }],
    },
    {
        id: 'M6',
        title: 'Monitoring and Follow-Up',
        content: ['Patients should be advised to return to the clinic for a follow-up visit 7 to 14 days after taking MIFE. This visit is important to confirm that the pregnancy has ended and to assess the patient’s health. If the pregnancy has not ended, the patient may require additional doses of MIFE or MISO, or a surgical abortion[10].'],
        images: [{title: 'Monitoring and Follow-Up', src: 'https://via.placeholder.com/800x400', alt: 'Monitoring and Follow-Up' }],
    }
];

// this function returns the modules in accending order and doesn't repeat the modules if they are already in the list. Needs to be refactored to be more dynamic.
export function getModules(ids: string | string[]) {
    return modules.filter(module => ids.includes(module.id));
}