import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { User } from '@src/users/entities/user.entity';
import { MutationOutput } from '@src/common/dtos/mutation-output.dto';

@InputType()
export class LoginInput extends PickType(User, ['email', 'password']) {}

@ObjectType()
export class LoginOutput extends MutationOutput {
  @Field(type => String, { nullable: true })
  token?: string;
}
