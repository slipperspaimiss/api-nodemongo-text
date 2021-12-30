const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  
  res.send('这是我的stu');
})

module.exports ={ router}