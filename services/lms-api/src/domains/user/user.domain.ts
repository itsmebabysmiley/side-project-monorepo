import { Gender } from '@prisma/client';
import { Expose } from 'class-transformer';

export class UserDomain {
  @Expose()
  id: string;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @Expose()
  password: string;

  @Expose()
  email: string;

  @Expose()
  phone: string;

  @Expose()
  gender: Gender;

  @Expose()
  countryCode: string;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;

  @Expose()
  createdBy: string;

  @Expose()
  updatedBy: string;
}
