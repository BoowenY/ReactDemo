import {ADD_PERSON} from '../constant'
export const createAddPerson = (perObj) => ({
    type:ADD_PERSON,
    data:perObj
})