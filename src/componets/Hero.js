import React from 'react'

function Hero({heroName}) {
    if (heroName==='Joker') {
        throw new Error('A xatoku')
    }
    return (
        <div>
            {heroName}
        </div>
    )
}

export default Hero
