// This is no longer used in this project!
// It was a temporary implementation when our app was frontend-only. It was replaced by the new taskSlice.js file, which has an RTK Query API slice in it.

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
        // if the one we're updating is the first task in the array, we need to update the first one
        return [updatedTask].concat(state.slice(1))
      } else {
        // if the one we're updating is somewhere in the middle/end, we need to add it into the correct spot
        return state.slice(0,indexOfTask)
          .concat(updatedTask)
          .concat(state.slice(indexOfTask+1))
      }
    }
  }
})

export const {addTask, toggleTask} = taskSlice.actions

export default taskSlice.reducer
