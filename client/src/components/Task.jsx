import '../App.css'
import './task.css'
import { useToggleTaskMutation, useDeleteTaskMutation } from '../store/taskSlice'

function Task({task}) {
  const [toggleTask] = useToggleTaskMutation()
  const [deleteTask] = useDeleteTaskMutation()


  const toggle = async() => {
    await toggleTask(task.id)
  }

  const deleteHandler = () => {
    deleteTask(task.id)
  }

  return (
    <div className={task.done ? 'task done' : 'task todo'} onClick={toggle}>
      <button onClick={toggle}>√</button>
      {task.task}
      <div onClick={deleteHandler} >remove</div>
    </div>
  )
}

export default Task
