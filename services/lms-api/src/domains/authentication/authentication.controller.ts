import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { RegisterRequestDto } from './dtos/requests/register.request.dto';
import { RegisterUserCommand } from './use-cases/commands/register.command';
import { CheckEmailRequestDto } from './dtos/requests/check-email.request.dto';
import { CheckEmailQuery } from './use-cases/queries/check-email.query';

@Controller('auth')
export class AuthenticationController {
  constructor(
    private readonly commnadBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post('register')
  register(@Body() payload: RegisterRequestDto) {
    return this.commnadBus.execute(new RegisterUserCommand(payload));
  }

  @Post('check-email')
  checkEmail(@Body() { email }: CheckEmailRequestDto) {
    return this.queryBus.execute(new CheckEmailQuery(email));
  }
}
