import * as moment from 'moment';
import { ITimestampToStringDateOptions } from './interfaces';

// @ts-ignore
const momentFn: any = moment.default ? moment.default : moment;

export const timestampToStringDate = ({ timestamp }: ITimestampToStringDateOptions) => momentFn(timestamp).format('YYYY-MM-DD HH:mm:SS');
