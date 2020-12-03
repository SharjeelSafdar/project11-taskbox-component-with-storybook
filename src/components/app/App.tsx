import React, { FC } from "react";
import { Paper, Container, Box } from "@material-ui/core";

import { Title, ListHeader, TaskList, CreateNewTask } from "../";
import { useStyles } from "./App.styles";

export const App: FC = () => {
  const classes = useStyles();

  return (
    <Container>
      <Title />
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
