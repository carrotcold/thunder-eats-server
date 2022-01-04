import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // https://docs.nestjs.com/techniques/database#repository-pattern
})
export class UsersModule {}
