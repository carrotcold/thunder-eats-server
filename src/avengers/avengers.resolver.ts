import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateAvengerDto } from 'src/avengers/dtos/create-avenger.dto';
import { Avenger } from 'src/avengers/entities/avenger.entity';

@Resolver(of => Avenger)
export class AvengersResolver {
  @Query(returns => [Avenger])
  avengers(@Args('humanOnly') humanOnly: boolean): Avenger[] {
    return [];
  }
  @Mutation(returns => Boolean)
  createAvenger(@Args() dto: CreateAvengerDto): boolean {
    return true;
  }
}
