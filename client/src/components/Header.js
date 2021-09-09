import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { connect } from "react-redux";
import useAuthStatusOnPage from "../utils/useAuth";
import { Link } from "react-router-dom";
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
}));

function Header(props) {
  const classes = useStyles();

  const setLoginData = useAuthStatusOnPage(
    props.auth,
    null,
    <a href="/api/logout">Logout</a>,
    <a href="/auth/google">Login with Google</a>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            <Link to={props.auth ? "/surveys" : "/"}>Emailer</Link>
          </Typography>

          <Button color="inherit">{setLoginData}</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
