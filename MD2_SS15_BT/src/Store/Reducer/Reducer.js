import { configureStore, createSlice } from "@reduxjs/toolkit"
export const productState = createSlice({
    name: "Vip pro",
    initialState: {
        products: [
            {
                id: 1,
                name: "Cola",
                price: 6000,
                quantity: 1,
                image:
                    "https://ayb.akinoncdn.com/products/2019/01/18/3544/5aa1ee14-1c83-4213-a62b-773c4785e187_size780x780_quality60_cropCenter.jpg",
            },
            {
                id: 2,
                name: "Sprite",
                price: 5000,
                quantity: 1,
                image: "https://images.ofix.com/product-image/s99509_2.jpg",
            },
            {
                id: 3,
                name: "Ayran",
                price: 3000,
                quantity: 1,
                image:
                    "https://konyamevlana.com/florya/wp-content/uploads/2020/12/sutas-ayran-285ml.jpg",
            },
            {
                id: 4,
                name: "Salgam",
                price: 4000,
                quantity: 1,
                image: "http://esenlik.com.tr//images/prod/5704.jpg",
            }
        ],
        cart: []

    },
    reducers: {
        addToCart: (state, action) => {
            let existing = state.cart.findIndex((item) => {
                return item.name == action.payload.name
            })
            if (existing == -1) {
                state.cart.push({
                    id: action.payload.id,
                    name: action.payload.name,
                    price: action.payload.price,
                    quantity: action.payload.quantity,
                    image: action.payload.image
                })
            } else {
                alert('Sản phẩm đã có trong giỏ hàng')
            }
            
        },
        deleteFromCart: (state, action) => {
            let confirm1 = confirm("Bạn có muốn xóa ko")
            if (confirm1) {
                let confirmedDelete = state.cart.filter((item) => {
                    return item.name != action.payload.name
                })
                state.cart = confirmedDelete
            }
        },
        increaseCart: (state, action) => {
            
            state.cart.find((item) => {
                if (item.name == action.payload.name) {
                    item.quantity += 1
                }
            })
            state.cart.map((item) => {
                state.result += item.price
                console.log(state.result, "result");
            })
        },
        decreaseCart: (state, action) => {
              state.cart.find((item)=>{
                 if (item.name == action.payload.name){
                    if(item.quantity>1){
                        item.quantity--
                    }else{
                        let confirm1 = confirm("Bạn có muốn xóa ko")
                        if(confirm1){
                            const newArr = state.cart.filter((item)=>{
                                return item.name != action.payload.name
                            })
                            state.cart = newArr
                        }
                    }
                 }
              })
            state.cart.map((item) => {
                state.result -= item.price
                
            })
        },
        deleteAllCart: (state)=>{
            let confirm1 =confirm("Bạn có muốn xóa tất cả giỏ không?")
            if(confirm1){
                state.cart = []
                
            }
        },
        addToProducts:(state,action)=>{
           const newProduct = {
               
                   id: state.products.length + 1,
                   name: action.payload.name,
                   price: action.payload.price,
               image: action.payload.image,
                   quantity: 1
                
               
           }
            state.products = [...state.products, newProduct];
          console.log(action.payload.file,"caaaak");
        }
    }

})

export const { addToCart, deleteFromCart, increaseCart, decreaseCart, deleteAllCart, addToProducts } = productState.actions