import React, { Component } from 'react'
import FRIput from './FRIput'

  class FRParent extends Component {

  constructor(props) {
        super(props)
    
 this.inputRef=React.createRef()

    }
    
    clickHandler=()=>{
        this.inputRef.current.focus()
    }
   render() {
        return (
          <div>
           <FRIput ref={this.inputRef}/>
          <button onClick={this.clickHandler}>Focas Input</button>
                            </div>      
                             )
    }
 }



export default FRParent
