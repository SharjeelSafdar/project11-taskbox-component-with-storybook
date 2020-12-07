import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Provider as ReduxProvider } from "react-redux";

import { NewTaskModal } from "./NewTaskModal";
import appStore from "../../store";
import { ModalProps } from "./modals.types";

export default {
  title: "Components/New Task Modal",
  components: NewTaskModal,
  decorators: [
    (Story) => (
      <ReduxProvider store={appStore}>
        <Story />
      </ReduxProvider>
    ),
  ],
} as Meta;

const Template: Story<ModalProps> = (args) => <NewTaskModal {...args} />;

export const DefaultView = Template.bind({});
DefaultView.args = { modalStatus: true, closeModal: () => {} };
