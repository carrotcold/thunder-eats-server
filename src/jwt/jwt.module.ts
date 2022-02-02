import { DynamicModule, Module } from '@nestjs/common';
import { JwtService } from 'src/jwt/jwt.service';

@Module({})
export class JwtModule {
  static forRoot(): DynamicModule {
    return {
      module: JwtModule,
      exports: [JwtService],
      providers: [JwtService],
    };
  }
}
