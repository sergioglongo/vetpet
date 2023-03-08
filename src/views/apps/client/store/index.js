// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

export const getAllData = createAsyncThunk('appClients/getAllData', async params => {
  // const response = await axios.get('/api/clients/list/all-data', params)
  return params
})

export const getData = createAsyncThunk('appClients/getData', async params => {
  const response = await axios.get('/api/client/list/data', params)
  return {
    params,
    data: response.data.clients,
    totalPages: response.data.total
  }
})

export const getClient = createAsyncThunk('appClients/getClient', async client => {
  return client
})

export const addClient = createAsyncThunk('appClients/addClient', async (client, { dispatch, getState }) => {
  await axios.post('/apps/client/add-client', client)
  await dispatch(getData(getState().clients.params))
  await dispatch(getAllData())
  return client
})

export const deleteClient = createAsyncThunk('appClients/deleteClient', async (id, { dispatch, getState }) => {
  await axios.delete('/apps/client/delete', { id })
  await dispatch(getData(getState().clients.params))
  await dispatch(getAllData())
  return id
})

export const appClientsSlice = createSlice({
  name: 'appClients',
  initialState: {
    data: [],
    total: 1,
    params: {},
    allData: [],
    selectedClient: null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.allData = action.payload
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.data = action.payload.data
        state.params = action.payload.params
        state.total = action.payload.totalPages
      })
      .addCase(getClient.fulfilled, (state, action) => {
        state.selectedClient = action.payload
      })
  }
})

export default appClientsSlice.reducer
