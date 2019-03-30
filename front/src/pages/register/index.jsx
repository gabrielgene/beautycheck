import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { withCookies } from 'react-cookie';

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

const Register = ({ classes, history, edit, cookies }) => {
  const [values, setValues] = React.useState({
    name: '',
    phone: '',
    user: '',
    pass: '',
    change: false,
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value, change: true });
  };

  const handleSubmit = async () => {
    const response = await API.post('/create/users', values);
    if (response) {
      await API.post('/auth/user', { user: values.user, pass: values.pass });
      history.push('/cliente-agenda');
    }
  };

  const handleEdit = async () => {
    const id = cookies.get('auth');
    await API.put(`/update/users/${id}`, values);
    setValues({ ...values, change: false });
  };

  React.useEffect(() => {
    if (edit) {
      const id = cookies.get('auth');
      API.post('/find/users', { query: { _id: id } }).then(u => {
        const { name, phone, user } = u.data[0];
        setValues({ ...values, name, phone, user });
      });
    }
  }, []);

  return (
    <div>
      <Topbar title={edit ? 'Editar perfil' : 'Criar conta'} back={!edit} />
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
        {!edit && (
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
        )}
        <Button
          fullWidth
          variant="contained"
          color="primary"
          size="large"
          disabled={edit && !values.change}
          className={classes.button}
          onClick={edit ? handleEdit : handleSubmit}
        >
          {edit ? 'Salvar Alterações' : 'Registrar'}
        </Button>
      </div>
    </div>
  );
};

export default withStyles(styles)(withRouter(withCookies(Register)));
