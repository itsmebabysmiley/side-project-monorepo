import { $Enums, User } from '@prisma/client';

export class UserEntity implements User {
  id: string;

  email: string;

  password: string;

  confimPassword: string;

  firstName: string;

  lastName: string;

  phone: string;

  gender: $Enums.Gender;

  countryCode: string;

  dob: Date;

  createdAt: Date;

  createdBy: string;

  updatedAt: Date;

  updatedBy: string;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
