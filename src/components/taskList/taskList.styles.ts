import { makeStyles, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      width: "600px",
      maxWidth: "90vw",
      padding: theme.spacing(3),
      minHeight: "60vh",
    },
    form: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    select: {
      flexGrow: 1,
      marginRight: theme.spacing(3),
    },
    modal: {
      position: "absolute",
      width: "400px",
      maxWidth: "80vw",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(4, 3),
      border: "none",
      outline: "none",
      borderRadius: "10px",
      display: "flex",
      flexDirection: "column",
    },
    newTaskBtn: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  })
);
