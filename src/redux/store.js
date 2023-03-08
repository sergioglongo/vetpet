// ** Redux Imports
import rootReducer from './rootReducer'
import { configureStore } from '@reduxjs/toolkit'
import {apiUser} from '../queries/user/apiUser'
import { apiClient } from '../queries/client/apiClient'

const store = configureStore({
  reducer: {...rootReducer, 
    [apiUser.reducerPath]: apiUser.reducer, 
    [apiClient.reducerPath]: apiClient.reducer
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false
    }).concat(apiUser.middleware).concat(apiClient.middleware)
  }
})

export { store }
