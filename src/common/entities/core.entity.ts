import { CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

// @Entity() // only for extends
export class CoreEntity {
  @PrimaryGeneratedColumn() // Creating an auto-generated column
  id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
