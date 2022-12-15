<script lang="ts">
	import UltraGradientBackground from '$lib/components/UltraGradientBackground.svelte';
	import Landing from '$lib/components/Landing.svelte';
	import { onMount } from 'svelte';

	let isMobile: Boolean;

	onMount(() => {
		if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			isMobile = true
		}
	})
</script>

{#if !isMobile}
	<UltraGradientBackground />
{/if}
<Landing />

<style>
	@font-face {
		font-family: 'Coanda';
		src: url(/Coanda.woff2);
	}
</style>
