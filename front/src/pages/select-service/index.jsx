import React from 'react';
import useSalonData from '../../hooks/use-salon-data';
import CircularProgress from '@material-ui/core/CircularProgress';
import Topbar from '../../components/topbar';
import Services from '../profile/services';

const SelectService = ({ history, match }) => {
  const salonId = match.params.id;
  const data = useSalonData(salonId);

  const handleServiceClick = service =>
    history.push(`/selecionar-data/${salonId}`, { service });

  const { salon, loading } = data;
  if (loading) {
    return <CircularProgress />;
  }

  return (
    <div>
      <Topbar title="Escolha o serviço" back />
      <Services handleClick={handleServiceClick} fullProfile salon={salon} />
    </div>
  );
};

export default SelectService;
