import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './components/SearchBooks'
import BookList from './components/BookList'
import { Route, Link } from 'react-router-dom'


class BooksApp extends Component {
  state = {
    books: []
 }


componentDidMount() {
  BooksAPI.getAll().then((books) => this.setState({ books: books }));
}
  


  render() {
    
    return (
      <div className="app">
        <Route exact path='/' render={() => (
            <div>
              {console.table( this.state.books ) }
              
              <BookList books={ this.state.books }/>

              <Link
                  to='/search'
                  className='open-search'
              >Add a book</Link>
            </div>
        )} />
        
        <Route exact path='/search' render={ SearchBooks }
            />
      </div>
    )
  }
}

export default BooksApp
