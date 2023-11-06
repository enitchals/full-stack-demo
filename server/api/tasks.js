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

router.put('/toggle/:id', async(req, res, next) => {
  try{
    const id = +req.params.id // make it a number
    const task = await prisma.task.findUnique({where: {id}})
    if (!task){
      return next({
        status: 404,
        message: 'Could not find that task'
      })
    }
    const updatedTask = await prisma.task.update({
      where: {id},
      data: {done: !task.done}
    })
    res.json(updatedTask)
  } catch(err){
    next(err)
  }
})
