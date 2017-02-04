import React from 'react'

export default class AddBookForm extends React.Component {

  constructor() {
    super()
    this.state = {
      title: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

handleChange(event, type) {
  this.setState({
    [type]: event.target.value
  })
}
handleSubmit() {
  let editBookInfo = {
    title: this.state.title,
    author: this.state.author,
    description: this.state.description,
    genre: this.state.genre,
    image_url: this.state.image_url,
    price: this.state.price,
    keywords: this.state.keywords,
  }

  editBookInfo = JSON.stringify(editBookInfo)


  fetch('http://localhost:3000/edit/:id',
  {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: editBookInfo,
  }).then( res => console.log('response', res ))
}

  render() {
    return (
      <form className="addBookFormStyle" onSubmit={this.handleSubmit.bind(this)}>
        <label>Title:
          <input type="text" value={this.state.title} onChange={event => this.handleChange(event, 'title')} />
        </label>
        <label>Author:
          <input type="text" value={this.state.author} onChange={event => this.handleChange(event, 'author')} />
        </label>
        <label>Description:
          <input type="text" value={this.state.description} onChange={event => this.handleChange(event, 'description')} />
        </label>
        <label>Genre:
          <input type="text" value={this.state.genre} onChange={event => this.handleChange(event, 'genre')} />
        </label>
        <label>Image:
          <input type="text" value={this.state.image_url} onChange={event => this.handleChange(event, 'image_url')} />
        </label>
        <label>Price:
          <input type="text" value={this.state.price} onChange={event => this.handleChange(event, 'price')} />
        </label>
        <label>Keywords:
          <input type="text" value={this.state.keywords} onChange={event => this.handleChange(event, 'keywords')} />
        </label>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}
