import { registerAs } from '@nestjs/config';
import { IsNotEmpty, IsOptional, validateOrReject } from 'class-validator';
import { Transform, plainToInstance } from 'class-transformer';

export const DATABASE_CONFIG = 'DATABASE_CONFIG';

export class DatabaseConfig {
  @IsNotEmpty()
  DB_HOST: string;

  @IsNotEmpty()
  @Transform(({ value }) => Number(value))
  DB_PORT: number;

  @IsNotEmpty()
  DB_USERNAME: string;

  @IsNotEmpty()
  DB_PASSWORD: string;

  @IsOptional()
  DB_LOGGING: boolean = true;
}

export default registerAs<DatabaseConfig>(DATABASE_CONFIG, async () => {
  try {
    const configuration = plainToInstance(DatabaseConfig, {
      DB_HOST: process.env.DB_HOST,
      DB_PORT: process.env.DB_PORT,
      DB_USERNAME: process.env.DB_USERNAME,
      DB_PASSWORD: process.env.DB_PASSWORD,
      DB_LOGGING: process.env.DB_LOGGING,
    });

    await validateOrReject(configuration);

    return configuration;
  } catch (error) {
    throw new Error(error.toString());
  }
});
