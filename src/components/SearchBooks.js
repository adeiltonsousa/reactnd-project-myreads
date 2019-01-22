import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'

class SearchBooks extends React.Component {
    state = {
        query: '',
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

        var resultQuery = BooksAPI.search(query)

        console.table(resultQuery)

        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link className="close-search" to="/">Close</Link>
                        <div className="search-books-input-wrapper">
                            {/*
                            NOTES: The search from BooksAPI is limited to a particular set of search terms.
                            You can find these search terms here:
                            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                            you don't find a specific author or title. Every search is limited by search terms.
                            */}
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
                            <div>

                            </div>
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBooks

/*
searchQuery = (query) => {
        this.setState({
            query: query.trim()
        })
    }

        var result = '';

        if (query === "") {
            result = "No Results"
        } else {

        }
        return result;
    }
*/