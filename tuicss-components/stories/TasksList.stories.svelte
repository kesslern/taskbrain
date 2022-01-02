<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  import TasksList from '../src/TasksList.svelte';
</script>

<Meta title='Components/TasksList' component={TasksList} />

<Template let:args>
  <TasksList {...args} />
</Template>


<Story
  id='story1'
  name='TasksList'
/>


