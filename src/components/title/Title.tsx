import React, { FC } from "react";
import { Typography, makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      textAlign: "center",
      color: theme.palette.common.white,
      marginBottom: theme.spacing(3),
      fontWeight: 500,
    },
  })
);

export const Title: FC = () => {
  const classes = useStyles();
  return (
    <Typography variant="h2" component="h1" className={classes.title}>
      My Tasks
    </Typography>
  );
};
