import React, { useState, useCallback, useRef } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DateIcon from '@material-ui/icons/DateRange';
import TimeIcon from '@material-ui/icons/AccessTime';
import AddIcon from '@material-ui/icons/Add';
import List from '@material-ui/core/List';
import moment from 'moment';
import 'moment/locale/pt';
import MomentUtils from '@date-io/moment';
import { withStyles } from '@material-ui/core';
import { InlineDatePicker, MuiPickersUtilsProvider } from 'material-ui-pickers';

import CardItem from '../../components/card-item';

moment.locale('pt');

const CalendarRequest = props => {
  const { classes, history } = props;
  const pickerRef = useRef(null);
  const [selectedDate, handleDateChange] = useState(moment());

  const openPicker = useCallback(
    e => {
      if (pickerRef.current) {
        pickerRef.current.open(e);
      }
    },
    [pickerRef.current],
  );

  return (
    <div className={classes.container}>
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
            <Typography
              variant="h6"
              color="inherit"
              onClick={openPicker}
              className={classes.grow}
            >
              {moment(selectedDate).format('LL')}
            </Typography>
            <IconButton onClick={openPicker} color="inherit">
              <DateIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>

      <div className="picker">
        <MuiPickersUtilsProvider
          utils={MomentUtils}
          locale="pt"
          moment={moment}
        >
          <InlineDatePicker
            clearable
            label="Open me from button"
            format="LL"
            value={selectedDate}
            onChange={handleDateChange}
            ref={pickerRef}
            style={{ display: 'none' }}
          />
        </MuiPickersUtilsProvider>
      </div>
      <div>
        <List className={classes.list}>
          <CardItem
            primary="Horário Ocupado"
            secondary="10:00 ~ 11:00"
            avatar={<TimeIcon />}
          />
          <CardItem
            settings
            primary="Agendar nesse horário"
            secondary="11:00 ~ 11:30"
            avatar={<AddIcon />}
            handleClick={() => history.push('/cliente-agenda')}
          />
          <CardItem
            primary="Horário Ocupado"
            secondary="13:00 ~ 14:00"
            avatar={<TimeIcon />}
          />
        </List>
      </div>
    </div>
  );
};

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
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
  },
});

export default withStyles(styles)(CalendarRequest);
