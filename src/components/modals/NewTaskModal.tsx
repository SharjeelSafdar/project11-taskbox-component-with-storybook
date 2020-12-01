import React, { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Modal,
  Paper,
  Typography,
  Box,
  TextField,
  Button,
} from "@material-ui/core";

import { RootState } from "../../store/rootReducer";
import { addTask } from "../taskList/TaskListSlice";
import { useStyles } from "./modals.styles";
import { ModalProps } from "./modals.types";

export const NewTaskModal: FC<ModalProps> = ({ modalStatus, closeModal }) => {
  const classes = useStyles();
  const currentList = useSelector(
    (state: RootState) => state.tasksReducers.currentList
  );
  const [newTaskContent, setNewTaskContent] = useState("");
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
      dispatch(addTask({ content: newTaskContent, list: currentList }));
      setNewTaskContent("");
      closeModal();
    }
  };

  return (
    <Modal open={modalStatus} onClose={closeModal}>
      <Paper elevation={3} className={classes.modal}>
        <Typography variant="h5" component="h2">
          Create New Task
        </Typography>
        <Box marginTop={2} marginBottom={3}>
          <Typography variant="body2" color="textPrimary">
            {`Creating a new task in "${currentList}" list.`}
          </Typography>
        </Box>
        <Box marginBottom={3}>
          <TextField
            value={newTaskContent}
            onChange={validateOnChange}
            error={isError}
            helperText={errorMessage}
            variant="outlined"
            label="Task"
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
          Create Task
        </Button>
      </Paper>
    </Modal>
  );
};
