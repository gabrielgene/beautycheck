import React from 'react';
import Typography from '@material-ui/core/Typography';

const Hour = props => {
  const { day, time } = props;
  const formatedTime = time => {
    if (time) {
      return `${time[0]}:00 - ${time[1]}:00`;
    }
    return 'Fechado';
  };
  return <Typography>{`${day}: ${formatedTime(time)}`}</Typography>;
};

export default Hour;
