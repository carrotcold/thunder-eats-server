import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Avenger } from 'src/avengers/entities/avenger.entity';
import { CreateAvengerDto } from 'src/avengers/dtos/create-avenger.dto';
import { AvengersService } from 'src/avengers/avengers.service';

@Resolver(of => Avenger)
export class AvengersResolver {
  constructor(private readonly avengersService: AvengersService) {}

  @Query(returns => [Avenger])
  avengers(): Promise<Avenger[]> {
    return this.avengersService.getAll();
  }
  @Mutation(returns => Boolean)
  createAvenger(@Args() dto: CreateAvengerDto): boolean {
    return true;
  }
}
