import React from 'react'
import Buttons from './Buttons.jsx'

export default class BookContainer extends React.Component {
  // static propTypes = {
  //   bookData: PropTypes.array,
  // }

  constructor(props) {
    super(props)
    this.state = {
      divContent: "test"
    }
  }

  changeTheDiv() {
    if ( this.state.divContent === "test") {
      this.setState({
        divContent: {bookData.description}
      })
    } else {
      this.setState({
        divContent: "test"
      })
    }
  }

  render() {
    const bookData = this.props.bookData
    const theAmazingDiv = this.state.divContent === "test" ? <div>test</div> : <div>{bookData.description}</div>
    return (
      <div className="bookContainer">
        <img src={bookData.image_url}/>
        <div>{bookData.title}</div>
        <div>{bookData.author}</div>
        <div>{theAmazingDiv}</div>
        <div onClick={this.changeTheDiv.bind(this)}>See Description</div>
      </div>
    )
  }
}
