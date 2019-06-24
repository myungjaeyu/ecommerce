import React from 'react'

export default ({ image, title, description }) => (
    <div className='ItemContentItem erer__col-12'>

        <div className='ItemContentItem__wrapper'>

            <img src={ image } alt=''/>

            <h1>{ title }</h1>

            <h3>{ description }</h3>
            
        </div>

    </div>
)