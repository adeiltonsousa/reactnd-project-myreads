import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'

class SearchBooks extends React.Component {
    state = {
        query:'',
        searchQuery:'',
        resultado: '',
    }

    //queryBook = BooksAPI.search("Art");

    searchQuery = (query) => {
        BooksAPI.search(query)
            this.setState({ query: query.trim()})               
    }

    render() {
        const { query } = this.state

        console.log(this.state.query)

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

                        {/* {this.showingBooks.map((contact) => (
                                <li key={contact.id} className='contact-list-item'>
                                <div className='contact-details'>
                                    <p>{contact.name}</p>
                                    <p>{contact.title}</p>
                                </div>
                                
                                </li>
                            ))} */}
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBooks

