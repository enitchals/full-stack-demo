import { useState } from 'react'
import { useAddTaskMutation } from '../store/taskSlice'
import '../App.css'

function TaskForm() {
  const [task, setTask] = useState('')
  const [addTask] = useAddTaskMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task)
    setTask('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Task:
          <input type="text" value={task} onChange={(e) => setTask(e.target.value)}/>
        </label>
        <button>Add Task</button>
      </form>
    </>
  )
}

export default TaskForm
