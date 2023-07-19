import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders={
    'X-RapidAPI-Key': '7f2192b118msh044eb567d9cd2b3p13afe5jsn17221e539b4e',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl= 'https://coinranking1.p.rapidapi.com/';

const createRequest= (url) => ({url, headers: cryptoApiHeaders});

export const cryptoApi= createApi({
    reducePath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) =>({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?Limit=${count}`),
        }),

        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
          }),
      
          // Note: Change the coin price history endpoint from this - `coin/${coinId}/history/${timeperiod} to this - `coin/${coinId}/history?timeperiod=${timeperiod}`
          getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
          }),
      
          // Note: To access this endpoint you need premium plan
          getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
          }),
    }),

})

export const { 
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetExchangesQuery,
    useGetCryptoHistoryQuery,
}= cryptoApi;