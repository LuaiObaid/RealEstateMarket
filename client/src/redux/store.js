import { configureStore } from '@reduxjs/toolkit'
import  userReducer from '../redux/user/userSlice'

export const store = configureStore({
  reducer: { user: userReducer }, // Use the reducer in the store configuration
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
