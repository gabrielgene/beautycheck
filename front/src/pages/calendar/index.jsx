import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import { useCookies } from 'react-cookie';
import { groupBy } from 'lodash';

import useScheduleData from '../../hooks/use-schedule-data';
import Topbar from '../../components/topbar';
import ScheduleItem from '../../components/schedule-item';

const styles = theme => ({
  root: {
    marginTop: 8,
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
  const [cookies] = useCookies(['auth']);

  const data = useScheduleData({
    [client ? 'userId' : 'salonId']: cookies.auth,
    status: 'ACTIVE',
  });

  const { loading, schedule } = data;
  const groupSchedule = groupBy(schedule, 'date');
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
        {schedule.length === 0 ? (
          <Typography className={classes.empty} variant="h6" gutterBottom>
            Você ainda não possui agendamentos
          </Typography>
        ) : (
          Object.keys(groupSchedule).map(group => (
            <li key={group} className={classes.listSection}>
              <ul className={classes.ul}>
                <ListSubheader color="primary" style={{ textAlign: 'center' }}>
                  {group}
                </ListSubheader>
                <Divider />
                {groupSchedule[group]
                  .sort((a, b) => a.time[0] - b.time[0])
                  .map(g => (
                    <div key={g._id}>
                      <ScheduleItem
                        handleClick={() =>
                          history.push(`/agendamento/${g._id}`)
                        }
                        avatar={g.service.name.substring(0, 2).toUpperCase()}
                        primary={`${g.service.name} - R$${g.service.price},00`}
                        secondary={`${g.time[0]}:00 ~ ${g.time[1]}:00 - ${
                          g.salonName
                        }`}
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
