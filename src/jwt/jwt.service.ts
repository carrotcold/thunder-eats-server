import { Inject, Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { JwtModuleOptions, JWT_OPTIONS } from 'src/jwt/jwt.options';

@Injectable()
export class JwtService {
  constructor(
    @Inject(JWT_OPTIONS) // forRoot 옵션으로 받지 않고 global config 모듈 사용해도됨
    private readonly options: JwtModuleOptions,
  ) {}

  sign(userId: number): string {
    return jwt.sign({ id: userId }, this.options.secretKey);
  }
}
