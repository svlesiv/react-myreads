import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from '../api/BooksAPI';
import { Link } from 'react-router-dom';
import ListBooks from './ListBooks';

class SearchBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired,
    handleParentRefresh: PropTypes.func.isRequired,
  }

  state = {
    searchBooks: []
  }

  /**
  * @description Search for the books and assign shelf values
  * @param {string} query - User input
  * @return {object} modified state of the searchBooks
  */
  handleSearch=(query)=>{
    if (query.trim()){
      BooksAPI.search(query.trim())
      .then((searchBooks)=>{

         //check if a query is empty
        if(searchBooks.length > 0){
          //assign shelf values to the searchBooks array
          this.changeShelfValue(searchBooks, this.props.books);
          //return modified state of the searchBooks
          this.setState(()=>{
            return {searchBooks: searchBooks};
          });

        //if we got an empty query - reset state of the searchBooks
        }else {
          this.setState(()=>{
              return {searchBooks: []};
          });
        }

      });

    //if we don't have any query - reset state of the searchBooks
    }else {
      this.setState(()=>{
          return {searchBooks: []};
      });
    }
  };

  /**
  * @description Assign shelf values
  * @param {array} searchBooks - Books fetched from API server, based on a query
  * @param {array} books - Books from the home page
  */
  changeShelfValue = (searchBooks, books) => {
    // iterate over searchBooks array and books from the home page
    // and assign shelf values to the searchBooks array
    searchBooks.map(searchBook=> {
        searchBook.shelf = 'none';
        this.props.books.forEach(book => {
          if(book.id === searchBook.id){
            searchBook.shelf = book.shelf;
          }
        })
        return searchBook;
      })
  };

  render() {
    const { updateShelf, handleParentRefresh } = this.props;
    const { searchBooks } = this.state;

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className='close-search' onClick={handleParentRefresh}> Close</Link>
          <div className="search-books-input-wrapper">

            {/*search for books*/}
            <input type="text" placeholder="Search by title or author"
                   onChange={(event)=>this.handleSearch(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <ListBooks shelfBooks={searchBooks} updateShelf={updateShelf}/>
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks;
