import { Module } from '@nestjs/common';
import { UserService } from './users/users.service';
import { USER_REPOSITORY_TOKEN } from '../infrastructure/interface/users.repository';
import { UserRepository } from '../infrastructure/users/users.repository';

@Module({
      providers: [{
          provide: USER_REPOSITORY_TOKEN,
          useClass: UserRepository,
      }],
})
export class ServiceModule {}
