import React, { Component } from "react";
import { NavBar } from "simple-react-bootstrap";
import {format} from "date-fns";
class NewPost extends Component {
    state ={
        author:"",
        title:"",
        category:"",
        body:""
    }
    updateAuthor = (author) => {
        this.setState({ author: author})
      }
      updatetitle = (title) => {
        this.setState({ title: title})
      }
      updateCategory = (category) => {
        this.setState({ category: category})
      }
      updateBody = (body) => {
        this.setState({ body: body})
      }
      handleSubmit =(e)=> {
        var id = this.idGenerator()
        var timeStamp = Date.now()
        if (this.props.onAddPost)
          this.props.onAddPost(id,timeStamp,this.state.title,this.state.body,this.state.author,this.state.category)
      }
      idGenerator = ()=>{
            var dt = new Date().getTime();
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = (dt + Math.random()*16)%16 | 0;
                dt = Math.floor(dt/16);
                return (c==='x' ? r :(r&0x3|0x8)).toString(16);
            });
            return uuid;
        }
        
    render(){
        return(
            <div className="new-post">
                <form onSubmit={this.handleSubmit} className="post-form">
                    <div className="post">
                        <div className="post-info">
                         <input type="text" 
                         name="author" id={this.idGenerator()}
                         placeholder="author"
                         value={this.state.author}
                         onChange={(event) => this.updateAuthor(event.target.value)}
                         />
                         
                         <input type="text" 
                         name="title" id=""
                         placeholder="title"
                         value={this.state.title}
                         onChange={(event) => this.updatetitle(event.target.value)}
                         />
                         <input type="text" 
                         name="category" id={this.idGenerator()}
                         placeholder="category"
                         value={this.state.category}
                         onChange={(event) => this.updateCategory(event.target.value)}
                         />
                        </div>
                        <span>{format(new Date(), 'MM/DD/YYYY HH:mm')}</span>
                        <textarea className="post-area" rows="10" cols="100" placeholder="write a new post" value={this.state.body}  onChange={(event) => this.updateBody(event.target.value)}/>                        
                    </div>
                    
                        <div className="btns">
                            <input type="submit" value="Submit" id="submit"/>
                            <NavBar.Dropdown
                                toggleClassName="pointer-cursor"
                                style={{ cursor: "pointer" }}
                                text="Categories"
                                className="dropdown-post"
                            >
                                <NavBar.Item>Social</NavBar.Item>
                                <NavBar.Item href="#foo">Art</NavBar.Item>
                                <NavBar.Item>Thecnology</NavBar.Item>
                            </NavBar.Dropdown>
                        </div>
                    
                </form>
            </div>
        )
    }
}

export default NewPost;