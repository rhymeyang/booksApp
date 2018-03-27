import React, { Component } from 'react'
import { connect } from 'react-redux'

import BookItem from './BookItem'
import { NONE } from '../constants/shelfTypes'
import { fetchAllBooks } from '../actions/index';

class SearchResult extends Component {
  componentDidMount () {
    this.props.fetchAllBooks()
  }

  render() {
    const { books, searchedBooks } = this.props;
    // console.log(searchedBooks)
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {searchedBooks.map(searchedBook => {
            let result = books.find(book => book.id === searchedBook.id)
            return (
              <BookItem
                key={searchedBook.id}
                book={searchedBook}
                shelf={result ? result.shelf : NONE}
              />
            )
          })}
        </ol>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    searchedBooks: state.searchBooks,
    books: state.booklist
  }
}

export default connect(
  mapStateToProps,
  { fetchAllBooks }
)(SearchResult)
