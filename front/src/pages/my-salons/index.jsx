import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import DomainIcon from '@material-ui/icons/Domain';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withRouter } from 'react-router-dom';
import { withCookies } from 'react-cookie';

import Topbar from '../../components/topbar';
import CardItem from '../../components/card-item';
import useClientData from '../../hooks/use-client-data';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2,
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing.unit * 6,
  },
  empty: {
    textAlign: 'center',
    padding: theme.spacing.unit * 3,
  },
});

const MySalons = ({ classes, history, cookies }) => {
  const { loading, client } = useClientData(cookies.get('auth'));
  const { mySalons } = client;

  if (loading) {
    return (
      <div>
        <Topbar title="Meus Salões" />
        <div className={classes.loading}>
          <CircularProgress />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Topbar title="Meus Salões" />
      <div className={classes.root}>
        <List>
          {mySalons.length === 0 ? (
            <Typography className={classes.empty} variant="h6" gutterBottom>
              Você ainda não possui um histórico de salões
            </Typography>
          ) : (
            mySalons.map(s => (
              <CardItem
                avatar={<DomainIcon />}
                primary={s.name}
                secondary={s.location}
              />
            ))
          )}
        </List>
      </div>
    </div>
  );
};

export default withStyles(styles)(withRouter(withCookies(MySalons)));
