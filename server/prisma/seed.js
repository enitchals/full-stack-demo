const prisma = require('../prisma')

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
