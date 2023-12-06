import { Injectable } from '@nestjs/common';
import { User } from './user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDomainService } from './user.domain';
import { HierarchyDomainService } from '../hierarchy/hierarchy.domain';

@Injectable()
export class UserService {
  constructor(
    private userDomainService: UserDomainService,
    private hierarchyDomainService: HierarchyDomainService,
  ) {}

  async getAll(): Promise<User[]> {
    return this.userDomainService.getUsers();
  }
  async createUser(userDto: CreateUserDto): Promise<User> {
    return this.userDomainService.createUser(userDto);
  }

  async deleteUser(userId: string): Promise<void> {
    return this.userDomainService.deleteUser(userId);
  }

  async assignManager(userId: string, managerId: string): Promise<User> {
    return this.hierarchyDomainService.assignManager(userId, managerId);
  }
}
