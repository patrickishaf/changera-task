import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const githubApi = createApi({
    reducerPath: 'githubApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/'}),
    endpoints: (builder) => ({
        authorizeUser: builder.query({
            query: () => 'login/oauth/authorize'
        }),
        getAccessToken: builder.query({
            query: (body) => {
                return ({
                    url: 'login/oauth/access_token',
                    method: 'POST',
                    body: body,
                })
            }
        }),
        getProfile: builder.query({
            query: (username) => {
                return {
                    url: `users/${username}`,
                    method: 'GET',
                }
            }
        }),
        getRepositories: builder.query({
            query: (username) => `users/${username}/repos`
        }),
        getUserProfile: builder.query({
            query: () => 'user'
        }),
        getUserRepos: builder.query({
            query: () => 'user/repos'
        }),
    }),
});

export const { 
    useAuthorizeUserQuery,
    useGetAccessTokenQuery,
    useGetProfileQuery,
    useGetRepositoriesQuery,
    useGetUserProfileQuery,
    useGetUserReposQuery 
} = githubApi;