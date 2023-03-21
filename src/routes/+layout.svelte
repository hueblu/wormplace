<script>
// import Header from components/Header.svelte in the lib folder
import Header from '$lib/components/Header.svelte';
import '$lib/styles/style.scss'
</script>

<Header />

<main>
    <slot />
</main>
