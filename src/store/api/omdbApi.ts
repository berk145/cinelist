import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { isNil, omitBy } from 'lodash';

import { API_KEY } from '../../config/omdb';

interface ISearchParamObject {
  [x: string]: any;
}

export const omdbApi = createApi({
  reducerPath: 'omdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.omdbapi.com/' }),
  endpoints: (builder) => ({
    getMoviesByTitle: builder.query<
      SearchResult,
      { searchTerm: string; year: string | undefined; type: string | undefined; page: number }
    >({
      query: ({ searchTerm, year, page, type }) => {
        console.log('page', page);

        const searchParamObject: ISearchParamObject = {
          s: searchTerm,
          y: year,
          page,
          type,
        };
        console.log('searchParamObject', searchParamObject);

        const searchParam = new URLSearchParams(omitBy(searchParamObject, isNil));
        console.log('searchParam', searchParam.toString());

        return `?apikey=${API_KEY}&${searchParam.toString()}`;
      },
    }),
    getMoviesByImdbID: builder.query<MovieDetail, { imdbID: string }>({
      query: ({ imdbID }) => `?apikey=${API_KEY}&i=${imdbID}&plot=full`,
    }),
  }),
});

export const { useGetMoviesByTitleQuery, useGetMoviesByImdbIDQuery } = omdbApi;
