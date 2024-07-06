import { images } from "../assets"

type Header = {
    logos: { src: string, href: string }[],
    partners: { title: string, href: string }[],
    nav: { type: 'normal' | 'content' | 'search' | 'switch' | 'exit', title?: string, href?: string | string[], content?: { title: string, href: string }[] }[]
}

type Footer = {
    social: string[],
    logo: string,
    contact: { [key: string]: string },
    copyright: string
}

type Hero = {
    home: { image: string },
    content: {
        id: string,
        title: string | { text: string, span: string },
        paragraphs: string | string[]
        image: string
    }[],
    icon: { title: string, image: string, form?: { input: string, button: string } }[]
}

type Cards = {
    title: string,
    desc: string,
    link: [string, string]
}[]

type Survey = {
    title: string,
    para: string[],
    button: string,
    image: string
}

type Newsletter = {
    title: string,
    para: string,
    button: string
}

type AboutSOGC = {
    image: string,
    title: string,
    para: string[]
}

type Search = {
    title: string,
    placeholder: string,
    button: string
}

const headers: { [key: string]: Header } = {
    en: {
        logos: [
            { src: images.EnSOGC, href: 'https://sogc.org/' },
            { src: images.CAPS, href: '/' }
        ],
        partners: [
            { title: 'MEDICATION ABORTION', href: '/' },
            { title: 'SOGC.ORG', href: 'https://sogc.org/' },
        ],
        nav: [
            { type: 'normal', title: 'Home', href: '/' },
            { type: 'content', content: [{ title: 'Prescribing', href: '/prescribing' }, { title: 'Dispensing', href: '/dispensing' }, { title: 'Supporting Roles', href: '/supporting%20roles' }] },
            { type: 'normal', title: 'FAQs', href: '/faqs' },
            { type: 'normal', title: 'About us', href: '/about' },
            { type: 'normal', title: '🔍', href: '/search' },
            { type: 'switch', title: 'FR' },
            { type: 'exit', title: 'Exit', href: 'https://www.theweathernetwork.com/ca' }
        ]
    },
    fr: {
        logos: [
            { src: images.FrSOGC, href: 'https://sogc.org/fr/' },
            { src: images.CAPS, href: '/' }
        ],
        partners: [
            { title: 'AVORTEMENT PAR MÉDICAMENTS', href: '/' },
            { title: 'SOGC.ORG', href: 'https://sogc.org/fr/' },
        ],
        nav: [
            { type: 'normal', title: 'Accueil', href: '/' },
            { type: 'content', content: [{ title: 'Prescrire', href: '/prescrire' }, { title: 'Dispenser', href: '/dispenser' }, { title: 'Rôles de soutien', href: '/r%C3%B4les%20de%20soutien' }] },
            { type: 'normal', title: 'FAQs', href: '/faqs' },
            { type: 'normal', title: 'À propos de nous', href: '/À%20propos' },
            { type: 'normal', title: '🔍', href: '/search' },
            { type: 'switch', title: 'EN' },
            { type: 'exit', title: 'Sortie', href: 'https://www.meteomedia.com/ca' }
        ]
    }
}

const footers: { [key: string]: Footer } = {
    en: {
        social: ['', '', '', '', ''],
        logo: images.EnFooter,
        contact: {
            1: 'CONTACT INFO',
            2: '2781 Lancaster Road, Suite 200',
            3: 'Ottawa, Ontario, K1B 1A7',
            4: '(800) 561-2416',
            5: '(613) 730-4192',
            'mailto:info@sogc.com': 'info@sogc.com'
        },
        copyright: 'Copyright © 2024 | Privacy Policy | Terms of Use | About |',
    },
    fr: {
        social: ['', '', '', '', ''],
        logo: images.FrFooter,
        contact: {
            1: 'NOUS JOINDRE',
            2: '2781 chemin Lancaster, bureau 200',
            3: 'Ottawa, Ontario, K1B 1A7',
            4: '(800) 561-2416',
            5: '(613) 730-4192',
            'mailto:info@sogc.com': 'info@sogc.com'
        },
        copyright: '© 2024 tous droits réservés | Politique de confidentialité | Conditions d’utilisation | À propos |',
    },
}

