import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import ChevronIcon from '@material-ui/icons/ChevronRight';

const styles = theme => ({
  item: {
    marginBottom: theme.spacing.unit * 3,
    cursor: 'pointer',
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
  settings: {
    backgroundColor: theme.palette.secondary.main,
  },
});

const ScheduleItem = ({
  classes,
  avatar,
  handleClick,
  primary,
  secondary,
  settings,
}) => (
  <ListItem onClick={handleClick}>
    <Avatar
      color="primary"
      className={!!settings ? classes.settings : classes.avatar}
    >
      {avatar}
    </Avatar>
    <ListItemText primary={primary} secondary={secondary} />
    {!!handleClick && (
      <ListItemSecondaryAction>
        <IconButton aria-label="Arrow">
          <ChevronIcon />
        </IconButton>
      </ListItemSecondaryAction>
    )}
  </ListItem>
);

export default withStyles(styles)(ScheduleItem);
