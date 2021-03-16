import React from "react";
// import { connect } from "./util/connect";
import { connect } from "react-redux";
import { addAction, decrement } from "./store/createAction";
export function Home2(props) {
  return (
    <div>
      <h1>Home</h1>
      <h2>当前计数:{props.counter}</h2>
      <button onClick={(e) => props.decrement(-2)}>+1</button>
      <button onClick={(e) => props.addNumber(5)}>+5</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    decrement: function (num) {
      dispatch(decrement(num));
    },
    addNumber: function (num) {
      dispatch(addAction(num));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home2);
