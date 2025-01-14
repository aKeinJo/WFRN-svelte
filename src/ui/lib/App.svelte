<script lang="ts">
  import Input from "../components/input.svelte"
  import Button from "../components/button.svelte"
</script>

<main>
  <div class="number-adder">
    <Input value="1"/>
    <Button>Main</Button>
    <Button>Sub</Button>
  </div>
</main>


<style>
  .number-adder {
    display: flex;
    width: 100%;
  }
</style>
