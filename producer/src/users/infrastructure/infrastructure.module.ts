import { Module } from '@nestjs/common';
import { DomainModule } from '../domain/domain.module';
import { UserRepository } from './users/users.repository';
import { IUserRepository, USER_REPOSITORY_TOKEN } from './interface/users.repository';

@Module({
    providers: [{
        provide: USER_REPOSITORY_TOKEN,
        useClass: UserRepository,
    }],
    imports: [DomainModule],
    exports: [{
        provide: USER_REPOSITORY_TOKEN,
        useClass: UserRepository,
    }],
})
export class InfrastructureModule { }
