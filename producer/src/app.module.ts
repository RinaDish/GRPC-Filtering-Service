import { Module } from '@nestjs/common';
import { UserController } from './users/ui/grpc/users.controller';
import { UserService } from './users/service/users/users.service';
import { UserRepository } from './users/infrastructure/users/users.repository';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
})
export class AppModule {}
