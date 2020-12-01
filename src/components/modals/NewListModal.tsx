import React, { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Modal,
  Paper,
  Typography,
  FormControl,
  Box,
  TextField,
  Button,
} from "@material-ui/core";

import { RootState } from "../../store/rootReducer";
import { addNewList } from "../taskList/TaskListSlice";
import { useStyles } from "./modals.styles";
import { ModalProps } from "./modals.types";

export const NewListModal: FC<ModalProps> = ({ modalStatus, closeModal }) => {
  const classes = useStyles();
  const lists = useSelector((state: RootState) => state.tasksReducers.lists);
  const [newListName, setNewListName] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const validate = (listName: string) => {
    let error = "";
    if (listName.trim().length === 0) {
      error = "Not a valid list name.";
      setIsError(true);
    } else if (lists.includes(listName.trim())) {
      error = "List name already exists.";
      setIsError(true);
    } else {
      setIsError(false);
    }
    setErrorMessage(error);
    return error;
  };
  const validateOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const listName = event.target.value;
    validate(listName);
    setNewListName(listName);
  };
  const createListHandler = () => {
    const error = validate(newListName);
    if (error === "") {
      dispatch(addNewList({ newList: newListName }));
      closeModal();
      setNewListName("");
    }
  };

  return (
    <Modal open={modalStatus} onClose={closeModal}>
      <Paper elevation={3} className={classes.modal}>
        <Typography variant="h5" component="h2">
          Create New List
        </Typography>
        <FormControl>
          <Box marginBottom={3} marginTop={3}>
            <TextField
              value={newListName}
              onChange={validateOnChange}
              error={isError}
              helperText={errorMessage}
              variant="outlined"
              label="List Name"
              fullWidth
              autoFocus
            />
          </Box>
          <Button
            onClick={createListHandler}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Create List
          </Button>
        </FormControl>
      </Paper>
    </Modal>
  );
};
