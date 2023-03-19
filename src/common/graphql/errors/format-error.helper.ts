import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { AppErrorCode } from 'src/common/errors/AppErrorCode.enum';
import { AppErrorInput } from 'src/common/errors/interfaces/appError.input';

export function formatError(error: GraphQLError): GraphQLFormattedError {
  const { message, extensions } = error;
  if (message) {
    let errorJSON: AppErrorInput;
    try {
      errorJSON = JSON.parse(message);
    } catch (error) {
      errorJSON = { code: AppErrorCode.InternalServerError, message };
    }

    return {
      ...error,
      message: errorJSON.message,
      extensions: {
        ...extensions,
        code: errorJSON.code,
      },
    };
  }
  return error;
}
