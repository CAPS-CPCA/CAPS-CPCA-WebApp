import { images } from "../assets"

export type Header = {
    logos: { src: string, href: string }[], 
    partners: { title: string, href: string }[], 
    nav: { type: 'normal' | 'content' | 'search' | 'switch' | 'exit', title?: string, href?: string, content?: string[] }[] 
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
            { type: 'content', content: ['Prescribing', 'Dispensing', 'Supporting roles'] },
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
            { title: 'AVORTEMENT PAR MÉDICAMENTS', href:'/'},
            { title: 'SOGC.ORG', href:'https://sogc.org/fr/'},
        ],
        nav: [
            { type: 'normal', title: 'Accueil', href: '/' },
            { type: 'content', content: ['Prescrire', 'Dispenser', 'Rôles de soutien'] },
            { type: 'normal', title: 'FAQs', href: '/faqs' },
            { type: 'normal', title: 'À propos de nous', href: '/about' },
            { type: 'normal', title: '🔍', href:'/search' },
            { type: 'switch', title: 'EN' },
            { type: 'exit', title: 'Sortie', href: 'https://www.meteomedia.com/ca'}
        ]
    }
}

export function getHeader(lang: string): Header {
    return headers[lang]
}
