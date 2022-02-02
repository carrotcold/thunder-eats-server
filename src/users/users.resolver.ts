import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  CreateUserAccountInput,
  CreateUserAccountOutput,
} from '@src/users/dtos/create-user-acoount.dto';
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
      const error = await this.userService.createUserAccount(createUserAccountInput);
      if (error) {
        return { ok: false, error };
      }
      return { ok: true };
    } catch (error) {
      return { ok: false, error };
    }
  }
}
