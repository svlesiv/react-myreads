
////DELETE


import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import BookShelf from './BookShelf'

class MyBookShelfs extends Component {

  filterShelf = (shelf) => {
    return this.props.books.filter(book => book.shelf === shelf);
  }

  render(){
    let current = this.filterShelf("currentlyReading");
    let want = this.filterShelf("wantToRead");
    let read = this.filterShelf("read");

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
          <BookShelf title='Currently Reading' updateShelf={this.props.updateShelf} books={this.props.books}/>
          <BookShelf title='Want to Read' updateShelf={this.props.updateShelf} books={this.props.books}/>
          <BookShelf title='Read' updateShelf={this.props.updateShelf} books={this.props.books}/>
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
