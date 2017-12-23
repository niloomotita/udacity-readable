import React, { Component } from "react";

class Comment extends Component {
  
  render() {
    return (
      <div className="new-comment">
        <ol>
          {this.props.comments &&
            this.props.comments.map(comment => (
              <li key={comment.id}>
                <div className="comment">
                  <div className="comment-info">
                    <span className="author">Author : {comment.author}</span>
                    <span>{new Date(comment.timestamp).toString()}</span>
                  </div>
                  <div className="post-body">
                    <p className="comment-text">{comment.body}</p>
                  </div>
                  <button
                      className="delete"
                      onClick={() => this.props.onRemoveComment(comment.id)}
                    />
                </div>
              </li>
            ))}
        </ol>
      </div>
    );
  }
}
export default Comment;
