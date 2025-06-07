Test Task: GRPC Filtering Service
Objective: Develop a pair of NestJS microservices to demonstrate basic GRPC communication. The Producer service will read a JSON file containing a list of users, filter users based on age criteria (age > 18), and send the filtered list to the Consumer service. The Consumer service will invoke the Producer, receive the filtered data, and log it to the console.
Requirements:
Two NestJS microservices:
Producer: Responsible for reading, filtering, and returning user data.
Consumer: Responsible for calling the Producer and displaying the filtered results.
Communication between services must be implemented using GRPC.
The Producer service must:
Read a JSON file with user data.
Filter users where age > 18.
Return the filtered list of users.
The Consumer service must:
Request the filtered data from the Producer.
Log the filtered users to the console.
Details:
Producer Service
JSON File: The file should be located in the src/data/users.json directory and contain the following content: [
  { "id": 1, "name": "Alice", "age": 25 },
  { "id": 2, "name": "Bob", "age": 17 },
  { "id": 3, "name": "Charlie", "age": 30 },
  …………………………………………..
]

GRPC API:
Service Name: UserService
RPC Method: GetFilteredUsers
Proto File: Define the API schema in a users.proto file with the syntax = "proto3";
Logic:
Read the users.json file.
Filter users with age > 18.
Return the filtered users.
Consumer Service
GRPC Client:
Use the same users.proto file to define the client-side API.
Connect to the Producer service and call GetFilteredUsers.
Logic:
Display the filtered users in the console.
Expected Console Output
When running the Consumer service, the console should display:
Filtered Users: [
  { "id": 1, "name": "Alice", "age": 25 },
  { "id": 3, "name": "Charlie", "age": 30 }
]

Submission Requirements:
Include the complete source code for both Producer and Consumer services.
Ensure the users.json file is included in the Producer service.
Provide instructions on how to run both services.
Bonus:
Use Docker to containerize both services and provide a docker-compose.yml file to simplify running the services.