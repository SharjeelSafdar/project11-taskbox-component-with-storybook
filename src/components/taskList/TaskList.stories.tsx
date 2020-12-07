import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Provider as ReduxProvider } from "react-redux";

import { TaskList } from "./TaskList";
import appStore from "../../store";

export default {
  title: "Components/Task List",
  component: TaskList,
  decorators: [
    (Story) => (
      <ReduxProvider store={appStore}>
        <Story />
      </ReduxProvider>
    ),
  ],
} as Meta;

const Template: Story = (args) => <TaskList {...args} />;

export const DefaultList = Template.bind({});
