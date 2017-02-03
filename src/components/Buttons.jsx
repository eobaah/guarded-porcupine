import React from 'react'

class Buttons extends React.Component {
  render() {

    // var text = this.props.text ? <span>{this.props.text}</span> : <span>Add Book</span>;

    return (
      <button type="submit" form="bookId" value="addBook">Add Book</button>
    )
  }
}


//
//     this.props.showCompletedFlag ?
//       <div className='buttonContainer'>
//         <div className='addButton' onClick={this.props.addBook}>
//           <svg width="28" height="28">
//             <line x1="14" y1="3" x2="14" y2="25" />
//             <line x1="3" y1="14" x2="25" y2="14" />
//           </svg>
//         </div>
//       </div>
//   }
// }

export default Buttons
