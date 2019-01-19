import React from 'react'
import * as BooksAPI from '../BooksAPI';

class ListCurrentlyReading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            book: null
        }
    }

    updateBook = (book, shelf) => {
        BooksAPI.update(book, shelf)
            .then(resp => {
                book.shelf = shelf;
                this.setState({ book });
            });
    }

    render() {

        let currentlyReading = this.props.books.filter(el => {
            if (el.shelf === "currentlyReading") {
                return el;
            }
        })

        return (
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {currentlyReading.map((myBook) => (
                                    <li key={myBook.id}>
                                        {console.log(myBook.shelf)}
                                        <div className="book">
                                            <div className="book-top">
                                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${myBook.imageLinks && myBook.imageLinks.thumbnail || ""}")` }}></div>
                                                <div className="book-shelf-changer">
                                                    <select value={myBook.shelf || 'none'} onChange={(e) => { this.updateBook(myBook, e.target.value) }}>
                                                        <option value="move" disabled>Move to...</option>
                                                        <option value="currentlyReading">Currently Reading</option>
                                                        <option value="wantToRead">Want to Read</option>
                                                        <option value="read">Read</option>
                                                        <option value="none">None</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="book-title">{myBook.title}</div>
                                            <div className="book-authors">{myBook.authors}</div>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListCurrentlyReading