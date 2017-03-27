import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export default
class Notes extends React.Component {
 constructor(){
   super();
   this.state = {
     editing: false
   }
 }

 edit = () => {
   return (
     //alert('Yooo')
     this.setState({editing: true})
   )
 }

 delete = () => {
   return (
     alert('Booo')
   )
 }

save = () => {
  this.setState({editing: false})
}
 renderNormal = () => {
return(
  <div className='notesContainer'>
    <div className='notesText'> {this.props.children}</div>
  <button onClick={this.edit}> Edit </button>
  <button onClick={this.delete}> Delete </button>
  </div>
)
 }

 renderAdd = () => {
return(
  <div className='notesContainer'>
    <textarea defaultValue=''></textarea>
        <button onClick={this.save}> Save </button>
  </div>
)
 }

  render() {
        if(this.state.editing){
          return (
          this.renderAdd()
          )
        } else {
                return (
                        this.renderNormal()         )
        } }
        }

ReactDOM.render(
  <Notes />, document.getElementById('root')
);
