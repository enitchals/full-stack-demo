import {configureStore} from '@reduxjs/toolkit'
import {tasksApi} from './taskSlice'

const store = configureStore({
  reducer: {
    tasks: tasksApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tasksApi.middleware)
})

export default store;
