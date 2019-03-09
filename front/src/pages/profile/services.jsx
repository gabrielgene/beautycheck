import React from 'react';
import List from '@material-ui/core/List';
import { withRouter } from 'react-router-dom';

import CardItem from '../../components/card-item';
import withStyles from './styles.js';

const Services = ({ classes, history, handleClick }) => {
  return (
    <div className={classes.list}>
      <List>
        <CardItem
          avatar="CC"
          primary="Corte de Cabelo - R$30,00"
          secondary="10:00 ~ 11:00"
          handleClick={handleClick}
        />
      </List>
    </div>
  );
};

export default withStyles(withRouter(Services));
