import { translations } from '$lib/translations';

export type partners = {
    [key: string]: string;
}

export type navigation = {
    home: string;
    content: string[];
    faqs: string;
    about: string;
    search: string;
    lang: string;
    exit: string;
}

export class Header {
    lang: string;
    partners: partners;
    navigation: navigation;

    constructor(lang: string) {
        this.lang = lang;
        this.partners = translations[lang].header.partners;
        this.navigation = translations[lang].header.nav;
    }
    toggleLang() {
        this.lang = this.lang === 'en' ? 'fr' : 'en';
        this.partners = translations[this.lang].header.partners;
        this.navigation = translations[this.lang].header.nav;
    }
}
