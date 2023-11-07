const prisma = require('../prisma')

// the same mock data we started with on the frontend
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

// seed function loops over the mock data and creates a task for each task in mockData
const seed = async() => {
  for (task of mockData){
    await prisma.task.create({data: task})
  }
}
seed()
  .then(async() => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect();
    process.exit(1)
  })
