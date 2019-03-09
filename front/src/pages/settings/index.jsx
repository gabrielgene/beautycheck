import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ExitIcon from '@material-ui/icons/ExitToApp';
import PhoneIcon from '@material-ui/icons/Phone';
import List from '@material-ui/core/List';

import CardItem from '../../components/card-item';
import Topbar from '../../components/topbar';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2,
  },
});

const Settings = ({ classes, history }) => (
  <div>
    <Topbar title="Configurações" back />
    <List className={classes.root}>
      <CardItem
        primary="Sair"
        avatar={<ExitIcon />}
        settings
        handleClick={() => history.push('/')}
      />
      <CardItem settings primary="Entrar em contato" avatar={<PhoneIcon />} />
    </List>
  </div>
);

export default withStyles(styles)(Settings);
