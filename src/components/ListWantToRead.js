import React from 'react'

class ListWaltToRead extends React.Component {

    render() {

        let wantToRead = this.props.books.filter(el => {
            if (el.shelf === "wantToRead") {
                return el;
            }
        });

        return (
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {wantToRead.map((myBook) => (
                                    <li key={myBook.id}>
                                        <div className="book">
                                            <div className="book-top">
                                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${myBook.imageLinks && myBook.imageLinks.thumbnail || ""}")` }}></div>
                                                <div className="book-shelf-changer">
                                                    <select>
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


export default ListWaltToRead