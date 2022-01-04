import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Avenger } from 'avengers/entities/avenger.entity';
import { AvengersService } from 'avengers/avengers.service';
import { CreateAvengerDto } from 'avengers/dtos/create-avenger.dto';
import { UpdateAvengerDto } from 'avengers/dtos/update-avenger.dto';

@Resolver(of => Avenger)
export class AvengersResolver {
  constructor(private readonly avengersService: AvengersService) {}

  @Query(returns => [Avenger])
  avengers(): Promise<Avenger[]> {
    return this.avengersService.getAll();
  }

  @Mutation(returns => Boolean)
  async createAvenger(
    @Args('input')
    create_avenger_dto: CreateAvengerDto,
  ): Promise<boolean> {
    try {
      await this.avengersService.createAvenger(create_avenger_dto);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  @Mutation(returns => Boolean)
  async updateAvenger(
    @Args('input')
    update_avenger_dto: UpdateAvengerDto,
  ) {
    try {
      await this.avengersService.updateAvenger(update_avenger_dto);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
