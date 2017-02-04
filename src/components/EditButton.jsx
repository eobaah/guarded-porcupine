import React from 'react'
import Modal from 'react-modal'
import FontAwesome from 'react-fontawesome'

import EditBookForm from './EditBookForm.jsx'
import ModalWindow from './ModalWindow.jsx'

export default class EditButton extends React.Component {


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
        <div className="editModal">
          <i onClick={() => this.openModal()} className="fa fa-pencil-square-o edit" aria-hidden="true"></i>
          <ModalWindow className="modalText" isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
            <EditBookForm />
            <button onClick={() =>
            this.closeModal()}>Close</button>
          </ModalWindow>
        </div>
    )
  }
}
