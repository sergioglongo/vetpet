import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import apiDefaultConfig from '@src/@core/auth/api/apiDefaultConfig' 

export const apiClient = createApi({
    reducerPath: 'clientApi',
    tagTypes:['allclients', 'client'],
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:3002/client/`
    }),
    endpoints: (builder) => ({
        getAllClients: builder.query({
            query: () => ({
                url: `getAllClients`,
                method: 'GET'
            }),
            providesTags: ['allclients']
        }),        
        getClientById: builder.query({
            query: (id) => ({
                url: `${id}`,
                method: 'GET'
            }),
            providesTags: ['client']
        }),
        createClient: builder.mutation({
            query: (data) => ({
                url: `createClient`,
                method: 'POST',
                body: {
            nameClient: data.nameClient,
            mail: data.mail,
            address: data.address ?? '',
            phone: data.phone ?? '',
            identificationType: data.identificationType ?? 'DNI',
            identification: data.identification,
            idUser: data.idUser
        }
            }),
            invalidatesTags:['allclients']
        }),
        putUser: builder.mutation({
            query: (data) => ({
                url: `putUser`,
                method: 'POST',
                body: {
                    nameClient: data.nameClient,
                    mail: data.mail,
                    address: data.address ?? '',
                    phone: data.phone ?? '',
                    identificationType: data.identificationType ?? 'DNI',
                    identification: data.identification,
                    idUser: data.idUser
                }
            }),
            invalidatesTags:['client', 'allclients']
        }),
        inactiveClient: builder.mutation({
            query: (data) => ({
                url: `putClient`,
                method: 'POST',
                body: {
                    idClient: data.idClient,
                    status: data.status
                }
            }),
            invalidatesTags:['client', 'allclients']
        })
    })
})

export const {
   useGetAllClientsQuery,
   useCreateClientMutation
} = apiClient
