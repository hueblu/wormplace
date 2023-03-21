<script>
// import Header from components/Header.svelte in the lib folder
import Header from '$lib/components/Header.svelte';

</script>

<Header />

<main>
    <slot />
</main>

<footer>Footer moment</footer>