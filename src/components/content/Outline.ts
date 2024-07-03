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
                    href: '/prescribing/about-mifegymiso',
                    title: 'About Mifegymiso',
                    modules: {
                        M1: 'Mechanism of Action',
                        M2: 'Efficacy & Safety',
                        M3: 'Indication & Contraindications'
                    }
                },
                {
                    href: '/prescribing/patient-counselling',
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
                    href: '/prescribing/medical-evaluation',
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
                    href: '/prescribing/assessment',
                    title: 'Post-abortion Assessment',
                    modules: {
                        M17: 'Post-abortion Follow-up',
                        M18: 'Abortion Completion Assessment',
                        M19: 'Complication Management',
                        M20: 'Post-abortion Contraception',
                    }
                },
                {
                    href: '/prescribing/virtual-hybrid-care',
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
                    href: '/prescribing/billing-codes',
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
                    href: '/prescribing/regulations-insurance-inclusivity',
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
                    href: '/prescribing/clinical-resources',
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
                    href: '/prescrire/a-propos-de-mifegymiso',
                    title: 'À propos de Mifegymiso',
                    modules: {
                        M1: 'Mécanisme d\'action',
                        M2: 'Efficacité & Sécurité',
                        M3: 'Indications & Contre-indications'
                    }
                },
                {
                    href: '/prescrire/conseils-aux-patients',
                    title: 'Conseils aux patients',
                    modules: {
                        M5: 'Conseils pré-avortement',
                        M6: 'Options d\'avortement',
                        M14: 'Consentement éclairé',
                        M15: 'Instructions d\'administration',
                        M33: 'Oubli de doses',
                        M16: 'Gestion des effets secondaires'
                    }
                },
                {
                    href: '/prescrire/evaluation-medicale',
                    title: 'Évaluation médicale pré-avortement',
                    modules: {
                        M8: 'Dépistage de base',
                        M9: 'Dépistage de la grossesse et de l\'âge gestationnel',
                        M10: 'Grossesse extra-utérine',
                        M11: 'Grossesse de localisation inconnue',
                        M12: 'Dépistage du Rhésus',
                        M13: 'Anémie, IST et autres'
                    }
                },
                { 
                    href: '/prescrire/evaluation-post-avortement',
                    title: 'Évaluation post-avortement',
                    modules: {
                        M17: 'Suivi post-avortement',
                        M18: 'Évaluation de l\'achèvement de l\'avortement',
                        M19: 'Gestion des complications',
                        M20: 'Contraception post-avortement',
                    }
                },
                {
                    href: '/prescrire/soins-virtuels-hybrides',
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
                    href: '/prescrire/codes-facturation',
                    title: 'Codes de facturation des médecins',
                    modules: {
                        B1: 'Alberta',
                        B2: 'Colombie-Britannique',
                        B3: 'Manitoba',
                        B4: 'Nouveau-Brunswick',
                        B5: 'Terre-Neuve-et-Labrador',
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
                    href: '/prescrire/reglements-assurance-inclusivite',
                    title: 'Outils de réglementation, d\'assurance et d\'inclusivité',
                    modules: {
                        M26: 'Paysage réglementaire',
                        M27: 'Configuration des installations',
                        M28: 'Répondre aux préoccupations en matière d\'avortement',
                    }
                },
                {
                    href: '/prescrire/ressources-cliniques',
                    title: 'Lignes directrices, listes de contrôle et outils',
                    modules: {
                        S1: 'Listes de contrôle et guides de ressources',
                        S2: 'Formation et webinaires',
                        S3: 'Monographies de produits, lignes directrices et protocoles',
                        S4: 'Échantillons de formulaires de consentement',
                        S5: 'Ressources pour les patients',
                        S6: 'Outils pour répondre aux préoccupations en matière d\'avortement',
                        S7: 'Outils pour soutenir les communautés mal desservies'
                    }
                }
            ]
        }
    }

export function getOutline(path: string): Outline {   
    return outlines[path];
}