import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';

const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/api` ;




 const baseQuery = fetchBaseQuery({
  baseUrl,
  credentials: 'include',
});

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQuery as BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
  tagTypes: ['PracticalInterview', 'User', 'MockInterview'],
  endpoints: () => ({}), // Extended in feature-specific APIs
});

export type BaseApi = typeof baseApi;
