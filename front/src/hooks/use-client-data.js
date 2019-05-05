import React from 'react';
import { useCookies } from 'react-cookie';

import { postRequest } from '../fetches';

const useClientData = () => {
  const [cookies] = useCookies(['auth']);
  const { auth } = cookies;
  const [data, setData] = React.useState({ loading: true, client: {} });

  React.useEffect(() => {
    postRequest('/find/users', { query: { _id: auth } }).then(u => {
      setData({ loading: false, client: u[0] });
    });
  }, []);

  return data;
};

export default useClientData;
