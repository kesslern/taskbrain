<script context="module" lang="ts">
export type ButtonEvent =
  | { type: "button-click" }
  | { type: "click-away" }
  | { type: "select"; value: string };

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ButtonContext {}

export type DropdownOption = {
  label: string;
  value: string;
};
</script>

<script lang="ts">
import { Button, ColorProps } from "../../index";

export let label: string;
export let options: DropdownOption[];
export let colors: ColorProps | undefined;

import ClickOutside from "svelte-click-outside";
import { useMachine } from "@xstate/svelte";
import { createEventDispatcher } from "svelte";
import { createMachine } from "xstate";

const dispatch = createEventDispatcher();

const buttonMachine = createMachine<ButtonContext, ButtonEvent>(
  {
    id: "dropdown-button",
    initial: "closed",
    states: {
      closed: {
        on: {
          "button-click": { target: "waiting-for-first-clickaway" },
        },
      },
      "waiting-for-first-clickaway": {
        on: {
          "click-away": { target: "open" },
        },
      },
      open: {
        on: {
          "click-away": { target: "closed" },
          "button-click": { target: "closed" },
          select: { target: "closed", actions: ["select"] },
        },
      },
    },
  },
  {
    actions: {
      select: (_, event) => {
        dispatch("select", event["value"]["value"]);
      },
    },
  }
);

const { state, send } = useMachine(buttonMachine);
</script>

<li class="tui-dropdown">
  <Button
    on:click="{() => send('button-click')}"
    colors="{colors}"
    label="{label}"
  />
  {#if $state.value !== "closed"}
    <ClickOutside on:clickoutside="{() => send('click-away')}">
      <div class="tui-dropdown-content block">
        <ul>
          {#each options as option}
            <li
              class="black-168-text green-168-hover"
              on:click="{() => send('select', { value: option })}"
            >
              {option.label}
            </li>
          {/each}
        </ul>
      </div>
    </ClickOutside>
  {/if}
</li>
