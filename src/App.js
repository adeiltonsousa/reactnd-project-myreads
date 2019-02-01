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
    book: [],
  }

  updateBook = (book, shelf) => {
    book.shelf = shelf;

    let updatedBooks = this.state.books.filter(el => el.id !== book.id);
        updatedBooks = [...updatedBooks, book];
        this.setState({ books : updatedBooks })

    BooksAPI.update(book, shelf)
      .then(resp => {
        book.shelf = shelf;
        this.setState( { book } );
  });
}
  

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) =>
        this.setState({ books: books }));
  };

  

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
         return el
       }
     })


    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <Route exact path='/' render={() => (
            <div>
              <ListBook title="Currently Reading" books={shelfBookCurently} updateBook={this.updateBook} />
              <ListBook title="Want To Read" books={shelfBookWaltToRead} updateBook={this.updateBook} />
              <ListBook title="Read" books={shelfBookRead} updateBook={this.updateBook} />

              <AddBook />
            </div>
          )} />
          
          
          
        <Route
            render={() => <SearchBooks updateBook={this.updateBook} />}
            path='/search'
        />
        </div>
      </div>
    )
  }
}

export default BooksApp