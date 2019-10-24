import {combineReducers} from 'redux'

export const addtodo = (todo) => ({
  type: "Add Item",
  payload : todo
})



const todoReducer = (state = [], action) => {
  console.log("into reducer")
  console.log(action.type)
  const payload = action.payload
  if(action.type === "Add Item")
  {
    return [...state, payload]
  }
  return state


}

const reducer = combineReducers({
  todo : todoReducer
})

export default reducer;
