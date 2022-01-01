import Dropdown from '../src/Dropdown.svelte';

export default {
	title: 'Dropdown',
	component: Dropdown,
};

export const Story = () => ({
	Component: Dropdown,
	props: {
		label: "Dropdown",
		options: [
			{
				label: "Option 1",
				value: "option-1",
			},
			{
				label: "Option 2",
				value: "option-2",
			},
			{
				label: "Option 3",
				value: "option-3",
			},
		]
	},
	on: {  },
});
