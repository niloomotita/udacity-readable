import React, { Component } from "react";
import { format } from "date-fns";

class Comment extends Component {
  state = {
    author: "",
    body: "",
  };
  updateAuthor = author => {
    this.setState({ author: author });
  };
  updateBody = body => {
    this.setState({ body: body });
  };
  handleSubmit = e => {
      e.preventDefault();
    var id = this.idGenerator();
    var timeStamp = Date.now();
    if (this.props.addComment){

      this.props.addComment(
        id,
        timeStamp,
        this.state.body,
        this.state.author,
        this.props.currentPost
      )
      this.props.getAllPosts()
      window.location.reload()
    }
     
  };
  idGenerator = () => {
    var dt = new Date().getTime();
    var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
      c
    ) {
      var r = ((dt + Math.random() * 16) % 16) | 0;
      dt = Math.floor(dt / 16);
      return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uuid;
  };

  render() {
    return (
      <div className="new-comment">
        <form onSubmit={this.handleSubmit} className="comment-form">
          <div className="comment">
            <div className="post-info">
              <input
                type="text"
                name="author"
                id={this.idGenerator()}
                placeholder="author"
                value={this.state.author}
                onChange={event => this.updateAuthor(event.target.value)}
              />
              <span className="post-author">
                {format(new Date(), "MM/DD/YYYY HH:mm")}
              </span>
            </div>
            <textarea
              className="post-area"
              rows="7"
              cols="15"
              placeholder="comment"
              value={this.state.body}
              onChange={event => this.updateBody(event.target.value)}
            />
          </div>

          <div className="btns">
            <input type="submit" value="Save" id="submit" />
          </div>
        </form>
      </div>
    );
  }
}
export default Comment;
