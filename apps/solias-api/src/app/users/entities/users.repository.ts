import { DataSource, Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { ApiResponse } from '../../utils/api-response.dto';

@Injectable()
export class UsersRepository extends Repository<User> {
  constructor(private datasource: DataSource) {
    super(User, datasource.createEntityManager());
  }
  async createUser(user: CreateUserDto): Promise<ApiResponse<unknown>> {
    const { username, email, password } = user;

    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await this.create({
      username: username,
      email: email,
      password: hashedPassword,
    });

    try {
      await this.save(newUser);
      return {
        statusCode: 200,
        message: 'User created successfully',
      };
    } catch (error) {
      console.log(error);
      if (error.code === '23505') {
        throw new ConflictException('Email already exist');
      } else if (error.code === '23502') {
        throw new BadRequestException(
          `Database error: Required field "${error.column}" was not provided.`
        );
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
