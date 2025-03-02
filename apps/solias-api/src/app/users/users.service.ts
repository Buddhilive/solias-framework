import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './entities/users.repository';
import { ApiResponse } from '../utils/api-response.dto';
import { from, Observable } from 'rxjs';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly userRepo: UsersRepository) {}
  async create(createUserDto: CreateUserDto): Promise<ApiResponse<unknown>> {
    return await this.userRepo.createUser(createUserDto);
  }

  findAll(): Observable<User[]> {
    return from(this.userRepo.find());
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
