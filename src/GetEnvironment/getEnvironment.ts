import { EnvironmentEnum } from '@nmxjs/types';

export const getEnvironment = () => <EnvironmentEnum>process.env.NODE_ENV || EnvironmentEnum.DEVELOPMENT;
