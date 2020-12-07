import React from "react";
import { Story, Meta } from "@storybook/react";
import { Provider as ReduxProvider } from "react-redux";

import { ListHeader } from "./ListHeader";
import appStore from "../../store";

export default {
  title: "Components/List Header",
  component: ListHeader,
  decorators: [
    (Story) => (
      <ReduxProvider store={appStore}>
        <Story />
      </ReduxProvider>
    ),
  ],
} as Meta;

const Template: Story = (args) => <ListHeader {...args} />;

export const Default = Template.bind({});
