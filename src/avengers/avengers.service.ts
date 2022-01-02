import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAvengerDto } from 'src/avengers/dtos/create-avenger.dto';
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

  createAvenger(create_avenger_dto: CreateAvengerDto): Promise<Avenger> {
    // const new_avenger = new Avenger();
    // new_avenger.name = dto.name;
    const new_avenger = this.avengers.create(create_avenger_dto);
    return this.avengers.save(new_avenger);
  }
}
