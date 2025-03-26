import { writable } from 'svelte/store';

/**
 * Interface defining the structure of the search store
 * T extends Record<PropertyKey, any> means it can store any object type
 */
interface SearchStoreModel<T extends Record<PropertyKey, any>> {
	data: T[]; // Original data array
	filtered: T[]; // Filtered data array based on search
	search: string; // Search term entered by the user
}

/**
 * Creates a new search store with the provided initial data
 * @param data Initial array of items to make searchable
 * @returns A Svelte store with search functionality
 */
export const createSearch = <T extends Record<PropertyKey, any>>(data: T[]) => {
	const { subscribe, set, update } = writable<SearchStoreModel<T>>({
		data: data,
		filtered: data,
		search: ''
	});

	return {
		subscribe,
		set,
		update
	};
};

/**
 * Handles the search filtering logic
 * @param store The search store to perform filtering on
 * Filters items based on whether their searchTerms include the search string
 * Search is case-insensitive
 */
export const searchHandler = <T extends Record<PropertyKey, any>>(store: SearchStoreModel<T>) => {
	const searchTerm = store.search.toLowerCase() || '';
	store.filtered = store.data.filter((item) => {
		return item.searchTerms.toLowerCase().includes(searchTerm);
	});
};
