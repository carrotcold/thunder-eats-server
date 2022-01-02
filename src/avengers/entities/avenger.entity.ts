import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType() // for graphql
@Entity() // for typeorm
export class Avenger {
  @Field(type => Number)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(type => String) // for graphql
  @Column() // for typeorm
  name: string;

  @Field(type => Boolean)
  @Column()
  is_human: boolean;

  @Field(type => Boolean, { nullable: true })
  @Column()
  is_transformable?: boolean;

  @Field(type => String, { nullable: true })
  @Column()
  weapon?: string;
}
