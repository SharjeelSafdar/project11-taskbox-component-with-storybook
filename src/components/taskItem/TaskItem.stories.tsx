import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { TaskItem, TaskItemProps } from "./TaskItem";

export default {
  title: "Components/Task Item",
  components: TaskItem,
} as Meta;

const Template: Story<TaskItemProps> = (args) => <TaskItem {...args} />;

export const Default = Template.bind({});
Default.args = { content: "Dummy Text", status: false };

export const Incomplete = Template.bind({});
Incomplete.args = {
  ...Default.args,
};

export const Complete = Template.bind({});
Complete.args = {
  ...Default.args,
  status: true,
};
