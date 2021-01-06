# Docker-NodeJS-MySQL-VueJS
Understanding the basics of dockerizing a node js, MySQL and vue js application with microservices architecture in mind

Links:
  * https://martinfowler.com/microservices/
  * https://wkrzywiec.medium.com/how-to-run-database-backend-and-frontend-in-a-single-click-with-docker-compose-4bcda66f6de
  * https://www.digitalocean.com/community/tutorials/how-to-set-up-vue-js-authentication-and-route-handling-using-vue-router
  * https://itnext.io/lets-dockerize-a-nodejs-express-api-22700b4105e4
  * https://dev.to/juliest88/how-to-build-rest-api-with-nodejs-express-and-mysql-31jk
  * https://blog.logrocket.com/implementing-oauth-2-0-in-node-js/

## Rememeber to create .env file for each part of the application:
  * API:
	- NODE_ENV
	- APP_PORT
	- DB_HOST
	- DB_USER
	- DB_PASSWORD
	- DB_DATABASE
  * Application 
	- BASE_URL  


## What will we create? A Todo application - (Weekdo)
```
What do we need?
  - Dockerize : server, database and frontend (microservice architercture)
    - [ ] : create dockerfiles for each part
        - [x] : server
        - [x] : vue app
        - [ ] : database
    - [ ] : create docker images for each part
        - [x] : server
        - [x] : vue app
        - [ ] : database
    - [ ] : create docker-compose, to run all containers together
  - Server API:
    - [x] : basic setup, with node and typescript support
    - [ ] : Testing - with Mocha
      - [x] : add Mocha to project
      - [x] : add assert to project
    - [ ] : express
        - [ ] : routes
          - [x] : login route
          - [x] : get todoes route
          - [x] : set todoes route
          - [ ] : update todoes route
          - [ ] : delete todoes route
        - [ ] : controllers
          - [ ] : todo controller
          - [ ] : login controller
        - [x] : bodyParser
    - [ ]: authentication
        - [ ] : Use and learn OAuth - authentication
    - [ ] : mySql connector
  - Database
    - [ ] : mysql database
  - Vue Js - frontend application
    - [x] : basic setup with vue cli and typescript support, using Vue 3 - composition API
        - [x] : vuex
        - [x] : vue router
          - [x] : home page
          - [x] : login page
          - [x] : todoes page
  ...
```
