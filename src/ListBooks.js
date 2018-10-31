import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Book from './Book';


class ListBooks extends Component {

  render(){
    const {shelfBooks} = this.props;

    return(
      <ol className="books-grid">
        {shelfBooks.map(book=>(
          <li key={book.title}>
            <Book
              backgroundImage={`url(${book.imageLinks.thumbnail})`}
              title={book.title}
              authors={book.authors.map(author => <span>{author} *  </span>)}/>
          </li>
        ))}
      </ol>
    )
  }

}

ListBooks.propTypes = {
  shelfBooks: PropTypes.array.isRequired,
}

export default ListBooks;
