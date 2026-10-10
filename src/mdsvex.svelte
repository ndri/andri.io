<script lang="ts" module>
	export { default as a } from '#lib/components/Link.svelte';
</script>

<script lang="ts">
	let props = $props();
</script>

{@render props.children?.()}
