const ensureAuthenticated = require('../middlewares/Product');
const router = require('express').Router();



router.get('/', ensureAuthenticated, (req, res) => {
    res.status(200).json([
        {
            name:"mobile",
            price:1000
        },
        {
            name:"iPhone",
            price:150400
        }
    ])
});

module.exports = router;