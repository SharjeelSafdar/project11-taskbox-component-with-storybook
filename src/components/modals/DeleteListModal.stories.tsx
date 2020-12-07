import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Provider as ReduxProvider } from "react-redux";

import { DeleteListModal, DeleteListModalProps } from "./DeleteListModal";
import appStore from "../../store";

export default {
  title: "Components/Delete List Modal",
  components: DeleteListModal,
  decorators: [
    (Story) => (
      <ReduxProvider store={appStore}>
        <Story />
      </ReduxProvider>
    ),
  ],
} as Meta;

const Template: Story<DeleteListModalProps> = (args) => (
  <DeleteListModal {...args} />
);

export const DefaultView = Template.bind({});
DefaultView.args = {
  modalStatus: true,
  closeModal: () => {},
  listToDelete: "Work",
};

export const DeletingAllList = Template.bind({});
DeletingAllList.args = {
  ...DefaultView.args,
  listToDelete: "All",
};
