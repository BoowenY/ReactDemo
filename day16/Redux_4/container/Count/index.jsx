import CountUI from "../../components/Count";
import { connect } from "react-redux";
import {
  createDecrementAction,
  createIncrementAction,
  createAsyncAction
} from "../../redux/count_action";
function mapStateToProps(state) {
  return { count: state };
}
/**
 *
 * @param  dispatch
 * 返回一个对象，返回对象中的key作为传递给UI组件的key，value作为传递个iUI props的value
 */
function mapDispatchToProps(dispatch) {
  return {
    jia: (num) => dispatch(createIncrementAction(num)),
    jian: (num) => dispatch(createDecrementAction(num)),
    jiaAsync: (num, time) => dispatch(createAsyncAction(num, time)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
