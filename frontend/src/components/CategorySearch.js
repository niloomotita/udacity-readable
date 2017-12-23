import React, { Component } from "react";

class CategorySearch extends Component{
    state ={
        query:''
    }
    updateQuery = (query) => {
        this.setState({ query: query.trim() })
      }
    clearQuery = () => {
        this.setState({ query: '' })
      }

    render (){
        return(
            <div className="form-group">
            
        <input
            className="form-control"
            placeholder="Search Categories"
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
        />
        <button className="btn-search"
            onClick={()=>(console.log(this.props))||this.props.searchCategory(this.state.query)}
            >Search</button>
    </div>
        )
    }
}
export default CategorySearch;