const heros: { [key: string]: Hero } = {
    en: {
        home: { image: images.EnBanner },
        content: [
            {
                id: 'Prescribing',
                title: 'Medication Abortion <span style="color: var(--Prescribing)">Prescribing</span> Resources',
                paragraphs: ['If you are a <span style="color: #0074e4; font-weight: 700;">physician, a nurse practitioner or a midwife</span> who is currently prescribing or plans to prescribe Mifegymiso, please scroll down for information about the <i>medication, abortion counselling, clinical processes, virtual care, billing codes and inclusivity toolkits.</i>',
                    'If you are a <span style="color: #0074e4; font-weight: 700;">midwife, a nurse or a medical officer</span> who is looking for information on prescribing Mifegymiso to support your team, you are also in the right place.'],
                image: images.PrescribingIcon
            },
            {
                id: 'Dispensing',
                title: 'Medication Abortion <span style="color: var(--Dispensing)">Dispensing</span> Resources',
                paragraphs: 'If you are a <span style="color: #0074e4; font-weight: 700;">pharmacist or any other clinician</span> who is currently dispensing or plans to dispense Mifegymiso, please scroll down for information about the <i>medication, administration instructions, missed doses, side-effect management, insurance and inclusivity toolkits.</i>',
                image: images.DispensingIcon
            },
            {
                id: 'Supporting',
                title: 'Medication Abortion <span style="color: var(--Supporting)">Supporting</span> Resources',
                paragraphs: 'If you are a <span style="color: #0074e4; font-weight: 700;">community worker, a social worker or a counsellor, or if you are supporting your colleagues and friends</span> in taking medication abortion, please scroll down for information about <i>the medication, the consideration of different options and the process of medication abortion.</i>',
                image: images.SupportingIcon
            },
            {
                id: 'About',
                title: 'About Us',
                paragraphs: 'Scroll down to learn more about <span style="color: #0074e4; font-weight: 700;">Canadian Abortion Provider Support – Communauté de pratique Canadienne sur l’avortement (CAPS-CPCA)</span>, our collaborating partners and the process we undertook to develop this website.',
                image: images.AboutIcon
            }
        ],
        icon: [
            { title: 'Frequently Asked Questions', image: images.FaqIcon },
            { title: 'Search the CAPS Platform', form: { input: 'Type here...', button: 'Search' }, image: images.SearchIcon }
        ]
    },
    fr: {
        home: { image: images.FrBanner },
        content: [
            {
                id: 'Prescrire',
                title: 'Ressources pour <span style="color: var(--Prescribing)">prescrire</span> l\'avortement par médicaments',
                paragraphs: ['Si vous êtes <span style="color: #0074e4; font-weight: 700;">médecins, infirmières praticiennes spécialisées et sages-femmes</span> et que vous prescrivez actuellement ou envisagez de prescrire le Mifé-Miso, veuillez faire défiler vers le bas pour obtenir des informations sur <i> les médicaments, les conseils en matière d\'avortement, les processus cliniques, les soins virtuels, les codes de facturation et les boîtes à outils d\'inclusivité.</i>',
                    'Si vous êtes <span style="color: #0074e4; font-weight: 700;">sages-femmes, infirmières autorisées et médecins</span> et que vous recherchez des informations sur la prescription du Mifé-Miso pour soutenir votre équipe, vous êtes également au bon endroit.'],
                image: images.PrescribingIcon
            },
            {
                id: 'Dispenser',
                title: 'Ressources pour <span style="color: var(--Dispensing)">dispenser</span> l\'avortement par médicaments',
                paragraphs: 'Si vous êtes <span style="color: #0074e4; font-weight: 700;">pharmaciens ou tout autre clinicien qui dispense actuellement ou prévoyez de distribuer du Mifegymiso</span> veuillez faire défiler vers le bas pour obtenir des informations sur <i>les médicaments, les instructions d\'administration, les doses oubliées, la gestion des effets secondaires, l\'assurance et les boîtes à outils d\'inclusivité.</i>',
                image: images.DispensingIcon
            },
            {
                id: 'Soutenir',
                title: 'Ressources pour <span style="color: var(--Supporting)">soutenir</span> l’avortement par médicaments',
                paragraphs: 'Si vous êtes des <span style="color: #0074e4; font-weight: 700;">travailleurs communautaires, des travailleurs sociaux ou des conseillers, ou si vous aidez vos collègues et amis</span> à recourir à l\'avortement par médicaments, veuillez faire défiler vers le bas pour obtenir des informations sur les médicaments, l\'examen des différentes options et le processus d\'avortement par médicaments.</i>',
                image: images.SupportingIcon
            },
            {
                id: 'À propos',
                title: 'À propos de nous',
                paragraphs: 'Faites défiler vers le bas pour en savoir plus sur <span style="color: #0074e4; font-weight: 700;">Canadian Abortion Provider Support – Communauté de pratique Canadienne sur l’avortement (CAPS-CPCA)</span>, nos partenaires collaborateurs, et le processus que nous avons entrepris pour développer ce site web.',
                image: images.AboutIcon
            }
        ],
        icon: [
            { title: 'Questions fréquentes', image: images.FaqIcon },
            { title: 'Rechercher sur la plateforme CPCA', form: { input: 'Écrivez ici...', button: 'Rechercher' }, image: images.SearchIcon }
        ]
    }
}

