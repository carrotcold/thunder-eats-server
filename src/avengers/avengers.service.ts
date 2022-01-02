import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Avenger } from 'src/avengers/entities/avenger.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AvengersService {
  constructor(
    @InjectRepository(Avenger)
    private readonly avengers: Repository<Avenger>,
  ) {}

  getAll(): Promise<Avenger[]> {
    return this.avengers.find();
  }
}
