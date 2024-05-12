import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { BadRequestWithValidationException } from './bad-request-validation.exception';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(exception: unknown, host: ArgumentsHost): void {
    let validationMessages = [];
    if (exception instanceof Error) {
      this.logger.error(exception, exception.stack);
    }
    if (exception instanceof BadRequestWithValidationException) {
      validationMessages = exception.errors.map((error) => {
        return {
          field: error.property,
          constraints: error.constraints,
        };
      });
    }

    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();

    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const responseBody = {
      statusCode: httpStatus,
      timestamp: new Date().toISOString(),
      path: httpAdapter.getRequestUrl(ctx.getRequest()),
      stack: exception instanceof Error ? exception.stack : null,
      messages: validationMessages,
    };

    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
  }
}
