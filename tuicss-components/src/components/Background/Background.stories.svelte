<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Background, {
    BackgroundColors,
    GridColors,
  } from "./Background.svelte";
</script>

<Meta
  title="Components/Background"
  component="{Background}"
  argTypes="{{
    background: {
      options: BackgroundColors,
      control: 'select',
    },
    grid: {
      options: GridColors,
      control: 'select',
    },
  }}"
/>

<Template let:args>
  <Background class="background" {...args} />
</Template>

<Story
  id="story1"
  name="Background"
  args="{{ background: 'blue', grid: 'white' }}"
/>

<style>
  :global(.background) {
    height: 200px;
    width: 200px;
  }
</style>
