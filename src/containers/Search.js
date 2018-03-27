import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchBar from '../components/SearchBar'
import SearchResult from '../components/SearchResult'
import { searchBooks, clearSearchResult } from '../actions'

class Search extends Component {
  componentWillUnmount() {
    this.props.clearSearchResult()
  }

 onSearch = (query) => {
    if (query.trim() === "") {
      this.props.clearSearchResult()
    } else {
      this.props.searchBooks(query)
    }
  }

    render(){
        return (
          <div className="search-books">
            <SearchBar onSearch={this.onSearch}/>
            <SearchResult />
          </div>
        )
    }

}

export default connect(
  null,
  { searchBooks, clearSearchResult }
)(Search)
