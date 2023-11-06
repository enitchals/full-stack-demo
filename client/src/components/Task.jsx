import {useDispatch} from 'react-redux'
import { toggleTask } from '../store/taskSlice';
import '../App.css'
import './task.css'

function Task({task}) {
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleTask(task.task))
  }

  return (
    <div className={task.done ? 'done' : 'todo'} onClick={toggle}>{task.task}</div>
  )
}

export default Task
