import { DynamicModule, Global, Module } from '@nestjs/common';
import { JwtModuleOptions, JWT_OPTIONS } from 'src/jwt/jwt.options';
import { JwtService } from 'src/jwt/jwt.service';

@Module({})
@Global()
export class JwtModule {
  static forRoot(options: JwtModuleOptions): DynamicModule {
    return {
      module: JwtModule,
      exports: [JwtService],
      providers: [
        {
          provide: JWT_OPTIONS,
          useValue: options,
        },
        JwtService, // 아래와 동일함
        // {
        //   provide: JwtService,
        //   useValue: JwtService,
        // }
      ],
    };
  }
}
