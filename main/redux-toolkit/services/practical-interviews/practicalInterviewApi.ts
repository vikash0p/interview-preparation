import * as types from '../../../types/practical-interview.types';
import { baseApi } from '../baseApi';
import { buildQueryString } from './practicalInterviewUtils';

export const practicalInterviewApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    // 1️. Get All Interviews by Technology (optional filters)
    getInterviewsByTechnology: builder.query< types.IPracticalInterviewApiResponse, types.IPracticalInterviewsQueryParams>({
      query: ({ technology, category, difficulty }) => {
        const queryStr = buildQueryString({ category, difficulty });

        return {
          url: `/practical-interviews/technology/${technology}?${queryStr}`,
          method: 'GET',
        };
      },
      providesTags: ['PracticalInterview'],
    }),

    // 2 Get Interview by Technology + Slug
    getInterviewBySlug: builder.query<types.IPracticalInterviewSingleApiResponse, { technology: string; slug: string }>(
      {
        query: ({ technology, slug }) => `/practical-interviews/technology/${technology}/slug/${slug}`,
        providesTags: ['PracticalInterview'],
      }
    ),

    // 3️ Get All Slugs by Technology
    getAllSlugsByTechnology: builder.query<types.IPracticalInterviewSlugsResponse, string>({
      query: technology => `/practical-interviews/technology/${technology}/get-all-slug`,
      providesTags: ['PracticalInterview'],
    }),

    // 4️ Get All category by Technology
    getAllCategoriesByTechnology: builder.query<types.IPracticalInterviewCategoryResponse, string>({
      query: technology => `/practical-interviews/technology/${technology}/get-all-category`,
      providesTags: ['PracticalInterview'],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetInterviewsByTechnologyQuery,
  useGetInterviewBySlugQuery,
  useGetAllSlugsByTechnologyQuery,
  useGetAllCategoriesByTechnologyQuery,
} = practicalInterviewApi;
