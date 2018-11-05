import React from 'react'
import './App.css'
import * as BooksAPI from './api/BooksAPI'
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom'

import BookShelf from './components/BookShelf'
import SearchBooks from './components/SearchBooks'
// import MyBookShelfs from './components/MyBookShelfs'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll()
      .then((books)=>{
        this.setState(()=>({
          books
        }))
      })
  }

  handleReload=()=>{
    window.location.reload();
  }

  filterShelf = (shelf) => {
    return this.state.books.filter(book => book.shelf === shelf);
  }

  updateShelf=(book,shelf)=>{
    BooksAPI.update(book, shelf)
      .then((books)=>{
        book.shelf = shelf;
        this.setState(()=>({
          books: this.state.books
        }))
        })
    }

  render() {
    let current = this.filterShelf("currentlyReading");
    let want = this.filterShelf("wantToRead");
    let read = this.filterShelf("read");

    return (
      <div className="app">

        <Route exact path='/search' render={()=>(
              <SearchBooks
                  updateShelf={this.updateShelf}
                  books={this.state.books}
                  handleParentRefresh={this.handleReload}/>
            )}
        />

        <Route exact path='/' render={()=>(
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  <div>
                  <BookShelf title='Currently Reading' updateShelf={this.updateShelf} books={current}/>
                  <BookShelf title='Want to Read' updateShelf={this.updateShelf} books={want}/>
                  <BookShelf title='Read' updateShelf={this.updateShelf} books={read}/>
                  </div>
                </div>
                <div className="open-search">
                  <Link to='/search'>Add a book</Link>
                </div>
              </div>
            )}
        />

      </div>
    )}
}

export default BooksApp
