import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AvengersModule } from './avengers/avengers.module';

console.log(process.env.NODE_ENV);
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'development' ? '.env.development' : '.env.test',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'thunder',
      password: 'localhost does not require password',
      database: 'thunder-eats-db',
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
