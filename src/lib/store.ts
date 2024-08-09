import { assets } from './assets';
import { modules } from './modules';
import type { Modules } from './modules';
import { outlines } from '../components/content/Outline';

type Header = {
	logos: { src: string; href: string }[];
	partners: { title: string; href: string }[];
	nav: {
		type: 'normal' | 'content' | 'search' | 'switch' | 'exit';
		title?: string;
		href?: string | string[];
		content?: { title: string; href: string }[];
	}[];
};

type Footer = {
	social: string[];
	logo: string;
	contact: { [key: string]: string };
	copyright: string;
};

interface ImageData {
	src: string;
	alt: string;
}

interface HeroText {
	f1: string;
	f2?: string;
	f3?: string;
	f4?: string;
}

interface HeroContentData {
	title: string | HeroText;
	paragraphs: HeroText[];
	image: ImageData;
}

type HeroBanner = {
	type: 'banner';
	id: 'home';
	data: { image: ImageData };
};

type HeroContent = {
	type: 'content';
	reverse: boolean;
	id: 'P' | 'D' | 'S' | 'A';
	data: HeroContentData;
};

type HeroIcon = {
	type: 'icon';
	id: 'FAQ' | 'Search';
	data: { title: string; image: ImageData };
};

type HeroType = HeroBanner | HeroContent | HeroIcon;

type Cards = {
	title: string;
	desc: string;
	link: [string, string];
}[];

type Survey = {
	title: string;
	para: string[];
	button: string;
	image: string;
};

type Newsletter = {
	title: string;
	para: string;
	button: string;
};

type AboutSOGC = {
	image: string;
	title: string;
	para: string[];
};

type Search = {
	title: string;
	placeholder: string;
	button: string;
};

type Bibliography = { title: string; href: string }[];

