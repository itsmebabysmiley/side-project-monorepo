import { BadRequestException, ValidationError } from '@nestjs/common';

export class BadRequestWithValidationException extends BadRequestException {
  constructor(public readonly errors: ValidationError[]) {
    super('BadRequestException: Validation failed');
  }
}
