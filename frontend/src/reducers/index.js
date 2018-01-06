import {
    ADD_POST,
    ADD_COMMENTS,
  } from '../actions/index.js'
  
  const initialstate={
    posts:[],
    comments:[],
    currentPost:"",
}
  function readableApp(state = [], action) {
    switch (action.type) {
      case ADD_POST:
        return [
          ...state,
          {
            author: action.author,
            title: action.title,
            category: action.category,
            body: action.body,
          }
        ]
      default:
        return state
    }
  }
  
  
  export default readableApp