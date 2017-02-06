import React, { Component } from 'react'
import ReactCSSTransitionReplace from 'react-css-transition-replace'
import FontAwesome from 'react-fontawesome'
import Modal from 'react-modal'


import AddBookButton from './AddBookButton.jsx'
import DescButton from './DescButton.jsx'
import EditButton from './EditButton.jsx'
import DeleteButton from './DeleteButton.jsx'
import BookContainer  from './BookContainer.jsx'
import Wrapper from './Wrapper.jsx'

export default class App extends Component {
    constructor() {
      super()
      this.state = {
        books: [],
      }
    }


  componentDidMount() {
    this.getTheBooks()
  }

  getTheBooks() {
    fetch('http://localhost:3000/books', { method: 'get'}).then( response =>
    response.json()).then( library =>
      this.setState({
        books: library
      })
    )
  }

  render () {
    let booksTitles = this.state.books.map( libraryRepo =>
      <BookContainer bookInfo={libraryRepo} />
    )

    return (
      <div className="mainWrapper">
        <div className="addBookButton"><AddBookButton /></div>
        <div className="wrapper">
         {booksTitles}
        </div>
      </div>
    )
  }

}
