import { UserRepository } from '../../infrastructure/users/users.repository';
import { User } from '../../domain/types/user.type';
import { IUserRepository, USER_REPOSITORY_TOKEN } from 'src/users/infrastructure/interface/users.repository';
import { Inject } from '@nestjs/common';

export class UserService {
    constructor(
        @Inject(USER_REPOSITORY_TOKEN)
        private readonly repo: IUserRepository) { }

    getAdultUsers(): User[] {
        const users = this.repo.getAllUsers();

        return users.filter((user) => user.isAdult());
    }
}
