import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import defaultTheme from './theme';
import * as serviceWorker from './serviceWorker';
import './index.css';

import Landing from './pages/landing';
import Login from './pages/login';
import Register from './pages/register';
import SalonNavigation from './pages/salon-navigation';
import Schedule from './pages/schedule';
import ClientNavigation from './pages/client-navigation';
import Profile from './pages/profile';
import SelectService from './pages/select-service';
import SelectDate from './pages/select-date';
import Settings from './pages/settings';

const SalonLogin = () => <Login salon />;
const SalonCalendar = () => <SalonNavigation page={0} />;
const SalonProfile = () => <SalonNavigation page={1} />;
const SalonSchedule = () => <Schedule />;

const ClientLogin = () => <Login />;
const ClientCalendar = () => <ClientNavigation page={0} />;
const ClientProfile = () => <ClientNavigation page={1} />;
const ClientMySalon = () => <ClientNavigation page={2} />;
const ClientRegister = () => <Register />;
const ClientSchedule = () => <Schedule isClient />;

const SalonFullProfile = () => <Profile fullProfile />;

const App = () => (
  <MuiThemeProvider theme={defaultTheme}>
    <Router>
      <div>
        <Route exact path="/" component={Landing} />

        <Route path="/salao-entrar" component={SalonLogin} />
        <Route path="/salao-agenda" component={SalonCalendar} />
        <Route path="/salao-perfil" component={SalonProfile} />
        <Route path="/salao-agendamento/:id" component={SalonSchedule} />

        <Route path="/cliente-entrar" component={ClientLogin} />
        <Route path="/cliente-registrar" component={ClientRegister} />

        <Route path="/cliente-agenda" component={ClientCalendar} />
        <Route path="/cliente-perfil" component={ClientProfile} />
        <Route path="/cliente-saloes" component={ClientMySalon} />
        <Route path="/cliente-agendamento/:id" component={ClientSchedule} />

        <Route exact path="/salao/:id" component={SalonFullProfile} />
        <Route exact path="/selecionar-servico/:id" component={SelectService} />
        <Route exact path="/selecionar-data/:id" component={SelectDate} />

        <Route exact path="/configuracoes" component={Settings} />
      </div>
    </Router>
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
