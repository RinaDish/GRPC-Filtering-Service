import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UserService } from '../../service/users/users.service';
import { UserRepository } from '../../infrastructure/users/users.repository';

@Controller()
export class UserController {
  private readonly userService = new UserService(new UserRepository());

  @GrpcMethod('UserService', 'GetFilteredUsers')
  getFilteredUsers(data: any, metadata: any) {
    const users = this.userService.getAdultUsers();

    return { users };
  }
}
