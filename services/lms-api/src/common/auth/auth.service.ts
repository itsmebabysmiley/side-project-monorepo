import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { IAuthService } from './interfaces/auth.interface';

@Injectable()
export class AuthService implements IAuthService {
  constructor(private readonly prismaService: PrismaService) {}

  public static readonly key: unique symbol = Symbol('AuthService');

  async checkisEmailExist(email: string): Promise<boolean> {
    const user = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });

    return !!user;
  }
  //
}
