import React from 'react';
import { postRequest } from '../fetches';

const useScheduleData = query => {
  const [data, setData] = React.useState({
    loading: true,
    schedule: {},
  });

  const callApi = async () => {
    if (query) {
      const data = await postRequest('/find/schedules', {
        query,
      });
      setData({ loading: false, schedule: data });
    } else {
      const data = await postRequest('/find/schedules');
      setData({ loading: false, schedule: data });
    }
  };

  React.useEffect(() => {
    callApi();
  }, []);
  return data;
};

export default useScheduleData;
