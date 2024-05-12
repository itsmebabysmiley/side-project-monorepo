import { RegisterRequestDto } from '../../dtos/requests/register.request.dto';

export class RegisterUserCommand {
  constructor(public readonly payload: RegisterRequestDto) {}
}
