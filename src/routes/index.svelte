<script lang='ts'>
	let name: string;
	let description: string;
	let repeatInterval: string;

	$: if (repeatInterval?.match(/\D+$/)) {
		// Remove all non-digit characters from repeatInterval
		repeatInterval = repeatInterval.replace(/\D/g, '');
	}


	function submit(e) {
		const body = { name, description, repeatInterval };
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
</script>

<div class='tui-panel'>
	<div class='tui-panel-header black-255-text white-168'>
		New Task
	</div>
	<form
		class='tui-panel-content'
		autocomplete='off'
		on:submit|preventDefault={submit}>
		<div class='text-input-row'>
			<label
				class='white-255-text'
				for='name'>
				Name
			</label>
			<input
				id='name'
				class='tui-input'
				name='name'
				required
				type='text'
				bind:value={name}
			/>
		</div>
		<div class='text-input-row'>
			<label
				class='white-255-text'
				for='repeat-interval'
				type='number'>
				Repeat Interval (s)
			</label>
			<input
				id='repeat-interval'
				class='tui-input'
				name='repeatInterval'
				type='text'
				required
			  bind:value={repeatInterval}
			/>
		</div>

		<div class='textarea-input-row'>
			<label
				class='white-255-text'
				for='description'>Description</label>
			<textarea
				id='description'
				class='tui-textarea black-168'
				name='description'
				rows='4'></textarea>
		</div>

		<div class='actions'>
			<button class='tui-button white-168'>
				<label>Cancel</label>
			</button>
			<input
				class='tui-button white-168'
				type='submit'
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
    margin-top: 20px;
    display: flex;

    label {
      display: inline-block;
      min-width: 220px;
      text-align: right;
      padding-right: 10px;
    }

    input {
      flex: 1;
    }
  }

  .textarea-input-row {
    margin-top: 20px;

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

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
</style>