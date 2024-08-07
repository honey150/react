import {createStore} from 'redux';
const INITIAL_VALUE = {
  counter: 0,
  privacy: false
}
const counterReducer = (store = INITIAL_VALUE, action) => {
  let newStore = store;
  if(action.type === 'INCREMENT') {
    newStore = {...store, counter: store.counter + 1}
  } else if(action.type === 'DECREMENT') {
    newStore = {...store, counter: store.counter - 1}
  } else if(action.type === 'ADD') {
    newStore = {...store, counter: store.counter + Number(action.payload.add)}
  }
   else if(action.type === 'SUBSTRACT') {
    newStore = {...store, counter: store.counter - Number(action.payload.substract)}
  } else if(action.type === 'PRIVACY_TOGGLE') {
    newStore = {...store, privacy: !store.privacy}
  }
  return newStore;
}

const counterStore = createStore(counterReducer);

export default counterStore;