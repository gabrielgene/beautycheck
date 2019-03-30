import React from 'react';
import { useCookies } from 'react-cookie';

import API from '../api.js';

const useClientData = () => {
  const [cookies] = useCookies(['auth']);
  const { auth } = cookies;
  const [data, setData] = React.useState({ loading: true, client: {} });

  React.useEffect(() => {
    API.post('/find/users', { query: { _id: auth } }).then(u => {
      setData({ loading: false, client: u.data[0] });
    });
  }, []);

  return data;
};

export default useClientData;
