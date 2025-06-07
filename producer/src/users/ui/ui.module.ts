import { Module } from '@nestjs/common';
import { UserController } from './grpc/users.controller';
import { DomainModule } from '../domain/domain.module';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { ServiceModule } from '../service/service.module';

@Module({
  providers: [UserController],
  imports: [DomainModule, ServiceModule, InfrastructureModule],
  controllers: [UserController],
})
export class UiModule {}
