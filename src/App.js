import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './components/SearchBooks'
import AddBook from './components/AddBook'
import { Route } from 'react-router-dom'
import ListBook from './components/ListBook'


class BooksApp extends Component {
  state = {
    books: [],
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
        .then(resp => {
            book.shelf = shelf;
            this.setState({ book });
        });
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => 
    this.setState({ books: books }));
  }


  render() {

    var shelfBookCurently = this.state.books.filter(el => {
      if (el.shelf === "currentlyReading") {
          return el
      }
    })

    var shelfBookWaltToRead = this.state.books.filter(el => {
      if (el.shelf === "wantToRead") {
          return el
      }
    })

    var shelfBookRead = this.state.books.filter(el => {
      if (el.shelf === "read") {
          return el;
      } 
    })   


    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div>
            <ListBook title={"Currently Reading"} books={shelfBookCurently} updateBook={this.updateBook} />
            <ListBook title={"Want To Read"} books={shelfBookWaltToRead} updateBook={this.updateBook} />
            <ListBook title={"Read"} books={shelfBookRead} updateBook={this.updateBook} />

            <AddBook />
          </div>
        )} />
        <Route path='/search' render={SearchBooks} />
      </div>
    )
  }
}

export default BooksApp
