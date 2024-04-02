const express = require('express');
const router = express.Router();
const blogController = require('../controller');

router.get('/', blogController.getPosts);
router.post('/create_category', blogController.createCategory);
router.get('/fetch_category', blogController.fetchAllCategory);
router.get('/fetch_category_by_id/:id', blogController.fetchCategoryByID);
router.post('/update_category', blogController.updateCategory);
router.get('/delete_category/:id', blogController.deleteCategory);
router.post('/create_tag', blogController.createTag);
router.get('/fetch_tag', blogController.fetchAllTag);
router.get('/fetch_tag_by_id/:id', blogController.fetchTagByID);
router.post('/update_tag', blogController.updateTag);
router.get('/delete_tag/:id', blogController.deleteTag);
  
module.exports = router;
