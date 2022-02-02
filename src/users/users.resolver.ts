import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  CreateUserAccountInput,
  CreateUserAccountOutput,
} from '@src/users/dtos/create-user-acoount.dto';
import { LoginInput, LoginOutput } from '@src/users/dtos/login.dto';
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
  async createUserAccount(
    @Args('input') createUserAccountInput: CreateUserAccountInput,
  ): Promise<CreateUserAccountOutput> {
    try {
      return this.userService.createUserAccount(createUserAccountInput);
    } catch (error) {
      return { ok: false, error };
    }
  }

  @Mutation(returns => LoginOutput)
  async login(@Args('input') loginInput: LoginInput): Promise<LoginOutput> {
    try {
      return this.userService.login(loginInput);
    } catch (error) {
      return { ok: false, error };
    }
  }
}
