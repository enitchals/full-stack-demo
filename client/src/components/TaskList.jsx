import '../App.css'
import Task from './Task'

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

function TaskList() {

  // TaskList should take an array of tasks and turn them into individual Task components

  return (
    <>
      {mockData.map((t,i) => <Task task={t} key={`${t.task}-${i}`} />)}
    </>
  )
}

export default TaskList
