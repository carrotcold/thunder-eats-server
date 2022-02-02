import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Repository } from 'typeorm';
import * as jwt from 'jsonwebtoken';
import { User } from '@src/users/entities/user.entity';
import {
  CreateUserAccountInput,
  CreateUserAccountOutput,
} from '@src/users/dtos/create-user-acoount.dto';
import { LoginInput, LoginOutput } from '@src/users/dtos/login.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepo: Repository<User>,
    private readonly configService: ConfigService,
  ) {}

  async createUserAccount({
    email,
    password,
    role,
  }: CreateUserAccountInput): Promise<CreateUserAccountOutput> {
    try {
      const exists = await this.usersRepo.findOne({ email });
      if (exists) {
        return { ok: false, error: '이미 사용 중인 이메일 입니다.' };
      }
      const newUser = this.usersRepo.create({ email, password, role });
      await this.usersRepo.save(newUser);
      return { ok: true };
    } catch (error) {
      return { ok: false, error: '계정을 생성하지 못했습니다.' };
    }
  }

  async login({ email, password }: LoginInput): Promise<LoginOutput> {
    try {
      const user = await this.usersRepo.findOne({ email });
      if (!user) {
        return { ok: false, error: '존재하지 않는 이메일입니다.' };
      }

      const isCorrectPassword = await user.checkPassword(password);
      if (!isCorrectPassword) {
        return { ok: false, error: '잘못된 패스워드입니다.' };
      }

      const token = jwt.sign({ id: user.id }, this.configService.get('SECRET_KEY', ''));
      return { ok: true, token };
    } catch (error) {
      return { ok: false, error };
    }
  }
}
