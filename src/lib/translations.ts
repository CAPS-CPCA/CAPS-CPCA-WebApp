import { images } from '../assets';
import { getHeader } from './header';
import { getFooter } from './footer';
import { get, writable } from 'svelte/store';
import { browser } from '$app/environment';
import { getHero } from './hero';

export const userLang = writable(browser && (localStorage.getItem('lang') || 'en'));
userLang.subscribe(value => browser && localStorage.setItem('lang', value.toString()));

export const translations: { [key: string]: any } = {
    en: {
        header: getHeader('en'),
        footer: getFooter('en'),
        hero: getHero('en'),
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
        search: {
            title: 'Search the CAPS Platform',
            input: 'Type here...',
            button: 'Search'
        },
    },
    fr: {
        header: getHeader('fr'),
        footer: getFooter('fr'),
        hero: getHero('fr'),
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
        search: {
            title: 'Rechercher sur la plateforme CPCA',
            input: 'Écrivez ici...',
            button: 'Rechercher'
        },
    }
};

function createData(lang :string = 'en') {
    const { subscribe, set, update } = writable(translations[lang]);

    return {
        subscribe,
        set,
        update,
        setLang: (lang: string) => set(translations[lang]),
        togLang: () => {
            update(data => data === translations.en ? translations.fr : translations.en);
            userLang.update(value => value === 'en' ? 'fr' : 'en');
        }
    };
}

export const data = createData();