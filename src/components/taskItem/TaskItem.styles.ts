import { makeStyles, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      marginBottom: theme.spacing(0.3),
      "&:hover": {
        boxShadow: theme.shadows[7],
      },
      "&:hover button": {
        visibility: "visible",
      },
    },
    editBtn: {
      visibility: "hidden",
    },
    deleteBtn: {
      visibility: "hidden",
    },
  })
);
