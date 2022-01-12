## Description
This project implements a rest call to https://jsonplaceholder.typicode.com/todos through a class injected using InversifyJS.

## Execution
To run execute the following comands:
First,
```
$ npm run dev
```
To run the Express server.
And then,
```
$ curl http://localhost:7000/api/todos/ -i
```
To call the rest api.

## Tests
Two tests have been implemented using jest. The first one validates the injection of the service class and the second one
validates a mock response from the http call.

To execute the tests run:
```
$ npm test
```