## Set Up Instructions
1. `npm install`.
2. Create a pg database called `pets`.  
3. `knex migrate:latest`.
4. `knex seed:run`.
5. `npm start` or `npm run dev`.

### Routes
* `POST http://127.0.0.1:8080/api/owners`   
    - body: `{"name": "someName"}`
* `GET http://127.0.0.1:8080/api/owners`
* `GET http://127.0.0.1:8080/api/owners/:id`
* `PATCH http://127.0.0.1:8080/api/owners/:id`
    - body: `{"name": "updated"}`
* `DELETE http://127.0.0.1:8080/api/owners/:id`
* `POST http://127.0.0.1:8080/api/pets`
    - body: `{"name": "Zuko", "species": "dog", "owner_id": 1}`
* `GET http://127.0.0.1:8080/api/pets/`
* `GET http://127.0.0.1:8080/api/pets/:id`
* `PATCH http://127.0.0.1:8080/api/pets/:id`
    - body: `{"name": "updated", "species": "cat", "owner_id" : 2}`
* `DELETE http://127.0.0.1:8080/api/pets/:id`
* `GET http://127.0.0.1:8080/api/owners/:ownerId/pets`
