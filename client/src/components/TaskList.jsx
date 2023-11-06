import '../App.css'
import {useSelector} from 'react-redux'
import Task from './Task'

function TaskList() {

  const tasks = useSelector(state => state.tasks)
  console.log(tasks)

  return (
    <>
      {tasks.map((t,i) => <Task task={t} key={`${t.task}-${i}`} />)}
    </>
  )
}

export default TaskList
