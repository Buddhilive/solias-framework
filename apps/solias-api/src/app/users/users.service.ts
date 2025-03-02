import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './entities/users.repository';
import { ApiResponse } from '../utils/api-response.dto';
import { from, Observable } from 'rxjs';
import { User } from './entities/user.entity';
import { UserProfile } from './entities/profile.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepo: UsersRepository,
    @InjectRepository(UserProfile)
    private userProfileRepository: Repository<UserProfile>
  ) {}
  async create(createUserDto: CreateUserDto): Promise<ApiResponse<unknown>> {
    const newUser = await this.userRepo.createUser(createUserDto);

    try {
      await this.userRepo.save(newUser);
      if (newUser) {
        const userProfile = this.userProfileRepository.create({
          user: newUser,
        });
        await this.userProfileRepository.save(userProfile);
      }
      return {
        statusCode: 200,
        message: 'User created successfully',
      };
    } catch (error) {
      // console.log(error);
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

  findAll(): Observable<User[]> {
    return from(this.userRepo.find());
  }

  findOne(id: string): Observable<User> {
    return from(this.userRepo.findOne({ where: { id } }));
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto
  ): Promise<Observable<UpdateResult>> {
    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return from(this.userProfileRepository.update({ user }, updateUserDto));
  }

  async remove(id: string) {
    const userProfile = await this.userProfileRepository.findOne({
      where: { user: { id: id } },
    });

    if (userProfile) {
      await this.userProfileRepository.remove(userProfile);
    }

    const user = await this.userRepo.findOne({ where: { id } });
    if (user) {
      return await this.userRepo.remove(user);
    } else {
      throw new NotFoundException('User not found');
    }
  }
}
