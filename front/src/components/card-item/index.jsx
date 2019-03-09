import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import ScheduleItem from '../schedule-item';

const styles = theme => ({
  item: {
    marginBottom: theme.spacing.unit * 3,
    cursor: 'pointer',
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
});

const CardItem = props => (
  <Paper elevation={2} className={props.classes.item}>
    <ScheduleItem {...props} />
  </Paper>
);

export default withStyles(styles)(CardItem);
