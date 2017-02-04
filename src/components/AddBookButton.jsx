import React from 'react'
import Modal from 'react-modal'
import FontAwesome from 'react-fontawesome'
import AddBookForm from './AddBookForm.jsx'
import ModalWindow from './ModalWindow.jsx'

export default class AddBookButton extends React.Component {


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
        <div className="addBookModal">
          <button onClick={() => this.openModal()}>Add Book</button>
          <ModalWindow className="modalText" isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
            <AddBookForm />
            <button onClick={() =>
            this.closeModal()}>Close</button>
          </ModalWindow>
        </div>
    )
  }
}
