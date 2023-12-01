import { configureStore, createSlice } from "@reduxjs/toolkit"
import { productState } from "./Reducer/Reducer"



const store = configureStore({
    reducer: {
        products: productState.reducer,
        

    }
})

export default store