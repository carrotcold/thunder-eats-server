import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';

@InputType({ isAbstract: true }) // InputType을 만들어서 스키마로 사용하지않고 어딘가에서 갖다쓸때
@ObjectType() // for graphql
@Entity() // for typeorm
export class Avenger {
  @Field(type => Number)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(type => String) // for graphql
  @Column() // for typeorm
  @IsString() // for dto (input)
  @Length(2, 10)
  name: string;

  @Field(type => Boolean)
  @Column()
  @IsBoolean()
  is_human: boolean;

  @Field(type => Boolean, { defaultValue: false }) // nullable vs defaultValue
  @Column({ default: false })
  @IsOptional()
  @IsBoolean()
  is_transformable: boolean;

  @Field(type => String, { nullable: true })
  @Column({ default: null })
  @IsOptional()
  @IsString()
  weapon: string;
}
