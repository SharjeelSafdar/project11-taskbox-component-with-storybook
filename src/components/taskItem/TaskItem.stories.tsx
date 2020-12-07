import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Provider as ReduxProvider } from "react-redux";

import { TaskItem, TaskItemProps } from "./TaskItem";
import appStore from "../../store";

export default {
  title: "Components/Task Item",
  components: TaskItem,
  decorators: [
    (Story) => (
      <ReduxProvider store={appStore}>
        <Story />
      </ReduxProvider>
    ),
  ],
  argTypes: {
    content: {
      description: "What task you are up to?",
    },
    status: {
      description: "Is the task complete or not?",
    },
  },
} as Meta;

const Template: Story<TaskItemProps> = (args) => <TaskItem {...args} />;

export const Default = Template.bind({});
Default.args = { content: "Dummy Text", status: false };

export const Complete = Template.bind({});
Complete.args = {
  ...Default.args,
  status: true,
};

export const Incomplete = Template.bind({});
Incomplete.args = {
  ...Default.args,
};

export const LongTask = Template.bind({});
LongTask.args = {
  ...Default.args,
  content:
    "A very very very very very very very very very very very  very very very" +
    " very very very very very very very very very very very very very very" +
    " very very very very very very very very very very very very very very" +
    " very very very very very long task!",
};
