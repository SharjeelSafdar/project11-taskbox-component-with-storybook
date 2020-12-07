import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Modal, Paper, Typography, Button, Box } from "@material-ui/core";

import { deleteList } from "../taskList/TaskListSlice";
import { useStyles } from "./modals.styles";
import { ModalProps } from "./modals.types";

export interface DeleteListModalProps extends ModalProps {
  listToDelete: string;
}

export const DeleteListModal: FC<DeleteListModalProps> = ({
  modalStatus,
  closeModal,
  listToDelete,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isAllowedToDelete = () => listToDelete !== "All";
  const deleteListHandler = () => {
    if (isAllowedToDelete()) {
      dispatch(deleteList({ listToDelete }));
    }
    closeModal();
  };

  return (
    <Modal open={modalStatus} onClose={closeModal}>
      <Paper elevation={3} className={classes.modal}>
        <Typography variant="h5" component="h2">
          Delete Selected List
        </Typography>
        <Box marginBottom={3} marginTop={3}>
          <Typography variant="body2" color="textPrimary">
            {isAllowedToDelete()
              ? `Are you sure you want to delete "${listToDelete}" list? All associated tasks will also be deleted. Click anywhere outside the box to cancel.`
              : `"All" list can't be deleted.`}
          </Typography>
        </Box>
        <Button
          onClick={deleteListHandler}
          variant="contained"
          color="primary"
          fullWidth
        >
          {isAllowedToDelete() ? "Confirm" : "OK"}
        </Button>
      </Paper>
    </Modal>
  );
};
