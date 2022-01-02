<script lang='ts'>
	import { createEventDispatcher } from 'svelte';

	export let label: string;
	export let options: DropdownOption[];

	import ClickOutside from 'svelte-click-outside';
	import { useMachine } from '@xstate/svelte';
	import { createMachine } from 'xstate';

	export type ButtonEvent =
		| { type: 'button-click' }
		| { type: 'click-away' }
		| { type: 'select'; value: string };

	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	export interface ButtonContext {
	}

	const dispatch = createEventDispatcher();

	const buttonMachine = createMachine<ButtonContext, ButtonEvent>(
		{
			id: 'dropdown-button',
			initial: 'closed',
			states: {
				closed: {
					on: {
						'button-click': { target: 'waiting-for-first-clickaway' }
					}
				},
				'waiting-for-first-clickaway': {
					on: {
						'click-away': { target: 'open' }
					}
				},
				open: {
					on: {
						'click-away': { target: 'closed' },
						'button-click': { target: 'closed' },
						select: { target: 'closed', actions: ['select'] }
					}
				}
			}
		},
		{
			actions: {
				select: (context, event) => {
					dispatch('select', event['value']['value']);
				}
			}
		}
	);

	export type DropdownOption = {
		label: string;
		value: string;
	};

	const { state, send } = useMachine(buttonMachine);
</script>

<li class='tui-dropdown'>
	<button class='tui-button white-168' on:click={() => send('button-click')}>
		{label}
	</button>
	{#if $state.value !== 'closed'}
		<ClickOutside on:clickoutside={() => send('click-away')}>
			<div class='tui-dropdown-content block'>
				<ul>
					{#each options as option}
						<li
							class='black-168-text green-168-hover'
							on:click={() => send('select', { value: option })}
						>
							{option.label}
						</li>
					{/each}
				</ul>
			</div>
		</ClickOutside>
	{/if}
</li>
