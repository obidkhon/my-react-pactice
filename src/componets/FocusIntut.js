import React, { Component } from 'react'
import Input from './Input'

export class FocusIntut extends Component {
    ///1 
    constructor(props) {
        super(props)
        this.componentRef=React.createRef()
    
    }
    clickHandler=()=>{
        this.componentRef.current.focusIntut()
    }
    render() {
        return (
            <div>
                <Input ref ={this.componentRef} />
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FocusIntut
