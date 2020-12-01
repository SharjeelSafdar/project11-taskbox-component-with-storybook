import React, { FC, useState } from "react";
import { Grid, IconButton } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { BsCircle, BsCheckCircle } from "react-icons/bs";
import { AiTwotoneDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";

import { toggleTaskStatus } from "../taskList/TaskListSlice";
import { EditTaskModal, DeleteTaskModal } from "../modals";
import { useStyles } from "./TaskItem.styles";

export interface TaskItemProps {
  /**
   * What task you are up to?
   */
  content: string;
  /**
   * Is the task complete or not
   */
  status: boolean;
  id: number;
}

/**
 * For displaying a single task in a tasks list.
 */
export const TaskItem: FC<TaskItemProps> = ({
  content,
  status = false,
  id,
}) => {
  const classes = useStyles();
  const [showEditTaskModal, setShowEditTaskModal] = useState(false);
  const [showDeleteTaskModal, setShowDeleteTaskModal] = useState(false);
  const dispatch = useDispatch();

  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
      spacing={2}
      className={classes.container}
    >
      <Grid item xs={1}>
        <IconButton
          onClick={() => dispatch(toggleTaskStatus({ id }))}
          title="Toggle status."
          size="small"
        >
          {status ? <BsCheckCircle color="#0f0" /> : <BsCircle color="#888" />}
        </IconButton>
      </Grid>
      <Grid item xs={9}>
        <span>{content}</span>
      </Grid>
      <Grid item xs={1} className={classes.editBtn}>
        <IconButton
          onClick={() => setShowEditTaskModal(true)}
          title="Edit task."
          color="primary"
          size="small"
          aria-label="edit task"
        >
          <MdEdit />
        </IconButton>
        <EditTaskModal
          modalStatus={showEditTaskModal}
          closeModal={() => setShowEditTaskModal(false)}
          taskId={id}
          oldTaskContent={content}
        />
      </Grid>
      <Grid item xs={1} className={classes.deleteBtn}>
        <IconButton
          onClick={() => setShowDeleteTaskModal(true)}
          title="Delete task."
          color="primary"
          size="small"
          aria-label="delete task"
        >
          <AiTwotoneDelete />
        </IconButton>
        <DeleteTaskModal
          modalStatus={showDeleteTaskModal}
          closeModal={() => setShowDeleteTaskModal(false)}
          taskId={id}
        />
      </Grid>
    </Grid>
  );
};
