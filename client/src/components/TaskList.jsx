import '../App.css'
import Task from './Task'
import { useGetTasksQuery } from '../store/taskSlice'

function TaskList() {

  // destructure the data from the RTK query hook
  const {data, isError, isLoading} = useGetTasksQuery();

  // handle the case where the data is still loading
  if (isLoading){
    return (<p>Loading . . .</p>)
  }

  // handle the case where there's an error in the API call
  if (isError){
    return (<p>Error . . .</p>)
  }

  return (
    // turn our array of task data into a bunch of Task components
    <>
      {data.map((t,i) => <Task task={t} key={`${t.task}-${i}`} />)}
    </>
  )
}

export default TaskList
