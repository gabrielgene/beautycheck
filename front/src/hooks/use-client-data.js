import React from 'react';
import API from '../api.js';

const useClientData = id => {
  const [data, setData] = React.useState({ loading: true, client: {} });

  React.useEffect(() => {
    API.get(`/user/${id}`).then(u => {
      setData({ loading: false, client: u.data });
    });
  }, []);

  return data;
};

export default useClientData;
