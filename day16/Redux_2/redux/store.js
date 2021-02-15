 /*暴露一个store对象，整个应用只有一个store对象，引入的createStore用于创建redux中的store对象 */
 import {createStore} from 'redux'
import countReducer from './count_reducer'
export default createStore(countReducer)