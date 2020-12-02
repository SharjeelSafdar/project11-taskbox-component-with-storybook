import { makeStyles, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    form: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    select: {
      flexGrow: 1,
      marginRight: theme.spacing(3),
    },
  })
);
