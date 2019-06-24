import React from 'react'

import './MobileMenu.scss'

import NavLink from '../NavLink/NavLink'

import NavigationItems from '../Navigation/NavigationItems'

export default ({ show, onClosed }) => {

    const IS_SHOW_CLASSNAME = show ? 'MobileMenu__Open' : 'MobileMenu__Close'

    return (
        <div className={ 'MobileMenu ' + IS_SHOW_CLASSNAME } onClick={ onClosed }>
            
            <nav>

                <NavigationItems />

            </nav>

            <div className='MobileMenu__footer'>

                <NavLink exact to='/login'>Log in</NavLink>

                <NavLink exact to='/signup'>Sign up</NavLink>

            </div>

        </div>
    )

}