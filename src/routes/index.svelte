<script lang="ts">
	let clicked = 'nothing yet';

	$: time = getTime();

	function getTime(): Promise<string> {
		return fetch("/db-test")
			.then(response => response.json())
			.then(data => data.time);
	}

	function newTime() {
		time = getTime();
	}
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
