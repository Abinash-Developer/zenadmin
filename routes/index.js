const express = require('express');
const router = express.Router();
const blogController = require('../controller');

router.get('/', blogController.getPosts);
router.post('/create_category', blogController.createCategory);
  
module.exports = router;
