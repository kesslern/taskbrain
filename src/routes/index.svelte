<script lang='ts'>
	import { NewTaskData, NewTaskForm, validate } from '../form';
	import { hasKeys } from '../util';

	let submitting: boolean;
	$: submitting = false;

	const fields: NewTaskForm = {
		name: {
			value: '',
			required: true,
		},
		description: {
			value: '',
			required: true,
		},
		repeatInterval: {
			value: '',
		},
	}

	$: if (fields.repeatInterval.value?.match(/\D+$/)) {
		// Remove all non-digit characters from repeatInterval
		fields.repeatInterval.value = fields.repeatInterval.value.replace(/\D/g, '');
	}


	function submit(e) {
		submitting = true;
		const body = Object.keys(fields).reduce((acc, key) => {
			acc[key] = fields[key].value;
			return acc;
		}, {} as FormData);

		console.log(body);

		const validation = validate(body as NewTaskData);

		Object.keys(fields).forEach(key => {
			fields[key].error = validation[key];
		});

		if (hasKeys(validation)) return;

		// Post BODY to /api/tasks
		fetch('/tasks', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		})
			.then(res => res.json())
			.then(res => {
				console.log(res)
			});
	}

	$: disabled = submitting ? { disabled: '' } : {};
</script>

<div class='tui-panel'>
	<div class='tui-panel-header black-255-text white-168'>
		New Task
	</div>
	<form
		class='tui-panel-content'
		autocomplete='off'
		novalidate='novalidate'
		on:submit|preventDefault={submit}>
		<div class='text-input-row'>
			<label
				class='white-255-text'
				for='name'>
				Name *
			</label>
			<input
				id='name'
				class='tui-input'
				name='name'
				required
				type='text'
				{...disabled}
				bind:value={fields.name.value}
			/>
		</div>
		<div class='error-row'>
			{#if fields.name.error}
				<div class='red-255-text'>
					{fields.name.error}
				</div>
			{/if}
		</div>
		<div class='text-input-row'>
			<label
				class='white-255-text'
				for='repeat-interval'
				type='text'>
				Repeat Interval (s) *
			</label>
			<input
				id='repeat-interval'
				class='tui-input'
				name='repeatInterval'
				type='text'
				required
				{...disabled}
			  bind:value={fields.repeatInterval.value}
			/>
		</div>
		<div class='error-row'>
			{#if fields.repeatInterval.error}
				<div class='red-255-text'>
					{fields.repeatInterval.error}
				</div>
			{/if}
		</div>

		<div class='textarea-input-row'>
			<label
				class='white-255-text'
				for='description'>Description</label>
			<textarea
				id='description'
				class='tui-textarea black-168'
				name='description'
				rows='4'
				bind:value={fields.description.value}
				{...disabled}
			></textarea>
		</div>

		<div class='actions'>
			<button class='tui-button white-168' {...disabled}>
				<label>Cancel</label>
			</button>
			<input
				class='tui-button white-168'
				type='submit'
				{...disabled}
				value='Submit' />
		</div>
	</form>
</div>

<style lang='scss'>
  .tui-panel {
    margin-top: 1em;
    width: calc(100% - 30px);
    margin-left: 10px;
    margin-right: 20px;
  }

  .text-input-row {
    display: flex;

    label {
      display: inline-block;
      min-width: 240px;
      text-align: right;
      padding-right: 10px;
    }

    input {
      flex: 1;
    }
  }

	.error-row {
		min-height: 21px;
		margin-top: 1px;
		text-align: right;
	}

  .textarea-input-row {
    textarea {
      margin-top: 10px;
      display: block;
      width: 100%;
      resize: none;
    }
  }

  .actions {
    display: flex;
    flex-direction: row;

    > * {
      margin-top: 15px;
      margin-right: 20px;
      margin-bottom: 10px;
    }

    > *:first-child {
      margin-left: auto;
    }

    input {
      width: auto;
    }
  }
</style>