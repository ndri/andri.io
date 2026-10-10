<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
</script>

<h2>{page.status}</h2>
<p>{page.status === 404 ? 'There is nothing here.' : page.error?.message}</p>
<p><a href={resolve('/')}>Back to the front page</a></p>
