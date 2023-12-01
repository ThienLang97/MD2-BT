
import { reducer1 } from './Reducer/Reducer';
import { combineReducers, createStore } from "redux"
import { reducer2 } from './Reducer/Reducer2';

// const combine = combineReducers({
//     reducer1,
//     reducer2
// })
export const store1 = createStore(reducer2)

