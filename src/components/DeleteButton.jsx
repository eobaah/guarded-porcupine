import React from 'react';
import FontAwesome from 'react-fontawesome'

export default class DeleteButton extends React.Component {
  render() {
    return (
      <i className="fa fa-trash-o delete" aria-hidden="true"></i>
    )
  }
}
