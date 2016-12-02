import React, { Component } from 'react';
import { connect }from 'react-redux'

 class BookDetail extends Component {
  render() {
    if (!this.props.book){
      return <div>Select a book to get started.</div>
    }
    return (
      <div>
        <h3>Details for {this.props.book.title}</h3>
        <hr />
        <h5>Title: {this.props.book.title}</h5>
        <h6>Pages: {this.props.book.pages}</h6>
      </div>
    );
  }
}

function mapsStateToProps(state){
  return{
    book: state.activeBook
  }
}


export default connect(mapsStateToProps)(BookDetail)