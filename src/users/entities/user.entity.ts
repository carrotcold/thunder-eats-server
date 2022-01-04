import { Column, Entity } from 'typeorm';
import { Field, InputType, ObjectType, registerEnumType } from '@nestjs/graphql';
import { CoreEntity } from '@src/common/entities/core.entity';

enum UserRole {
  CLIENT,
  OWNER,
  DELIVERY,
}
registerEnumType(UserRole, { name: 'UserRole' });

@Entity()
@InputType({ isAbstract: true })
@ObjectType()
export class User extends CoreEntity {
  @Column()
  @Field(is => String)
  email: string;

  @Column()
  @Field(is => String)
  password: string;

  @Column({ type: 'enum', enum: UserRole })
  @Field(is => UserRole)
  role: UserRole;
}
