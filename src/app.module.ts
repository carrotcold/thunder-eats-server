import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AvengersModule } from './avengers/avengers.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true, // https://docs.nestjs.com/graphql/quick-start#code-first
      // playground: false,
      // debug: false,
      // more options - https://www.apollographql.com/docs/apollo-server/v2/api/apollo-server/#constructor-options-lt-ApolloServer-gt
    }),
    AvengersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
