import { images } from "../assets"

export type Footer = {
    social: string[],
    logo: string,
    contact: { [key: string]: string },
    copyright: string
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

export function getFooter(lang: string): Footer {
    return footers[lang]
}