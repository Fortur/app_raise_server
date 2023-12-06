import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.schema';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { HierarchyService } from '../hierarchy/hierarchy.service';
import { UserDomainService } from './user.domain';
import { HierarchyDomainService } from '../hierarchy/hierarchy.domain';
import { UserRepository } from './user.repository';
import { HierarchyRepository } from '../hierarchy/hierarchy.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [
    UserService,
    UserDomainService,
    HierarchyService,
    HierarchyDomainService,
    UserRepository,
    HierarchyRepository,
  ],
  controllers: [UserController],
})
export class UserModule {}
