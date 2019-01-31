import React from 'react'

class Book extends React.Component{

   addToCart = ()=>{
     this.props.submitFunction(this.props.book.id)
    }

  render(){
    return (
      <div>
        <div>
          Title: {this.props.book.title}
        </div>
        <div>
          Subtitle: {this.props.book.subtitle}
        </div>
        <div>
          Author: {this.props.book.author}
        </div>
        <button className="btn-floating" onClick = {this.addToCart}>Add Item</button>
      </div>
    );
  }
}

export default Book
