export const buildTime = time => {
  const fullTime = String(time).split('.');
  const hourTime = fullTime[0].length === 1 ? `0${fullTime[0]}` : fullTime[0];
  const minuteTime = fullTime.length === 1 ? '00' : '30';
  return `${hourTime}:${minuteTime}`;
};
