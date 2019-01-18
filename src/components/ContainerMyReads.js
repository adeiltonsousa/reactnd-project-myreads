import React from 'react'
import { Link } from 'react-router-dom';


class ContainerMyReads extends React.Component {
    render() {
        return (
          <div className="list-books">
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        );
      }
    }

export default ContainerMyReads;