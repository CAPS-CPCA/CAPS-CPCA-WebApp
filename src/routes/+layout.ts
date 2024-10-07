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

function createData() {
	// Language store initialization
	const userLang = writable<string>(browser ? localStorage.getItem('lang') || 'en' : '');
	userLang.subscribe((value) => browser && localStorage.setItem('lang', value.toString()));

	// Data store for translations and language switching functions
	const { subscribe, set } = writable(getTranslation(get(userLang)));
	userLang.subscribe((value) => {
		set(getTranslation(value));
	});

	// Initialize cookieConsent store
	const cookieConsent = writable<boolean>(
		browser ? localStorage.getItem('cookieConsent') === 'true' : false
	);
	cookieConsent.subscribe((value) => {
		if (browser) {
			localStorage.setItem('cookieConsent', value.toString());
		}
	});

	// Survey cookie initialization
	const initSurveyCookie = () => {
		if (browser && !document.cookie.includes('surveyCompleted')) {
			setCookie('surveyCompleted', 'false', 31536000);
		}
	};

	// Survey cookie store initialization
	const surveyCompleted = writable<boolean>(
		browser ? document.cookie.includes('surveyCompleted=true') : false
	);
	surveyCompleted.subscribe((value) => {
		setCookie('surveyCompleted', value.toString(), 31536000);
	});

	// return object with subscribe and toggleLang functions
	return {
		subscribe,
		toggleLang() {
			userLang.update((lang) => (lang === 'en' ? 'fr' : 'en'));
			togglePath();
		},
		cookieConsent,
		toggleCookie() {
			cookieConsent.update((value) => !value);
		},
		initSurveyCookie,
		surveyCompleted,
		toggleSurvey() {
			surveyCompleted.update((value) => !value);
		}
	};
}

export const load = async () => {
	return createData();
};
