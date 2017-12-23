import React, { Component } from "react";
import NewPost from "./NewPost";
import Comment from "./Comment";
import Posts from "./Posts"
import NewComment from "./NewComment"
import CategorySearch from "./CategorySearch"
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as postsAPI from '../postsAPI'

class App extends Component {
state={
    posts:[],
    comments:[],
    currentPost:"",
}



setCurrentPost = (postId)=>{
    this.setState({currentPost:postId})
}
  getAllPosts = () => {
    postsAPI.getPosts().then((posts) => {
    this.setState({ posts: posts })
  })}
  componentDidMount() {
     this.getAllPosts()
  }
 showComments=(postId)=>{
    postsAPI.getComments(postId).then((comments)=>{
        this.setState({ comments: comments})
    })
 }

addPosts = (id,timestamp,title,body,author,category)=>{
    postsAPI.addPost(id,timestamp,title,body,author,category).then((post)=>{
        this.setState(state => ({
            posts: state.posts.concat([ post ])
          }))
    })
}

addComment = (id,timestamp,body,author,parentId)=>{
    postsAPI.addComment(id,timestamp,body,author,parentId).then((comments)=>{
        this.setState({comments:comments})
    })
}
removeContent = (id) => {
    this.setState((state) => ({
      posts: state.posts.filter((p) => p.id !== id)
    }))

    postsAPI.remove(id)
  }

  removeComment = (id) => {
    this.setState((state) => ({
      comments: state.comments.filter((p) => p.id !== id)
    }))

    postsAPI.removeComment(id)
  }
  getPostCategory = (category) =>{
      postsAPI.getCategory(category).then((posts)=>{
          this.setState({posts:posts})
      })
  }
  render() {
    return (
      <div className="app">
        <Route exact path='/new-post' render={({ history }) => (
           <div className="container">
           <div className="header">
                    <span style={{ color: "black" }} className="title">Readable</span>
                    <Link to = "/new-post" className ="new-post-btn">
                        New Post
                    </Link>    
                    <Link to = "/" className ="home-btn">
                    Home
                    </Link>   
                    <CategorySearch
                    posts={this.state.posts}
                    searchCategory={this.getPostCategory}
                    />
                </div>
                <NewPost
                onAddPost={(id,timestamp,title,body,author,category) => {
              this.addPosts(id,timestamp,title,body,author,category)
              history.push('/')
            }}
                />
               
           </div>
        )}
        /> 
        <Route exact path='/' render ={() => (
            <div className="container">
            
                <div className="header">
                    <span style={{ color: "black" }} className="title">Readable</span>
                    <Link to = "/new-post" className ="new-post-btn">
                        New Post
                    </Link>    
                    <Link to = "/" className ="home-btn">
                    Home
                    </Link>   
                    <CategorySearch
                    posts={this.state.posts}
                    searchCategory={this.getPostCategory}
                    />
                </div>
                <Posts
                    posts={this.state.posts}
                    showComments={this.showComments}
                    showScores={this.voteScore}
                    getAllPosts = {this.getAllPosts}
                    onRemove = {this.removeContent}
                    setCurrentPost ={this.setCurrentPost}
                />
            </div>
        )} 
        />
        <Route exact path='/comment' render ={() => (
            <div className="container">
            
                <div className="header">
                    <span style={{ color: "black" }} className="title">Readable</span>
                    <Link to = "/new-post" className ="new-post-btn">
                        New Post
                    </Link>    
                    <Link to = "/" className ="home-btn">
                    Home
                    </Link>   
                    <CategorySearch
                    posts={this.state.posts}
                    searchCategory={this.getPostCategory}
                    />
                </div>
                <Comment
                    showComments={this.showComments}
                    posts={this.state.posts}
                    comments={this.state.comments}
                    onRemoveComment={this.removeComment}
                />
            </div>
        )} 
        />
        <Route exact path='/new-comment' render ={({history}) => (
            <div className="container">
            
                <div className="header">
                    <span style={{ color: "black" }} className="title">Readable</span>
                    <Link to = "/new-post" className ="new-post-btn">
                        New Post
                    </Link>    
                    <Link to = "/" className ="home-btn">
                    Home
                    </Link>   
                    <CategorySearch
                    posts={this.state.posts}
                    searchCategory={this.getPostCategory}
                    />
                </div>
                <NewComment
                getAllPosts = {this.getAllPosts}
                addComment={(id,timestamp,body,author,parentId) =>
                {this.addComment(id,timestamp,body,author,parentId)
                history.push('./')
                }}
                currentPost ={this.state.currentPost}
                />
            </div>
        )} 
        />
      </div>
    )
  }
}

export default App;
