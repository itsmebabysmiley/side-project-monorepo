import { ApiProperty } from '@nestjs/swagger';
import { Gender } from '@prisma/client';

export class RegisterRequestDto {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  confirmPassword: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  countryCode: string;

  @ApiProperty({ enum: Gender })
  gender: Gender;

  @ApiProperty()
  dob: Date;
}
