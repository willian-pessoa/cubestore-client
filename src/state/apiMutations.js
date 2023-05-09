import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const apiMutations = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "apiMutations",
  tagTypes: ["Login"],
  endpoints: (build) => ({
    postLogin: build.mutation({
      query: (login) => ({
        url: "general/login",
        method: "POST",
        body: login
      }),
      invalidatesTags: ["Login"]
    })
  })
})

export const {
  usePostLoginMutation
} = apiMutations