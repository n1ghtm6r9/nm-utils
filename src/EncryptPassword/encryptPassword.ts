import * as bcrypt from 'bcrypt';

export const encryptPassword = (password: string) => bcrypt.hashSync(password, 10);
