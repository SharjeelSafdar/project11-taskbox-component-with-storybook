import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { App } from "./App";

export default {
  title: "Components/App",
  component: App,
  decorators: [
    (Story) => (
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
    ),
  ],
} as Meta;

const Template: Story = (args) => <App {...args} />;

export const Default = Template.bind({});
