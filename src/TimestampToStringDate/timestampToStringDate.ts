import * as moment from 'moment';

// @ts-ignore
const momentFn: any = moment.default ? moment.default : moment;

export const timestampToStringDate = (timestamp: number) => momentFn(timestamp).format('YYYY-MM-DD HH:mm:SS');
