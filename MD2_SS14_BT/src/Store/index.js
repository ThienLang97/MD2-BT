import { configureStore, createSlice } from "@reduxjs/toolkit"
/* 
1. Khởi tạo state : import CreateSlice
2. Khởi tạo reducer
3. Khởi tạo store
4. Xuất kho mang đi dùng
*/
//1 : Khởi tạo state
const productState = createSlice({
    name: 'redux-toolkit123',
    initialState: {
        products: [
            {
                name: "bánh mỳ",
                price: 5000,
                id: 1
            },
            {
                name: "bánh bao",
                price: 3000,
                id: 2
            },
            {
                name: "Coca",
                price: 15000,
                id: 3
            }
        ]
    },
    reducers: {
        addProduct: (state, action) => {
            //state ở đây là thằng initialState
            state.products.push({
                name: action.payload,
                price: 15000
            })

        },
        deleteProduct: (state, action) => {

            state.products = 
                state.products.filter((item) => {
                    return item.name != action.payload.name
                })
            

        },
        fixProduct: (state, action) =>{
            let findIndex = state.products.findIndex((item)=>{
                return item.name === action.payload.name
            })
            state.products[findIndex]=action.payload.name
        }
    }
})

// 1.1 Xuất ra action
export const { addProduct, deleteProduct, fixProduct } = productState.actions


// 2. Khởi tạo reducer
const productReducer = productState.reducer
// 3. Khởi tạo store
const store = configureStore({
    reducer: {
        productReducer: productReducer,

    }
})
// 4 . Xuất ra cho ứng dụng
export default store;