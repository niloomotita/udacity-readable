import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as postsAPI from "../postsAPI";
import { format } from "date-fns";
class Posts extends Component {
  state = {
    clicks: 0
  };

  voteScore = (postId, option) => {
    postsAPI.voteScore(postId, option).then(post => {
      this.props.getAllPosts();
      this.setState({ clicks: post.voteScore });
    });
  };

  render() {
    return (
      <div className="new-post">
        <ol>
          {this.props.posts &&
            this.props.posts.map(post => (
              <li key={post.id}>
                <div className="post-form">
                  <div className="post">
                    <div className="post-info">
                      <span className="author">Author : {post.author}</span>
                      <span>
                        {format(new Date(post.timestamp), "MM/DD/YYYY HH:mm")}
                      </span>
                    </div>
                    <h4>{post.title}</h4>
                    <div className="post-body">
                      <p>{post.body}</p>
                    </div>
                  </div>
                  <div className="btns">
                    <Link to="/comment">
                      <span>{post.commentCount}</span>
                      <button
                        className="comment-btn"
                        onClick={() => this.props.showComments(post.id)}
                      />
                    </Link>
                    <button
                      className="thumbs-up"
                      onClick={() => this.voteScore(post.id, "upVote")}
                    />
                    <span>{post.voteScore}</span>
                    <button
                      className="thumbs-down"
                      onClick={() => this.voteScore(post.id, "downVote")}
                    />
                    <button
                      className="delete"
                      onClick={() => this.props.onRemove(post.id)}
                    />
                    <Link to ="new-comment">
                      <button className="show-comment" 
                      onClick={() => this.props.setCurrentPost(post.id)}
                      />
                    </Link>
                  </div>
                </div>
              </li>
            ))}
        </ol>
      </div>
    );
  }
}

export default Posts;
