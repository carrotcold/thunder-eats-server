import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Avenger {
  @Field(type => String)
  name: string;

  @Field(type => Boolean)
  isHuman: boolean;

  @Field(type => Boolean, { nullable: true })
  isTransformable?: boolean;

  @Field(type => String, { nullable: true })
  weapon?: string;
}
