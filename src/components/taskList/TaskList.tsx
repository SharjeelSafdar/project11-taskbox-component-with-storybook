import React, { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Paper,
  Container,
  Select,
  MenuItem,
  FormControl,
  Box,
  InputLabel,
  IconButton,
  Button,
  Typography,
} from "@material-ui/core";
import { FaPlus } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";

import { RootState } from "../../store/rootReducer";
import { setCurrentList } from "./TaskListSlice";
import { TaskItem } from "../taskItem/TaskItem";
import { useStyles } from "./taskList.styles";
import { NewListModal, DeleteListModal, NewTaskModal } from "../modals";

export const TaskList: FC = () => {
  const classes = useStyles();
  const lists = useSelector((state: RootState) => state.tasksReducers.lists);
  const currentList = useSelector(
    (state: RootState) => state.tasksReducers.currentList
  );
  const tasks = useSelector((state: RootState) => state.tasksReducers.tasks);
  const currentTasks =
    currentList === lists[0]
      ? tasks
      : tasks.filter((task) => task.list === currentList);
  const [showNewListModal, setShowNewListModal] = useState(false);
  const [showDeleteListModal, setShowDeleteListModal] = useState(false);
  const [showNewTaskModal, setShowNewTaskModal] = useState(false);
  const dispatch = useDispatch();

  const handleListChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    dispatch(setCurrentList({ listName: event.target.value as string }));
  };

  return (
    <Container>
      <Paper elevation={3} className={classes.container}>
        <Box marginBottom={3}>
          <FormControl className={classes.form}>
            <InputLabel id="task-list-select">Tasks List</InputLabel>
            <Select
              defaultValue={lists[0]}
              value={currentList}
              onChange={handleListChange}
              className={classes.select}
              labelId="task-list-select"
            >
              {lists.map((list) => (
                <MenuItem value={list} key={list}>
                  {list}
                </MenuItem>
              ))}
            </Select>
            <IconButton
              onClick={() => setShowNewListModal(true)}
              title="Add new list."
              color="primary"
              aria-label="add"
            >
              <FaPlus />
            </IconButton>
            <NewListModal
              modalStatus={showNewListModal}
              closeModal={() => setShowNewListModal(false)}
            />

            <IconButton
              onClick={() => setShowDeleteListModal(true)}
              title="Delete selected list."
              color="primary"
              aria-label="delete"
            >
              <AiTwotoneDelete />
            </IconButton>
            <DeleteListModal
              modalStatus={showDeleteListModal}
              closeModal={() => setShowDeleteListModal(false)}
              listToDelete={currentList}
            />
          </FormControl>
        </Box>
        <Box>
          {currentTasks.length === 0 ? (
            <Typography variant="body1">
              There are no tasks; enjoy. ;)
            </Typography>
          ) : (
            currentTasks.map(({ content, id, status }) => (
              <TaskItem key={id} content={content} status={status} id={id} />
            ))
          )}
        </Box>
        <Box marginTop={3} className={classes.newTaskBtn}>
          <Button
            onClick={() => setShowNewTaskModal(true)}
            variant="contained"
            color="primary"
            startIcon={<FaPlus size="1rem" />}
            title="Create new task."
          >
            Create New Task
          </Button>
          <NewTaskModal
            modalStatus={showNewTaskModal}
            closeModal={() => setShowNewTaskModal(false)}
          />
        </Box>
      </Paper>
    </Container>
  );
};
