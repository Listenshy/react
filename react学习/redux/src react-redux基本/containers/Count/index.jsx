// 容器组件
import CountUI from "../../compontents/Count/index";
import {
  createIncrement,
  createDecrement,
  createIncrementAsync,
} from "../../redux/count_action";
// 引入connect用于连接redux
import { connect } from "react-redux";

function mapStateToProps(state) {
  return { count: state };
}
function mapDispatchToProps(dispatch) {
  return {
    // 加法
    jia: (data) => dispatch(createIncrement(data)),
    // 减法
    jian: (data) => dispatch(createDecrement(data)),
    //     异步加
    AsyncJia: (data, time) => dispatch(createIncrementAsync(data, time)),
  };
}

// 使用connect创建并暴露一个Count容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
