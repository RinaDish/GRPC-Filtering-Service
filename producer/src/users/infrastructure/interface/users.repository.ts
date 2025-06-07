import { User } from '../../domain/types/user.type';

export const USER_REPOSITORY_TOKEN = Symbol('USER_REPOSITORY_TOKEN');

export interface IUserRepository {
  getAllUsers(): User[];
}
