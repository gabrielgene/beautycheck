import React from 'react';
import API from '../api.js';

const useSalonData = id => {
  const [data, setData] = React.useState({ loading: true, salon: {} });

  const callApi = async () => {
    const result = await API.get(`/salon/${id}`);
    setData({ loading: false, salon: result.data });
  };

  React.useEffect(() => {
    callApi();
  }, []);
  return data;
};

export default useSalonData;
