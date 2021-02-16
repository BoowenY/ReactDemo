 /*暴露一个store对象，整个应用只有一个store对象，引入的createStore用于创建redux中的store对象 */
 import {createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducer from './reducers'
export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
