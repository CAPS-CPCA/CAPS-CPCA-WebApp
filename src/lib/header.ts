import { images } from "../assets"

export type Header = {
    logos: { src: string, href: string }[], 
    partners: { title: string, href: string }[], 
    nav: { type: 'normal' | 'content' | 'search' | 'switch' | 'exit', title?: string, href?: string | string[], content?: { title: string, href: string }[] }[]
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
            { type: 'content', content: [{title:'Prescribing', href:'/prescribing'}, {title:'Dispensing', href:'/dispensing'}, {title:'Supporting Roles', href:'/supporting%20roles'}] }, 
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
            { type: 'content', content: [{title:'Prescrire', href:'/prescrire'}, {title: 'Dispenser', href:'/dispenser'}, {title: 'Rôles de soutien', href:'/r%C3%B4les%20de%20soutien'}] },
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
