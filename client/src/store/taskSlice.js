import {createSlice} from '@reduxjs/toolkit'

const mockData = [
  {
    task: 'make react components',
    done: true
  },
  {
    task: 'make redux store',
    done: false
  },
  {
    task: 'make database',
    done: false
  }
]

const taskSlice = createSlice({
  name: 'tasks',
  initialState: mockData,
  reducers: {
    addTask: (state, {payload}) => {
      return state.concat([{task: payload, done: false}])
    },
    toggleTask: (state, {payload}) => {
      // find the index of the task
      const indexOfTask = state.findIndex(t => t.task === payload)
      // determine the current status of the task
      const currentStatus = state[indexOfTask].done
      // update the task
      const updatedTask = {task: payload, done: !currentStatus}
      // create and return the updated task array
      if (indexOfTask === 0){
        return [updatedTask].concat(state.slice(1))
      } else {
        return state.slice(0,indexOfTask).concat(updatedTask).concat(state.slice(indexOfTask+1))
      }
    }
  }
})

export const {addTask, toggleTask} = taskSlice.actions

export default taskSlice.reducer
