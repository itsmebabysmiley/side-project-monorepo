import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Global()
@Module({
  imports: [
    // SequelizeModule.forRootAsync({
    //   imports: [ConfigModule.forFeature(databaseConfig)],
    //   inject: [databaseConfig.KEY],
    //   useFactory: async (configService: ConfigType<typeof databaseConfig>) => ({
    //     dialect: 'postgres',
    //     host: configService.DB_HOST,
    //     port: configService.DB_PORT,
    //     username: configService.DB_USERNAME,
    //     password: configService.DB_PASSWORD,
    //     logging: configService.DB_LOGGING,
    //   }),
    // }),
  ],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class DatabaseModule {}
