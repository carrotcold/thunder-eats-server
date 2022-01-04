import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserAccountInput, CreateUserAccountOutput } from '@src/users/dtos/create-user-acoount.dto';
import { User } from '@src/users/entities/user.entity';
import { UsersService } from '@src/users/users.service';

@Resolver(of => User)
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Query(returns => Boolean)
  test() {
    return true;
  }

  @Mutation(returns => CreateUserAccountOutput)
  createUserAccount(@Args('input') createUserAccountInput: CreateUserAccountInput) {
    console.log(createUserAccountInput);
  }
}
