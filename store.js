import {createStore} from "redux";
import {addtodo} from "./reducer";
import Reducer from "./reducer";

const store = createStore(Reducer);


store.dispatch(addtodo("hello"));
store.dispatch(addtodo("hello, World!"));

console.log(store.getState())

export default store;
