// import logos
import { images } from '../assets';
import { writable } from 'svelte/store';

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
        }
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
        }
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