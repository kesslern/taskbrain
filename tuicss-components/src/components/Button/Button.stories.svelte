<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import { Color, Button } from '../../index';
	import Util from "../../styles/Util.ts";
</script>

<Meta title='Components/Button' component={Button} />

<Story
	id='story1'
	name='Button'
>
	<div>
		<Button
			class='button'
			label='Default'/>
	</div>
	<div>
		<Button
			class='button'
			label='Alternate Colors'
			colors={{
		  background: Color.Background.Blue168,
		  text: Color.Text.White
		}}/>
	</div>
	<div>
		<Button
			class='button'
			label='Disabled'
			disabled/>
	</div>
	<div>
		<Button
			class='button'
			element="a"
			label='Anchor Element'
			href="https://www.google.com"
			target="_blank"/>
	</div>
	<div>
		<Button
			class='button'
			element="input"
			label='Input Element'/>
	</div>
</Story>

<style>
	:global(.button) {
		margin-top: 16px;
	}
</style>