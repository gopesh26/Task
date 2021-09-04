import {createStore} from 'redux'

//reducer 
const reduce  = (state={counter:0},action) =>{
    if (action.type==='inc'){
    return {
        counter : state.counter +1 
    };
    }
    if (action.type==="decr"){
        return{
            counter: state.counter -1
        }
    }
return state;
}

//store
const store = createStore(reduce);


export default store;