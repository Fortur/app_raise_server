import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../user/user.schema';

@Injectable()
export class HierarchyRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async assignManager(
    userId: string,
    managerId: string,
  ): Promise<UserDocument> {
    return this.userModel
      .findByIdAndUpdate(userId, { manager: managerId }, { new: true })
      .exec();
  }
}
