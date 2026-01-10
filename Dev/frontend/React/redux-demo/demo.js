const redux = require('redux');

const INITIAL_VALUE = {
    counter :0
}
const reducer = (store = INITIAL_VALUE, action) =>{
   let newStore = store;
   if(action.type === 'INCREMENT'){
    newStore = {counter: store.counter + 1}
   } else if(action.type === 'ADDITION'){
    newStore = {counter: store.counter + action.pyayload}
   } else if(action.type === 'DECREMENT'){
    newStore = {counter: store.counter - 1}
   }
   return newStore;
}
const store = redux.createStore(reducer)

const subscriber = () => {
    console.log('Store changed!', store.getState());
}

store.subscribe(subscriber);
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'ADDITION', pyayload: 7 });