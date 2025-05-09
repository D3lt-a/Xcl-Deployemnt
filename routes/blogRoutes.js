const express = require('express');
const { getAllBlogs, getBlog, createBlog, deleteBlog } = require('../controller/blogController');
const router = express.Router()

router.get('/', getAllBlogs)
router.get('/:id', getBlog)
router.post('/', createBlog)
router.delete('/:id', deleteBlog)

module.exports = router