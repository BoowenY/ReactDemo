import store from './store/index.js'
import {addAction, decrement, increment, subAction} from './store/createAction.js'
store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(addAction(10))
store.dispatch(subAction(1))
store.dispatch(subAction(1))
store.dispatch(subAction(1))
store.dispatch(increment(1))
store.dispatch(decrement(2))