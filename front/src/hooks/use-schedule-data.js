import React from 'react';
import API from '../api';

const useScheduleData = query => {
  const [data, setData] = React.useState({
    loading: true,
    schedule: {},
  });

  const callApi = async () => {
    if (query) {
      const data = await API.post('/find/schedules', {
        query,
      });
      setData({ loading: false, schedule: data.data });
    } else {
      const data = await API.post('/find/schedules');
      setData({ loading: false, schedule: data.data });
    }
  };

  React.useEffect(() => {
    callApi();
  }, []);
  return data;
};

export default useScheduleData;
