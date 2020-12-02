import React, { FC, useState } from "react";
import { Container, Button } from "@material-ui/core";
import { FaPlus } from "react-icons/fa";

import { NewTaskModal } from "../modals";
import { useStyles } from "./CreateNewTask.styles";

export const CreateNewTask: FC = () => {
  const classes = useStyles();
  const [showNewTaskModal, setShowNewTaskModal] = useState(false);

  return (
    <Container className={classes.newTaskBtn}>
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
    </Container>
  );
};
