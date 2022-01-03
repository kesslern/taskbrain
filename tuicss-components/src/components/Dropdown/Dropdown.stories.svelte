<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

	import Dropdown from './Dropdown.svelte';

	let selection = null
</script>

<Meta title='Components/Dropdown' component={Dropdown} />

<Template let:args>
	<Dropdown {...args} on:select={(e) => selection = e.detail }/>
	<br /><br />
	Selection: {selection}
</Template>


<Story
	id='story1'
	name='Dropdown'
	args={{
		label: 'Dropdown',
		options: [{
			label: 'Option 1',
			value: 'option-1'
		}, {
			label: 'Option 2',
			value: 'option-2'
		}, {
			label: 'Option 3',
			value: 'option-3'
		}]
	}}
/>


