import React from 'react'
import { Link } from 'react-router-dom';


class AddBook extends React.Component {
    render() {
        return (
            <button>
                <div >
                    <Link
                        className="open-search"
                        to='/search'
                    >
                        AddBook</Link>
                </div>
            </button>
        );
    }
}

export default AddBook;