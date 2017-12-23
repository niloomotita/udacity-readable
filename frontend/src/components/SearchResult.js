import React, { Component } from "react";
import Posts from "./Posts"
class SearchResult extends Component {
    render(){
        return(
            <div>
            <Posts
                    posts={this.props.posts}
                    showComments={this.props.showComments}
                    showScores={this.props.voteScore}
                    getAllPosts = {this.props.getAllPosts}
                    onRemove = {this.props.removeContent}
                    setCurrentPost ={this.props.setCurrentPost}
                />
            </div>
        )
    }
}
 export default SearchResult;