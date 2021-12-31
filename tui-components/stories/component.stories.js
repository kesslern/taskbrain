import Component from '../src/index';
import TasksList from '../src/TasksList';

export default {
  title: 'Component',
  component: TasksList,
};

export const Story = () => ({
  Component: TasksList,
  props: {  },
  on: {  },
});
