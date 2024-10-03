import { getTranslation } from '$lib/store';
import { togglePath } from '$lib/data';
import { writable, get } from 'svelte/store';
import { browser } from '$app/environment';

function createData() {
	// Language store initialization
	const userLang = writable<string>(browser ? localStorage.getItem('lang') || 'en' : '');
	userLang.subscribe((value) => browser && localStorage.setItem('lang', value.toString()));

	// Data store for translations and language switching functions
	const { subscribe, set } = writable(getTranslation(get(userLang)));
	userLang.subscribe((value) => {
		set(getTranslation(value));
	});

	// return object with subscribe and toggleLang functions
	return {
		subscribe,
		toggleLang() {
			userLang.update((lang) => (lang === 'en' ? 'fr' : 'en'));
			togglePath();
			// console.log('userLang', get(userLang));
		}
	};
}

export const load = async () => {
	return createData();
};
