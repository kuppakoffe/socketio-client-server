# Long Polling/Socket application

This applicaton consists of 2 parts, client and server.

Server will be listening on a port and client will connect to server on that port. By default server will be listening on port `3333` and client will also connect to server on the same port, we can change this behaviour by setting `process.env.PORT` variable while starting both client and server.
Client will be connecting to `localhost` by default, we can change this behaviour by setting `process.env.SERVER_HOST` env variable.

### Steps to start server

```bash
cd server
npm install
npm start
```


### Steps to start client
```bash
cd client
npm install
npm start
```

Client will start with asking 2 questions:
```bash
How many client to be created? 
```

```bash
What should be the polling interval in seconds? 
```

After providing details for both questions, code will start that many clients and periodically send data to server answered in polling interval.



## Example

Server
```bash
❯ npm start



info: Server listening on port 3333
info: Joining room 1943f674-15d9-482c-a3bf-7cda337d8931


```

Client
```bash
❯ npm start

How many client to be created? 5
What should be the polling interval in seconds? 10
info: Creating new client with id c6c90f31-86af-4beb-8c3b-cf797b97926e
info: Creating new client with id d9d1017a-5206-4f55-854a-f8b62629d019
info: Creating new client with id 1cc8f55b-9465-4621-9a30-ed32913f1e78
info: Creating new client with id e8285880-ab4e-415a-8f9b-8ef01e3b71b3
info: Creating new client with id d4e8294b-f578-48b6-96af-086588bf7d94
info: Connected to server channel this is for id: c6c90f31-86af-4beb-8c3b-cf797b97926e
info: Connected to server channel this is for id: d9d1017a-5206-4f55-854a-f8b62629d019
info: Connected to server channel this is for id: 1cc8f55b-9465-4621-9a30-ed32913f1e78
info: Connected to server channel this is for id: e8285880-ab4e-415a-8f9b-8ef01e3b71b3
info: Connected to server channel this is for id: d4e8294b-f578-48b6-96af-086588bf7d94
```