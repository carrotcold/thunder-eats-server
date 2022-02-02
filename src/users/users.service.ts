import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import {
  CreateUserAccountInput,
  CreateUserAccountOutput,
} from 'src/users/dtos/create-user-acoount.dto';
import { LoginInput, LoginOutput } from 'src/users/dtos/login.dto';
import { JwtService } from 'src/jwt/jwt.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepo: Repository<User>,
    private readonly jwtService: JwtService,
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

      const token = this.jwtService.sign(user.id);
      return { ok: true, token };
    } catch (error) {
      return { ok: false, error };
    }
  }
}
