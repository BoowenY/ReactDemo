import {ADD_NUMBER, DECREMENT, INCREMENT, SUB_NUMBER} from './constant.js'
const defaultState = {
    counter: 0
}
function reducer(state = defaultState, action) {
    switch(action.type) {
        case ADD_NUMBER:
            return {...state, counter: state.counter + action.num}
        case SUB_NUMBER:
            return {...state, counter: state.counter - action.num}
        case INCREMENT:
            return {...state, counter: state.counter + action.num}
        case DECREMENT:
            return {...state, counter: state.counter - action.num}
        default:
            return state;
    }
}
export default reducer;