interface HeroConfig {
    variant: "content" | "home" | "icon";
    type?: "Prescribing" | "Dispensing" | "Supporting" | "About" | "Prescrire" | "Dispenser" | "Soutenir" | "À propos";
    index?: number;
    reverse?: boolean;
}
export function getHeroConfig(path: string): HeroConfig {
    if (path.startsWith('/prescribing')) {
        return { variant: 'content', type: 'Prescribing', reverse: true };
    } else if (path.startsWith('/dispensing')) {
        return { variant: 'content', type: 'Dispensing' };
    } else if (path.startsWith('/supporting%20roles')) {
        return { variant: 'content', type: 'Supporting', reverse: true };
    } else if (path.startsWith('/prescrire')) {
        return { variant: 'content', type: 'Prescrire', reverse: true };
    } else if (path.startsWith('/dispenser')) {
        return { variant: 'content', type: 'Dispenser' };
    } else if (path.startsWith('/r%C3%B4les%20de%20soutien')) {
        return { variant: 'content', type: 'Soutenir', reverse: true };
    }
    throw new Error('Invalid path');
}

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
            link: ['/supporting%20roles', 'View']
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
            link: ['/rôles%20de%20soutien', 'Voir']
        }
    ]
}

const surveys: { [key: string]: Survey } = {
    en: {
        title: 'Help us support you',
        para: ['By default, this website does not store identifying information about the device or the website user. With this setting, you might see our evaluation survey more than once. This survey is to gather your user experience and feedback.', 'When you choose to enable cookies, you consent to share your device information and you will be asked to fill in this survey only once.'],
        button: 'Enable cookies',
        image: images.EnSurvey
    },
    fr: {
        title: 'Aidez-nous à mieux vous soutenir',
        para: ['Par défaut, ce site web ne stocke pas d’informations d’identification sur l’appareil ou l’utilisateur du site web. Avec ce paramètre, vous pourriez voir notre sondage d’évaluation plus d’une fois. Ce sondage vise à recueillir votre expérience en tant qu’utilisateur.', 'Lorsque vous choisissez d’activer les cookies, vous consentez à partager les informations de votre appareil et vous serez invité à remplir ce sondage une seule fois.'],
        button: 'Accepter les cookies',
        image: images.FrSurvey
    },
}

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
}

const aboutSOGCs: { [key: string]: AboutSOGC } = {
    en: {
        image: images.EnSOGCLarge,
        title: 'About the SOGC',
        para: ['The Society of Obstetricians and Gynaecologists of Canada (SOGC) is a professional health association representing a multidisciplinary membership of over 3,500 health professionals, including obstetricians, gynaecologists, family physicians, nurses, midwives, and allied health professionals, all working in the field of sexual and reproductive health.', 'The Society’s mission is to promote excellence in the practice of obstetrics and gynaecology, and to advance the health of women at home and around the world through leadership, advocacy, collaboration, and education.', 'The SOGC is Canada’s leading authority on sexual and reproductive health and produces national guidelines for public and medical education.']
    },
    fr: {
        image: images.FrSOGCLarge,
        title: 'À propos de la SOGC',
        para: ['La Société des obstétriciens et gynécologues du Canada (SOGC) est une association professionnelle en santé regroupant plus de 3 500 professionnels de la santé issus de différentes disciplines – notamment des obstétriciens, des gynécologues, des médecins de famille, des infirmières, des sages-femmes et des partenaires en santé – œuvrant dans le domaine de la santé sexuelle et reproductive.', 'La mission de la SOGC est de promouvoir l’excellence des pratiques en obstétrique et en gynécologie, et d’améliorer la santé des femmes d’ici et d’ailleurs par la défense des droits, la collaboration, l’éducation et le leadership.', 'Chef de file canadien en matière de santé sexuelle et reproductive, la SOGC produit des lignes directrices nationales d’éducation publique et médicale.']
    }
}

const searches:{[key:string]:Search} = {
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
}

export function getTranslation(lang: string): { header: Header, footer: Footer, hero: Hero, cards: Cards, survey: Survey, newsletter: Newsletter, aboutSOGC: AboutSOGC, search: Search } {
    return {
        header: headers[lang],
        footer: footers[lang],
        hero: heros[lang],
        cards: cards[lang],
        survey: surveys[lang],
        newsletter: newsletters[lang],
        aboutSOGC: aboutSOGCs[lang],
        search: searches[lang]
    }
}