import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import apiDefaultConfig from '@src/@core/auth/api/apiDefaultConfig' 

export const apiUser = createApi({
    reducerPath: 'userApi',
    tagTypes:['allusers', 'user'],
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:3002/user/`
    }),
    endpoints: (builder) => ({
        login: builder.query({
            query: (data) => ({
                url: `login`,
                method: 'POST',
                body: {
                    usernameOrEmail: data.usernameOrEmail,
                    password: data.password
                }
            })
        }),
        getAllUsers: builder.query({
            query: () => ({
                url: `getAllUsers`,
                method: 'GET'
            }),
            providesTags: ['allusers']
        }),        
        getUserById: builder.query({
            query: (id) => ({
                url: `${id}`,
                method: 'GET'
            }),
            providesTags: ['user']
        }),
        createUser: builder.mutation({
            query: (data) => ({
                url: `createUser`,
                method: 'POST',
                body: {
                    user: data.user,
                    mailUser: data.mailUser,
                    password: data.password,
                    avatarLink: data.avatarLink,
                    status: data.status,
                    idTypeUser: data.idTypeUser,
                    idUser: data.idUser
                }
            }),
            invalidatesTags:['allusers']
        })
    })
})

export const {
    useLazyLoginQuery,
    useGetAllUsersQuery,
    useLazyGetAllUsersQuery,
    useCreateUserMutation,
    useGetUserByIdQuery
} = apiUser
