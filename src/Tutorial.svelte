<script>
    import svelteLogo from './assets/svelte.svg';
    let name = 'Svelte';
    let alt = name + ' cool logo.';
</script>

<!-- Adding simple data -->
<h1>Hello {name}, i need the 'language' prop to be here</h1>

<!-- Dynamic attributes -->
<img src={svelteLogo} {alt}>
