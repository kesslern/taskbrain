<script>
	import { Meta, Story } from "@storybook/addon-svelte-csf";
	import DropdownComponent from "../components/Dropdown.svelte";

	$: clicked = null;
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
	title="TuiCss/Components"
	component={DropdownComponent}
/>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story name="Dropdown">
	<div>{clicked}</div>

	<DropdownComponent
		label='Dropdown'
		options={[
			{ label: 'Foo', value: 'Foo' },
			{ label: 'Bar', value: 'Bar' },
			{ label: 'Baz', value: 'Baz' },
		]}
		onChange={(option) => {clicked = option.value}}
	/>
</Story>

