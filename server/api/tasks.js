const router = require('express').Router();
const prisma = require('../prisma');
module.exports = router;

// GET request to /api/tasks/
router.get('/', async (req, res, next) => {
  try{
    // find and return everything in the task table
    const tasks = await prisma.task.findMany()
    res.json(tasks)
  } catch(err){
    next(err)
  }
})

// POST request to /api/tasks/
router.post('/', async(req, res, next) => {
  try{
    // make a new task based on the request body and return the new task
    const newTask = await prisma.task.create({data: req.body})
    res.json(newTask)
  } catch(err){
    next(err)
  }
})

// PUT request to /api/tasks/toggle/:id
router.put('/toggle/:id', async(req, res, next) => {
  try{
    const id = +req.params.id // make sure it's a number, not a string
    // find the task to update by ID
    const task = await prisma.task.findUnique({where: {id}})
    // if the task doesn't exist, return a 404 error
    if (!task){
      return next({
        status: 404,
        message: 'Could not find that task'
      })
    }
    // if the task does exist, update it
    const updatedTask = await prisma.task.update({
      where: {id},
      // set the new 'done' status to the opposite of what it currently is
      data: {done: !task.done}
    })
    // send back the updated task
    res.json(updatedTask)
  } catch(err){
    next(err)
  }
})

// DELETE request to /api/tasks/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const id = +req.params.id; // make sure it's a number, not a string
    // find the task to delete by ID
    const task = await prisma.task.findUnique({ where: { id } });
    // if the task doesn't exist, return a 404 error
    if (!task) {
      return next({
        status: 404,
        message: `Could not find task with id ${id}.`,
      });
    }
    // if the task does exist, delete it
    await prisma.task.delete({ where: { id } });
    // send back a success code
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
