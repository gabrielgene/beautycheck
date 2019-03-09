import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ListIcon from '@material-ui/icons/FormatListBulleted';
import DomainIcon from '@material-ui/icons/Domain';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

import Calendar from '../calendar';
import Profile from '../profile';

const styles = theme => ({
  root: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    boxShadow: '0 -4px 2px -2px rgba(0,0,0,0.05)',
  },
});

const Navigation = ({ classes, page, history }) => {
  const [value, setValue] = React.useState(null);
  React.useEffect(() => {
    setValue(page);
  }, []);

  return (
    <div>
      {value === 0 && <Calendar />}
      {value === 1 && <Profile />}
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          if (newValue === 0) {
            history.push('/salao-agenda');
          } else {
            history.push('/salao-perfil');
          }
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Agenda" icon={<ListIcon />} />
        <BottomNavigationAction label="Perfil" icon={<DomainIcon />} />
      </BottomNavigation>
    </div>
  );
};

export default withStyles(styles)(withRouter(Navigation));
