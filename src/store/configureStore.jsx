import * as redux from 'redux'
import {searchTextReducer,showCompletedReducer,todoReducer,toggleTodoReducer} from "./../reducers/reducers"
import thunk from "redux-thunk"

 var configure=()=>{

}
var reducer=redux.combineReducers({
  searchText:searchTextReducer,
  showCompleted:showCompletedReducer,
  todos:todoReducer,

})
export  var store=redux.createStore(reducer,redux.compose(
  redux.applyMiddleware(thunk),
 window.devToolsExtension?window.devToolsExtension():f=>f
))
export default store;
