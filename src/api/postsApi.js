import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

const API = process.env.REACT_APP_API || "http://localhost:3005";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: retry(fetchBaseQuery({ baseUrl: API }), {
    maxRetries: 2,
  }),
  keepUnusedDataFor: 60,

  refetchOnMountOrArgChange: true,
  refetchOnFocus: true,
  refetchOnReconnect: true,

  tagTypes: ["Posts"],

  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
      // keepUnusedDataFor: 3,
      extraOptions: { maxRetries: 3 },
      providesTags: ["Posts"],
    }),
    getPostById: builder.query({
      query: (postId) => "/posts/" + postId,
      providesTags: ["Posts"],
    }),
    addNewPost: builder.mutation({
      query: (newPost) => ({
        url: "/posts",
        method: "post",
        body: newPost,
      }),
      invalidatesTags: ["Posts"],
      extraOptions: { maxRetries: 0 },
    }),
  }),
});

export const {
  useGetPostsQuery,
  useLazyGetPostsQuery,
  useGetPostByIdQuery,
  useAddNewPostMutation,
} = postsApi;
