import {combineReducers} from 'redux';
import {
  FETCH_ALL_BOOKS,
  CHANGE_BOOK_SHELF,
  SEARCH_BOOKS,
  CLEAR_SEARCH_RESULT
} from '../constants/actionTypes'

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_BOOKS:
      return [ ...action.payload.books ]
    case CHANGE_BOOK_SHELF: /* optimistic update */
      const index = state.indexOf(action.payload.book)
      const items = state.splice(index, 1)
      items[0].shelf = action.payload.shelf
      state.push(items[0])
      return [ ...state ]
    default:
      return state
  }
}

const searchReducer = (state = [], action) => {
  switch (action.type) {
    case SEARCH_BOOKS:
      return [ ...action.payload.books ]
    case CLEAR_SEARCH_RESULT:
      return []
    default:
      return state
  }
}

const allReducers = combineReducers({
    booklist: bookReducer,
    searchBooks: searchReducer
});

export default allReducers
