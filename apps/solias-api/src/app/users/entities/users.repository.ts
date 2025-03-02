import { DataSource, Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersRepository extends Repository<User> {
  constructor(private datasource: DataSource) {
    super(User, datasource.createEntityManager());
  }
  async createUser(user: CreateUserDto): Promise<User> {
    const { username, email, password } = user;

    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await this.create({
      username: username,
      email: email,
      password: hashedPassword,
    });

    return newUser;
  }
}
