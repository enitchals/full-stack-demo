import { useState } from 'react'
import {useDispatch} from 'react-redux'
import '../App.css'
import { addTask } from '../store/taskSlice'

function TaskForm() {
  const [task, setTask] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(task))
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
