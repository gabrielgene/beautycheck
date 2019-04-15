import React from 'react';
import API from '../api.js';

const useSalonData = id => {
  const [data, setData] = React.useState({
    loading: true,
    salon: {},
  });

  React.useEffect(() => {
    API.post(`find/salons`, { _id: id })
      .then(s => setData({ loading: false, salon: s.data[0] }))
      .catch(() => setData({ error: true }));
  }, []);
  return data;
};

export default useSalonData;
