import React from 'react';
import Topbar from '../../components/topbar';
import Services from '../profile/services';
import API from '../../api.js';

const ServiceRequest = ({ history, match }) => {
  const [setData] = React.useState({ loading: true, salon: {} });
  const callApi = async () => {
    const { id } = match.params;
    const result = await API.get(`/salon/${id}`);
    setData({ loading: false, salon: result.data });
  };
  React.useEffect(() => {
    callApi();
  }, []);
  const handleServiceClick = () => history.push('/solicitar-agenda');
  return (
    <div>
      <Topbar title="Escolha o serviço" back />
      <Services handleClick={handleServiceClick} />
    </div>
  );
};

export default ServiceRequest;
