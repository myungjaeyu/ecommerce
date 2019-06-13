import React from 'react'

import { NavLink } from 'react-router-dom'

import ButtonIcon from '../../ButtonIcon/ButtonIcon'

import { faTimes } from '@fortawesome/free-solid-svg-icons'


export default ({ id, price, image, children }) => (
    <NavLink exact to={ '/item/' + id }> 
        <li>

            <div className='CartItem__image'>

                <img src={ image } alt='' />

            </div>

            <div className='CartItem__content'>

                <h4>{ children }</h4>

                <h5>{ price }</h5>

            </div>

            <ButtonIcon icon={ faTimes } />

        </li>
    </NavLink>
)