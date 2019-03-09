import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import Topbar from '../../components/topbar';

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 4,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
  input: {
    marginBottom: theme.spacing.unit * 2,
  },
  button: {
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 10,
  },
  title: {
    fontWeight: 500,
  },
  paper: {
    paddingTop: theme.spacing.unit * 4,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
});

const Login = ({ classes, history, salon }) => (
  <div>
    <Topbar title="Entrar agora" back />
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography
          className={classes.title}
          variant="h4"
          gutterBottom
          color="primary"
          align="center"
        >
          Beautycheck
        </Typography>
        <TextField
          id="login"
          label="Login"
          fullWidth
          className={classes.input}
          placeholder="usuario"
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        <TextField
          id="pass"
          label="Senha"
          fullWidth
          className={classes.input}
          placeholder="***********"
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          onClick={() =>
            history.push(salon ? '/salao-agenda' : '/cliente-agenda')
          }
        >
          Entrar
        </Button>
      </Paper>
    </div>
  </div>
);

export default withStyles(styles)(withRouter(Login));
