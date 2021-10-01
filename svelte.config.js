import preprocess from 'svelte-preprocess';
import adapt from '@sveltejs/adapter-static';

const production = process.env.NODE_ENV === 'production';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),


	kit: {
		paths: {
			base: production ? '/sveltekit-i18n-template' : '',
		},
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapt(),
		appDir: 'internal',
	}
};

export default config;
