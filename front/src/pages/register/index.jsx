import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Topbar from '../../components/topbar';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4,
  },
  img: {
    width: theme.spacing.unit * 40,
  },
  input: {
    marginBottom: theme.spacing.unit * 3,
  },
  button: {
    marginTop: theme.spacing.unit * 3,
  },
  title: {
    fontWeight: 500,
  },
});

const Login = ({ classes, history, back }) => (
  <div>
    <Topbar title="Criar conta" back={back} />
    <div className={classes.root}>
      <TextField
        id="login"
        label="Nome"
        fullWidth
        className={classes.input}
        placeholder="Ex; Gabriel"
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />
      <TextField
        id="pass"
        label="Telefone"
        fullWidth
        className={classes.input}
        placeholder="Ex: (71)99999-9999"
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />
      <TextField
        id="pass"
        label="Usuário"
        fullWidth
        className={classes.input}
        placeholder="Ex: usuario"
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
        onClick={() => history.push('/cliente-agenda')}
      >
        Registrar
      </Button>
    </div>
  </div>
);

export default withStyles(styles)(withRouter(Login));
