import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Title } from "./Title";

export default {
  title: "Components/Title",
  component: Title,
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

const Template: Story = (args) => <Title {...args} />;

export const Default = Template.bind({});
