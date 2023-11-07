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
    <>
    <button onClick={deleteHandler}>X</button>
    <div className={task.done ? 'done' : 'todo'} onClick={toggle}>{task.task}</div>
    </>
  )
}

export default Task
