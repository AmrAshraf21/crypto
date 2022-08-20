import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '3d9fe4deafmshce6ff7d744cf74dp16038djsn2dbb266bb371',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const baseUrl = 'https://coinranking1.p.rapidapi.com'
const createRequest = (url) =>({url, headers:cryptoApiHeaders})


export const cryptoApi = createApi({

    reducerPath:"cryptoApi",
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos : builder.query({
            query:() => createRequest(`/coins`)
        }),
        getCryptoDetails: builder.query({
            query:(coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
            query:({coinId , timePeriod}) => createRequest(`/coin/${coinId}/history?timeperiod=${timePeriod}`)
        }),
        

    })
});

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery
} = cryptoApi
