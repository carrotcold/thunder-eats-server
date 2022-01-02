import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Joi from 'joi';
import { AvengersModule } from './avengers/avengers.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'development' ? '.env.development.local' : '.env.test.local',
      ignoreEnvFile: process.env.NODE_ENV === 'production',
      validationSchema: Joi.object({
        // https://docs.nestjs.com/techniques/configuration#schema-validation
        NODE_ENV: Joi.string().valid('development', 'production', 'test').required(),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.string().required(),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_DATABASE: Joi.string().required(),
      }),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      synchronize: true,
      logging: true,
      // more options 1 -  https://typeorm.io/#/connection-options/common-connection-options
      // more options 2 -  https://typeorm.io/#/connection-options/postgres--cockroachdb-connection-options
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true, // https://docs.nestjs.com/graphql/quick-start#code-first
      // debug: false,
      // more options - https://www.apollographql.com/docs/apollo-server/v2/api/apollo-server/#constructor-options-lt-ApolloServer-gt
    }),
    AvengersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
