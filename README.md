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