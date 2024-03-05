import * as bcrypt from 'bcrypt';
import { IComparePasswordOptions } from './interfaces';

export const comparePassword = (options: IComparePasswordOptions) => bcrypt.compareSync(options.password, options.hashPassword);
