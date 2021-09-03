const redux = require('redux');

const counterReducer = (state={counter:0},action)=>{
    if (action.type ==="increment"){
    return {
       counter: state.counter + 1
    };
    }
    if (action.type==='decrement'){
        return{
            counter: state.counter-1
        }
    }
return state;
};

const store = redux.createStore(counterReducer);
// console.log(store.getState());

const Sub = ()=>{
   console.log( store.getState());
};

store.subscribe(Sub);

store.dispatch({type: "increment"});//this will output {counter:1}

store.dispatch({type: "decrement"});//this will output {counter:0}
