import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Modal, Paper, Typography, Button, Box } from "@material-ui/core";

import { deleteTask } from "../taskList/TaskListSlice";
import { useStyles } from "./modals.styles";
import { ModalProps } from "./modals.types";

export interface DeleteTaskModalProps extends ModalProps {
  taskId: number;
}

export const DeleteTaskModal: FC<DeleteTaskModalProps> = ({
  taskId,
  modalStatus,
  closeModal,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const deleteTaskHandler = () => {
    dispatch(deleteTask({ id: taskId }));
    closeModal();
  };

  return (
    <Modal open={modalStatus} onClose={closeModal}>
      <Paper elevation={3} className={classes.modal}>
        <Typography variant="h5" component="h2">
          Delete Task
        </Typography>
        <Box marginBottom={3} marginTop={3}>
          <Typography variant="body2" color="textPrimary">
            Are you sure you want to delete this task? Click anywhere outside
            the box to cancel.
          </Typography>
        </Box>
        <Button
          onClick={deleteTaskHandler}
          variant="contained"
          color="primary"
          fullWidth
        >
          Confirm
        </Button>
      </Paper>
    </Modal>
  );
};
