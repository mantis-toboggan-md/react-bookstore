import React from 'react'
import Book from './Book'

class BookList extends React.Component{

  render(){
    const books = this.props.books.map((book)=>{
      return  <Book book = {book} key = {book.id} submitFunction = {this.props.submitFunction}/>
    })
    return(
      <div>
        {books}
      </div>
    )
  }
}

export default BookList
