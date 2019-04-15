import React from 'react';
import List from '@material-ui/core/List';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withRouter } from 'react-router-dom';

import CardItem from '../../components/card-item';
import withStyles from './styles.js';
import { buildAvatar, buildTime } from '../../utils/string';
import useSalonData from '../../hooks/use-salon-data';

const Services = ({ classes, fullProfile, handleClick, salon }) => {
  const { myServices } = salon;

  return (
    <div className={classes.list}>
      <List>
        {myServices.map(s => (
          <CardItem
            key={s.name}
            avatar={buildAvatar(s.name)}
            primary={`${s.name} - R$${s.price},00`}
            secondary={`Duração: ${buildTime(s.duration)}`}
            handleClick={fullProfile && handleClick}
          />
        ))}
      </List>
    </div>
  );
};

export default withStyles(withRouter(Services));
