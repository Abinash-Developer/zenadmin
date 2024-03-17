const express = require('express');
const router = express.Router();
const blogController = require('../controller');

router.get('/', blogController.getPosts);
  
module.exports = router;
