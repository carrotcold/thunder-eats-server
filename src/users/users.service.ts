import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '@src/users/entities/user.entity';
import { CreateUserAccountInput } from '@src/users/dtos/create-user-acoount.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepo: Repository<User>,
  ) {}

  async createUserAccount({
    email,
    password,
    role,
  }: CreateUserAccountInput): Promise<string | undefined> {
    try {
      const exists = await this.usersRepo.findOne({ email });
      if (exists) {
        return '이미 사용 중인 이메일 입니다.';
      }
      const newUser = this.usersRepo.create({ email, password, role });
      await this.usersRepo.save(newUser);
    } catch (error) {
      return '계정을 생성하지 못했습니다.';
    }
    // TODO: hash the password
  }
}
