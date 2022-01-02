import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AvengersResolver {
  // Query(typeFunc: ReturnTypeFunc, options?: QueryOptions | undefined): MethodDecorator
  @Query(returns => Boolean)
  isShieldHard(): boolean {
    return true;
  }
}
