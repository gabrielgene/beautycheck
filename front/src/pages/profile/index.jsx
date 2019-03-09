import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { withRouter } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Fab from '@material-ui/core/Fab';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ReplyIcon from '@material-ui/icons/Reply';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DateIcon from '@material-ui/icons/DateRange';

import withStyles from './styles.js';
import Info from './info';
import Services from './services';

const Profile = ({ classes, history, fullProfile }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => setValue(newValue);

  const handleClick = () => history.push('/solicitar-servico');
  const handleServiceClick = () => history.push('/solicitar-agenda');

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          {fullProfile && (
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={() => history.goBack()}
            >
              <ArrowBackIcon />
            </IconButton>
          )}
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Genê Barber Shop
          </Typography>
        </Toolbar>
        <Tabs variant="fullWidth" value={value} onChange={handleChange}>
          <Tab label="Informações" />
          <Tab label="Serviços" />
        </Tabs>
      </AppBar>
      {value === 0 && <Info fullProfile={fullProfile} />}
      {value === 1 && <Services handleClick={handleServiceClick} />}
      <div className={fullProfile ? classes.fullProfileFab : classes.fab}>
        <Fab
          aria-label="Share"
          color="secondary"
          onClick={fullProfile && handleClick}
        >
          {fullProfile ? (
            <DateIcon className={classes.replyIcon} />
          ) : (
            <ReplyIcon className={classes.replyIcon} />
          )}
        </Fab>
      </div>
    </div>
  );
};

export default withStyles(withRouter(Profile));
