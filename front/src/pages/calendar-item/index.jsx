import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import CardItem from '../../components/card-item';

const styles = theme => ({
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
  list: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    marginTop: theme.spacing.unit,
  },
});

const CalendarItem = props => {
  const { classes, history } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={() => history.goBack()}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Agendamento
          </Typography>
        </Toolbar>
      </AppBar>
      <List className={classes.list}>
        <CardItem primary="Corte de Cabelo" avatar="CC" />
        <CardItem primary="Cliente: Gabriel Genê" avatar={<PersonIcon />} />
        <CardItem
          primary="Duração: 10:00 ~ 11:00"
          avatar={<QueryBuilderIcon />}
        />
        <CardItem primary="Telefone: (71) 99222-9059" avatar={<PhoneIcon />} />
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={() => history.goBack()}
        >
          Cancelar Agendamento
        </Button>
      </List>
    </div>
  );
};

export default withStyles(styles)(CalendarItem);
