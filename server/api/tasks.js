const router = require('express').Router();
const prisma = require('../prisma');
module.exports = router;

router.get('/', async (req, res, next) => {
  try{
    const tasks = await prisma.task.findMany()
    res.json(tasks)
  } catch(err){
    next(err)
  }
})
