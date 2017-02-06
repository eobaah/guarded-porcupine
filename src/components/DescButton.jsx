import React from 'react'
import Modal from 'react-modal'
import FontAwesome from 'react-fontawesome'
import ModalWindow from './ModalWindow.jsx'

export default class DescButton extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false
    }
  }

  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }

  render() {

    return (
        <div className="decriptionModal">
          <i onClick={() => this.openModal()} className="fa fa-file-text-o description" aria-hidden="true"></i>
          <ModalWindow className="modalText" isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
            <div className="bookText">{this.props.bookInfo.description}</div>
            <button onClick={() =>
            this.closeModal()}>Close</button>
          </ModalWindow>
        </div>
    )
  }
}
