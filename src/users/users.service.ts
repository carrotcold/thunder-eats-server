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

  async createUserAccount({ email, password, role }: CreateUserAccountInput): Promise<boolean> {
    try {
      const exists = await this.usersRepo.findOne({ email });
      if (exists) {
        // TODO: make error
        return false;
      }
      const newUser = this.usersRepo.create({ email, password, role });
      await this.usersRepo.save(newUser);
      return true;
    } catch (error) {
      // TODO: make error
      return false;
    }
    // TODO: hash the password
  }
}
