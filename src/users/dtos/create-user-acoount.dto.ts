import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { MutationOutput } from 'src/common/dtos/mutation-output.dto';
import { User } from 'src/users/entities/user.entity';

@InputType()
export class CreateUserAccountInput extends PickType(User, ['email', 'password', 'role']) {}

@ObjectType()
export class CreateUserAccountOutput extends MutationOutput {}
