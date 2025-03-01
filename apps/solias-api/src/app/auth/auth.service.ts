import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersRepository } from '../users/entities/users.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepo: UsersRepository,
  ) { }

  async signUp(user: CreateUserDto): Promise<void> {
    await this.userRepo.createUser(user);
  }
}
