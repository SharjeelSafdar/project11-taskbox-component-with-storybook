import React, { FC, useState } from "react";
import { Container, Box, IconButton, Typography } from "@material-ui/core";
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
   * Is the task complete or not?
   */
  status: boolean;
  /**
   * Id of task in a redux store.
   */
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
    <Container className={classes.container}>
      <Box className={classes.toggleBtn}>
        <IconButton
          onClick={() => dispatch(toggleTaskStatus({ id }))}
          title="Toggle status."
          size="small"
        >
          {status ? <BsCheckCircle color="#0f0" /> : <BsCircle color="#888" />}
        </IconButton>
      </Box>
      <Box>
        <Typography variant="body2">{content}</Typography>
      </Box>
      <Box className={classes.editBtn}>
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
      </Box>
      <Box className={classes.deleteBtn}>
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
      </Box>
    </Container>
  );
};
