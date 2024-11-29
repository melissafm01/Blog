const express = require('express');
const router = express.Router();
const { listarBlogs } = require('../controllers/blogController');



router.get('/blogs' , listarBlogs);


module.exports = router;