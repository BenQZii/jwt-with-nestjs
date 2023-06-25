import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserType } from 'src/common/interfaces/user-type';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      email: 'admin@admin.com',
      password: 'admin',
    },
    {
      id: 2,
      email: 'staff@staff.com',
      password: 'staff',
    },
  ];

  async findOne(email: string): Promise<UserType> {
    const user = this.users.find((user) => user.email === email);

    if (!user) {
      throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
    }

    return user;
  }
}
