const handleHttpStatus = res => {
  if (res.status >= 200 && res.status < 300) {
    return res.json();
  }
  throw res;
};

const createErrorHandler = defaultValue => res => {
  console.error('request failed', res);
  return defaultValue;
};

export const postRequest = (url, data = {}) => {
  return fetch(url, {
    // credentials: 'same-origin',
    mode: 'cors',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(handleHttpStatus)
    .catch((e, x) => (console.log(e, x), createErrorHandler({})(e)));
};

export const putRequest = (url, data = {}) => {
  return fetch(url, {
    // credentials: 'same-origin',
    mode: 'cors',
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(handleHttpStatus)
    .catch(createErrorHandler({}));
};
