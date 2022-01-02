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
  async createAvenger(@Args() create_avenger_dto: CreateAvengerDto): Promise<boolean> {
    try {
      await this.avengersService.createAvenger(create_avenger_dto);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
