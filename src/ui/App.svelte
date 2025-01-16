<script lang="ts">
  import Input from "./components/Input.svelte"
  import Button from "./components/Button.svelte"
  import Select from "./components/Select.svelte";
</script>

<main>
  <div>
    <Select></Select>
    <Icon></Icon>
  </div>
  <div class="number-adder">
    <Input class="a" value="1"/>
    <Button class="b">Main</Button>
    <Button class="c">Sub</Button>
  </div>
</main>

<style>
  .number-adder {
    display: flex;
    width: 100%;
  }
</style>
