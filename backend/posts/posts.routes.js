const express = require('express');
const router = express.Router();
const PostsController = require('./posts.controller');
const checkAuth = require('../shared/check-auth');

router.get('', PostsController.getPosts);
router.get('/:id', PostsController.getPostById);
router.post('', checkAuth, PostsController.addPost);
router.delete('/:id', checkAuth, PostsController.deletePost);
router.put('/:id', checkAuth, PostsController.modifyPost);

module.exports = router;
