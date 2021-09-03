const express = require('express')
const { registerUser, authenticateUser, retrieveUser } = require('./handlers')

const router = new express.Router()
const jsonBodyParser = express.json()

router.post('/', jsonBodyParser, registerUser)

router.post('/auth', jsonBodyParser, authenticateUser)

router.get('/', retrieveUser)

module.exports = router