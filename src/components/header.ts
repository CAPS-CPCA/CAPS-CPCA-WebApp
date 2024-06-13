import { translations } from '$lib/translations';
import { images } from '../assets/index';

export type partners = {
    [key: string]: string;
}

export type navigation = {
    key: string | string[];
}

export class Header {
    logo: string;
    lang: string;
    partners: partners;
    navigation: navigation;

    constructor(lang: string = 'en') {
        this.logo = images[lang === 'en' ? 'EnSOGC' : 'FrSOGC']
        this.lang = lang;
        this.partners = translations[lang].header.partners;
        this.navigation = translations[lang].header.nav;
    }
}
