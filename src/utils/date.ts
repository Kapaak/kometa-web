import dayjs from 'dayjs';
import 'dayjs/locale/cs';

dayjs.locale('cs');

export const convertDateToString = (date?: Date) => {
  return date && dayjs(date).format('DD. MMMM YYYY');
};
