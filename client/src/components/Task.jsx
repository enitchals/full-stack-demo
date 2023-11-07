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
    <div className='task'>
      <button onClick={toggle} className='complete-task'>✔</button>
        <div className={task.done ? 'done' : 'todo'}>
          {task.task}
        </div>
      <div onClick={deleteHandler} className='delete-task'>remove</div>
    </div>
  )
}

export default Task
