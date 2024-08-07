const redux = require('redux');
let INITIAL_VALUE = {
  counter: 0
};
const reducer = (store = INITIAL_VALUE , action) => {
  let newValue = store;
  if(action.type === 'INCREMENT') {
    newValue = {counter: store.counter + 1}
  } else if (action.type === 'DECREMENT') {
    newValue = {counter: store.counter - 1}
  } else if(action.type === 'ADDITION') {
    newValue = {counter: store.counter + action.payload.sum}
  }
  return newValue
}

let store = redux.createStore(reducer)

const subscriber = () => {
  let state = store.getState()
  console.log(state)
}

store.subscribe(subscriber)

store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'DECREMENT'})
store.dispatch({type: 'ADDITION', payload: {
  sum: 7
}})
store.dispatch({type: 'INCREMENT'})