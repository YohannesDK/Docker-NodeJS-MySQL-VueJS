# Docker-NodeJS-MySQL-VueJS
Understanding the basics of dockerizing a node js, MySQL and vue js application with microservices architecture in mind!

Links:
  * https://martinfowler.com/microservices/
  * https://wkrzywiec.medium.com/how-to-run-database-backend-and-frontend-in-a-single-click-with-docker-compose-4bcda66f6de
## What will we create? A Todo application - (Weekdo)
```
What do we need?
  - Dockerize : server, database and frontend (microservice architercture)
    - [ ] : create dockerfiles for each part
        - [ ] : server
        - [x] : vue app
        - [ ] : database
    - [ ] : create docker images for each part
        - [ ] : server
        - [x] : vue app
        - [ ] : database
    - [ ] : create docker-compose, to run all containers together
  - Server API:
    - [x] : basic setup, with node and typescript support
    - [ ] : Testing - with Mocha
      - [ ] : add Mocha to project
      - [ ] : add assert to project
    - [ ] : express
        - [ ] : routes
          - [ ] : login route
          - [ ] : get todoes route
          - [ ] : set todoes route
          - [ ] : update todoes route
          - [ ] : delete todoes route
        - [ ] : controllers
          - [ ] : todo controller
          - [ ] : login controller
        - [ ] : bodyParser
    - [ ]: authentication
    - [ ] : mySql connector
  - Database
    - [ ] : mysql database
  - Vue Js - frontend application
    - [x] : basic setup with vue cli and typescript support, using Vue 3 - composition API
        - [x] : vuex
        - [x] : vue router
          - [ ] : home page
          - [ ] : home login page
          - [ ] : todoes page
  ...
```
