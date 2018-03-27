import React from 'react'
// import * as BooksAPI from './utils/BooksAPI'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './css/App.css'
import ListBooks from './containers/ListBooks'
import Search from './containers/Search'
import NotFound from './components/NotFound'


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ListBooks} />
          <Route exact path="/search" component={Search} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default BooksApp
