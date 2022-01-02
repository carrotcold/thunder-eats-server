import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AvengersModule } from './avengers/avengers.module';

@Module({
  imports: [
    AvengersModule,
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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
