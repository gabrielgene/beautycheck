import React from 'react';
import PlaceIcon from '@material-ui/icons/Place';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import withStyles from './styles.js';
import CardItem from '../../components/card-item';
import src from '../../assets/barber.jpeg';

const Info = ({ classes }) => (
  <div>
    <img className={classes.img} src={src} alt="Barber" />
    <div className={classes.list}>
      <CardItem primary="Engenho velho de brotas" avatar={<PlaceIcon />} />
      <div className={classes.accordion}>
        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              Horário de Funcionamento
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div>
              <Typography>Seguda-feira: Fechado</Typography>
              <Typography>Terça-feira: 08:00 ~ 18:00</Typography>
              <Typography>Quarta-feira: 08:00 ~ 18:00</Typography>
              <Typography>Quinta-feira: 08:00 ~ 18:00</Typography>
              <Typography>Sexta-feira: 09:00 ~ 17:00</Typography>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </div>
  </div>
);

export default withStyles(Info);
