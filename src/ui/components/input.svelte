<script lang="ts">

    export let type:string = "input";
    export let value:string = "";
    export let id = null;
    export let name = null;
    export let borders = false;
    export let disabled = false;
    export let invalid = false;
    export let placeholder = 'Input something here...';
    export { className as class };

</script>

<input
    type={type}
    on:input
    on:change
    on:keydown
    on:focus
    on:blur
    bind:value={value}
    {id}
    {name}
    {disabled}
    {placeholder}
    class="indent"
    class:borders={borders}
    class:invalid={invalid}
>

<style>
</style>