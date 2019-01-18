import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './components/SearchBooks'
import AddBook from './components/AddBook';
import { Route } from 'react-router-dom'
import ListCurrentlyReading from './components/ListCurrentlyReading';
import ListWaltToRead from './components/ListWantToRead';
import ListRead from './components/ListRead';

class BooksApp extends Component {
  state = {
    books: [],
    read: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => this.setState({ books: books }));
  }
  
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div>
            {console.table(this.state.books)}
            <ListCurrentlyReading books={this.state.books} />
            <ListWaltToRead       books={this.state.books} />
            <ListRead             books={this.state.books} />
            <AddBook />
          </div>
        )} />
        <Route path='/search' render={SearchBooks} />
      </div>
    )
  }
}

export default BooksApp
