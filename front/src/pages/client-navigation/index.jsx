import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DateIcon from '@material-ui/icons/DateRange';
import PersonIcon from '@material-ui/icons/Person';
import DomainIcon from '@material-ui/icons/Domain';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

import Calendar from '../calendar';
import Profile from '../register';
import MySalons from '../my-salons';

const styles = theme => ({
  root: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    boxShadow: '0 -4px 2px -2px rgba(0,0,0,0.05)',
  },
});

const Navigation = ({ classes, history, page }) => {
  const [value, setValue] = React.useState(null);
  React.useEffect(() => {
    setValue(page);
  }, []);

  return (
    <div>
      {value === 0 && <Calendar isClientCalendar />}
      {value === 1 && <Profile edit />}
      {value === 2 && <MySalons />}
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          if (newValue === 0) {
            history.push('/cliente-agenda');
          } else if (newValue === 1) {
            history.push('/cliente-perfil');
          } else {
            history.push('/cliente-saloes');
          }
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Agendamentos" icon={<DateIcon />} />
        <BottomNavigationAction label="Perfil" icon={<PersonIcon />} />
        <BottomNavigationAction label="Meus Salões" icon={<DomainIcon />} />
      </BottomNavigation>
    </div>
  );
};

export default withStyles(styles)(withRouter(Navigation));
