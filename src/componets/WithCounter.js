import React from 'react'

const UpdatedComonent=(OriginalCompnent)=>{
    class NewComponent extends React.Component{

        constructor(props) {
            super(props)
    
            this.state = {
                count: 0
            }
        }
       incrementCount = () => {
            this.setState(prevState => {
                return {count: prevState.count + 1}
            })
        }


        render(){
            return<OriginalCompnent name='Obid'/>
        }
    }
    return NewComponent

}
export default UpdatedComonent