const initialState =[]
export const reducer2 = (state = initialState,action)=>{
    switch (action.type) {
        case "Thêm cv":
         return [...state,action.payload]
        
        default:
            return state
            
        }
    }
    