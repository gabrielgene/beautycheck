import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';

import Topbar from '../../components/topbar';
import ScheduleItem from '../../components/schedule-item';
import { getCalendar } from '../../service';

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
});

class Calendar extends React.Component {
  state = {
    calendar: [],
  };

  componentDidMount() {
    // getCalendar().then(calendar => this.setState({ calendar, loading: false }));
    this.setState({ calendar: getCalendar() });
  }

  render() {
    const { classes, history } = this.props;
    const { calendar } = this.state;

    return (
      <div>
        <Topbar title="Agenda" settings />
        <List className={classes.root} subheader={<li />}>
          {calendar.map(c => (
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
          ))}
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(Calendar));
