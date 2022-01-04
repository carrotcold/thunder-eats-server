import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateAvengerDto } from 'avengers/dtos/update-avenger.dto';
import { Avenger } from 'avengers/entities/avenger.entity';
import { Repository } from 'typeorm';
import { CreateAvengerDto } from 'avengers/dtos/create-avenger.dto';

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

  updateAvenger({ id, data }: UpdateAvengerDto) {
    return this.avengers.update(id, { ...data });
  }
}
