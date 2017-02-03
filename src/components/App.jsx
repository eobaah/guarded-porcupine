import React, { Component } from 'react'
import BookContainer from './BookContainer.jsx'
import Buttons from './Buttons.jsx'
// import Wrapper from './Wrapper.jsx'
// import Forms from './Forms.jsx'

// import styles from './stylesheets/style.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
    }
  }



  componentWillMount() {
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
    let booksTitles = this.state.books.map( book =>
      <BookContainer bookData={book} />
    )

    return (
      <div className="wrapper">
        {booksTitles}
      </div>
    )
  }
}
