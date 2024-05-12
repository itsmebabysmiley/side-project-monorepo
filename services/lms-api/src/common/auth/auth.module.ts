import { Module, Provider } from '@nestjs/common';
import { AuthService } from './auth.service';

const persistenceProviders: Provider[] = [
  { provide: AuthService.key, useClass: AuthService },
];

@Module({
  providers: [...persistenceProviders],
  exports: [...persistenceProviders],
})
export class AuthModule {}
