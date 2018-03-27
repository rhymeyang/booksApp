import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.changed = this.props.onSearch
  }

  handleChange(event){
    this.setState({value: event.target.value});
    this.changed(event.target.value);
  };

  render() {

    return (
         <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div
                className="search-books-input-wrapper"
                >

                <input
                    type="text"
                    value={this.state.value}
                    placeholder="Search by title or author"
                    onChange={this.handleChange}
                />

              </div>
         </div>

    )
  }

}

export default SearchBar
