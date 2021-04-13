import React from 'react'
import ReactDOM from 'react-dom'

function PotalDemo() {
    return ReactDOM.createPortal(
        <h1>
            portal is demo
        </h1>,
        document.getElementById('portal-root')
    )
}

export default PotalDemo
