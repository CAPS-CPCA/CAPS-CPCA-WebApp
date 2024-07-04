const modules = [
    {
        id: 'M1',
        title: 'Mechanism of Action',
        content: ['In Canada, the medication abortion pills are packaged and sold as Mifegymiso. Mifegymiso comes in an outer white box, containing two smaller boxes: a green box containing mifepristone 200 mg (MIFE) and an orange box containing misoprostol 800 mcg (MISO) (four small tablets of 200 mcg each)[10].','MIFE is a progesterone receptor modulator. It is a potent anti-progestin that also exhibits strong antiglucocorticoid and weak antiandrogenic properties. It blocks progesterone receptors in early pregnancy, which leads to endometrial degeneration, synthesis of prostaglandins, and decline in beta-human chorionic gonadotropin (βhCG) secretion. These events promote cervical dilation and facilitate the onset of bleeding[10].','MISO is a potent synthetic prostaglandin E1 that induces cervical ripening and uterine contractions, which cause the pregnancy tissues to leave the body[10].','Click here to download the Product monograph.'],
        images: [{title: 'Mifegymiso', src: 'https://via.placeholder.com/800x400', alt: 'Mifegymiso' }],
    },
    {
        id: 'M2',
        title: 'Indications',
        content: ['Mifegymiso is indicated for medical termination of a developing intrauterine pregnancy with a gestational age of up to 63 days, as calculated from the first day of the last menstrual period[10].'],
        images: [{title: 'Indications', src: 'https://via.placeholder.com/800x400', alt: 'Indications' }],
    },
    {
        id: 'M3',
        title: 'Contraindications',
        content: ['Mifegymiso is contraindicated in patients with the following conditions[10]:','Confirmed or suspected ectopic pregnancy','Chronic adrenal failure','Hemorrhagic disorders or concurrent anticoagulant therapy','Inherited porphyria','Allergy to mifepristone, misoprostol, or any other component of the product','Long-term corticosteroid therapy','Intrauterine device in place','Uncontrolled asthma','Glucocorticoid therapy','Severe uncontrolled hypertension','Renal failure','Liver failure','Severe anemia','Inflammatory bowel disease','Porphyria','Hypersensitivity to prostaglandins','Hypersensitivity to mifepristone','Hypersensitivity to misoprostol','Hypersensitivity to any other component of the product'],
        images: [{title: 'Contraindications', src: 'https://via.placeholder.com/800x400', alt: 'Contraindications' }],
    },
    {
        id: 'M4',
        title: 'Dosage and Administration',
        content: ['Mifegymiso is administered orally in the following manner[10]:','Day 1: 200 mg of mifepristone (MIFE) is taken orally as a single dose','Day 3: 800 mcg of misoprostol (MISO) is taken buccally or vaginally 24 to 48 hours after taking MIFE','Patients should be advised to return to the clinic for a follow-up visit 7 to 14 days after taking MIFE. This visit is important to confirm that the pregnancy has ended and to assess the patient’s health. If the pregnancy has not ended, the patient may require additional doses of MIFE or MISO, or a surgical abortion.'],
        images: [{title: 'Dosage and Administration', src: 'https://via.placeholder.com/800x400', alt: 'Dosage and Administration' }],
    },
    {
        id: 'M5',
        title: 'Adverse Effects',
        content: ['The most common adverse effects of Mifegymiso are[10]:','Nausea','Vomiting','Diarrhea','Abdominal pain','Uterine cramping','Headache','Dizziness','Fatigue','Back pain','Fever','Chills','Hot flashes','Rigors','Uterine bleeding','Spotting','Heavy bleeding','Prolonged bleeding','Pelvic pain','Uterine contractions','Fetal parts expelled','Incomplete abortion','Failed abortion','Infection','Hypersensitivity','Anaphylaxis','Death'],
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