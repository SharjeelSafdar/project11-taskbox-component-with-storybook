import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Typography } from "@material-ui/core";

import { RootState } from "../../store/rootReducer";
import { TaskItem } from "../taskItem/TaskItem";

export const TaskList: FC = () => {
  const lists = useSelector((state: RootState) => state.tasksReducers.lists);
  const currentList = useSelector(
    (state: RootState) => state.tasksReducers.currentList
  );
  const tasks = useSelector((state: RootState) => state.tasksReducers.tasks);
  const currentTasks =
    currentList === lists[0]
      ? tasks
      : tasks.filter((task) => task.list === currentList);

  return (
    <>
      {currentTasks.length === 0 ? (
        <Typography variant="body1">There are no tasks; enjoy. ;)</Typography>
      ) : (
        currentTasks.map(({ content, id, status }) => (
          <TaskItem key={id} content={content} status={status} id={id} />
        ))
      )}
    </>
  );
};
