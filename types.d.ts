declare module '@nestjs/common' {
  class Logger {
    static warn(str: string);
  }
}

declare module '@nmxjs/types' {
  type FunctionType = any;
  type DecoratorHandler = any;
  type EntityDto = any;
  enum StartModeEnum {
    DEV = 'DEV',
    WATCH = 'WATCH',
    NATIVE = 'NATIVE',
  }
  enum EnvironmentEnum {
    DEVELOPMENT = 'DEVELOPMENT',
  }
}
