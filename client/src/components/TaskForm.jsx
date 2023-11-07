import { useState } from 'react'
import { useAddTaskMutation } from '../store/taskSlice'
import '../App.css'

function TaskForm() {
  // this is a controlled form, so we're using local state in the component
  const [task, setTask] = useState('')
  // use this mutation hook for adding a task
  const [addTask] = useAddTaskMutation();

  // event handler for form submission
  const handleSubmit = (e) => {
    // make sure form submission doesn't redirect the page
    e.preventDefault();
    // call the function created by our mutation hook
    addTask(task)
    // reset our local state for the form
    setTask('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Task:
          {/* the value and onChange properties work with local state to make this a controlled input */}
          <input type="text" value={task} onChange={(e) => setTask(e.target.value)}/>
        </label>
        <button>Add Task</button>
      </form>
    </>
  )
}

export default TaskForm
