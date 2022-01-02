import { Module } from '@nestjs/common';
import { AvengersResolver } from 'src/avengers/avengers.resolver';

@Module({
  providers: [AvengersResolver],
})
export class AvengersModule {}
