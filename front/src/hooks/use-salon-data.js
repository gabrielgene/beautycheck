import React from 'react';
import { postRequest } from '../fetches';

const useSalonData = id => {
  const [data, setData] = React.useState({ loading: true, salon: {} });

  React.useEffect(() => {
    postRequest('/find/salons', { query: { _id: id } }).then(s =>
      setData({ loading: false, salon: s[0] }),
    );
  }, []);
  return data;
};

export default useSalonData;
