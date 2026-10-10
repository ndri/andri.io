<script lang="ts">
	import '../app.css';
	import NavLink from '$lib/components/NavLink.svelte';
	import SocialLink from '$lib/components/SocialLink.svelte';
	import data from '$lib/data.json';
	import { page } from '$app/state';

	let { children } = $props();

	const currentPath = $derived(page.url.pathname);
	const pageTitle = $derived(data.nav.find((item) => item.href === currentPath)?.label);
</script>

<svelte:head>
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />
	<meta name="theme-color" content="#f1f5f9" media="(prefers-color-scheme: light)" />
	<meta name="theme-color" content="#1c1917" media="(prefers-color-scheme: dark)" />
	<title>{pageTitle ? `${pageTitle} • ` : ''}{data.name}</title>
</svelte:head>

<div
	class={[
		'flex min-h-full flex-col items-center gap-4 bg-main-50 bg-pattern bg-top px-0 pt-8',
		'sm:gap-2 sm:px-8 sm:pb-8',
		'dark:bg-main-900'
	]}
>
	<header class="flex w-full max-w-2xl flex-col items-center gap-6 text-center">
		{#if data.image}
			<img src={data.image} alt={data.name} width="160" height="160" class="squircle" />
		{/if}
		<div class="flex flex-col gap-2">
			<h1 class="text-3xl font-semibold text-accent-700 dark:text-accent-500">{data.name}</h1>
			{#if data.role}
				<p class="text-base text-main-600 dark:text-main-300">{data.role}</p>
			{/if}
		</div>
		<nav class="flex w-full justify-between gap-2 px-4 sm:px-0">
			<div class="flex flex-wrap gap-2">
				{#each data.nav as { href, label } (href)}
					<NavLink {href} {label} />
				{/each}
			</div>
			<div class="flex flex-wrap justify-end gap-3">
				{#each data.socials as href (href)}
					<SocialLink {href} />
				{/each}
			</div>
		</nav>
	</header>
	<main
		class={[
			'w-full max-w-2xl grow border border-main-200 bg-white px-6 py-8 text-main-700',
			'sm:grow-0 sm:rounded-xl sm:px-8',
			'prose prose-sm prose-theme dark:prose-invert prose-headings:font-medium',
			'dark:border-main-800 dark:bg-main-950 dark:text-main-200'
		]}
	>
		{@render children?.()}
	</main>
</div>

<svg class="sr-only" viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<clipPath id="squircle" clipPathUnits="objectBoundingBox">
			<path
				d="M 0,0.5
                C 0,0.115  0.115,0  0.5,0
                  0.885,0  1,0.115  1,0.5
                  1,0.885  0.885,1  0.5,1
                  0.115,1  0,0.885  0,0.5"
			></path>
		</clipPath>
	</defs>
</svg>
