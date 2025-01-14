<script lang="ts">
    // import { onMount } from 'svelte';

    export let variant = 'primary';
    export let disabled = false;
    export let destructive = false;

    export { className as class };

    let className = '';
</script>

<button
    on:click
    on:submit|preventDefault
    aria-disabled={disabled}
    disabled={disabled}
    class={[variant, destructive ? 'destructive' : '', className].join(' ')}>
    <slot />
</button>

<style>

    button {
        display: flex;
    }

    button:hover {
        cursor: pointer;
    }

</style>