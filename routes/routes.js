var express = require('express')
var routes = express.Router()
const controllers = require('../controllers')

// Create a new Customer
routes.post('/customers', controllers.customerController.create)

// Retrieve all Customers
routes.get('/customers', controllers.customerController.findAll)

// Retrieve a single Customer with customerId
routes.get('/customers/:customerId', controllers.customerController.findOne)

// Update a Customer with customerId
routes.put('/customers/:customerId', controllers.customerController.update)

// Delete a Customer with customerId
routes.delete('/customers/:customerId', controllers.customerController.delete)

// Create a new Customer
routes.delete('/customers', controllers.customerController.deleteAll)
module.exports = routes
