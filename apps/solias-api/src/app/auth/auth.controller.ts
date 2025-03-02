import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { ApiResponse } from '../utils/api-response.dto';

@Controller('auth')
export class AuthController {
  constructor(private usersService: UsersService) {}
  
  @Post('signup')
  signUp(@Body() user: CreateUserDto): Promise<ApiResponse<unknown>> {
    return this.usersService.create(user);
  }
}
