import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from './user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserDomainService {
  constructor(private userRepository: UserRepository) {}

  async getUsers(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async createUser(userDto: CreateUserDto): Promise<User> {
    const user = await this.userRepository.findByName(userDto.name);

    if (user) {
      throw new Error('User with this name is already exists');
    }

    return this.userRepository.create(userDto);
  }

  async deleteUser(userId: string): Promise<void> {
    const isManager = await this.userRepository.checkManager(userId);
    if (isManager) {
      throw new Error('User is manager');
    }
    return this.userRepository.delete(userId);
  }
}
