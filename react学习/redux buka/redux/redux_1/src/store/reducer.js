
const defaultState = 0
// 纯函数  不能被污染
const reducer = (state = defaultState, action) => {
      switch (action.type) {
            case "increament":

                  return state + 1
            case "decreament":

                  return state - 1
            default:
                  return state;
      }
}

export default reducer