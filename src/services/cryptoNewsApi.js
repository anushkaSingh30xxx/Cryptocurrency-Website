import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '7f2192b118msh044eb567d9cd2b3p13afe5jsn17221e539b4e',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }

  const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

  const createRequest= (url) => ({url,headers:cryptoNewsHeaders});

  export const cryptoNewsApi= createApi({
    reducePath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) =>({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        }),
    }),

});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;