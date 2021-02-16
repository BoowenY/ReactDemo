 /*暴露一个store对象，整个应用只有一个store对象，引入的createStore用于创建redux中的store对象 */
 import {createStore, applyMiddleware, combineReducers} from 'redux'
import countReducer from './reducers/count_reducer'
import person from './reducers/person'
import thunk from 'redux-thunk'

const allReducer = combineReducers({
    he: countReducer,
    ren: person
})
export default createStore(allReducer, applyMiddleware(thunk))
