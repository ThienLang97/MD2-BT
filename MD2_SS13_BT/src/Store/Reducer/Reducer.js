let stock = [];
 export let Reducer = (state=stock,action)=>{
    switch (action.type) {
        case "Mua":
            let arr = [...state];
            let result = arr.findIndex((item)=>{
                return item.name==action.payload.name
            })
            if(result==-1){
                arr.push(action.payload)
                return [...arr]
            }else{
                alert("Đã có trong giỏ hàng")
                
              
            }
        case "Xóa":
            let newArr = [...state];
            let deleteArr = newArr.filter((cartProduct)=>(
                 cartProduct.name!== action.payload.name
                 ))   
                 return state = deleteArr;
        case "Tăng":
            let newArr2 = [...state];
            let increaseArr = newArr2.find((item)=>{
                return item.name == action.payload.name
            }) 
            

            increaseArr.quantity = parseInt(increaseArr.quantity) 
            increaseArr.quantity++
           
           return state = newArr2
         case "Giảm":
            let newArr3 = [...state]
            let decreaseArr = newArr3.find((item) => {
                return item.name == action.payload.name
                
            })
            decreaseArr.quantity = parseInt(decreaseArr.quantity)
            decreaseArr.quantity-- 
            return  state = newArr3 
        default:
           return state
    }
}