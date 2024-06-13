// import logos
import {images} from '../assets';

// define translations object
export const translations = {
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
        }
    }
};