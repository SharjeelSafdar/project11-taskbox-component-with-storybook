import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Provider as ReduxProvider } from "react-redux";

import { CreateNewTask } from "./CreateNewTask";
import appStore from "../../store";

export default {
  title: "Components/Create Task Button",
  component: CreateNewTask,
  decorators: [
    (Story) => (
      <ReduxProvider store={appStore}>
        <div
          style={{
            backgroundColor: "#282c34",
            padding: "1em",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Story />
        </div>
      </ReduxProvider>
    ),
  ],
} as Meta;

const Template: Story = (args) => <CreateNewTask {...args} />;

export const Default = Template.bind({});
