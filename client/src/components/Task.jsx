import '../App.css'
import './task.css'
import { useToggleTaskMutation } from '../store/taskSlice'

function Task({task}) {
  const [toggleTask] = useToggleTaskMutation()

  const toggle = async() => {
    await toggleTask(task.id)
  }

  return (
    <div className={task.done ? 'done' : 'todo'} onClick={toggle}>{task.task}</div>
  )
}

export default Task
