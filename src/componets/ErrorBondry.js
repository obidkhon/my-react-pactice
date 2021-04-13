import React, { Component } from 'react'

 class ErrorBondry extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              hasError: false
         }
     }
     
     static getDerivedStateFromError(error){
         return{
             hasError: true
         }
     }
     componentDidCatc( errror,info){
         console.log(info)
     }
    render() { 
        if(this.state.hasError){
            return <h1>Something wnt wrong</h1>
        }
        return this.props.children
    }
}

export default ErrorBondry
