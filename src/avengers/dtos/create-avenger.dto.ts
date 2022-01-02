import { ArgsType, Field } from '@nestjs/graphql';

// @InputType() input을 하나의 object 형태로
@ArgsType() // 각각의 arguments로
export class CreateAvengerDto {
  @Field(type => String)
  name: string;

  @Field(type => Boolean)
  isHuman: boolean;

  @Field(type => Boolean)
  isTransformable: boolean;

  @Field(type => String)
  weapon: string;
}
