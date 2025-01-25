import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const baseURL = "http://localhost:8000/api"


export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: baseURL}),
    endpoints: (builder) => ({
      getCategories: builder.query({
        query: () => "/categories",
        providesTags:['categories']
      }),

      getLabels: builder.query({
        query: () => "/labels",
        providesTags: ['transaction'],

      }),


    //   creating new users
      addTransaction: builder.mutation({
        query: (initialTransaction) => ({
            url: "/transactions",
            method: "POST",
            body: initialTransaction
        }),
        invalidatesTags: ['transaction'],
      }),

    //   deleting
      deleteTransaction: builder.mutation({
        query: (recordId) => ({
            url: "/transactions",
            method: "DELETE",
            body: recordId
        }),
        invalidatesTags:['transaction']

      }),
      

    }),
  })
  
  
  export default apiSlice;