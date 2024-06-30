import { getTranslation } from './store';
import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { replaceState } from '$app/navigation';

function updatePath() {
    const path = window.location.pathname;
    const pathMap: { [key: string]: string } = {
        '/prescribing': '/prescrire',
        '/dispensing': '/dispenser',
        '/supporting%20roles': '/r%C3%B4les%20de%20soutien',
        '/prescrire': '/prescribing',
        '/dispenser': '/dispensing',
        '/r%C3%B4les%20de%20soutien': '/supporting%20roles'
    };

    if (pathMap[path]) {
        replaceState(pathMap[path], {});
    }
}

function getLang() {
    let lang = 'en';
    if (browser) {
        lang = localStorage.getItem('lang') || 'en';
    }
    return lang;
}

function createTranslationStore() {
    const lang = getLang();
    const { subscribe, set } = writable(getTranslation(lang));

    return {
        subscribe,
        set: (lang: string) => {
            localStorage.setItem('lang', lang);
            set(getTranslation(lang));
            updatePath();
        },
    };
}

export function toggleLang() {
    data.set(getLang() === 'en' ? 'fr' : 'en');
}

export const data = createTranslationStore();