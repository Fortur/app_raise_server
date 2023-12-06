import { HierarchyRepository } from './hierarchy.repository';
import { Injectable } from '@nestjs/common';
import { UserRepository } from '../user/user.repository';
import { UserDocument } from '../user/user.schema';

@Injectable()
export class HierarchyDomainService {
  constructor(
    private hierarchyRepository: HierarchyRepository,
    private userRepository: UserRepository,
  ) {}

  async assignManager(
    userId: string,
    managerId: string,
  ): Promise<UserDocument> {
    if (userId === managerId) {
      throw new Error('User id equal Manager id');
    }

    const user = await this.userRepository.findById(userId);
    const manager = await this.userRepository.findById(managerId);
    if (!user || !manager) {
      throw new Error('User or Manager not found');
    }

    return this.hierarchyRepository.assignManager(userId, managerId);
  }
}
