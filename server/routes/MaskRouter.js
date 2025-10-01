
const router = require('express').Router();

const maskGetValidation = require('../middlewares/Mask');

router.get('/maskget', maskGetValidation, (req, res) => {
    console.log("req.user");
    res.status(200).json([
            {
            name:"nikita",
            mask:"50"
        }
        ])
});

module.exports = router;