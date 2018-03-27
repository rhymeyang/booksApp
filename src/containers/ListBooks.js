import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import BookShelf from '../components/BookShelf'
import * as shelf from '../constants/shelfTypes'
import { fetchAllBooks } from '../actions'


class ListBooks extends Component {
  componentDidMount () {
    this.props.fetchAllBooks()
  }
    render(){
        const { books } = this.props
        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>My Reading Record</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf
                    heading="Currently Reading"
                    shelf={shelf.CURRENTLY_READING}
                    books={books}
                />
                <BookShelf
                    heading="Want To Read"
                    shelf={shelf.WANT_TO_READ}
                    books={books}
                  />
                  <BookShelf
                    heading="Read Done"
                    shelf={shelf.READ_DONE}
                    books={books}
                  />

              </div>
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
          </div>
        )
    }
}

const mapStateToProps = state => {
  return { books: state.booklist }
}

export default connect(mapStateToProps, { fetchAllBooks })(ListBooks)

