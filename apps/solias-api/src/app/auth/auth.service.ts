import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersRepository } from '../users/entities/users.repository';
import { CredentialsDto } from './dto/credentials.dto';
import { ApiResponse } from '../utils/api-response.dto';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepo: UsersRepository,
    private jwtService: JwtService
  ) {}
  async validateUser(
    credentials: CredentialsDto
  ): Promise<ApiResponse<{ accessToken: string; user: string }>> {
    const { username, password } = credentials;

    const user = await this.userRepo.findOne({ where: { username } });

    if (user && (await compare(password, user.password))) {
      const jwtAccessToken = this.jwtService.sign({ username });
      return {
        statusCode: 200,
        message: 'Login successful',
        data: { user: user.username, accessToken: jwtAccessToken },
      };
    } else {
      throw new UnauthorizedException('Username or Password is incorrect.');
    }
  }
}
