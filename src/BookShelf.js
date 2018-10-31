import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ListBooks from './ListBooks'

class BookShelf extends Component {
  render(){
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ListBooks shelfBooks={this.props.books}/>
        </div>
      </div>
    )
  }


}

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
}

export default BookShelf;
