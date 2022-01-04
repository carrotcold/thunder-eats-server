import { Field } from '@nestjs/graphql';
import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export class CoreEntity {
  @PrimaryGeneratedColumn()
  @Field(is => Number)
  id: number;

  @CreateDateColumn()
  @Field(is => Date)
  createAt: Date;

  @UpdateDateColumn()
  @Field(is => Date)
  updateAt: Date;
}
