import React from 'react'
import Modal from 'react-modal'
import FontAwesome from 'react-fontawesome'
import DescButton from './DescButton.jsx'
import EditButton from './EditButton.jsx'
import DeleteButton from './DeleteButton.jsx'



export default class BookContainer extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const bookInfo = this.props.bookInfo

    return (
      <div className="bookContainer">
        <img src={bookInfo.image_url} />
        <div className="bookHeadInfo">
          <div>{bookInfo.title}</div>
          <div>{bookInfo.author}</div>
        </div>
        <div className="buttonContainer">
          <DescButton bookInfo={bookInfo}></DescButton>
          <EditButton></EditButton>
          <DeleteButton></DeleteButton>
        </div>
      </div>
    )
  }
}
