import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex(),
	],

	extensions: [".svelte", ".svx"],

	kit: {
		adapter: adapter(),
		alias: {
			"@": "./src/",
			"@projects": "./src/routes/projects/"
		},
	}
};

export default config;
