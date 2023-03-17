import { AppError } from './app.error';
import { AppErrorCode } from '../AppErrorCode.enum';

export class NotFoundError extends AppError {
  constructor() {
    super({ code: AppErrorCode.NotFoundError, message: 'NotFoundError' });
  }
}
