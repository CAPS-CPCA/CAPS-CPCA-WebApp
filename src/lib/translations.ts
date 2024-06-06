// writable store for website translations
import { writable } from 'svelte/store';

const lang = writable('en');

const translations: { [key: string]: any } = {
    en: {
        header: {
            logo: '🩺',
            home: 'Home',
            content: ['Prescribing', 'Dispensing', 'Supporting Roles'],
            faq: 'FAQ',
            about: 'About',
            search: '🔍',
        }
    },
    fr: {
        header: {
            logo: '🩺',
            home: 'Accueil',
            content: ['Prescrire', 'Dispenser', 'Rôles de soutien'],
            faq: 'FAQ',
            about: 'À propos de nous',
            search: '🔍',
        }
    }
};

