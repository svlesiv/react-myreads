import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

class MyBookShelfs extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired,
  }

  /**
  * @description Filter the books for a specific shelf
  * @param {string} shelf
  */
  filterShelf = (shelf) => {
    return this.props.books.filter(book => book.shelf === shelf);
  };

  render(){
    let current = this.filterShelf('currentlyReading');
    let want = this.filterShelf('wantToRead');
    let read = this.filterShelf('read');

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>

          {/*Display shelfs*/}
          <BookShelf title='Currently Reading' updateShelf={this.props.updateShelf} books={current}/>
          <BookShelf title='Want to Read' updateShelf={this.props.updateShelf} books={want}/>
          <BookShelf title='Read' updateShelf={this.props.updateShelf} books={read}/>

          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default MyBookShelfs;
