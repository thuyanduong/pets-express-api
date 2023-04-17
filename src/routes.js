const express = require('express');
const petsController = require('./controllers/pets');
const ownersController = require('./controllers/owners');

const router = express.Router();

// CRUD routes on Owners
router.post('/api/owners/', ownersController.create)
router.get('/api/owners/', ownersController.list)
router.get('/api/owners/:id', ownersController.find)
router.patch('/api/owners/:id', ownersController.update)
router.delete('/api/owners/:id', ownersController.destroy)

// CRUD routes on Pets
router.post('/api/pets/', petsController.create)
router.get('/api/pets/', petsController.list)
router.get('/api/pets/:id', petsController.find)
router.patch('/api/pets/:id', petsController.update)
router.delete('/api/pets/:id', petsController.destroy)

//Relationship
router.get('/api/owners/:ownerId/pets', ownersController.getPets) //return the owner and all of their pets

module.exports = router