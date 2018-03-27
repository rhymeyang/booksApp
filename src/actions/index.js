import {
  FETCH_ALL_BOOKS,
  CHANGE_BOOK_SHELF,
  SEARCH_BOOKS,
  CLEAR_SEARCH_RESULT
} from '../constants/actionTypes'
import * as BooksAPI from '../utils/BooksAPI'


export const fetchAllBooks = async () => {
  const result = await BooksAPI.getAll();

  return {
    type: FETCH_ALL_BOOKS,
    payload: {
      books: result
    }
  }
}

export const changeBookShelf = async (book, shelf) => {
  await BooksAPI.update(book, shelf);
  // const result = await BooksAPI.update(book, shelf);
  // console.log(result);
  return {
    type: CHANGE_BOOK_SHELF,
    payload: {
      book,
      shelf
    }
  }
}

export const searchBooks = async (query) => {
  const result = await BooksAPI.search(query);
  return {
    type: SEARCH_BOOKS,
    payload: {
      books: result
    }
  }
}

export const clearSearchResult = () => {
  return {
    type: CLEAR_SEARCH_RESULT
  }
}

// export function createThunkAction(payload) {
//     return function(dispatch) {
//         setTimeout(() => {
//            dispatch({type: 'THUNK_ACTION', payload: payload})
//         }, 1000)
//     }
// }
