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
    class={[variant, destructive ? 'destructive' : '', className].join(' ')}
    >
    <slot />
</button>

<style lang="postcss">

    button {
        display: flex;
        padding: var(--size-100) var(--size-200);
        justify-content: center;
        align-items: center;
        border : none;

        width: 64px;
    }

    button:hover {
        cursor: pointer;
    }

    /* Primary */
    .primary {
        background: var(--background-brand-default, #1e90ff);
        color: var(--text-brand-onbrand);
    }

    .primary:hover {
        background-color: var(--background-brand-default-hover);
    }

    .primary:active {
        background-color: var(--background-brand-default-focus);
    }

    /* Secondary */
    .secondary {
        background-color: var(--background-default-secondary);
        color: var(--text-default-secondary);
    }

    /* Tertiary */


</style>