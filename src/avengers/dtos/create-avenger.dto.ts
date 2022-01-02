import { InputType, OmitType } from '@nestjs/graphql';
import { Avenger } from 'src/avengers/entities/avenger.entity';

@InputType() // input을 하나의 object 형태로
// @ArgsType() // 각각의 arguments로
export class CreateAvengerDto extends OmitType(
  Avenger,
  ['id'] as const,
  // InputType,
  /* decorator가 지정되지 않은 경우 parent의 decorator를 그대로 사용한다 
      entity에 @InputType({ isAbstract: true }) 을 사용하지 않을 경우에는 요렇게 가능
      nest docs에서는 이 방법으로 소개
      - https://docs.nestjs.com/graphql/mapped-types
  */
) {}
