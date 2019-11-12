import {combineReducers} from 'redux'

// export const addtodo = (todo) => ({
//   type: "Add Item",
//   payload : todo
// })
//
//
//
// const todoReducer = (state = [], action) => {
//   console.log("into reducer")
//   console.log(action.type)
//   const payload = action.payload
//   if(action.type === "Add Item")
//   {
//     return [...state, payload]
//   }
//   return state
//
//
// }


export const saveNews = (news) => ({
  type: "save news",
  payload : news
})


const saveNewsReducer = (state = [], action) => {
  const payload = action.payload
  if(action.type === "save news"){
    return [...state, payload]
  }

  return state
}

const reducer = combineReducers({
  savedNews : saveNewsReducer
})

export default reducer;
