import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ListBooks from './ListBooks'

const BookShelf = (props) => {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.title}</h2>
        <div className="bookshelf-books">
          <ListBooks shelfBooks={props.books} updateShelf={props.updateShelf}/>
        </div>
      </div>
    )  
}

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
}

export default BookShelf;
