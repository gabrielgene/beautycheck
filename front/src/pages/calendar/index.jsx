import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';

import API from '../../api.js';
import { getCalendar } from '../../api.js';
import Topbar from '../../components/topbar';
import ScheduleItem from '../../components/schedule-item';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 'calc(100vh - 120px)',
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
  empty: {
    textAlign: 'center',
    padding: theme.spacing.unit * 3,
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing.unit * 6,
  },
});

const Calendar = props => {
  const { classes, history, client } = props;
  const [values, setValues] = React.useState({ loading: true, calendar: [] });
  const { loading, calendar } = values;

  const callApi = async () => {
    await API.get('/schedule');
    const calendar = getCalendar();
    setValues({ loading: false, calendar });
  };

  React.useEffect(() => {
    callApi();
  }, []);

  if (loading) {
    return (
      <div>
        <Topbar title="Agenda" settings={!client} />
        <div className={classes.loading}>
          <CircularProgress />
        </div>
      </div>
    );
  }
  return (
    <div>
      <Topbar title="Agenda" settings={!client} />
      <List className={classes.root} subheader={<li />}>
        {calendar.length === 0 ? (
          <Typography className={classes.empty} variant="h6" gutterBottom>
            Você ainda não possui agendamentos
          </Typography>
        ) : (
          calendar.map(c => (
            <li key={c.date} className={classes.listSection}>
              <ul className={classes.ul}>
                <ListSubheader color="primary" style={{ textAlign: 'center' }}>
                  {c.date}
                </ListSubheader>
                <Divider />
                {c.schedules.map(s => (
                  <div key={s.id}>
                    <ScheduleItem
                      handleClick={() => history.push('/agendamento/123')}
                      avatar={s.service.substring(0, 2).toUpperCase()}
                      primary={`${s.service} - ${s.price}`}
                      secondary={`${s.duration} - ${s.client}`}
                    />
                    <Divider />
                  </div>
                ))}
              </ul>
            </li>
          ))
        )}
      </List>
    </div>
  );
};

export default withStyles(styles)(withRouter(Calendar));
