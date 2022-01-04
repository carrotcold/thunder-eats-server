import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { User } from '@src/users/entities/user.entity';

@InputType()
export class CreateUserAccountInput extends PickType(User, ['email', 'password', 'role']) {}

@ObjectType()
export class CreateUserAccountOutput {
  @Field(type => Boolean)
  ok: boolean;

  @Field(type => String, { nullable: true })
  error?: string;
}
