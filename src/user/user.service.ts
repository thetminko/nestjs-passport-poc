import { Injectable } from '@nestjs/common';

export interface User {
  id: number;
  username: string;
  password: string;
}

@Injectable()
export class UserService {
  users: User[] = [
    {
      id: 1,
      username: 'abc',
      password: 'abc',
    },
    {
      id: 2,
      username: 'cde',
      password: 'cde',
    },
    {
      id: 3,
      username: 'efg',
      password: 'efg',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
