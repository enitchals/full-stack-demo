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
    }
  }
})

export const {addTask} = taskSlice.actions

export default taskSlice.reducer
