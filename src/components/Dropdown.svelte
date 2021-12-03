<script lang='ts'>
	import ClickOutside from 'svelte-click-outside';

	export let label: string;
	export let options: DropdownOption[];
	export let onChange: (option: DropdownOption) => void;

	export type DropdownOption = {
		label: string;
		value: string;
	};

	let show: boolean;
	$: show = false;

	let firstClickHappened: boolean;
	$: firstClickHappened = false;

	function toggle() {
		console.log("toggle");
		 show = !show;
	}

	function clickAway() {
		if (firstClickHappened) {
			show = false;
		} else {
			firstClickHappened = true;
		}
	}

	function hide() {
		show = false;
		firstClickHappened = false;
	}
	// red-168-text
</script>

<li class="tui-dropdown">
	<button class='tui-button white-168' on:click={toggle}>
		{label}
	</button>
	{#if show}
		<ClickOutside on:clickoutside={clickAway}>
			<div class="tui-dropdown-content block">
				<ul>
					{#each options as option}
						<li class="black-168-text green-168-hover" on:click={() => { hide(); onChange(option)}}>{option.label}</li>
					{/each}
				</ul>
			</div>
		</ClickOutside>
	{/if}
</li>