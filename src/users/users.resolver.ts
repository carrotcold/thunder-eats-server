import { Query, Resolver } from '@nestjs/graphql';
import { User } from '@src/users/entities/user.entity';
import { UsersService } from '@src/users/users.service';

@Resolver(of => User)
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Query(returns => Boolean)
  test() {
    return true;
  }
}
