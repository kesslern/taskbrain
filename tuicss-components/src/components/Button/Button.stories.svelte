<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import { Color, Button } from '../../index';
</script>

<Meta title='Components/Button' component={Button} />

<Story
	id='story1'
	name='Button'
>
	<Button
		class='button'
		label='Default'/>
	<Button
		class='button'
		label='Alternate Colors'
		colors={{
		  background: Color.Background.Blue168,
		  text: Color.Text.White
		}}/>
	<Button
	    class='button'
		label='Disabled'
		disabled/>
</Story>

<style>
	:global(.button) {
		display:block;
		margin-top: 16px;
	}
</style>