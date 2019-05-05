import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import { postRequest } from '../../fetches';
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
});

const Login = ({ classes, history, salon }) => {
  const { state } = history.location;
  const [values, setValues] = React.useState({
    user: '',
    pass: '',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleClientSubmit = () =>
    postRequest('/auth/user', values).then(() =>
      history.push(
        state ? state.path : '/cliente-agenda',
        state && state.state,
      ),
    );

  const handleSalonSubmit = () =>
    postRequest('/auth/salon', values).then(() =>
      history.push('/salao-agenda'),
    );

  return (
    <div>
      <Topbar title="Entrar agora" back />
      <div className={classes.root}>
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
          id="user"
          label="Usuario"
          fullWidth
          variant="outlined"
          className={classes.input}
          value={values.user}
          onChange={handleChange('user')}
          margin="normal"
        />
        <TextField
          id="pass"
          label="Senha"
          fullWidth
          variant="outlined"
          className={classes.input}
          value={values.pass}
          type="password"
          onChange={handleChange('pass')}
          margin="normal"
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          onClick={salon ? handleSalonSubmit : handleClientSubmit}
        >
          Entrar
        </Button>
      </div>
    </div>
  );
};

export default withStyles(styles)(withRouter(Login));
