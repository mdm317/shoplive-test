import dayjs from 'dayjs';

export const getDateFormat = (time: number) => {
  return dayjs(time).format('YYYY.MM.DD');
};
