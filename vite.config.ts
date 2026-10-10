import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			// Consult https://svelte.dev/docs/kit/integrations
			// for more information about preprocessors
			preprocess: [
				vitePreprocess(),
				mdsvex({
					layout: {
						_: dirname(fileURLToPath(import.meta.url)) + '/src/mdsvex.svelte'
					}
				})
			],
			extensions: ['.svelte', '.svx'],
			// The whole site is prerendered to static files and served by Caddy (see ~/Projects/vps-agent).
			// 404.html is an SPA fallback: Caddy serves it for unknown paths and the client renders +error.svelte.
			// If server code is ever needed, switch to @sveltejs/adapter-node (vps-agent decisions.md D9).
			adapter: adapter({ fallback: '404.html' })
		})
	]
});
