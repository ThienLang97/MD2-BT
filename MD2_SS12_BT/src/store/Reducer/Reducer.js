const started = 0;
export const reducer1 = (starts = started, action)=>{
    switch (action.type) {
        case "Tăng":
          starts = starts +1;
          return starts  ;
        case "Giảm" :  
        starts = starts -1  ;
        return starts
        
        default:
            starts
            
    }
}