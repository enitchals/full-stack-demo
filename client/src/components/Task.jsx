import '../App.css'

function Task({task}) {

  // Task is used in TaskList to represent a single Task

  return (
    <div>{task.task}</div>
  )
}

export default Task
