import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import CardItem from '../../components/card-item';
import useScheduleData from '../../hooks/use-schedule-data';
import API from '../../api';

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
  const {
    classes,
    history,
    match: { params },
  } = props;
  const { id } = params;

  const data = useScheduleData({ _id: id, status: 'ACTIVE' });
  const handleCancelCalendarItem = () => {
    API.put('/update/schedules', {
      id,
      data: { status: 'CANCELED' },
    }).then(() => history.push('/cliente-agenda'));
  };

  const { loading } = data;
  const schedule = data.schedule[0];
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
      {loading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: 48,
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <List className={classes.list}>
          <CardItem primary={schedule.service.name} avatar="CC" />
          <CardItem
            primary={`Salão: ${schedule.salonName}`}
            avatar={<PersonIcon />}
          />
          <CardItem
            primary={`Duração: ${schedule.time[0]}:00 ~ ${schedule.time[1]}:00`}
            avatar={<QueryBuilderIcon />}
          />
          <CardItem
            primary={`Telefone: ${schedule.salonPhone}`}
            avatar={<PhoneIcon />}
          />
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={handleCancelCalendarItem}
          >
            Cancelar Agendamento
          </Button>
        </List>
      )}
    </div>
  );
};

export default withStyles(styles)(CalendarItem);
