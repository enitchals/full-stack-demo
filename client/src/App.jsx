import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {

  return (
    <>
      <h1>To Do List</h1>
      <nav>
        <Link to="/tasks">All Tasks</Link>
        <Link to="/new">Add Task</Link>
      </nav>
      <Routes>
        {/* display the TaskList component when the browser URL is at /tasks */}
        <Route path="/tasks" element={<TaskList/>}/>
        {/* display the TaskForm compoennt when the browser URL is at /new */}
        <Route path="/new" element={<TaskForm/>}/>
      </Routes>
    </>
  )
}

export default App
