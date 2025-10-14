const express = require('express');
const router = express.Router();
const hotelsData = require('../data/Hotels'); 

router.get('/', (req, res) => {
  res.status(200).json(hotelsData);
});

module.exports = router;