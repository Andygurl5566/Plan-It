
//REDUCER - holds the action (a piece of state)
//Counter Reducer
const countReducer = (state = 0, action) => {
    switch (action.type){
      case "INCREMENT":
        return state + 1;
        case "DECREMENT":
        return state - 1;
        default:
           return state
  
    }
  }


  export default countReducer
 