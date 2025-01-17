<script lang="ts">
</script>

<div
	class="wrapper">
    <span>
        <slot/>
    </span>
    
</div>

<style lang="postcss">
    span {
        font-size : var(--font-size-small);
        width: 100%;
        height: var(--size-400);
    }
    
    .wrapper {
    border: 1px solid var(--border-secondary);
    display: flex;
    width: 100%;
    padding: var(--size-100);
    justify-content: center;
    align-items: center;
    gap: var(--size-100);
    }

    .wrapper:hover {  
        border: 1px solid var(--border-secondary-hover);
      }
</style>
