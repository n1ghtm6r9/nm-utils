import { IDateFormatToViewOptions } from './interfaces';

export function dateFormatToView({ date, showMs }: IDateFormatToViewOptions) {
  const unix = new Date(date).getTime();
  const str = new Date(unix + (new Date().getTimezoneOffset() / -60) * 3600000).toISOString().replace('T', ' ').replace('Z', '');
  const index = str.lastIndexOf('.');
  return !showMs && index !== -1 ? str.slice(0, index) : str;
}
