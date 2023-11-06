const express = require("express")
const router = express.Router();
module.exports = router;

router.get('/', (req, res) => {
  res.send("API reached!")
})

router.use('/tasks', require('./tasks'))
