<script lang="ts">
	import Button, { Label } from '@smui/button';
	import Menu, { MenuComponentDev } from '@smui/menu';
	import List, { Item, Separator, Text } from '@smui/list';

	let menu: MenuComponentDev;
	let clicked = 'nothing yet';

	let time: null | string
	$: time = null;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Button>
	<Label>An example button</Label>
</Button>

<div style="min-width: 100px;">
	<Button on:click={() => menu.setOpen(true)}>Open Menu</Button>
	<Menu bind:this={menu}>
		<List>
			<Item on:SMUI:action={() => (clicked = 'Cut')}>
				<Text>Cut</Text>
			</Item>
			<Item on:SMUI:action={() => (clicked = 'Copy')}>
				<Text>Copy</Text>
			</Item>
			<Item on:SMUI:action={() => (clicked = 'Paste')}>
				<Text>Paste</Text>
			</Item>
			<Separator />
			<Item on:SMUI:action={() => (clicked = 'Delete')}>
				<Text>Delete</Text>
			</Item>
		</List>
	</Menu>
</div>

<pre class="status">Clicked: {clicked}</pre>