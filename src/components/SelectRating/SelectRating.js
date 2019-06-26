import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faStarBlack } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarLight } from '@fortawesome/free-regular-svg-icons'

export default ({ rating, onRating }) => {

    const paint = (num) =>{

        let rating = []

        for (let i = 5; i--;)
            rating.push(
                <FontAwesomeIcon 
                    key={ i }
                    icon={ num > i ? faStarBlack : faStarLight }
                    onClick={ (e) => onRating && onRating(e, i + 1) }/>
            )

        return rating.reverse()

    }

    return (
        <div className='SelectQuantity'>

            { paint(rating) }

        </div>
    )

} 