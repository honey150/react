import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './counter.js'
import privacySlice from './privacy.js'

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer
  }
})


export default counterStore;
