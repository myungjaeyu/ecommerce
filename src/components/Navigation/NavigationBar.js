import React from 'react'

import './NavigationBar.scss'

import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import NavigationItems from './NavigationItems'

export default () => (
    <header className='NavigationBar'>

        <div className='erer__container'>

            <div>
                Title
            </div>

            <nav>
                <NavigationItems />
            </nav>

            <div className='NavigationBar__right-icon'>
                <NavLink exact to='#'>
                    <FontAwesomeIcon icon={ faShoppingCart } />
                </NavLink>
            </div>

        </div>

    </header>
)