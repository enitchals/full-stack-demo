import '../App.css'
import {useSelector} from 'react-redux'
import Task from './Task'
import { useGetTasksQuery } from '../store/taskSlice'

function TaskList() {

  const {data, isError, isLoading} = useGetTasksQuery();

  if (isLoading){
    return (<p>Loading . . .</p>)
  }

  if (isError){
    return (<p>Error . . .</p>)
  }

  console.log(data)

  return (
    <>
      {data.map((t,i) => <Task task={t} key={`${t.task}-${i}`} />)}
    </>
  )
}

export default TaskList
