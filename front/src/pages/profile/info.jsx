import React from 'react';
import PlaceIcon from '@material-ui/icons/Place';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import withStyles from './styles.js';
import Hour from './hour';
import CardItem from '../../components/card-item';
import src from '../../assets/barber.jpeg';

const Info = ({ classes, salon }) => {
  return (
    <div>
      <img className={classes.img} src={src} alt="Barber" />
      <div className={classes.list}>
        <CardItem primary={salon.location} avatar={<PlaceIcon />} />
        <div className={classes.accordion}>
          <ExpansionPanel defaultExpanded>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>
                Horário de Funcionamento
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div>
                <Hour day="Segunda-feira" time={salon.workingHours.monday} />
                <Hour day="Terça-feira" time={salon.workingHours.tuesday} />
                <Hour day="Quarta-feira" time={salon.workingHours.wednesday} />
                <Hour day="Quinta-feira" time={salon.workingHours.thursday} />
                <Hour day="Sexta-feira" time={salon.workingHours.friday} />
                <Hour day="Sabado" time={salon.workingHours.saturday} />
                <Hour day="Domingo" time={salon.workingHours.sunday} />
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </div>
    </div>
  );
};

export default withStyles(Info);
