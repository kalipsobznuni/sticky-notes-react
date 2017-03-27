import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


export default

class Board extends React.Component{
  constructor() {
    super();
    this.state = {
      notes: [
        '1',
        '2',
        'Bazingaaa'
      ]
    }
  }

    render() {
      return(
        <div className='board'>
        {this.state.notes.map((text, i)=>{
          return (<Notes key={i} index={i}>{text}</Notes>)
        })}
        </div>
      )
    }
}

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
        const insideValue= this.refs.newText.value
        console.log(insideValue)
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
        <textarea ref='newText'defaultValue=''></textarea>
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
  < Notes />, document.getElementById('root')
);
