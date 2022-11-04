<!-- Featuring: onChange events, Custom property theming, Tooltip, A11y keyboard controls + attributes, -->
<script>
	import Slider from '$lib/components/range-slider/Slider.svelte';
	let value = 42;
	let theme = 'default';
</script>

<!-- A basic reference custom range component -->

<div class:purple-theme={theme === 'purple'}>
	<label for="basic-range">Range Label</label>
	<Slider on:change={(e) => (value = e.detail.value)} id="basic-slider" />
</div>
<h3>
	{value}
</h3>

<h3>
	Theme: {theme}
</h3>
<div class="theme-buttons">
	<button on:click={() => (theme = 'default')}> Default </button>
	<button on:click={() => (theme = 'purple')}> Purple </button>
</div>

<style>
	.purple-theme {
		--track-focus: #c368ff;
		--track-highlight-bgcolor: #c368ff;
		--track-highlight-bg: linear-gradient(90deg, #c368ff, #c965ff);
		--thumb-holding-outline: rgba(191, 102, 251, 0.3);
		--tooltip-bgcolor: #c368ff;
		--tooltip-bg: linear-gradient(45deg, #c368ff, #c965ff);
	}

	.theme-buttons {
		display: flex;
		justify-content: center;
	}

	h3 {
		text-align: center;
	}

	label {
		margin: 8px;
		font-size: 16px;
		font-weight: 600;
	}
</style>
