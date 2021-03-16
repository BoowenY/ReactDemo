// export function addAction(num) {
//   return {
//     type: "ADD_NUMBER",
//     num,
//   };
// }

// export const addAction = (nums) => {
//   return {
//     type: "ADD_NUMBER",
//     num
//   }
// };

import { ADD_NUMBER, SUB_NUMBER, INCREMENT, DECREMENT } from "./constant.js";

export const addAction = (num) => ({
  type: ADD_NUMBER,
  num,
});

export const subAction = (num) => ({
  type: SUB_NUMBER,
  num,
});

export const increment = num => ({
    type: INCREMENT,
    num
})

export const decrement = num => ({
    type: DECREMENT,
    num
})