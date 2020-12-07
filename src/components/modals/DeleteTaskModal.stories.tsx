import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Provider as ReduxProvider } from "react-redux";

import { DeleteTaskModal, DeleteTaskModalProps } from "./DeleteTaskModal";
import appStore from "../../store";

export default {
  title: "Components/Delete Task Modal",
  components: DeleteTaskModal,
  decorators: [
    (Story) => (
      <ReduxProvider store={appStore}>
        <Story />
      </ReduxProvider>
    ),
  ],
} as Meta;

const Template: Story<DeleteTaskModalProps> = (args) => (
  <DeleteTaskModal {...args} />
);

export const DefaultView = Template.bind({});
DefaultView.args = {
  modalStatus: true,
  closeModal: () => {},
};
