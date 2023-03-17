import { AppError } from './app.error';
import { AppErrorCode } from '../AppErrorCode.enum';

export class InternalServerError extends AppError {
  constructor() {
    super({
      code: AppErrorCode.InternalServerError,
      message: 'InternalServerError',
    });
  }
}
