import { User } from '@prisma/client';
import { IDataMapper } from 'src/common/interfaces/IDataMapper.interface';
import { plainToInstance } from 'class-transformer';
import { UserEntity } from 'src/database/entities/user.entity';
import { UserDomain } from '../user.domain';

export class UserMapper<UserDTO = void>
  implements IDataMapper<UserEntity, UserDomain>
{
  public static readonly key: unique symbol = Symbol('UserMapper');

  toDomain(daoEntity: User): UserDomain {
    return plainToInstance(UserDomain, daoEntity);
  }

  toDomains(daoEntities: User[]): UserDomain[] {
    return plainToInstance(UserDomain, daoEntities);
  }

  toEntity(domainEntity: UserDomain | UserDTO): UserEntity {
    return plainToInstance(UserEntity, domainEntity);
  }

  toEntitys(domainEntities: UserDomain[]): UserEntity[] {
    return plainToInstance(UserEntity, domainEntities);
  }
}
