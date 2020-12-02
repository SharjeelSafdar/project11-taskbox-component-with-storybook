import React, { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
} from "@material-ui/core";
import { FaPlus } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";

import { RootState } from "../../store/rootReducer";
import { setCurrentList } from "../taskList/TaskListSlice";
import { NewListModal, DeleteListModal } from "../modals";
import { useStyles } from "./ListHeader.styles";

export const ListHeader: FC = () => {
  const classes = useStyles();
  const lists = useSelector((state: RootState) => state.tasksReducers.lists);
  const currentList = useSelector(
    (state: RootState) => state.tasksReducers.currentList
  );
  const [showNewListModal, setShowNewListModal] = useState(false);
  const [showDeleteListModal, setShowDeleteListModal] = useState(false);
  const dispatch = useDispatch();

  const handleListChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    dispatch(setCurrentList({ listName: event.target.value as string }));
  };

  return (
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
  );
};
