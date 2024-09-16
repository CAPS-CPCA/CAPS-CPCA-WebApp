import { writable } from 'svelte/store';

export const isMobile = writable(false);

if (typeof window !== 'undefined') {
	const update = (): void => {
		isMobile.set(window.innerWidth < 768);
	};

	window.addEventListener('resize', update);
	update();
}
