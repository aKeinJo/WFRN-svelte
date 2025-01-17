<script lang="ts">
  import Input from "./components/Input.svelte"
  import Button from "./components/Button.svelte"
  import TemplateSelect from "./components/Template/Select.svelte";
</script>

<main>
  <div class="wrap-template">
    <TemplateSelect>dd</TemplateSelect>
  </div>
  <div class="wrap-number-adder">
    <Input class="number-adder" value="1"/>
    <Button class="b">Main</Button>
    <Button class="c">Sub</Button>
  </div>
</main>

<style>
  .wrap-template {
    display: flex;
    align-items: center;
    align-self: stretch;
    gap: var(--size-200);
  }

  .wrap-number-adder {
    display: flex;
    align-self: stretch;
    gap: var(--size-200);
    width: 100%;
  }
</style>
