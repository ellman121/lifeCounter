import {configureStore} from '@reduxjs/toolkit'

import lifeSlice from './lifeSlice'

export const store = configureStore({
  reducer: lifeSlice.reducer,
})
