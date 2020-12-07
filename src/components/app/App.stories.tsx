import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Provider as ReduxProvider } from "react-redux";

import { App } from "./App";
import appStore from "../../store";

export default {
  title: "Components/App",
  component: App,
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

const Template: Story = (args) => <App {...args} />;

export const Default = Template.bind({});
