import React from 'react';
import API from '../api';

const useSalonData = id => {
  const [data, setData] = React.useState({ loading: true, salon: {} });

  React.useEffect(() => {
    API.post('find/salons', { query: { _id: id } }).then(s =>
      setData({ loading: false, salon: s.data[0] }),
    );
  }, []);
  return data;
};

export default useSalonData;
