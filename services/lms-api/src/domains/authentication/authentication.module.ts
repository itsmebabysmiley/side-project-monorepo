import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AuthModule } from 'src/common/auth/auth.module';
import { authenticationCommandHandlers } from './use-cases/commands';
import { AuthenticationController } from './authentication.controller';
import { UserMapper } from '../user/mappers/user.mapper';
import { authenticateQueryHandlers } from './use-cases/queries';

@Module({
  imports: [CqrsModule, AuthModule],
  providers: [
    {
      provide: UserMapper.key,
      useClass: UserMapper,
    },
    ...authenticationCommandHandlers,
    ...authenticateQueryHandlers,
  ],
  controllers: [AuthenticationController],
})
export class AuthenticationModule {}
