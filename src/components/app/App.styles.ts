import { makeStyles, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      width: "600px",
      maxWidth: "90vw",
      padding: theme.spacing(3),
      minHeight: "60vh",
    },
  })
);
