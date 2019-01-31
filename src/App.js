import React, { Component } from 'react';
import './App.css';
import BookList from './components/BookList'
import Cart from './components/Cart'
import FilterBookList  from './components/FilterBookList'


class App extends Component {

  state = {
    cart: [],
    allBooks: [],
    filteredBooks: [],
    isLoading: false
  }
  componentDidMount(){
    this.setState({isLoading: true}, ()=>{
      fetch('http://localhost:8000/books')
        .then((resp)=>{
          return resp.json()
        })
        .then(json=>{
          this.setState({
            allBooks:json,
            filteredBooks: json,
            cart: json.filter(book=>book.inCart ==true),
            isLoading: false
          })
        })
    })

  }

  addToCart = async (bookId)=>{
    const response = await fetch(`http://localhost:8000/books/cart/add/${bookId}`, {method: 'PATCH'})
    const json = await response.json()
    const bookToAdd = this.state.allBooks.filter((book)=>book.id === json[0].id)[0]
    this.setState({cart: [...this.state.cart, bookToAdd]})
  }

  filterBy = (string, type)=>{
    const regexp = new RegExp(`(${string})`, 'i')
    const filteredBooks = string.length ? this.state.allBooks.filter((book)=>{
      return book[type].search(regexp) != -1
    }) : this.state.allBooks

    this.setState({filteredBooks: filteredBooks})
  }

  render() {
      return (
        <div >
        {this.state.isLoading ? <div>loading...</div> :
          <div className = 'container'>
            <div className = 'row'>
              <div className = 'col s4'>
                <FilterBookList filterBy = {this.filterBy}/>
              </div>
            </div>
            <div className = 'row'>
              <div className = 'col s8'>
                <BookList addToCart = {this.addToCart} submitFunction = {this.addToCart} books = {this.state.filteredBooks}/>
              </div>
              <Cart books = {this.state.cart} isLoading = {this.state.isLoading}/>
            </div>
          </div>
        }
        </div>
      );
  }
}

export default App;
