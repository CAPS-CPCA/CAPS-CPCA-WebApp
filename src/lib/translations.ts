// import logos
import { images } from '../assets';
import { writable } from 'svelte/store';
import AboutSogc from '../components/AboutSOGC.svelte';

export const translations: { [key: string]: any } = {
    en: {
        header: {
            logo: [images.EnSOGC, images.CAPS],
            partners: {
                'https://caps.sogc.org/': 'MEDICATION ABORTION',
                'https://sogc.org/': 'SOGC.ORG'
            },
            nav: {
                '/': 'Home',
                content: ['Prescribing', 'Dispensing', 'Supporting roles'],
                faqs: 'FAQs',
                about: 'About us',
                search: '🔍',
                lang: 'FR',
                exit: 'Exit'
            }
        },
        hero: images.EnBanner,
        cards: [{
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
        }],
        survey: {
            title: 'Help us support you',
            para: ['By default, this website does not store identifying information about the device or the website user. With this setting, you might see our evaluation survey more than once. This survey is to gather your user experience and feedback.', 'When you choose to enable cookies, you consent to share your device information and you will be asked to fill in this survey only once.'],
            button: 'Enable cookies',
            image: images.EnSurvey
        },
        newsletter: {
            title: 'Stay in the loop',
            para: 'Sign up to our newsletter and learn about multiple ways to be part of our community.',
            button: 'Submit'
        },
        aboutSOGC: {
            image: images.EnSOGCLarge,
            title: 'About the SOGC',
            para: ['The Society of Obstetricians and Gynaecologists of Canada (SOGC) is a professional health association representing a multidisciplinary membership of over 3,500 health professionals, including obstetricians, gynaecologists, family physicians, nurses, midwives, and allied health professionals, all working in the field of sexual and reproductive health.','The Society’s mission is to promote excellence in the practice of obstetrics and gynaecology, and to advance the health of women at home and around the world through leadership, advocacy, collaboration, and education.','The SOGC is Canada’s leading authority on sexual and reproductive health and produces national guidelines for public and medical education.']
        },
        prescribing: {
            title: 'Medication Abortion <span>Prescribing</span> Resources',
            paragraphs: [
                'If you are a <span>physician, a nurse practitioner or a midwife</span> who is currently prescribing or plans to prescribe Mifegymiso, please scroll down for information about the <em>medication, abortion counselling, clinical processes, virtual care, billing codes and inclusivity toolkits.</em>',
                'If you are a <span>midwife, a nurse or a medical officer</span> who is looking for information on prescribing Mifegymiso to support your team, you are also in the right place.'
            ],
        },
        aboutus: {
            title: 'About Us',
            paragraphs: [
                'Scroll down to learn more about Canadian Abortion Provider Support – Communauté de pratique Canadienne sur l’avortement (CAPS-CPCA), our collaborating partners and the process we undertook to develop this website.'

            ]
        },
        search: {
            title: 'Search the CAPS Platform',
            input: 'Type here...'
        },
    },
    fr: {
        header: {
            logo: [images.FrSOGC, images.CAPS],
            partners: {
                'https://caps.sogc.org/': 'AVORTEMENT PAR MÉDICAMENTS',
                'https://sogc.org/fr': 'SOGC.ORG'
            },
            nav: {
                '/': 'Accueil',
                content: ['Prescrire', 'Dispenser', 'Rôles de soutien'],
                faqs: 'FAQ',
                about: 'À propos de nous',
                search: '🔍',
                lang: 'EN',
                exit: 'Sortie'
            }
        },
        hero: images.FrBanner,
        cards: [{
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
        }],
        survey: {
            title: 'Aidez-nous à mieux vous soutenir',
            para: ['Par défaut, ce site web ne stocke pas d’informations d’identification sur l’appareil ou l’utilisateur du site web. Avec ce paramètre, vous pourriez voir notre sondage d’évaluation plus d’une fois. Ce sondage vise à recueillir votre expérience en tant qu’utilisateur.', 'Lorsque vous choisissez d’activer les cookies, vous consentez à partager les informations de votre appareil et vous serez invité à remplir ce sondage une seule fois.'],
            button: 'Accepter les cookies',
            image: images.FrSurvey
        },
        newsletter: {
            title: 'Soyez au fait',
            para: 'Inscrivez-vous à notre infolettre afin de connaître les différentes façons de faire partie de la communauté.',
            button: 'Soumettre'
        },
        aboutSOGC: {
            image: images.FrSOGCLarge,
            title: 'À propos de la SOGC',
            para: ['La Société des obstétriciens et gynécologues du Canada (SOGC) est une association professionnelle en santé regroupant plus de 3 500 professionnels de la santé issus de différentes disciplines – notamment des obstétriciens, des gynécologues, des médecins de famille, des infirmières, des sages-femmes et des partenaires en santé – œuvrant dans le domaine de la santé sexuelle et reproductive.','La mission de la SOGC est de promouvoir l’excellence des pratiques en obstétrique et en gynécologie, et d’améliorer la santé des femmes d’ici et d’ailleurs par la défense des droits, la collaboration, l’éducation et le leadership.','Chef de file canadien en matière de santé sexuelle et reproductive, la SOGC produit des lignes directrices nationales d’éducation publique et médicale.']
        },
        prescribing: {
            title: 'Ressources pour <span>prescrire</span> l\'avortement par médicaments',
            paragraphs: [
                'Si vous êtes <span>médecins, infirmières praticiennes spécialisées et sages-femmes</span> et que vous prescrivez actuellement ou envisagez de prescrire le Mifé-Miso, veuillez faire défiler vers le bas pour obtenir des informations sur les médicaments, les conseils en matière d\'avortement, les processus cliniques, les soins virtuels, les codes de facturation et les boîtes à outils d\'inclusivité.</em>',
                'Si vous êtes <span>sages-femmes, infirmières autorisées et médecins</span> et que vous recherchez des informations sur la prescription du Mifé-Miso pour soutenir votre équipe, vous êtes également au bon endroit.'
            ],
        },

        aboutus: {
            title: 'À propos de nous',
            paragraphs: [
                'Faites défiler vers le bas pour en savoir plus sur Canadian Abortion Provider Support – Communauté de pratique Canadienne sur l’avortement (CAPS-CPCA), nos partenaires collaborateurs, et le processus que nous avons entrepris pour développer ce site web.'

            ]
        },
        search: {
            title: 'Rechercher sur la plateforme CPCA',
            input: 'Écrivez ici...'
        },
    }
};

function createData(lang :string = 'en') {
    const { subscribe, set, update } = writable(translations[lang]);

    return {
        subscribe,
        set,
        update, 
        togLang: () => {
            update(data => data === translations.en ? translations.fr : translations.en);
            console.log('toggled language');
        }
    };
}

export const data = createData();