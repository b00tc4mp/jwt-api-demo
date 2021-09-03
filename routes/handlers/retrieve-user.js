const { retrieveUser } = require('../../logic')
const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process

module.exports = async (req, res) => {
    try {
        const { headers: { authorization } } = req

        const token = authorization.split(' ')[1]

        const { sub: id } = jwt.verify(token, JWT_SECRET)

        const user = await retrieveUser(id)

        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}