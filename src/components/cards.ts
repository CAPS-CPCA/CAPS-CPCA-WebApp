export type card = {
    title: string;
    description: string;
    btn: [ string, string ];
};

export const cards = {
    en: [{
                title: 'Prescribing',
                desc: 'Go here if you are a physician, a nurse practitioner, a midwife or anybody who prescribes, plans to prescribe or supports prescribing medication abortion.',
                '/prescribing': 'View',
            },
            {
                title: 'Dispensing',
                desc: 'Go here if you are a pharmacist or any other clinician who is currently dispensing or plans to dispense Mifegymiso.',
                '/dispensing': 'View',
            },
            {
                title: 'Supporting',
                desc: 'Go here if you are a community worker, a social worker or a counsellor, or if you are supporting your colleagues and friends in taking medication abortion.',
                '/supporting': 'View',
            }],
    fr: [{
                title: 'Prescrire',
                desc: 'Cliquez ici si vous êtes médecins, infirmières praticiennes spécialisées, sages-femmes ou toute personne qui prescrit, envisage de prescrire ou soutient la prescription d’un avortement par médicaments.',
                '/presrire': 'Voir',
            },
            {
                title: 'Dispenser',
                desc: 'Cliquez ici si vous êtes pharmaciens ou tout autre clinicien qui dispense actuellement ou envisage de délivrer du Mifé-Miso.',
                '/dispenser': 'Voir',
            },
            {
                title: 'Rôles de soutien',
                desc: 'Cliquez ici si vous êtes travailleurs communautaires, travailleurs sociaux ou conseillers, des personnes à recourir à l’avortement par médicaments.',
                '/rôles%20de%20soutien': 'Voir',
            }]
}