import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export default
class Notes extends Component {


 edit = () => {
   return (
     alert('Yooo')
   )
 }

 delete = () => {
   return (
     alert('Booo')
   )
 }

  render() {
    return (
          <div className='notesContainer'>
                <div className='notesText'> {this.props.children}</div>
                <button onClick={this.edit}> Edit </button>
                <button onClick={this.delete}> Delete </button>
          </div>


);
}
}
