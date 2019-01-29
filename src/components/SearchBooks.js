import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import ListBook from './ListBook';


class SearchBooks extends React.Component {
    constructor() {
        super();
        this.state = {
            query: '',
            books: []
        };
    }

    /**
     * Update the query to hit the api with, search the api with that query and set the state of the page
     * @param {string} query string request to hit api with
     */

    searchQuery = (query,) => {
        this.setState({
            query: query.trim()
        })

        BooksAPI.search(query).then((response) => {
            if (response && response.length) {
                const books = response.map((book) => {
                    const shelf = book ? book.shelf : 'none';
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
                                onChange={(event) => this.searchQuery(event.target.value)}
                            />
                        </div>

                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">

                            <ListBook title={"Search Results"} books={books} updateBook={this.props.updateBook} />

                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBooks