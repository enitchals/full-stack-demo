import '../App.css'
import './task.css'

function Task({task}) {

  // Task is used in TaskList to represent a single Task

  return (
    <div className={task.done ? 'done' : 'todo'}>{task.task}</div>
  )
}

export default Task
