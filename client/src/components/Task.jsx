import '../App.css'
import './task.css'
import { useToggleTaskMutation, useDeleteTaskMutation } from '../store/taskSlice'

function Task({task}) {
  // use the hooks to create the mutation functions we'll use
  const [toggleTask] = useToggleTaskMutation()
  const [deleteTask] = useDeleteTaskMutation()

  // click handler for toggling task 'done' status
  const toggle = async() => {
    await toggleTask(task.id)
  }

  // click handler for deleting a task from the list
  const deleteHandler = () => {
    deleteTask(task.id)
  }

  return (
    <div className='task'>
      <button onClick={toggle} className='complete-task'>✔</button>
        {/* use the 'done' status to conditionally determine styling */}
        <div className={task.done ? 'done' : 'todo'}>
          {task.task}
        </div>
        {/* I used text instead of a button for deletion for style reasons */}
      <div onClick={deleteHandler} className='delete-task'>remove</div>
    </div>
  )
}

export default Task
