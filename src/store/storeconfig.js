import {configureStore} from '@reduxjs/toolkit'
import reducer from './library'

const store = configureStore({
    reducer
})

export default store