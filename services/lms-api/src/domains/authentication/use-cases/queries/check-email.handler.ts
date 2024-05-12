import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { IAuthService } from 'src/common/auth/interfaces/auth.interface';
import { Inject } from '@nestjs/common';
import { AuthService } from 'src/common/auth/auth.service';
import { CheckEmailQuery } from './check-email.query';

@QueryHandler(CheckEmailQuery)
export class CheckEmailHandler implements IQueryHandler<CheckEmailQuery> {
  constructor(
    @Inject(AuthService.key)
    private readonly authService: IAuthService,
  ) {}

  async execute({ email }: CheckEmailQuery): Promise<boolean> {
    const user = await this.authService.checkisEmailExist(email);

    return !!user;
  }
}
