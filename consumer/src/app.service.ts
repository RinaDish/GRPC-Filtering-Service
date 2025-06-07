import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { Observable } from 'rxjs';

interface User {
  id: number;
  name: string;
  age: number;
}

interface UserList {
  users: User[];
}

interface UserServiceGrpc {
  GetFilteredUsers(data: {}): Observable<UserList>;
}

@Injectable()
export class AppService implements OnModuleInit {
  @Client({
    transport: Transport.GRPC,
    options: {
      package: 'user',
      protoPath: join(process.cwd(), 'src', 'proto', 'users.proto'),
      url: 'producer:50051',
    },
  })
  private client: ClientGrpc;

  private userService: UserServiceGrpc;

  onModuleInit() {
    this.userService = this.client.getService<UserServiceGrpc>('UserService');
  }

  async fetchAndLogUsers() {
    const result = await this.userService.GetFilteredUsers({}).toPromise();
    console.log('Filtered Users:', result.users);
  }
}
