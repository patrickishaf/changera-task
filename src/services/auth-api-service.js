import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const githubAuthApi = createApi({
    reducerPath: 'githubAuthApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://github.com/login/oauth/',
        prepareHeaders: (headers, { getState }) => {
            headers.set('Access-Control-Allow-Origin', 'no-cors');
            headers.set('Access-Control-Allow-Headers', '*');
            return headers
        }
    }),
    endpoints: (builder) => ({
        requestAuth: builder.query({
            query: ({ redirectUri, state, login, allowSignup }) => {
                // console.log('QUERY OBJECT IN API SERVICE: ', { redirectUri, state, login, allowSignup })
                return `authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${redirectUri}&state=${state}&login=${login}&allow_signup=${allowSignup}`;
            },
        }),
        getAccessToken: builder.query({
            query: (body) => {
                return ({
                    url: 'access_token',
                    method: 'POST',
                    body: body,
                })
            },
        }),
    }),
});

export const { useRequestAuthQuery, useGetAccessTokenQuery } = githubAuthApi;