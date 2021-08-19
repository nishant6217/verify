import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import Login from "./login/Login";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  app: {
    background: "#129CF7",
  },
}));

function WebBar(props) {
  const [open, setOpen] = useState(false);
  const openDialog = () => {
    setOpen(true);
  };
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.app}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        ></IconButton>
        <Typography variant="h6" className={classes.title}>
          Demo
        </Typography>

        <Link style={{ textDecoration: "none", color: "#fff" }}>
          <Button
            color="inherit"
            onClick={() => openDialog()}
            variant="outlined"
          >
            Demo Login
          </Button>
        </Link>
        <Login open={open} setOpen={setOpen} />
      </Toolbar>
    </AppBar>
  );
}

export default WebBar;
