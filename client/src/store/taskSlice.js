import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const tasksApi = createApi({
  reducerPath: 'tasks',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api'
  }),
  endpoints: (builder) => ({
    // RTK Query for getting all tasks
    getTasks: builder.query({
      query: () => "/tasks",
      providesTags: ["Tasks"]
    }),
    // RTK Query Mutation for toggling the 'done' status of a task by ID
    toggleTask: builder.mutation({
      query: (taskId) => ({
        url: `/tasks/toggle/${taskId}`,
        method: 'PUT'
        // normally we would probably send a body in a PUT
      }),
      invalidatesTags: ["Tasks"]
    }),
    // RTK Query Mutation for adding a new task to the list
    addTask: builder.mutation({
      query: (task) => ({
        url: `/tasks/`,
        method: "POST",
        body: {task, done: false}
      }),
      invalidatesTags: ["Tasks"]
    }),
    // RTK Query Mutation for deleting a task by ID
    deleteTask: builder.mutation({
      query: (taskId) => ({
        url: `/tasks/${taskId}`,
        method: "DELETE"
      }),
      invalidatesTags: ["Tasks"]
    })
  })
})

export const {useGetTasksQuery, useToggleTaskMutation, useAddTaskMutation, useDeleteTaskMutation} = tasksApi
