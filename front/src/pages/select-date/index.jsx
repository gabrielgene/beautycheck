import React, { useState, useCallback, useRef } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DateIcon from '@material-ui/icons/DateRange';
import AddIcon from '@material-ui/icons/Add';
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';
import moment from 'moment';
import MomentUtils from '@date-io/moment';
import { withStyles } from '@material-ui/core';
import { InlineDatePicker, MuiPickersUtilsProvider } from 'material-ui-pickers';
import { useCookies } from 'react-cookie';
import 'moment/locale/pt';

import CardItem from '../../components/card-item';
import API from '../../api';

moment.locale('pt');

const doTime = input => {
  const strInput = input.toString();
  const inputs = strInput.split('.');
  const minutes = inputs[1];
  return `${inputs[0]}:${minutes === '5' ? '30' : '00'}`;
};

const mapHours = (array, free) => {
  return (
    array &&
    array.map(h => ({
      start: h[0],
      end: h[1],
      free: free,
    }))
  );
};

const SelectDate = props => {
  const {
    classes,
    history,
    match,
    location: {
      state: { service },
    },
  } = props;

  const salonId = match.params.id;
  const [data, setData] = React.useState({
    loading: true,
    value: {},
  });

  const fetchData = () => {
    API.post('find-spaces', {
      salon: { _id: salonId },
      myService: service,
    }).then(s => setData({ value: s.data, loading: false }));
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const handleChange = e => {
    setData({ value: {}, loading: true });
    handleDateChange(e);
    fetchData();
  };

  const { value, loading } = data;

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

  const [cookies] = useCookies(['auth']);

  const handleSchedule = value => {
    API.post('create-schedule', {
      status: 'ACTIVE',
      time: [value.start, value.end],
      salonId,
      userId: cookies.auth,
      service,
      date: new Intl.DateTimeFormat('pt-BR').format(new Date()),
    }).then(() => history.push('/cliente-agenda'));
  };

  const freeHours = mapHours(value.hours, true);
  const busyHours = mapHours(value.services, false);
  const breakHours = mapHours(value.breaks, false);

  const enableDays =
    freeHours && freeHours.concat(busyHours).concat(breakHours);

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
            onChange={handleChange}
            ref={pickerRef}
            style={{ display: 'none' }}
          />
        </MuiPickersUtilsProvider>
      </div>
      <div>
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
            {enableDays
              .sort((a, b) => a.start - b.start)
              .map(day => (
                <CardItem
                  key={day.start}
                  settings
                  settings={day.free}
                  primary={
                    day.free ? 'Agendar nesse horário' : 'Horário ocupado'
                  }
                  secondary={`${doTime(day.start)} - ${doTime(day.end)}`}
                  avatar={<AddIcon />}
                  handleClick={day.free ? () => handleSchedule(day) : undefined}
                />
              ))}
          </List>
        )}
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

export default withStyles(styles)(SelectDate);
