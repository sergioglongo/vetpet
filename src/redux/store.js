// ** Redux Imports
import rootReducer from './rootReducer'
import { configureStore } from '@reduxjs/toolkit'
import {apiUser} from '../queries/user/apiUser'

const store = configureStore({
  reducer: {...rootReducer, 
    [apiUser.reducerPath]: apiUser.reducer
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false
    }).concat(apiUser.middleware)
  }
})

export { store }
