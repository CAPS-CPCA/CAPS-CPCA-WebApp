import * as Types from './types';
import { assets } from './assets';
import { modules } from './modules';

const headers: { [key: string]: Types.Header } = {
	en: {
		logos: [
			{ src: assets.EnSOGC, href: 'https://sogc.org/' },
			{ src: assets.CAPS, href: '/' }
		],
		partners: [
			{ title: 'MEDICATION ABORTION', href: '/' },
			{ title: 'SOGC.ORG', href: 'https://sogc.org/' }
		],
		nav: [
			{ type: 'normal', title: 'Home', href: '/' },
			{
				type: 'content',
				content: [
					{ title: 'Prescribing', href: '/prescribing' },
					{ title: 'Dispensing', href: '/dispensing' },
					{ title: 'Supporting Roles', href: '/supporting-roles' }
				]
			},
			{ type: 'normal', title: 'FAQ', href: '/faq' },
			{ type: 'normal', title: 'About us', href: '/about' },
			{ type: 'normal', title: '🔍', href: '/search' },
			{ type: 'switch', title: 'FR' },
			{
				type: 'exit',
				title: 'Exit',
				href: 'https://www.theweathernetwork.com/ca'
			}
		]
	},
	fr: {
		logos: [
			{ src: assets.FrSOGC, href: 'https://sogc.org/fr/' },
			{ src: assets.CAPS, href: '/' }
		],
		partners: [
			{ title: 'AVORTEMENT PAR MÉDICAMENTS', href: '/' },
			{ title: 'SOGC.ORG', href: 'https://sogc.org/fr/' }
		],
		nav: [
			{ type: 'normal', title: 'Accueil', href: '/' },
			{
				type: 'content',
				content: [
					{ title: 'Prescrire', href: '/prescrire' },
					{ title: 'Dispenser', href: '/dispenser' },
					{ title: 'Rôles de soutien', href: '/r%C3%B4les-de-soutien' }
				]
			},
			{ type: 'normal', title: 'FAQ', href: '/faq' },
			{ type: 'normal', title: 'À propos de nous', href: '/%C3%A0-propos' },
			{ type: 'normal', title: '🔍', href: '/search' },
			{ type: 'switch', title: 'EN' },
			{ type: 'exit', title: 'Sortie', href: 'https://www.meteomedia.com/ca' }
		]
	}
};
const footers: { [key: string]: Types.Footer } = {
	en: {
		social: ['', '', '', '', ''],
		logo: assets.EnFooter,
		contact: {
			1: 'CONTACT INFO',
			2: '2781 Lancaster Road, Suite 200',
			3: 'Ottawa, Ontario, K1B 1A7',
			4: '(800) 561-2416',
			5: '(613) 730-4192',
			'mailto:info@sogc.com': 'info@sogc.com'
		},
		copyright: 'Copyright © 2024 | Privacy Policy | Terms of Use | About |'
	},
	fr: {
		social: ['', '', '', '', ''],
		logo: assets.FrFooter,
		contact: {
			1: 'NOUS JOINDRE',
			2: '2781 chemin Lancaster, bureau 200',
			3: 'Ottawa, Ontario, K1B 1A7',
			4: '(800) 561-2416',
			5: '(613) 730-4192',
			'mailto:info@sogc.com': 'info@sogc.com'
		},
		copyright:
			'© 2024 tous droits réservés | Politique de confidentialité | Conditions d’utilisation | À propos |'
	}
};
const heros: { [key: string]: Types.HeroType[] } = {
	en: [
		{
			type: 'banner',
			id: 'home',
			data: {
				image: {
					src: assets.EnBanner,
					alt: 'Hero banner image'
				}
			}
		},
		{
			type: 'content',
			reverse: true,
			id: 'P',
			data: {
				title: {
					f1: 'Medication Abortion ',
					f2: 'Prescribing',
					f3: ' Resources'
				},
				paragraphs: [
					{
						f1: 'If you are a ',
						f2: 'physician, a nurse practitioner or a midwife',
						f3: ', who is currently prescribing or plans to prescribe Mifegymiso, please scroll down for information about ',
						f4: 'the medication, abortion counselling, clinical processes, virtual care, billing codes and inclusivity toolkits.'
					},
					{
						f1: 'If you are a ',
						f2: 'midwife, a nurse or a medical officer',
						f3: ' who is looking for information on prescribing Mifegymiso to support your team, you are also in the right place.'
					}
				],
				image: {
					src: assets.Prescribing,
					alt: 'Prescribing icon image'
				}
			}
		},
		{
			type: 'content',
			reverse: false,
			id: 'D',
			data: {
				title: {
					f1: 'Medication Abortion ',
					f2: 'Dispensing',
					f3: ' Resources'
				},
				paragraphs: [
					{
						f1: 'If you are a ',
						f2: 'pharmacist or any other clinician who is currently dispensing or plans to dispense Mifegymiso',
						f3: ' please scroll down for information about ',
						f4: 'the medication, administration instructions, missed doses, side-effect management, insurance and inclusivity toolkits.'
					}
				],
				image: {
					src: assets.Dispensing,
					alt: 'Dispensing icon image'
				}
			}
		},
		{
			type: 'content',
			reverse: true,
			id: 'S',
			data: {
				title: {
					f1: 'Medication Abortion ',
					f2: 'Supporting',
					f3: ' Resources'
				},
				paragraphs: [
					{
						f1: 'If you are a ',
						f2: 'community worker, a social worker or a counsellor, or if you are supporting your colleagues and friends',
						f3: ' in taking medication abortion, please scroll down for information about ',
						f4: 'the medication, the consideration of different options and the process of medication abortion.'
					}
				],
				image: {
					src: assets.Supporting,
					alt: 'Supporting icon image'
				}
			}
		},
		{
			type: 'content',
			reverse: false,
			id: 'A',
			data: {
				title: 'About Us',
				paragraphs: [
					{
						f1: 'Scroll down to learn more about ',
						f2: 'Canadian Abortion Provider Support – Communauté de pratique Canadienne sur l’avortement (CAPS-CPCA)',
						f3: ', our collaborating partners and the process we undertook to develop this website.'
					}
				],
				image: {
					src: assets.About,
					alt: 'About icon image'
				}
			}
		},
		{
			type: 'icon',
			id: 'FAQ',
			data: {
				title: 'Frequently Asked Questions',
				image: {
					src: assets.FAQ,
					alt: 'Frequently Asked Questions icon image'
				}
			}
		},
		{
			type: 'icon',
			id: 'Search',
			data: {
				title: 'Search the CAPS Platform',
				image: {
					src: assets.Search,
					alt: 'Search icon image'
				}
			}
		}
	],
	fr: [
		{
			type: 'banner',
			id: 'home',
			data: {
				image: {
					src: assets.FrBanner,
					alt: 'Hero banner image'
				}
			}
		},
		{
			type: 'content',
			reverse: true,
			id: 'P',
			data: {
				title: {
					f1: 'Ressources pour ',
					f2: 'prescrire',
					f3: " l'avortement par médicaments"
				},
				paragraphs: [
					{
						f1: 'Si vous êtes ',
						f2: 'médecins, infirmières praticiennes spécialisées et sages-femmes',
						f3: ' et que vous prescrivez actuellement ou envisagez de prescrire le Mifé-Miso, veuillez faire défiler vers le bas pour obtenir des informations sur ',
						f4: "les médicaments, les conseils en matière d'avortement, les processus cliniques, les soins virtuels, les codes de facturation et les boîtes à outils d'inclusivité."
					},
					{
						f1: 'Si vous êtes ',
						f2: 'sages-femmes, infirmières autorisées et médecins',
						f3: ' et que vous recherchez des informations sur la prescription du Mifé-Miso pour soutenir votre équipe, vous êtes également au bon endroit.'
					}
				],
				image: {
					src: assets.Prescribing,
					alt: 'Prescrire icon image'
				}
			}
		},
		{
			type: 'content',
			reverse: false,
			id: 'D',
			data: {
				title: {
					f1: 'Ressources pour ',
					f2: 'dispenser',
					f3: " l'avortement par médicaments"
				},
				paragraphs: [
					{
						f1: 'Si vous êtes ',
						f2: 'pharmaciens ou tout autre clinicien qui dispense actuellement ou prévoyez de distribuer du Mifé-Miso',
						f3: ' veuillez faire défiler vers le bas pour obtenir des informations sur ',
						f4: "les médicaments, les instructions d'administration, les doses oubliées, la gestion des effets secondaires, l'assurance et les boîtes à outils d'inclusivité."
					},
					{
						f1: 'Si vous êtes ',
						f2: 'sages-femmes, infirmières autorisées et médecins',
						f3: ' et que vous recherchez des informations sur la prescription du Mifé-Miso pour soutenir votre équipe, vous êtes également au bon endroit.'
					}
				],
				image: {
					src: assets.Dispensing,
					alt: 'Dispenser icon image'
				}
			}
		},
		{
			type: 'content',
			reverse: true,
			id: 'S',
			data: {
				title: {
					f1: 'Ressources pour ',
					f2: 'soutenir',
					f3: ' l’avortement par médicaments'
				},
				paragraphs: [
					{
						f1: 'Si vous êtes des ',
						f2: 'travailleurs communautaires, des travailleurs sociaux ou des conseillers, ou si vous aidez vos collègues et amis',
						f3: ' à recourir à l’avortement par médicaments, veuillez faire défiler vers le bas pour obtenir des informations sur ',
						f4: 'les médicaments, l’examen des différentes options et le processus d’avortement par médicaments.'
					},
					{
						f1: 'Si vous êtes ',
						f2: 'sages-femmes, infirmières autorisées et médecins',
						f3: ' et que vous recherchez des informations sur la prescription du Mifé-Miso pour soutenir votre équipe, vous êtes également au bon endroit.'
					}
				],
				image: {
					src: assets.Supporting,
					alt: 'Soutenir icon image'
				}
			}
		},
		{
			type: 'content',
			reverse: false,
			id: 'A',
			data: {
				title: 'À propos de nous',
				paragraphs: [
					{
						f1: 'Faites défiler vers le bas pour en savoir plus sur ',
						f2: 'Canadian Abortion Provider Support – Communauté de pratique Canadienne sur l’avortement (CAPS-CPCA)',
						f3: ', nos partenaires collaborateurs, et le processus que nous avons entrepris pour développer ce site web.'
					}
				],
				image: {
					src: assets.About,
					alt: 'À propos icon image'
				}
			}
		},
		{
			type: 'icon',
			id: 'FAQ',
			data: {
				title: 'Questions fréquentes',
				image: {
					src: assets.FAQ,
					alt: 'Questions fréquentes icon image'
				}
			}
		},
		{
			type: 'icon',
			id: 'Search',
			data: {
				title: 'Rechercher sur la plateforme CPCA',
				image: {
					src: assets.Search,
					alt: 'Rechercher icon image'
				}
			}
		}
	]
};
const cards: { [key: string]: Types.Cards } = {
	en: [
		{
			title: 'Prescribing',
			desc: 'Go here if you are a physician, a nurse practitioner, a midwife or anybody who prescribes, plans to prescribe or supports prescribing medication abortion.',
			link: ['/prescribing', 'View']
		},
		{
			title: 'Dispensing',
			desc: 'Go here if you are a pharmacist or any other clinician who is currently dispensing or plans to dispense Mifegymiso.',
			link: ['/dispensing', 'View']
		},
		{
			title: 'Supporting',
			desc: 'Go here if you are a community worker, a social worker or a counsellor, or if you are supporting your colleagues and friends in taking medication abortion.',
			link: ['/supporting-roles', 'View']
		}
	],
	fr: [
		{
			title: 'Prescrire',
			desc: 'Cliquez ici si vous êtes médecins, infirmières praticiennes spécialisées, sages-femmes ou toute personne qui prescrit, envisage de prescrire ou soutient la prescription d’un avortement par médicaments.',
			link: ['/prescrire', 'Voir']
		},
		{
			title: 'Dispenser',
			desc: 'Cliquez ici si vous êtes pharmaciens ou tout autre clinicien qui dispense actuellement ou envisage de délivrer du Mifé-Miso.',
			link: ['/dispenser', 'Voir']
		},
		{
			title: 'Rôles de soutien',
			desc: 'Cliquez ici si vous êtes travailleurs communautaires, travailleurs sociaux ou conseillers, des personnes à recourir à l’avortement par médicaments.',
			link: ['/rôles-de-soutien', 'Voir']
		}
	]
};
const surveys: { [key: string]: Types.Survey } = {
	en: {
		title: 'Help us support you',
		para: [
			'By default, this website does not store identifying information about the device or the website user. With this setting, you might see our evaluation survey more than once. This survey is to gather your user experience and feedback.',
			'When you choose to enable cookies, you consent to share your device information and you will be asked to fill in this survey only once.'
		],
		button: 'Enable cookies',
		image: assets.EnSurvey
	},
	fr: {
		title: 'Aidez-nous à mieux vous soutenir',
		para: [
			'Par défaut, ce site web ne stocke pas d’informations d’identification sur l’appareil ou l’utilisateur du site web. Avec ce paramètre, vous pourriez voir notre sondage d’évaluation plus d’une fois. Ce sondage vise à recueillir votre expérience en tant qu’utilisateur.',
			'Lorsque vous choisissez d’activer les cookies, vous consentez à partager les informations de votre appareil et vous serez invité à remplir ce sondage une seule fois.'
		],
		button: 'Accepter les cookies',
		image: assets.FrSurvey
	}
};
const newsletters: { [key: string]: Types.Newsletter } = {
	en: {
		title: 'Stay in the loop',
		para: 'Sign up to our newsletter and learn about multiple ways to be part of our community.',
		button: 'Submit'
	},
	fr: {
		title: 'Soyez au fait',
		para: 'Inscrivez-vous à notre infolettre afin de connaître les différentes façons de faire partie de la communauté.',
		button: 'Soumettre'
	}
};
const aboutSOGCs: { [key: string]: Types.AboutSOGC } = {
	en: {
		image: assets.EnSOGCLarge,
		title: 'About the SOGC',
		para: [
			'The Society of Obstetricians and Gynaecologists of Canada (SOGC) is a professional health association representing a multidisciplinary membership of over 3,500 health professionals, including obstetricians, gynaecologists, family physicians, nurses, midwives, and allied health professionals, all working in the field of sexual and reproductive health.',
			'The Society’s mission is to promote excellence in the practice of obstetrics and gynaecology, and to advance the health of women at home and around the world through leadership, advocacy, collaboration, and education.',
			'The SOGC is Canada’s leading authority on sexual and reproductive health and produces national guidelines for public and medical education.'
		]
	},
	fr: {
		image: assets.FrSOGCLarge,
		title: 'À propos de la SOGC',
		para: [
			'La Société des obstétriciens et gynécologues du Canada (SOGC) est une association professionnelle en santé regroupant plus de 3 500 professionnels de la santé issus de différentes disciplines – notamment des obstétriciens, des gynécologues, des médecins de famille, des infirmières, des sages-femmes et des partenaires en santé – œuvrant dans le domaine de la santé sexuelle et reproductive.',
			'La mission de la SOGC est de promouvoir l’excellence des pratiques en obstétrique et en gynécologie, et d’améliorer la santé des femmes d’ici et d’ailleurs par la défense des droits, la collaboration, l’éducation et le leadership.',
			'Chef de file canadien en matière de santé sexuelle et reproductive, la SOGC produit des lignes directrices nationales d’éducation publique et médicale.'
		]
	}
};
const searches: { [key: string]: Types.Search } = {
	en: {
		title: 'Search the CAPS Platform',
		placeholder: 'Type here...',
		button: 'Search'
	},
	fr: {
		title: 'Rechercher sur la plateforme CPCA',
		placeholder: 'Écrivez ici...',
		button: 'Rechercher'
	}
};
export const Bibliography = [
	{
		index: 1,
		title: 'Abortion care guideline. Geneva: World Health Organization; 2022.',
		href: '/src/lib/resources/WHO1.pdf'
	},
	{
		index: 2,
		title:
			'Bancsi A & Grindrod K. Update on medical abortion. Canadian Family Physician; 2020; 66.',
		href: 'http://localhost:5173/src/lib/resources/VCOP2.pdf'
	},
	{
		index: 3,
		title:
			'Canada Abortion Providers Support, Planned Parenthood, & the University of British Columbia. Medical abortion prescriber checklist resource guide.',
		href: 'http://localhost:5173/src/lib/resources/C63.pdf'
	},
	{
		index: 4,
		title:
			'Canadian Abortion Providers Support, Planned Parenthood, & the University of British Columbia. Medical abortion prescriber checklist.',
		href: 'http://localhost:5173/src/lib/resources/C64.pdf'
	},
	{
		index: 5,
		title:
			'Costescu D, Guilbert E et al. Induced abortion: updated guidance during pandemics and periods of social disruption.',
		href: 'http://localhost:5173/src/lib/resources/C31.pdf'
	},
	{
		index: 6,
		title:
			'Costescu D, Guilbert E et al. Medical abortion. Journal of Obstetrics and Gynaecology Canada, 2016; Volume 38, Issue 4, 366 – 389.',
		href: 'http://localhost:5173/src/lib/resources/C14.pdf'
	},
	{
		index: 7,
		title:
			'Guilbert E, Costescu D, et al. Canadian protocol for the provision of medical abortion via telemedicine; SOGC 2020.',
		href: 'http://localhost:5173/src/lib/resources/C29.pdf'
	},
	{
		index: 8,
		title:
			'Horvath S, Goyal V, Traxler S, Prager S. Society of Family Planning committee Consensus on Rh testing in early pregnancy. Contraception. 2022 Oct;114:1-5.',
		href: 'http://localhost:5173/src/lib/resources/SFP1.pdf'
	},
	{
		index: 9,
		title:
			'Judith Soon & Nevena Rebic. Pharmacist checklist for medical abortion. 2018. CART-GRAC 2020.',
		href: 'http://localhost:5173/src/lib/resources/C68.pdf'
	},
	{
		index: 10,
		title:
			'Judith Soon & Nevena Rebic. Pharmacist resource guide for medical abortion. 2018. CART-GRAC 2020.',
		href: 'http://localhost:5173/src/lib/resources/C67.pdf'
	},
	{
		index: 11,
		title:
			'Linepharma International Limited. Health Canada MIFISO Product Monograph. Submission Control No: 265940. December 15, 2022.',
		href: 'http://localhost:5173/src/lib/resources/C17-2.pdf'
	},
	{
		index: 12,
		title: 'National Abortion Federation. Checklist for starting medical abortion services.',
		href: 'http://localhost:5173/src/lib/resources/C43.pdf'
	},
	{
		index: 13,
		title:
			'National Abortion Federation. NAF Protocol for early abortion with mifepristone and misoprostol, 2016.',
		href: 'http://localhost:5173/src/lib/resources/C6.pdf'
	},
	{
		index: 14,
		title:
			'Planned Parenthood Ottawa & the SHORE centre. What to expect during a medication abortion; 2017.',
		href: 'http://localhost:5173/src/lib/resources/C74.pdf'
	},
	{
		index: 15,
		title: 'Reproductive Health Access Project. Early abortion options; 2022.',
		href: 'http://localhost:5173/src/lib/resources/C58-1.pdf'
	},
	{
		index: 16,
		title:
			'Reproductive Health Access Project. Integrating early abortion services into primary care; 2019.',
		href: 'http://localhost:5173/src/lib/resources/C58-7.pdf'
	},
	{
		index: 17,
		title:
			'Royal College of Obstetricians and Gynaecologists. Best practice in abortion care; 2022.',
		href: 'http://localhost:5173/src/lib/resources/RCOG1.pdf'
	},
	{
		index: 18,
		title: 'Wellness Within. Accessing Abortion in Canada.',
		href: 'http://localhost:5173/src/lib/resources/C104-2.pdf'
	},
	{
		index: 19,
		title:
			'Women’s College Hospital. Client information about evidence-based telemedicine medication abortion. Adapted from Choice in Health clinic; 2020.',
		href: 'http://localhost:5173/src/lib/resources/WCH1.pdf'
	},
	{
		index: 20,
		title: 'World Health Organization. Abortion care guideline; 2022.',
		href: 'http://localhost:5173/src/lib/resources/WHO1.pdf'
	},
	{
		index: 21,
		title:
			'Society of Obstetricians and Gynaecologists of Canada. Guideline No. 448: Prevention of Rh D Alloimmunization; 2024.',
		href: 'http://localhost:5173/src/lib/resources/AJOG1.pdf'
	}
];
const outlines: { [key: string]: any } = {
	en: {
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
						M11: 'Pregnancies of Unknown Location',
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
						M20: 'Post-abortion Contraception'
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
			resources: [
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
		'/dispensing': {
			subpages: [
				{
					href: '/dispensing/coverage-&-insurance#C1',
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
						C14: 'Yukon'
					}
				},
				{
					href: '/dispensing/patient-communication#M32',
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
					href: '/dispensing/about-mifegymiso#M1',
					title: 'About Mifegymiso',
					modules: {
						M1: 'Mechanism of action',
						M29: 'Drug interactions',
						M30: 'Pharmacokinetics',
						M2: 'Efficacy & safety',
						M3: 'Indication & contraindications',
						M31: 'Clinical assessments'
					}
				}
			],
			resources: [
				{
					href: '/dispensing/regulations-inclusivity#M26',
					title: 'Regulations & Inclusivity Toolkits',
					modules: {
						M26: 'Regulatory Landscape',
						M35: 'Facility Setup',
						M28: 'Addressing Abortion Concerns',
						M37: '2SLGBTQIA+ Patients',
						M38: 'Indigenous Patients'
					}
				},
				{
					href: '/dispensing/clinical-resources#S8',
					title: 'Guidelines, Checklists & Toolkits',
					modules: {
						S8: 'Checklists and Resource Guides',
						S9: 'Training and Webinars',
						S10: 'Product Monographs, Guidelines and Protocols',
						S11: 'Posters and Patient Materials',
						S12: 'Toolkits for Addressing Abortion Concerns',
						S13: 'Toolkits for Supporting Underserved Communities'
					}
				}
			]
		},
		'/supporting-roles': {
			subpages: [
				{
					href: '/supporting-roles/medication-abortion#M39',
					title: 'Medication Abortion',
					modules: {
						M39: 'What is Medication Abortion',
						M3: 'Indication & Contraindications',
						M40: 'Who Can Prescribe',
						M41: 'Where to Get the Medication'
					}
				},
				{
					href: '/supporting-roles/client-counselling#M42',
					title: 'Client Counselling',
					modules: {
						M42: 'How to Counsel Clients',
						M43: 'How to Prepare for Medication Abortion',
						M15: 'Administration Instruction',
						M33: 'Missed Doses',
						M16: 'Side-effect Management',
						M44: 'How to Support After Abortion'
					}
				}
			],
			resources: [
				{
					href: '/supporting-roles/resources#S14',
					title: 'Guides, Talklines, Toolkits',
					modules: {
						S14: 'About Medication Abortion',
						S15: 'Locating Providers of Medication Abortion',
						S16: 'Guides for Managing Medication Abortion at Home',
						S17: 'Talk-lines for Post-Abortion Emotional Support',
						S18: 'Toolkits for Addressing Abortion Concerns',
						S19: 'Toolkits for Supporting Underserved Communities'
					}
				}
			]
		},
		'/faq': {
			subpages: [
				{
					href: '/faq#F1',
					title: 'Medication',
					modules: {}
				},
				{
					href: '/faq#F2',
					title: 'Patient Counselling',
					modules: {}
				},
				{
					href: '/faq#F3',
					title: 'Side effects & Complications',
					modules: {}
				},
				{
					href: '/faq#F4',
					title: 'Breastfeeding',
					modules: {}
				},
				{
					href: '/faq#F5',
					title: 'Multiple Gestation',
					modules: {}
				},
				{
					href: '/faq#F6',
					title: 'Methadone',
					modules: {}
				}
			]
		}
	},
	fr: {
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
						M20: 'Contraception post-avortement'
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
			resources: [
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
						M38: 'Personnes autochtones'
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
		'/dispenser': {
			subpages: [
				{
					href: '/dispenser/couverture-et-assurance#C1',
					title: 'Couverture et assurance',
					modules: {
						C1: 'Régimes d’assurance fédéraux',
						M36: 'Personnes non-assurées',
						C2: 'Alberta',
						C3: 'Colombie-Britannique',
						C4: 'Manitoba',
						C5: 'Nouveau Brunswick',
						C6: 'Terre-Neuve et Labrador',
						C7: 'Territoires du Nord-Ouest',
						C8: 'Nouvelle-Écosse',
						C9: 'Nunavut',
						C10: 'Ontario',
						C11: 'Île-du-Prince-Édouard',
						C12: 'Québec',
						C13: 'Saskatchewan',
						C14: 'Yukon'
					}
				},
				{
					href: '/dispenser/communication#M32',
					title: 'Communication',
					modules: {
						M32: 'Points clés du counseling',
						M15: 'Instructions d’administration',
						M33: 'Doses manquées',
						M16: 'Gestion des effets secondaires',
						M19: 'Gestion des complications',
						M34: 'Suivi facultatif',
						M20: 'Contraception post-avortement'
					}
				},
				{
					href: '/dispenser/a-propos-du-mife-miso#M1',
					title: 'À propos du mifé-miso',
					modules: {
						M1: 'Mécanisme d’action',
						M29: 'Interactions médicamenteuses',
						M30: 'Pharmacocinétique',
						M2: 'Efficacité et sécurité',
						M3: 'Indications et contre-indications',
						M31: 'Évaluations cliniques'
					}
				}
			],
			resources: [
				{
					href: '/dispenser/reglements-inclusivite#M26',
					title: 'Réglements et inclusivité',
					modules: {
						M26: 'Contexte réglementaire',
						M35: 'Configuration des installations',
						M28: 'Répondre aux préoccupations liées à l’avortement',
						M37: 'Personnes 2ELGBTQIA+',
						M38: 'Personnes autochtones'
					}
				},
				{
					href: '/dispenser/ressources-cliniques#S8',
					title: 'Lignes directrices et autres ressources',
					modules: {
						S8: 'Guides et aides-mémoires',
						S9: 'Formations et webinaires',
						S10: 'Monographies, lignes directrices et protocoles',
						S11: 'Affiches et documents pour la patientèle',
						S12: 'Boîtes à outils pour répondre aux préoccupations liées à l’avortement',
						S13: 'Boîtes à outils pour soutenir les communautés mal desservies'
					}
				}
			]
		},
		'/r%C3%B4les-de-soutien': {
			subpages: [
				{
					href: '/r%C3%B4les-de-soutien/avortement-par-medicaments#M39',
					title: 'Avortement par medicaments',
					modules: {
						M39: 'À propos du MIFÉ-MISO',
						M3: 'Indications et contraindications',
						M40: 'Qui peut prescrire',
						M41: 'Où obtenir le medicament'
					}
				},
				{
					href: '/r%C3%B4les-de-soutien/counseling-de-la-client#M42',
					title: 'Counseling de la personne',
					modules: {
						M42: 'Comment conseiller la personne',
						M43: 'Se préparer à l’avortement par medicaments',
						M15: 'Instructions d’administration',
						M33: 'Doses manquées',
						M16: 'Gestion des effets secondaires',
						M44: 'Offrir du soutien post-avortement'
					}
				}
			],
			resources: [
				{
					href: '/r%C3%B4les-de-soutien/ressources#S14',
					title: 'Lignes directrices et autres ressources',
					modules: {
						S14: 'À propos de l’avortement par medicaments',
						S15: 'Trouver des prestataires d’avortement par medicaments',
						S16: 'Guides pour gérer l’avortement par médicaments à domicile',
						S17: 'Lignes d’écoute pour le soutien émotionnel',
						S18: 'Boîtes à outils pour répondre aux préoccupations liées à l’avortement',
						S19: 'Boîtes à outils pour soutenir les communautés mal desservies'
					}
				}
			]
		},
		'/faq': {
			subpages: [
				{
					href: '/faq#F1',
					title: 'Médicaments',
					modules: {}
				},
				{
					href: '/faq#F2',
					title: 'Counseling',
					modules: {}
				},
				{
					href: '/faq#F3',
					title: 'Effets secondaires et complications',
					modules: {}
				},
				{
					href: '/faq#F4',
					title: 'Allaitement',
					modules: {}
				},
				{
					href: '/faq#F5',
					title: 'Grossesse multiple',
					modules: {}
				},
				{
					href: '/faq#F6',
					title: 'Methadone',
					modules: {}
				}
			]
		}
	}
};

export function getTranslation(lang: string): {
	outline: Types.Outline;
	modules: Types.Modules;
	header: Types.Header;
	footer: Types.Footer;
	hero: Types.HeroType[];
	cards: Types.Cards;
	survey: Types.Survey;
	newsletter: Types.Newsletter;
	aboutSOGC: Types.AboutSOGC;
	search: Types.Search;
} {
	return {
		outline: outlines[lang],
		modules: modules[lang],
		header: headers[lang],
		footer: footers[lang],
		hero: heros[lang],
		cards: cards[lang],
		survey: surveys[lang],
		newsletter: newsletters[lang],
		aboutSOGC: aboutSOGCs[lang],
		search: searches[lang]
	};
}
