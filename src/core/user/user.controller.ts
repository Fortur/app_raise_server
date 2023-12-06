import {
  Controller,
  Post,
  Body,
  Delete,
  Param,
  Patch,
  Get,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { toUserDto, UserDto } from './dto/response-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async get(): Promise<UserDto[]> {
    const users = await this.userService.getAll();
    return users.map((user) => toUserDto(user));
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
    try {
      const user = await this.userService.createUser(createUserDto);
      return toUserDto(user);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.FORBIDDEN);
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      return await this.userService.deleteUser(id);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.FORBIDDEN);
    }
  }

  @Patch(':id/manager')
  async assignManager(
    @Param('id') id: string,
    @Body('managerId') managerId: string,
  ): Promise<UserDto> {
    try {
      const user = await this.userService.assignManager(id, managerId);
      return toUserDto(user);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.FORBIDDEN);
    }
  }
}
