import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import DomainIcon from '@material-ui/icons/Domain';
import { withRouter } from 'react-router-dom';

import Topbar from '../../components/topbar';
import CardItem from '../../components/card-item';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2,
  },
});

const MySalons = ({ classes, history }) => (
  <div>
    <Topbar title="Meus Salões" />
    <div className={classes.root}>
      <List>
        <CardItem
          avatar={<DomainIcon />}
          primary="Genê Barber Shop"
          secondary="Engenho velho de brotas, Rua 13"
          handleClick={() => history.push('/salao/gene')}
        />
      </List>
    </div>
  </div>
);

export default withStyles(styles)(withRouter(MySalons));
