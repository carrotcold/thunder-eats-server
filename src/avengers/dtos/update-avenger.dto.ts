import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateAvengerDto } from 'avengers/dtos/create-avenger.dto';

@InputType()
class UpdateAvengerInputType extends PartialType(CreateAvengerDto) {}

@InputType()
export class UpdateAvengerDto {
  @Field(type => Number)
  id: number;

  @Field(type => UpdateAvengerInputType)
  data: UpdateAvengerInputType;
}
