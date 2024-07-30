import { getTranslation } from './store'
import { writable } from 'svelte/store'
import { browser } from '$app/environment'
import { goto } from '$app/navigation'

// Translation data
export const translations: { [key: string]: any } = {
  en: getTranslation('en'),
  fr: getTranslation('fr'),
}

// Redirect function for content path changes
export function redirect(url: string) {
  if (browser) {
    const pathMap: { [key: string]: string } = {
      '/prescribing': '/prescribing/about-mifegymiso',
      '/prescrire': '/prescrire/a-propos-du-mife-miso',
      '/dispensing': '/dispensing/coverage-&-insurance',
      '/dispenser': '/dispenser/couverture-et-assurance',
      '/supporting-roles': '/supporting-roles/medication-abortion',
      '/r%C3%B4les-de-soutien':
        '/r%C3%B4les-de-soutien/avortement-par-medicaments',
    }
    const newPath = pathMap[url]
    if (newPath) {
      goto(newPath, { noScroll: true })
    }
  }
}

// Path handling for language switching (fr/en)
function togglePath() {
  const path = window.location.pathname
  const pathMap: { [key: string]: string } = {
    '/prescribing': '/prescrire',
    '/prescrire': '/prescribing',
    '/dispensing': '/dispenser',
    '/dispenser': '/dispensing',
    '/supporting-roles': '/r%C3%B4les-de-soutien',
    '/r%C3%B4les-de-soutien': '/supporting-roles',
    '/about': '/%C3%A0-propos',
    '/%C3%A0-propos': '/about',
  }

  for (const key in pathMap) {
    if (path.startsWith(key)) {
      goto(pathMap[key], { noScroll: true })
      return
    }
  }
}

// Language store
export const userLang = writable<string>(
  browser ? localStorage.getItem('lang') || 'en' : undefined
)
userLang.subscribe(
  (value) => browser && localStorage.setItem('lang', value.toString())
)

// Data store for translations and language switching functions (setLang, togLang)
function createData(lang: string = 'en') {
  const { subscribe, set, update } = writable(translations[lang])

  return {
    subscribe,
    set,
    update,
    setLang: (lang: string) => set(translations[lang]),
    togLang: () => {
      update((data) =>
        data === translations.en ? translations.fr : translations.en
      )
      userLang.update((value) => (value === 'en' ? 'fr' : 'en'))
      togglePath()
    },
  }
}
export const data = createData()
