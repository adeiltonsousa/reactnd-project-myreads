import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'


class SearchBooks extends React.Component {
    state = {
        query: '',
        result: '',
    }

    clearQuery = () => {
        this.searchQuery('')
    }

    searchQuery = (query) => {
        this.setState({
            query: query.trim()
        })
    }


    render() {
        const { query } = this.state

        /*
        BooksAPI.search(query)
            .then(function (results) {
                console.log(results)
            })
        */
       BooksAPI.search(query)
            .then(function (result) {
                console.log(result)
            }, function (err) {
                console.log(err)
            })
        

        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link className="close-search" to="/">Close</Link>
                        <div className="search-books-input-wrapper">
                            <input
                                type="text"
                                placeholder="Search by title or author"
                                value={query}
                                onChange={(event) => this.searchQuery(event.target.value)}
                            />
                        </div>

                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                            <div className="list-books-content">
                                <div>
                                    <div className="bookshelf">
                                        <h2 className="bookshelf-title">{this.props.title}</h2>
                                        <div className="bookshelf-books">
                                            <ol className="books-grid">
                                                { this.state.result }
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBooks