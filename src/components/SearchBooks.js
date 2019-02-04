import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import ListBook from './ListBook'

class SearchBooks extends React.Component {
    constructor() {
        super();
        this.state = {
            query: '',
            books: []
        };
    }

    updateQuery = (query) => {
        this.setState({ query: query }, this.searchQuery);
    }

    /**
     * @param {string} query string request to hit api with
     */

    searchQuery = () => {

        BooksAPI.search(this.state.query).then((response) => {
            if (this.state.query === '' || this.state.query === undefined) {
                return this.setState({ books: [] });
            }
            if (response.error) {
                return this.setState({ books: [] });
            }
            if (response && response.length) {
                const books = response.map((book) => {                    
                    if (book.shelf === undefined) {
                        var shelf = book.shelf = 'none';
                    }
                                    
                    console.log(this.props.currentShelf)
                    if (book.id === this.props.currentShelf.id) {
                        book.shelf = this.props.currentShelf.shelf;
                    }

                    if (book.imageLinks === undefined) {
                        book.imageLinks = '';
                    }

                    this.props.currentShelf.forEach(function (idCurrentBook) {
                        console.log(idCurrentBook);
                        if (book.id === idCurrentBook.id) {
                            shelf = book.shelf = idCurrentBook.shelf;
                        }
                    });

                    return {
                        id: book.id,
                        shelf: shelf,
                        authors: book.authors,
                        title: book.title,
                        imageLinks: {
                            thumbnail: book.imageLinks.thumbnail
                        }
                    };

                });
                this.setState({ books });
            }
        });
    };

    render() {
        const { books } = this.state;
        const { query } = this.state

        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link
                            className="close-search"
                            to="/"
                        >Close
                        </Link>
                        <div className="search-books-input-wrapper">
                            <input
                                type="text"
                                placeholder="Search by title or author"
                                value={query}
                                onChange={(event) => this.updateQuery(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">

                            <ListBook title="Search Results" books={books} updateBook={this.props.updateBook} />

                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBooks