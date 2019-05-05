import React from 'react';
import List from '@material-ui/core/List';
import { withRouter } from 'react-router-dom';

import CardItem from '../../components/card-item';
import withStyles from './styles.js';

export const buildAvatar = s => {
  return s.substring(0, 2).toUpperCase();
};

export const buildTime = minutes => {
  const sign = minutes < 0 ? '-' : '';
  const min = Math.floor(Math.abs(minutes));
  const sec = Math.floor((Math.abs(minutes) * 60) % 60);
  return sign + (min < 10 ? '0' : '') + min + ':' + (sec < 10 ? '0' : '') + sec;
};

const Services = ({ classes, fullProfile, handleClick, salon }) => {
  const { myServices } = salon;

  return (
    <div className={classes.list}>
      <List>
        {myServices.map(s => (
          <CardItem
            key={s.name}
            {...s}
            avatar={buildAvatar(s.name)}
            primary={`${s.name} - R$${s.price},00`}
            secondary={`Duração: ${buildTime(s.duration)}`}
            handleClick={fullProfile ? () => handleClick(s) : undefined}
          />
        ))}
      </List>
    </div>
  );
};

export default withStyles(withRouter(Services));
