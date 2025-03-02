import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from '../users/entities/users.repository';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  ],
  providers: [AuthService, UsersRepository, UsersService],
  controllers: [AuthController],
})
export class AuthModule {}
