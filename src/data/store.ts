import { configureStore } from '@reduxjs/toolkit'
import employeesReducer from './employeesSlice'
import logsReducer from './logsSlice'

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
    logs: logsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch