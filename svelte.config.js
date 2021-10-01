import preprocess from 'svelte-preprocess';
import adapterStatic from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),


	kit: {
		paths: {
			base: '/sveltekit-i18n-template',
		},
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapterStatic(),
		appDir: 'internal',
	}
};

export default config;
