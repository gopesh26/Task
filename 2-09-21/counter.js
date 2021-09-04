// import {createStore} from 'redux'

//using configure store and createSlice 
import {createSlice,configureStore} from '@reduxjs/toolkit';

//reducer using slice
const initialState = {counter:0};

 const counterSlice= createSlice({
      name:'counter',
      initialState,
      reducers:{
          inc(state){
            state.counter++;
          },
          decr(state){
            state.counter--;
          },
          increase(state,action){
            state.counter= state.counter + action.payload;
          }
      }
  });

//reducer 
// const reduce  = (state={counter:0},action) =>{
//     if (action.type==='inc'){
//     return {
//         counter : state.counter +1 
//     };
//     }
//     if (action.type==='increase'){
//     return {
//         counter : state.counter + action.amount
//     };
//     }
//     if (action.type==="decr"){
//         return{
//             counter: state.counter -1
//         }
//     }
// return state;
// }

//store
const store = configureStore({
    reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;
export default store;
