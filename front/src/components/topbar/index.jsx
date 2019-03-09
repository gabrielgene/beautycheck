import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const Topbar = ({ classes, title, history, back }) => (
  <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        {back && (
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={() => history.goBack()}
          >
            <ArrowBackIcon />
          </IconButton>
        )}
        <Typography variant="h6" color="inherit" className={classes.grow}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

export default withStyles(styles)(withRouter(Topbar));
