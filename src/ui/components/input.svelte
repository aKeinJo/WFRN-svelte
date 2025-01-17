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

    let className = '';

</script>

<div
    class={['input',className].join(' ')}    
>
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
        class={[className].join(' ')}
        class:borders={borders}
        class:invalid={invalid}
    >
</div>

<style>
    div {
        border: 1px solid var(--border-default)
    }

    input {
        color: var(--sds-color-text-default-default);
        font-family: "Noto Sans KR";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
        border: none;
        padding: var(--size-100);
    }

    input:focus {
        outline: none;
    }

    .input .number-adder {
        width: 100px;
    }
</style>