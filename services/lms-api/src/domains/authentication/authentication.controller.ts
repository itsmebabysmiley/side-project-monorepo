import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { RegisterRequestDto } from './dtos/requests/register.request.dto';
import { RegisterUserCommand } from './use-cases/commands/register.command';

@Controller('auth')
export class AuthenticationController {
  constructor(private readonly commnadBus: CommandBus) {}

  @Post('register')
  register(@Body() payload: RegisterRequestDto) {
    return this.commnadBus.execute(new RegisterUserCommand(payload));
  }
}
