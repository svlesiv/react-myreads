import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
   const { backgroundImage, title, authors, book, shelf, updateShelf} = props;

   return (
      <div className="book">
        <div className="book-top">

          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: backgroundImage }}></div>
          <div className="book-shelf-changer">

            {/*select a shelf*/}
            <select defaultValue={shelf} onChange={(event)=>updateShelf(book, event.target.value)}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>

          </div>
        </div>

        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
  )

}

Book.propTypes = {
  backgroundImage: PropTypes.string,
  title: PropTypes.string.isRequired,
  authors:  PropTypes.array,
  book: PropTypes.object.isRequired,
  shelf: PropTypes.string.isRequired,
  updateShelf: PropTypes.func.isRequired,
}

export default Book;
