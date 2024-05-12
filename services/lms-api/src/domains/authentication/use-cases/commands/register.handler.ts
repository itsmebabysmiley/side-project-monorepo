import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { IDataMapper } from 'src/common/interfaces/IDataMapper.interface';
import { UserEntity } from 'src/database/entities/user.entity';
import { UserDomain } from 'src/domains/user/user.domain';
import { BadRequestException, Inject } from '@nestjs/common';
import { UserMapper } from 'src/domains/user/mappers/user.mapper';
import { RegisterUserCommand } from './register.command';
import { RegisterRequestDto } from '../../dtos/requests/register.request.dto';

@CommandHandler(RegisterUserCommand)
export class RegisterUserHandler
  implements ICommandHandler<RegisterUserCommand>
{
  constructor(
    private readonly prismaService: PrismaService,
    @Inject(UserMapper.key)
    private readonly userMapper: IDataMapper<
      UserEntity,
      UserDomain | RegisterRequestDto
    >,
  ) {}

  async execute({ payload: registerDTO }: RegisterUserCommand): Promise<void> {
    const { email, confirmPassword, password } = registerDTO;
    // todo: handle duplication email and username
    await this.checkIfEmailExists(email);
    // todo: compare password
    this.comparePasswordOrThrow(password, confirmPassword);
    // todo: hash password
    const hashedPassword = await this.hashPassword(password);
    // todo: send email verification
    const user = this.userMapper.toEntity({
      ...registerDTO,
      confirmPassword: undefined,
    });
    await this.prismaService.user.create({
      data: {
        ...user,
        password: hashedPassword,
      },
    });
  }

  private async checkIfEmailExists(email: string): Promise<boolean> {
    const foundUser = await this.prismaService.user.findUnique({
      where: { email },
    });
    if (foundUser) {
      throw new BadRequestException('Email already exists');
    }
    return true;
  }

  private async hashPassword(password: string): Promise<string> {
    return Promise.resolve(password);
  }

  private comparePasswordOrThrow(
    password: string,
    confirmPassword: string,
  ): boolean {
    if (password !== confirmPassword) {
      throw new BadRequestException(
        'Password and confirm password do not match',
      );
    }
    return true;
  }
}
