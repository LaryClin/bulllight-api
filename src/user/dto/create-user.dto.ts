import { Role } from 'src/role/entities/role.entity';

export class CreateUserDto {
  readonly id: string;
  readonly uuid: string;
  readonly username: string;
  readonly email: string;
  readonly password: string;
  readonly roles?: Role[];
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}
