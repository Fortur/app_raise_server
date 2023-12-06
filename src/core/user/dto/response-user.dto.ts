import { plainToClass } from 'class-transformer';

export class UserDto {
  id: string;
  name: string;
  managerId?: string;
}

export function toUserDto(user: any): UserDto {
  return plainToClass(UserDto, {
    id: user._id.toString(),
    name: user.name,
    managerId: user.manager ? user.manager.toString() : null,
  });
}
