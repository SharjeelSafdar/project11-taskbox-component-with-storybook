import React, { FC } from "react";
import { Paper, Container, Box } from "@material-ui/core";

import { ListHeader } from "../listHeader/ListHeader";
import { TaskList } from "../taskList/TaskList";
import { CreateNewTask } from "../createNewTask/CreateNewTask";
import { useStyles } from "./App.styles";

export const App: FC = () => {
  const classes = useStyles();

  return (
    <Container>
      <Paper elevation={3} className={classes.container}>
        <Box marginBottom={3}>
          <ListHeader />
        </Box>
        <Box>
          <TaskList />
        </Box>
        <Box marginTop={3}>
          <CreateNewTask />
        </Box>
      </Paper>
    </Container>
  );
};
