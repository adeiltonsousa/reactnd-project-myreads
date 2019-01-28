import React from 'react'


class ListSearch extends React.Component {
    
    render() {
        return (
            <div className="list-books-content">
                <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{this.props.title}</h2>
                    <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.results.map((myBook) => (
                        <li key={myBook.id}>
                            <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${myBook.imageLinks && myBook.imageLinks.thumbnail || ""}")` }}></div>
                                <div className="book-shelf-changer">
                                <select value={myBook.shelf || 'none'} onChange={(e) => { this.props.updateBook(myBook, e.target.value) }}>
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

export default ListSearch;