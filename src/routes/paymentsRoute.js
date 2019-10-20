const express = require('express');
const routes = express.Router();

const paymentsController = require('../controllers/paymentsController');

routes.get('/checkout/:id/:email/:description/:amount', paymentsController.checkout)

routes.get('/success', (req, res) => {
    return res.render('success_screen')
})

routes.get('/pending', (req, res) => {
    return res.render('pending_screen')
})

routes.get('/failure', (req, res) => {
    return res.render('failure_screen')
})

module.exports = routes;