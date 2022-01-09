<script context="module" lang="ts">
  export type ButtonElements = "button" | "a" | "input";
</script>

<script lang="ts">
  import * as Color from "../../styles/Color";
  import clsx from "clsx";

  export let label = "";
  export let colors: Color.ColorProps = undefined;
  export let element: ButtonElements = "button";

  const defaultColors = {
    background: $$props.disabled
      ? Color.Background.Red255
      : Color.Background.White168,
    text: Color.Text.Black,
  };

  let classes: string;
  $: classes = Color.toClasses({
    ...defaultColors,
    ...colors,
  });

  let props: any;
  $: props = {
    ...$$props,
    class: clsx("tui-button", classes, $$props["class"]),
  };
</script>

{#if element === "button"}
  <button {...props} on:click>{label}</button>
{:else if element === "a"}
  <a {...props} href="{$$props['href'] ?? '#'}on:click">{label}</a>
{:else if element === "input"}
  <input {...props} value="{label}" type="button" on:click />
{/if}
