import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersRepository } from '../users/entities/users.repository';
import { CredentialsDto } from './dto/credentials.dto';
import { ApiResponse } from '../utils/api-response.dto';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userRepo: UsersRepository) {}
  async validateUser(
    credentials: CredentialsDto
  ): Promise<ApiResponse<unknown>> {
    const { username, password } = credentials;

    const user = await this.userRepo.findOne({ where: { username } });

    if (user && (await compare(password, user.password))) {
      return {
        statusCode: 200,
        message: 'Login successful',
      };
    } else {
      throw new UnauthorizedException('Username or Password is incorrect.');
    }
  }
}
