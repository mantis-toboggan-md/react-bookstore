import React from 'react'

class Cart extends React.Component{
  render(){
    console.log('books in cart', this.props.books)
    const cartList = this.props.books.map((book)=>{
      return <div key = {book.id}>
        {book.title} (${book.price})
      </div>
    })
    const total = this.props.books.reduce((total, book)=>{
      return total + book.price
    }, 0)
    return(
      <div id='cart-container'>
        <h5>Shopping Cart</h5>
        {cartList}
        Total Price: ${total}
      </div>
    )
  }
}

export default Cart
