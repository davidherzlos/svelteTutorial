<script>
    import svelteLogo from './assets/svelte.svg';
    import NestedComponent from './NestedComponent.svelte';

    let name = 'Svelte';
    let alt = name + ' cool logo.';
</script>

<!-- Adding simple data -->
<h1>Hello {name}, i need the 'language' prop to be here</h1>

<!-- Dynamic attributes -->
<img src={svelteLogo} {alt}>

<!-- Styling-->
<style>
    h1 {
        color: blue;
        font-size: 1.5rem;
    }
    button {
        background: rgb(198, 198, 224);
    }
</style>

<!-- Nested components -->
<NestedComponent/>