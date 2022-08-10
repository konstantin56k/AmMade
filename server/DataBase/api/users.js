const app = require('../../server.js')
const {models: {User}} = require('../models/User.js');

router.get('/', async (req, res, next) => {
    try {
        const users = await User.findAll()
        res.send(users)
    } catch (err) {
        next(err)
    }
});