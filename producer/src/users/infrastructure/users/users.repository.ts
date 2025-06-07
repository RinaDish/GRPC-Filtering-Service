import { readFileSync } from 'fs';
import { join } from 'path';
import { Injectable } from '@nestjs/common';
import { User } from '../../domain/types/user.type';
import { IUserRepository } from '../interface/users.repository';

@Injectable()
export class UserRepository implements IUserRepository{
  getAllUsers(): User[] {
    const filePath = join(process.cwd(), 'src', 'data', 'users.json');
    const raw = JSON.parse(readFileSync(filePath, 'utf8'));

    return raw.map((el) => new User(el.id, el.name, el.age));
  }
}
