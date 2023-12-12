import { IGetFullMessageFromErrorOptions } from './interfaces';

export function getFullMessageFromError({ error }: IGetFullMessageFromErrorOptions) {
  let message = `message: ${error.message}`;

  if (error.response?.data) {
    message = `${message}, json: ${JSON.stringify(error.response.data)}`;
  } else if (error.toJSON) {
    message = `${message}, json: ${error.toJSON()}`;
  }

  if (error.code) {
    message = `${message}, code: ${error.code}`;
  }

  if (error.stack) {
    message = `${message}, stack: ${error.stack}`;
  }

  return message;
}
