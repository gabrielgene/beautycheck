import React from 'react';
import Topbar from '../../components/topbar';
import Services from '../profile/services';

const ServiceRequest = ({ history }) => {
  const handleServiceClick = () => history.push('/solicitar-agenda');
  return (
    <div>
      <Topbar title="Escolha o serviço" back />
      <Services handleClick={handleServiceClick} />
    </div>
  );
};

export default ServiceRequest;
