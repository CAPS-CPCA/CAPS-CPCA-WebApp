import { browser } from '$app/environment';
import { goto } from '$app/navigation';

// Redirect function for content path changes
export function redirect(url: string) {
	if (browser) {
		const pathMap: { [key: string]: string } = {
			'/prescribing': '/prescribing/about-mifegymiso',
			'/prescrire': '/prescrire/a-propos-du-mife-miso',
			'/dispensing': '/dispensing/coverage-&-insurance',
			'/dispenser': '/dispenser/couverture-et-assurance',
			'/supporting-roles': '/supporting-roles/medication-abortion',
			'/r%C3%B4les-de-soutien': '/r%C3%B4les-de-soutien/avortement-par-medicaments'
		};
		const newPath = pathMap[url];
		if (newPath) {
			goto(newPath, { noScroll: true });
		}
	}
}

// Path handling for language switching (fr/en)
export function togglePath() {
	const path = window.location.pathname;
	const pathMap: { [key: string]: string } = {
		'/prescribing': '/prescrire',
		'/prescrire': '/prescribing',
		'/dispensing': '/dispenser',
		'/dispenser': '/dispensing',
		'/supporting-roles': '/r%C3%B4les-de-soutien',
		'/r%C3%B4les-de-soutien': '/supporting-roles'
	};

	for (const key in pathMap) {
		if (path.startsWith(key)) {
			goto(pathMap[key], { noScroll: true });
			return;
		}
	}
}
