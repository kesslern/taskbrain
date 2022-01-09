<script context="module" lang="ts">
  export const BackgroundColors = ['blue', 'green', 'cyan', 'red', 'purple', 'yellow', 'orange'] as const;
  export type BackgroundColor = typeof BackgroundColors[number];

  export const GridColors = ['white', 'black'] as const;
  export type GridColor = typeof GridColors[number];
</script>

<script lang="ts">
  import clsx from "clsx";

  export let background: BackgroundColor = 'blue';
  export let grid: GridColor = 'black';

  $: props = {
    ...$$props,
    class: clsx(`tui-bg-${background}-${grid}`, $$props["class"]),
  };
</script>

<div {...props}>
  <slot />
</div>

