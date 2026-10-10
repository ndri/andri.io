<script lang="ts">
	import data from '#lib/data.json';

	interface Props {
		text?: string;
	}

	const { text }: Props = $props();
</script>

<svelte:head>
	<title>{text ? `${text} • ` : ''}{data.name}</title>
</svelte:head>
