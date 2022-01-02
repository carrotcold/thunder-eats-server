import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Avenger } from 'src/avengers/entities/avenger.entity';
import { AvengersResolver } from 'src/avengers/avengers.resolver';
import { AvengersService } from 'src/avengers/avengers.service';

@Module({
  imports: [TypeOrmModule.forFeature([Avenger])], // import repository (https://docs.nestjs.com/techniques/database#repository-pattern)
  providers: [AvengersResolver, AvengersService],
})
export class AvengersModule {}

/*
  전체 흐름: AppModule - TypeOrmModule - AvengersModule - AvengersResolver - AvengersService

  1) TypeOrmModule에 DB로 전송할 entity들 설정

  2) AvengersModule
  : TypeOrmModule의 Avenger 엔티티를 다른 곳에서 Inject할 수 있도록 import
  : providers에 AvengersService 주입 => AvengersResolver에서 사용 가능

  3) AvengersService
  : @InjectReposity(entity): 전달받은 entity를 기반으로 Repository 생성
  : Repository의 메서드들로 DB에 접근하는 방식 지정

  4) AvengersResolver
  : GraphQL Query/Mutation으로 DB에 접근하는 AvengersService의 메서드들 활용.
*/
