import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

import API from '../../api.js';
import Topbar from '../../components/topbar';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 3,
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

const Register = ({ classes, history, edit }) => {
  const [values, setValues] = React.useState({
    name: '',
    phone: '',
    user: '',
    pass: '',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = async () => {
    const response = await API.post('/user', values);
    if (response) {
      history.push('/cliente-agenda');
    }
  };

  return (
    <div>
      <Topbar title="Criar conta" back={!edit} />
      <div className={classes.root}>
        <TextField
          id="name"
          label="Nome"
          fullWidth
          className={classes.input}
          variant="outlined"
          placeholder="Ex; Gabriel"
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          value={values.name}
          onChange={handleChange('name')}
        />
        <TextField
          id="phone"
          label="Telefone"
          fullWidth
          variant="outlined"
          className={classes.input}
          placeholder="Ex: (71)99999-9999"
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          value={values.phone}
          onChange={handleChange('phone')}
        />
        <TextField
          id="user"
          label="Usuário"
          fullWidth
          variant="outlined"
          className={classes.input}
          placeholder="Ex: usuario"
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          value={values.user}
          onChange={handleChange('user')}
        />
        <TextField
          id="pass"
          label="Senha"
          fullWidth
          variant="outlined"
          className={classes.input}
          placeholder="***********"
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          type="password"
          value={values.pass}
          onChange={handleChange('pass')}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          onClick={handleSubmit}
        >
          Registrar
        </Button>
      </div>
    </div>
  );
};

export default withStyles(styles)(withRouter(Register));
