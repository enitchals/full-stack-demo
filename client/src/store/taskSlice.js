import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const tasksApi = createApi({
  reducerPath: 'tasks',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api'
  }),
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/tasks",
      providesTags: ["Tasks"]
    }),
    toggleTask: builder.mutation({
      query: (taskId) => ({
        url: `/tasks/toggle/${taskId}`,
        method: 'PUT'
        // normally we would probably send a body in a PUT
      }),
      invalidatesTags: ["Tasks"]
    })
  })
})

export const {useGetTasksQuery, useToggleTaskMutation} = tasksApi
