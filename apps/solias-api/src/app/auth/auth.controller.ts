import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { ApiResponse } from '../utils/api-response.dto';
import { AuthService } from './auth.service';
import { CredentialsDto } from './dto/credentials.dto';
import { LocalGuard } from './guards/local.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService
  ) {}

  @Post('signup')
  signUp(@Body() user: CreateUserDto): Promise<ApiResponse<unknown>> {
    return this.usersService.create(user);
  }

  @Post('login')
  @UseGuards(LocalGuard)
  login(@Body() credentials: CredentialsDto): Promise<ApiResponse<unknown>> {
    return this.authService.validateUser(credentials);
  }
}
