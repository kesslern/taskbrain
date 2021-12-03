<script lang="ts">
	import Dropdown from '../components/Dropdown.svelte';

	let time: Promise<string>;
	$: time = getTime();

	function getTime(): Promise<string> {
		return fetch("/db-test")
			.then(response => response.json())
			.then(data => data.time);
	}

	function newTime() {
		time = getTime();
	}

	let clicked: string | null = null;
</script>

{#await time}
	<p>Retrieving time...</p>
{:then value}
	<!-- promise was fulfilled -->
	<p>The time is {value}</p>
{:catch error}
	<p>Unable to get time: {error.message}</p>
{/await}

<button class='tui-button white-168' on:click={newTime}>
	<label>Get new time</label>
</button>

<Dropdown
	label='Dropdown'
	options={[
			{ label: 'Foo', value: 'Foo' },
			{ label: 'Bar', value: 'Bar' },
			{ label: 'Baz', value: 'Baz' },
		]}
	onChange={(option) => clicked = option.value}
/>

<span>{clicked}</span>
