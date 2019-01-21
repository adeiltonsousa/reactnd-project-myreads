import React from 'react'
import { Link } from 'react-router-dom';


class AddBook extends React.Component {
    render() {
        return (
            <div className="open-search">
                <button>
                    <Link                     
                        to='/search'
                        >
                    AddBook</Link>
                </button>
            </div>
        );
      }
    }

export default AddBook;