<script>
    import svelteLogo from './assets/svelte.svg';
    import NestedComponent from './NestedComponent.svelte';

    let name = 'Svelte';
    let alt = name + ' cool logo.';
    let htmlString = '<strong>bolded text</strong>';

    let count = 0;

    $: doubled = count * 2;

    const incrementCount = () => {
        count += 1;
    };

    // Reactivity / Statements
    $: {
        console.log('count is' + count);
    }
    $: if (count >= 10) {
        alert('You can increase count until ' + count);
        count = 0;
    }

    // Reactivity / Objects and arrays

    let list = [1,2,3,4,5];
    $: result = list.reduce((t, n) => t * n, 1);
    const addToList = () => {
        list = [...list, list.length + 1];
    };
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

<!-- Html tags as data-->
<p>Hello this is a {@html htmlString}</p>

<!-- Reactivity / Assignments -->
<button on:click={incrementCount}>
    You have clicked me {count} {count === 1 ? 'time' : 'times'} !
</button>

<!-- Reactivity / Declarations  -->
<p>
    Count {count} is doubled {doubled} by a reactive declaration
</p>

<!-- Reactivity / Objects and arrays -->
<!-- Reactivity only happens by assigments, not mutations -->
<p>
    This demonstrates how reactivity works on objects and arrays.
    <br>
    <button on:click={addToList}>
        Add a number!
    </button>
    <br>
    Endless multiplication {list.join(' * ')} results in {result}


</p>