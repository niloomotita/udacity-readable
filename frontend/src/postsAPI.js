const api = "http://localhost:3001/";

let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token
};

export const getPosts = () =>
  fetch(`${api}posts/`, { headers })
    .then(res => res.json())
    .then(data => data);

export const getComments = (id) =>
  fetch(`${api}posts/${id}/comments/`, { headers })
    .then(res => res.json())
    .then(data => data);

export const voteScore = (id,option) =>
  fetch(`${api}posts/${id}`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({option})
  })
    .then(res => res.json())
    .then(data => data);
    
    export const addPost = (id,timestamp,title,body,author,category) =>
    fetch(`${api}posts/`, {
      method: "POST",
      headers: {
        ...headers,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({id,timestamp,title,body,author,category})
    })
      .then(res => res.json())
      .then(data => data);
  
      export const remove = (id) =>
      fetch(`${api}posts/${id}`, { method: 'DELETE', headers })
        .then(res => res.json())
        .then(data => data);

      export const addComment = (id,timestamp,body,author,parentId) =>
      fetch(`${api}comments/`, {
        method: "POST",
        headers: {
          ...headers,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({id,timestamp,body,author,parentId})
      })
        .then(res => res.json())
        .then(data => data);

        export const removeComment = (id) =>
        fetch(`${api}comments/${id}`, { method: 'DELETE', headers })
          .then(res => res.json())
          .then(data => data);
         
 export const getCategory = (category) =>
  fetch(`${api}${category}/posts/`, { headers })
    .then(res => res.json())
    .then(data => data);        