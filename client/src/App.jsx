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
        <Route path="/tasks" element={<TaskList/>}/>
        <Route path="/new" element={<TaskForm/>}/>
      </Routes>
    </>
  )
}

export default App
