import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import barberSVG from '../../assets/barber.svg';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4,
  },
  imgWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  img: {
    width: theme.spacing.unit * 40,
    height: theme.spacing.unit * 25,
  },
  button: {
    marginTop: theme.spacing.unit * 3,
  },
  title: {
    fontWeight: 500,
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 2,
  },
  subtitle: {
    marginTop: theme.spacing.unit * 4,
    cursor: 'pointer',
  },
});

const Landing = ({ classes, history }) => (
  <div className={classes.root}>
    <div className={classes.imgWrapper}>
      <img className={classes.img} src={barberSVG} alt="baberimg" />
    </div>
    <Typography
      className={classes.title}
      variant="h5"
      gutterBottom
      color="primary"
      align="center"
    >
      Beautycheck
    </Typography>
    <Button
      fullWidth
      variant="contained"
      color="primary"
      size="large"
      className={classes.button}
      onClick={() => history.push('/cliente-entrar')}
    >
      Entrar Agora
    </Button>
    <Button
      fullWidth
      variant="contained"
      className={classes.button}
      size="large"
      onClick={() => history.push('/cliente-registrar')}
    >
      Criar Conta
    </Button>
    <Button
      fullWidth
      className={classes.button}
      size="large"
      color="secondary"
      onClick={() => history.push('/salao-entrar')}
    >
      Tenho um estabelecimento
    </Button>
  </div>
);

export default withStyles(styles)(Landing);
