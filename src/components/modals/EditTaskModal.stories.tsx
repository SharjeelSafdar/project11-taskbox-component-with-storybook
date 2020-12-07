import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Provider as ReduxProvider } from "react-redux";

import { EditTaskModal, EditTaskModalProps } from "./EditTaskModal";
import appStore from "../../store";

export default {
  title: "Components/Edit Task Modal",
  components: EditTaskModal,
  decorators: [
    (Story) => (
      <ReduxProvider store={appStore}>
        <Story />
      </ReduxProvider>
    ),
  ],
} as Meta;

const Template: Story<EditTaskModalProps> = (args) => (
  <EditTaskModal {...args} />
);

export const DefaultView = Template.bind({});
DefaultView.args = {
  modalStatus: true,
  closeModal: () => {},
  oldTaskContent: "Sample Text",
};