const headers: { [key: string]: Header } = {
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

const footers: { [key: string]: Footer } = {
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

const heros: { [key: string]: HeroType[] } = {
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

const cards: { [key: string]: Cards } = {
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

const surveys: { [key: string]: Survey } = {
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

const newsletters: { [key: string]: Newsletter } = {
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

const aboutSOGCs: { [key: string]: AboutSOGC } = {
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

const searches: { [key: string]: Search } = {
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
		href: 'https://caps.sogc.org/wp-content/uploads/2024/01/WHO1.pdf'
	},
	{
		index: 2,
		title:
			'Bancsi A & Grindrod K. Update on medical abortion. Canadian Family Physician; 2020; 66.',
		href: 'https://caps.sogc.org/wp-content/uploads/2024/01/VCOP2.pdf'
	},
	{
		index: 3,
		title:
			'Canada Abortion Providers Support, Planned Parenthood, & the University of British Columbia. Medical abortion prescriber checklist resource guide.',
		href: 'https://caps.sogc.org/wp-content/uploads/2024/01/C63.pdf'
	},
	{
		index: 4,
		title:
			'Canadian Abortion Providers Support, Planned Parenthood, & the University of British Columbia. Medical abortion prescriber checklist.',
		href: 'https://caps.sogc.org/wp-content/uploads/2024/01/C64.pdf'
	},
	{
		index: 5,
		title:
			'Costescu D, Guilbert E et al. Induced abortion: updated guidance during pandemics and periods of social disruption.',
		href: 'https://caps.sogc.org/wp-content/uploads/2024/01/C31.pdf'
	},
	{
		index: 6,
		title:
			'Costescu D, Guilbert E et al. Medical abortion. Journal of Obstetrics and Gynaecology Canada, 2016; Volume 38, Issue 4, 366 – 389.',
		href: 'https://caps.sogc.org/wp-content/uploads/2024/01/C14.pdf'
	},
	{
		index: 7,
		title:
			'Guilbert E, Costescu D, et al. Canadian protocol for the provision of medical abortion via telemedicine; SOGC 2020.',
		href: 'https://caps.sogc.org/wp-content/uploads/2024/01/C29.pdf'
	},
	{
		index: 8,
		title:
			'Horvath S, Goyal V, Traxler S, Prager S. Society of Family Planning committee Consensus on Rh testing in early pregnancy. Contraception. 2022 Oct;114:1-5.',
		href: 'https://caps.sogc.org/wp-content/uploads/2024/01/SFP1.pdf'
	},
	{
		index: 9,
		title:
			'Judith Soon & Nevena Rebic. Pharmacist checklist for medical abortion. 2018. CART-GRAC 2020.',
		href: 'https://caps.sogc.org/wp-content/uploads/2024/01/C68.pdf'
	},
	{
		index: 10,
		title:
			'Judith Soon & Nevena Rebic. Pharmacist resource guide for medical abortion. 2018. CART-GRAC 2020.',
		href: 'https://caps.sogc.org/wp-content/uploads/2024/01/C67.pdf'
	},
	{
		index: 11,
		title:
			'Linepharma International Limited. Health Canada MIFISO Product Monograph. Submission Control No: 265940. December 15, 2022.',
		href: 'https://caps.sogc.org/wp-content/uploads/2024/01/C17-2.pdf'
	},
	{
		index: 12,
		title: 'National Abortion Federation. Checklist for starting medical abortion services.',
		href: 'https://caps.sogc.org/wp-content/uploads/2024/01/C43.pdf'
	},
	{
		index: 13,
		title:
			'National Abortion Federation. NAF Protocol for early abortion with mifepristone and misoprostol, 2016.',
		href: 'https://caps.sogc.org/wp-content/uploads/2024/01/C6.pdf'
	},
	{
		index: 14,
		title:
			'Planned Parenthood Ottawa & the SHORE centre. What to expect during a medication abortion; 2017.',
		href: 'https://caps.sogc.org/wp-content/uploads/2024/01/C74.pdf'
	},
	{
		index: 15,
		title: 'Reproductive Health Access Project. Early abortion options; 2022.',
		href: 'https://caps.sogc.org/wp-content/uploads/2024/01/C58-1.pdf'
	},
	{
		index: 16,
		title:
			'Reproductive Health Access Project. Integrating early abortion services into primary care; 2019.',
		href: 'https://caps.sogc.org/wp-content/uploads/2024/01/C58-7.pdf'
	},
	{
		index: 17,
		title:
			'Royal College of Obstetricians and Gynaecologists. Best practice in abortion care; 2022.',
		href: 'https://caps.sogc.org/wp-content/uploads/2024/01/RCOG1.pdf'
	},
	{
		index: 18,
		title: 'Wellness Within. Accessing Abortion in Canada.',
		href: 'https://caps.sogc.org/wp-content/uploads/2024/01/C104-2.pdf'
	},
	{
		index: 19,
		title:
			'Women’s College Hospital. Client information about evidence-based telemedicine medication abortion. Adapted from Choice in Health clinic; 2020.',
		href: 'https://caps.sogc.org/wp-content/uploads/2024/01/WCH1.pdf'
	},
	{
		index: 20,
		title: 'World Health Organization. Abortion care guideline; 2022.',
		href: 'https://caps.sogc.org/wp-content/uploads/2024/01/WHO1.pdf'
	},
	{
		index: 21,
		title:
			'Society of Obstetricians and Gynaecologists of Canada. Guideline No. 448: Prevention of Rh D Alloimmunization; 2024.',
		href: 'https://www.ajog.org/article/S0002-9378(24)00368-5/fulltext?dgcid=raven_jbs_aip_email)'
	}
];

export function getTranslation(lang: string): {
	outline: any;
	modules: Modules;
	header: Header;
	footer: Footer;
	hero: HeroType[];
	cards: Cards;
	survey: Survey;
	newsletter: Newsletter;
	aboutSOGC: AboutSOGC;
	search: Search;
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
