import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AvengersModule } from './avengers/avengers.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // (code-first approach)
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
