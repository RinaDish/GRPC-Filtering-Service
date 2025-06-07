# GRPC Filtering Service
[TASK](./task.md)

It consists of two microservices written in NestJS, communicating over gRPC.

In production, it is assumed that the .proto file will be published as a shared npm package and imported into each service to ensure consistency.

## Producer Service
- Read the users.json file.
- Filter users with age > 18.
- Return the filtered users.

## Consumer Service
- Connect to the Producer service and call GetFilteredUsers.
- Display the filtered users in the console.

## How to Run

```bash
docker-compose up --build
```
