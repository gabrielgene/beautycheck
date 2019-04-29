import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { sortedUniqBy } from 'lodash';
import List from '@material-ui/core/List';
import DomainIcon from '@material-ui/icons/Domain';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withRouter } from 'react-router-dom';

import Topbar from '../../components/topbar';
import CardItem from '../../components/card-item';
import useScheduleData from '../../hooks/use-schedule-data';
import { useCookies } from 'react-cookie';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2,
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing.unit * 6,
  },
  empty: {
    textAlign: 'center',
    padding: theme.spacing.unit * 3,
  },
});

const MySalons = ({ classes, history }) => {
  const [cookies] = useCookies(['auth']);
  const data = useScheduleData({ userId: cookies.auth });

  const { loading, schedule } = data;
  const uniqSchedule = sortedUniqBy(schedule, s => s.salonId);
  if (loading) {
    return (
      <div>
        <Topbar title="Meus Salões" />
        <div className={classes.loading}>
          <CircularProgress />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Topbar title="Meus Salões" />
      <div className={classes.root}>
        <List>
          {uniqSchedule.length === 0 ? (
            <Typography className={classes.empty} variant="h6" gutterBottom>
              Você ainda não possui um histórico de salões
            </Typography>
          ) : (
            uniqSchedule.map(s => (
              <CardItem
                key={s._id}
                avatar={<DomainIcon />}
                primary={s.salonName}
                secondary={s.salonPhone}
                handleClick={() => history.push(`/salao/${s.salonId}`)}
              />
            ))
          )}
        </List>
      </div>
    </div>
  );
};

export default withStyles(styles)(withRouter(MySalons));
