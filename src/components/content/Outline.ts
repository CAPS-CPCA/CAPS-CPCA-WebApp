export type Outline = {
    subpages: {
        href: string,
        title: string,
        modules: {[key: string]: string}
    }[],
    resources: {
        href: string,
        title: string,
        modules: {[key: string]: string}
    }[]
}

const outlines: {[key:string]: Outline} = {
    '/prescribing': {
            subpages: [
                {
                    href: '/prescribing/about-mifegymiso#M1',
                    title: 'About Mifegymiso',
                    modules: {
                        M1: 'Mechanism of Action',
                        M2: 'Efficacy & Safety',
                        M3: 'Indication & Contraindications'
                    }
                },
                {
                    href: '/prescribing/patient-counselling#M5',
                    title: 'Patient Counselling',
                    modules: {
                        M5: 'Pre-abortion Counselling',
                        M6: 'Abortion Options',
                        M14: 'Informed Consent',
                        M15: 'Administration Instruction',
                        M33: 'Missed Doses',
                        M16: 'Side-effect Management'
                    }
                },
                {
                    href: '/prescribing/medical-evaluation#M8',
                    title: 'Pre-abortion Medical Evaluation',
                    modules: {
                        M8: 'Basic screening',
                        M9: 'Pregnancy & Gestational Age screening',
                        M10: 'Ectopic Pregnancy',
                        M11: 'Pregnancy of unknown locations',
                        M12: 'Rhesus screening',
                        M13: 'Anemia, STIs & others'
                    }
                },
                { 
                    href: '/prescribing/assessment#M17',
                    title: 'Post-abortion Assessment',
                    modules: {
                        M17: 'Post-abortion Follow-up',
                        M18: 'Abortion Completion Assessment',
                        M19: 'Complication Management',
                        M20: 'Post-abortion Contraception',
                    }
                },
                {
                    href: '/prescribing/virtual-hybrid-care#M21',
                    title: 'Virtual & Hybrid Care',
                    modules: {
                        M21: 'Initial Steps',
                        M22: 'Virtual Assessment',
                        M14: 'Informed Consent',
                        M23: 'Follow-up'
                    }
                }
            ],
            resources:[
                {
                    href: '/prescribing/billing-codes#B1',
                    title: 'Physician Billing Codes',
                    modules: {
                        B1: 'Alberta',
                        B2: 'British Columbia',
                        B3: 'Manitoba',
                        B4: 'New Brunswick',
                        B5: 'Newfoundland & Labrador',
                        B6: 'Northwest Territories',
                        B7: 'Nova Scotia',
                        B8: 'Nunavut',
                        B9: 'Ontario',
                        B10: 'Prince Edward Island',
                        B11: 'Quebec',
                        B12: 'Saskatchewan',
                        B13: 'Yukon'
                    }
                },
                {
                    href: '/prescribing/regulations-insurance-inclusivity#M26',
                    title: 'Regulations, Insurance & Inclusivity Toolkits',
                    modules: {
                        M26: 'Regulatory landscape',
                        M27: 'Facility setup',
                        M28: 'Addressing abortion concerns',
                        C1: 'Federal insurance schemes',
                        M36: 'Non-insured patients',
                        M37: '2SLGBTQIA+ patients',
                        M38: 'Indigenous patients'
                    }
                },
                {
                    href: '/prescribing/clinical-resources#S1',
                    title: 'Guidelines, Checklists & Toolkits',
                    modules: {
                        S1: 'Checklists and Resource Guides',
                        S2: 'Training and Webinars',
                        S3: 'Product Monographs, Guidelines and Protocols',
                        S4: 'Consent Form samples',
                        S5: 'Patient Resources',
                        S6: 'Toolkits for Addressing Abortion Concerns',
                        S7: 'Toolkits for Supporting Underserved Communities'
                    }
                }
            ]
        },
        '/prescrire': {
            subpages: [
                {
                    href: '/prescrire/a-propos-du-mife-miso#M1',
                    title: 'À propos du mifé-miso',
                    modules: {
                        M1: 'Mécanisme d’action',
                        M2: 'Efficacité et sécurité',
                        M3: 'Indications et contre-indications'
                    }
                },
                {
                    href: '/prescrire/counseling-de-la-personne#M5',
                    title: 'Counseling de la personne',
                    modules: {
                        M5: 'Counseling pré-avortement',
                        M6: 'Options d’avortement',
                        M14: 'Consentement éclairé',
                        M15: 'Instructions d’administration',
                        M33: 'Doses manquées',
                        M16: 'Gestion des effets secondaires'
                    }
                },
                {
                    href: '/prescrire/evaluation-medicale#M8',
                    title: 'Évaluation pré-avortement',
                    modules: {
                        M8: 'Dépistage de base',
                        M9: 'Détermination de l’âge gestationnel',
                        M10: 'Grossesse ectopique',
                        M11: 'Grossesse de localisation indéterminée',
                        M12: 'Dépistage du statut Rh',
                        M13: 'Anémie, ITSS et autres'
                    }
                },
                { 
                    href: '/prescrire/evaluation-post-avortement#M17',
                    title: 'Évaluation post-avortement',
                    modules: {
                        M17: 'Suivi post-avortement',
                        M18: 'Évaluation du succès de l’avortement',
                        M19: 'Gestion des complications',
                        M20: 'Contraception post-avortement',
                    }
                },
                {
                    href: '/prescrire/soins-virtuels-hybrides#M21',
                    title: 'Soins virtuels et hybrides',
                    modules: {
                        M21: 'Étapes initiales',
                        M22: 'Évaluation virtuelle',
                        M14: 'Consentement éclairé',
                        M23: 'Suivi'
                    }
                }
            ],
            resources:[
                {
                    href: '/prescrire/codes-de-facturation#B1',
                    title: 'Codes de facturation',
                    modules: {
                        B1: 'Alberta',
                        B2: 'Colombie-Britannique',
                        B3: 'Manitoba',
                        B4: 'Nouveau Brunswick',
                        B5: 'Terre-Neuve et Labrador',
                        B6: 'Territoires du Nord-Ouest',
                        B7: 'Nouvelle-Écosse',
                        B8: 'Nunavut',
                        B9: 'Ontario',
                        B10: 'Île-du-Prince-Édouard',
                        B11: 'Québec',
                        B12: 'Saskatchewan',
                        B13: 'Yukon'
                    }
                },
                {
                    href: '/prescrire/reglements-assurance-inclusivite#M26',
                    title: 'Règlements, assurance et inclusivité',
                    modules: {
                        M26: 'Contexte réglementaire',
                        M27: 'Configuration des installations',
                        M28: 'Répondre aux préoccupations liées à l’avortement',
                        C1: 'Régimes d’assurance fédéraux',
                        M36: 'Personnes non-assurées',
                        M37: 'Personnes 2ELGBTQIA+',
                        M38: 'Personnes autochtones',
                    }
                },
                {
                    href: '/prescrire/ressources-cliniques#S1',
                    title: 'Lignes directrices et autres ressources',
                    modules: {
                        S1: 'Guides et aides-mémoires',
                        S2: 'Formations et webinaires',
                        S3: 'Monographies, lignes directrices et protocoles',
                        S4: 'Exemples de formulaires de consentement',
                        S5: 'Instructions pour la patientèle',
                        S6: 'Boîtes à outils pour répondre aux préoccupations liées à l’avortement',
                        S7: 'Boîtes à outils pour soutenir les communautés mal desservies'
                    }
                }
            ]
        },
        '/dispensing': {
            subpages: [
                {
                    href: '/dispensing/coverage-&-insurance',
                    title: 'Coverage & Insurance',
                    modules: {
                        C1: 'Federal Insurance Schemes',
                        M36: 'Non-Insured Patients',
                        C2: 'Alberta',
                        C3: 'British Columbia',
                        C4: 'Manitoba',
                        C5: 'New Brunswick',
                        C6: 'Newfoundland & Labrador',
                        C7: 'Northwest Territories',
                        C8: 'Nova Scotia',
                        C9: 'Nunavut',
                        C10: 'Ontario',
                        C11: 'Prince Edward Island',
                        C12: 'Quebec',
                        C13: 'Saskatchewan',
                        C14: 'Yukon',
                        
                    }
                },
                {
                    href: '/dispensing/patient-communication',
                    title: 'Patient Communication',
                    modules: {
                        M32: 'Key counselling points',
                        M15: 'Administration instructions',
                        M33: 'Missed doses',
                        M16: 'Side effect management',
                        M19: 'Complication management',
                        M34: 'Optional follow-up',
                        M20: 'Post-abortion contraception'
                    }
                },
                {
                    href: '/dispensing/about-mifegymiso',
                    title: 'About Mifegymiso',
                    modules: {
                        M1: 'Mechanism of action',
                        M29: 'Drug interactions',
                        M30: 'Pharmacokinetics',
                        M2: 'Efficacy & safety',
                        M3: 'Indication & contraindications',
                        M31: 'Clinical assessments'
                    }
                },
                
            ],
            resources:[
                { 
                    href: '/dispensing/regulations-inclusivity',
                    title: 'Regulations & Inclusivity Toolkits',
                    modules: {
                        M17: 'Post-abortion Follow-up',
                        M18: 'Abortion Completion Assessment',
                        M19: 'Complication Management',
                        M20: 'Post-abortion Contraception',
                    }
                },
                {
                    href: '/dispensing/clinical-resources',
                    title: 'Guidelines, Checklists & Toolkits',
                    modules: {
                        S1: 'Checklists and Resource Guides',
                        S2: 'Training and Webinars',
                        S3: 'Product Monographs, Guidelines and Protocols',
                        S4: 'Posters and Patient Materials',      
                        S6: 'Toolkits for Addressing Abortion Concerns',
                        S7: 'Toolkits for Supporting Underserved Communities'
                    }
                }
                
            ]
        },
        
        
    }

export function getOutline(path: string): Outline {   
    return outlines[path];
}