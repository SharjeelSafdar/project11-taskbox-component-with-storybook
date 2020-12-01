import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Modal,
  Paper,
  Typography,
  Box,
  TextField,
  Button,
} from "@material-ui/core";

import { editTask } from "../taskList/TaskListSlice";
import { useStyles } from "./modals.styles";
import { ModalProps } from "./modals.types";

interface EditTaskModalProps extends ModalProps {
  taskId: number;
  oldTaskContent: string;
}

export const EditTaskModal: FC<EditTaskModalProps> = ({
  modalStatus,
  closeModal,
  taskId,
  oldTaskContent,
}) => {
  const classes = useStyles();
  const [newTaskContent, setNewTaskContent] = useState(oldTaskContent);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const validate = (taskContent: string) => {
    let error = "";
    if (taskContent.trim().length === 0) {
      error = "Should not be empty.";
      setIsError(true);
    } else {
      setIsError(false);
    }
    setErrorMessage(error);
    return error;
  };
  const validateOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const taskBoxContent = event.target.value;
    validate(taskBoxContent);
    setNewTaskContent(taskBoxContent);
  };
  const createTaskHandler = () => {
    const error = validate(newTaskContent);
    if (error === "") {
      dispatch(editTask({ id: taskId, content: newTaskContent }));
      closeModal();
    }
  };

  return (
    <Modal open={modalStatus} onClose={closeModal}>
      <Paper elevation={3} className={classes.modal}>
        <Typography variant="h5" component="h2">
          Edit Task
        </Typography>
        <Box marginTop={3} marginBottom={3}>
          <TextField
            value={newTaskContent}
            onChange={validateOnChange}
            error={isError}
            helperText={errorMessage}
            variant="outlined"
            label="New Task"
            fullWidth
            autoFocus
          />
        </Box>
        <Button
          onClick={createTaskHandler}
          variant="contained"
          color="primary"
          fullWidth
        >
          Update Task
        </Button>
      </Paper>
    </Modal>
  );
};
