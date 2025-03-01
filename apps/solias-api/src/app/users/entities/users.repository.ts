import { DataSource, Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersRepository extends Repository<User> {
  constructor(private datasource: DataSource) {
    super(User, datasource.createEntityManager());
  }
  async createUser(user: CreateUserDto): Promise<void> {
    const { email, password } = user;
    const newUser = this.create({ email, password });
    await this.save(newUser);
  }
}
