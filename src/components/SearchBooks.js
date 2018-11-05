import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from '../api/BooksAPI'
import { Link } from 'react-router-dom';
import ListBooks from './ListBooks'

class SearchBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired,
    handleParentRefresh: PropTypes.func.isRequired,
  }

  state = {
    searchBooks: []
  }

  handleSearch=(query)=>{
    if (query.trim()){
      BooksAPI.search(query.trim())

      .then((searchBooks)=>{
        console.log(searchBooks);

        if(searchBooks.length > 0){ //in case of empty query
          searchBooks.map(searchBook=> {
              searchBook.shelf = "none";

              this.props.books.forEach(book => {
                if(book.id === searchBook.id){
                  searchBook.shelf = book.shelf;
                }
              })
              return searchBook;
            })//end searchBooks.map

          this.setState(()=>{
            return {searchBooks: searchBooks}
          })
        }//end of if
        else {
          this.setState(()=>{
              return {searchBooks: []} //if we got empty query - reset state array
          })
        }

      }) // end of .then
    } // end of if check
    else {
      this.setState(()=>{
          return {searchBooks: []} //if we don't have  query - reset state array
      })
    }
  } // end of function



  render() {
    const { updateShelf, handleParentRefresh } = this.props;
    const { searchBooks } = this.state;

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className='close-search' onClick={handleParentRefresh}> Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={(event)=>this.handleSearch(event.target.value)}/>
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
