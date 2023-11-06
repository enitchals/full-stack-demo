const router = require('express').Router();
module.exports = router;

const mockData = [
  {
    task: 'make react components',
    done: true
  },
  {
    task: 'make redux store',
    done: false
  },
  {
    task: 'make database',
    done: false
  }
]

router.get('/', (req, res, next) => {
  res.send(mockData)
})
