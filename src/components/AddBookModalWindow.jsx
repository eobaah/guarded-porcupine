import React from 'react'
import Modal from 'react-modal'
import FontAwesome from 'react-fontawesome'
import DescButton from './DescButton.jsx'
import EditButton from './EditButton.jsx'
import DeleteButton from './DeleteButton.jsx'

export default class AddBookModalWindow extends React.Component {

  close(e) {
    e.preventDefault()

    if (this.props.onClose) {
      this.props.onClose()
    }
  }

  render() {
    if (this.props.isOpen === false)
      return null

    let modalStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '70%',
      height: '70%',
      transform: 'translate(-50%, -50%)',
      zIndex: '9999',
      background: '#fff'
    }

    let backdropStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0px',
      left: '0px',
      zIndex: '9998',
      background: 'rgba(0, 0, 0, 0.3)'
    }

    return (
      <div>
        <div style={modalStyle}>
          {this.props.children}
        </div>
        <div style={backdropStyle} onClick={e => this.close(e)}>
        </div>
      </div>
    )
  }

}
