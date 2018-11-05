import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const ListBooks = props => {  
  const {shelfBooks, updateShelf} = props;

  return(
    <ol className="books-grid">
      {shelfBooks.length > 0 && shelfBooks.map(book=>(
        <li key={book.id}>
            <Book
              book={book}
              shelf={book.shelf}
              updateShelf={updateShelf}
              title={book.title}
              authors={book.authors && book.authors.map((author,index)=><div key={index}>{author}</div>)}
              backgroundImage={book.imageLinks && `url(${book.imageLinks.thumbnail})`}
              />
          </li>
      ))}
    </ol>
  )
}

ListBooks.propTypes = {
  shelfBooks: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
}

export default ListBooks;
