import { getTranslation } from '$lib/store';
import { togglePath } from '$lib/data';
import { writable, get } from 'svelte/store';
import { browser } from '$app/environment';

// Utility function to set cookies
const setCookie = (name: string, value: string, maxAge: number) => {
    if (browser) {
        document.cookie = `${name}=${value}; max-age=${maxAge}; path=/`;
    }
};

export const load = async ({fetch}) => {
    // Fetch both English and French content
    const [enRes, frRes] = await Promise.all([
        fetch('https://caps.sogc.org/wp-json/wp/v2/posts?per_page=100&_fields=title,content,class_list&tags=58'),
        fetch('https://caps.sogc.org/wp-json/wp/v2/posts?per_page=100&_fields=title,content,class_list&tags=61')
    ]);

    const [enData, frData] = await Promise.all([
        enRes.json(),
        frRes.json()
    ]);

    // Combine English and French data with language markers
    const apidata = [
        ...enData.map(item => ({ ...item, lang: 'en' })),
        ...frData.map(item => ({ ...item, lang: 'fr' }))
    ];

    // Language related functionality
    const userLang = writable<string>(browser ? localStorage.getItem('lang') || 'en' : '');
    const { subscribe, set } = writable(getTranslation(get(userLang)));
    userLang.subscribe((value) => {
        if (browser) {
            localStorage.setItem('lang', value.toString());
            set(getTranslation(value));
        }
    });

    // Cookie consent functionality
    const cookieConsent = writable<boolean>(
        browser ? localStorage.getItem('cookieConsent') === 'true' : false
    );
    cookieConsent.subscribe((value) => {
        if (browser) {
            localStorage.setItem('cookieConsent', value.toString());
        }
    });

    // Survey functionality
    const initSurveyCookie = () => {
        if (browser && !document.cookie.includes('surveyCompleted')) {
            setCookie('surveyCompleted', 'false', 31536000);
        }
    };

    const surveyCompleted = writable<boolean>(
        browser ? document.cookie.includes('surveyCompleted=true') : false
    );
    surveyCompleted.subscribe((value) => {
        setCookie('surveyCompleted', value.toString(), 31536000);
    });

    return {
        // Language methods
        subscribe,
		apidata,
        toggleLang() {
            userLang.update((lang) => (lang === 'en' ? 'fr' : 'en'));
            togglePath();
        },
        // Cookie consent methods
        cookieConsent,
        toggleCookie() {
            cookieConsent.update((value) => !value);
        },
        // Survey methods
        initSurveyCookie,
        surveyCompleted,
        toggleSurvey() {
            surveyCompleted.update((value) => !value);
        }
    };
};
