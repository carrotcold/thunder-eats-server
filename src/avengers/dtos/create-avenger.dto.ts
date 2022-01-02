import { ArgsType, Field } from '@nestjs/graphql';
import { IsBoolean, IsString, Length } from 'class-validator';

// @InputType() input을 하나의 object 형태로
@ArgsType() // 각각의 arguments로
export class CreateAvengerDto {
  @Field(type => String)
  @IsString()
  @Length(2, 10)
  name: string;

  @Field(type => Boolean)
  @IsBoolean()
  is_human: boolean;

  @Field(type => Boolean)
  @IsBoolean()
  is_transformable: boolean;

  @Field(type => String)
  @IsString()
  weapon: string;
}
