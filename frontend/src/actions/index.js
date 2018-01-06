/*
 * action types
 */

export const ADD_POST = 'ADD_POST'
export const ADD_COMMENTS = 'ADD_COMMENTS'


/*
 * action creators
 */

export function addPost({author, title, category,body}) {
    return { 
        type: ADD_POST, 
        author, 
        title, 
        category,
        body, 
    }
}

export function addComments({id,timestamp,body,author,parentId}){
    return {
        type:ADD_COMMENTS,
        id,
        timestamp,
        body,
        author,
        parentId,
    }
}

