import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Provider as ReduxProvider } from "react-redux";

import { NewListModal } from "./NewListModal";
import { ModalProps } from "./modals.types";
import appStore from "../../store";

export default {
  title: "Components/New List Modal",
  components: NewListModal,
  decorators: [
    (Story) => (
      <ReduxProvider store={appStore}>
        <Story />
      </ReduxProvider>
    ),
  ],
} as Meta;

const Template: Story<ModalProps> = (args) => <NewListModal {...args} />;

export const DefaultView = Template.bind({});
DefaultView.args = {
  modalStatus: true,
  closeModal: () => {},
};
