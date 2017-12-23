/*
 * action types
 */

export const ADD_POST = 'ADD_POST'


/*
 * action creators
 */

export function addPost(author, title, category,body) {
  return { type: ADD_POST, author, title, category,body }
}

