import React, {Component} from 'react';
import './App.css';
import * as BooksAPI from './api/BooksAPI';
import { Route } from 'react-router-dom'

import SearchBooks from './components/SearchBooks'
import MyBookShelfs from './components/MyBookShelfs'

class BooksApp extends Component {
  state = {
    books: []
  }

  /**
  * @description Fetch all books from the API server
  *              with shelfs "currentlyReading", "wantToRead", and "read"
  *              immediately after a component is mounted and update state
  */
  componentDidMount(){
    this.fetchAll();
  };

  /**
  * @description Reload the page with updated state
  */
  handleReload=()=>{
    this.fetchAll();
  };

  /**
  * @description Fetch all books with shelfs "currentlyReading", "wantToRead", and "read"
  *               and update state
  */
  fetchAll=()=>{
    BooksAPI.getAll()
      .then((books)=>{
        this.setState(()=>({
          books
        }));
      });
  };

  /**
  * @description Update shelf of the book, then update state
  * @param {object} book
  * @param {string} shelf
  */
  updateShelf=(book,shelf)=>{
    BooksAPI.update(book, shelf)
      .then((books)=>{
        book.shelf = shelf;
        this.setState((currState)=>({
          books: [...currState.books, books]
        }));
      });
    };

  render() {
    return (
      <div className="app">

        {/*Search page*/}
        <Route exact path='/search' render={()=>(
              <SearchBooks
                  updateShelf={this.updateShelf}
                  books={this.state.books}
                  handleParentRefresh={this.handleReload}/>
            )}
        />

        {/*Home page*/}
        <Route exact path='/' render={()=>(
              <MyBookShelfs
                  books={this.state.books}
                  updateShelf={this.updateShelf}/>
            )}
        />

      </div>
    )}
}

export default BooksApp;
