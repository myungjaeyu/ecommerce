import React from 'react'

import { NavLink } from 'react-router-dom'

export default ({ id, image, name, price }) => (
    <div className='ListContentItem erer__col-3'>

        <NavLink exact to={ '/item/' + id }>

            <img src={ image } className='erer__w-100' />

            <h5 className='erer__text-center'>{ name }</h5>

            <p>￦{ price }</p>

        </NavLink>

    </div>
)