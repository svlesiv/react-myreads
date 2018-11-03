import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Book extends Component {

  render(){
    const {backgroundImage, title, authors, book} = this.props;

    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: backgroundImage }}></div>
          <div className="book-shelf-changer">
            <select defaultValue={book.shelf} onChange={(event)=>this.props.updateShelf(book, event.target.value)}>
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
}

Book.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authors:  PropTypes.array.isRequired,
}

export default Book;
