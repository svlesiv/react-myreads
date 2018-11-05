import React from 'react';
import PropTypes from 'prop-types';
import ListBooks from './ListBooks'

const BookShelf = props =>{
  const {title, books, updateShelf} = props;

    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ListBooks shelfBooks={books} updateShelf={updateShelf}/>
        </div>
      </div>
    )
}

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
}

export default BookShelf;
