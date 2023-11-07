const express = require("express")
const router = express.Router();
module.exports = router;

// this route was just made to test our our localhost:3000/api route
router.get('/', (req, res) => {
  res.send("API reached!")
})

// requests to localhost:3000/api/tasks will be handled by the routes in tasks.js
router.use('/tasks', require('./tasks'))
