import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { authenticationCommandHandlers } from './use-cases/commands';
import { AuthenticationController } from './authentication.controller';
import { UserMapper } from '../user/mappers/user.mapper';

@Module({
  imports: [CqrsModule],
  providers: [
    {
      provide: UserMapper.key,
      useClass: UserMapper,
    },
    ...authenticationCommandHandlers,
  ],
  controllers: [AuthenticationController],
})
export class AuthenticationModule {}
