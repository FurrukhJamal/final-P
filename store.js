import {createStore} from "redux";
//import {addtodo} from "./reducer";
import {saveNews} from "./reducer"
import Reducer from "./reducer";

const store = createStore(Reducer);


// store.dispatch(addtodo("hello"));
// store.dispatch(addtodo("hello, World!"));
//
// console.log(store.getState())

//to add fake news
// store.dispatch(saveNews({
//   title :"Is climate change to blame for Australia's fires?",
//   image: "https://ichef.bbci.co.uk/news/1024/branded_news/D840/production/_109606355_7ab728ee-752d-4d84-a965-7eb590c3edc9.jpg",
//   fullDetail: "http://www.bbc.co.uk/news/world-australia-50341210",
//   source: "bbc-news",
//   detail: "Politicians have been criticised for skirting questions on whether climate change is worsening a crisis."
// }))


export default store;
