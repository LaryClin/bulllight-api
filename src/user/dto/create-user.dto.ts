import { RoleType } from '../shared/enum/role-type.enum';

export class CreateUserDto {
  readonly id: string;
  readonly uuid: string;
  readonly username: string;
  readonly email: string;
  readonly password: string;
  readonly roles?: RoleType[];
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}
