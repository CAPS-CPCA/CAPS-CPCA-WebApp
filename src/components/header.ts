import { translations } from '$lib/translations';

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
    navigation: navigation;

    constructor(lang: string) {
        this.lang = lang;
        this.navigation = translations[lang].header.nav;
    }
    toggleLang() {
        this.lang = this.lang === 'en' ? 'fr' : 'en';
        this.navigation = translations[this.lang].header.nav;
    }
}
