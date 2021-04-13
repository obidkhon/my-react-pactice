import React from 'react'

// function FRIput() {
//     return (
//         <div>
//             <input type="text"/>
//         </div>
//     )
// }

const FRIput=React.forwardRef((props,ref)=>{
    return(
        <div>
            <input type= "text" ref={ref}/>
            
        </div>
    )

})

export default FRIput
