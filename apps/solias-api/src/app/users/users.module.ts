import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './entities/users.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserProfile } from './entities/profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserProfile]),],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersService, UsersRepository],
})
export class UsersModule {}
