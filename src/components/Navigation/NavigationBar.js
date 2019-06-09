import React from 'react'

import './NavigationBar.scss'

import { NavLink } from 'react-router-dom'
import { faShoppingCart, faAlignJustify } from '@fortawesome/free-solid-svg-icons'

import Logo from '../Logo/Logo'
import ButtonIcon from '../ButtonIcon/ButtonIcon'
import NavigationItems from './NavigationItems'

export default () => (
    <header className='NavigationBar'>

        <div className='erer__container'>

            <div className='NavigationBar__auth NavigationBar__desktop'>

                <NavLink exact to='#'>Log in</NavLink>
                <NavLink exact to='#'>Sign up</NavLink>

            </div>

            <div className='NavigationBar__nav'>

                <div className='NavigationBar__mobile'>
                    <ButtonIcon icon={ faAlignJustify } />
                </div>

                <NavLink exact to='/'>
                    <Logo />
                </NavLink>

                <nav>

                    <div className='NavigationBar__desktop'>

                        <NavigationItems />

                    </div>

                </nav>

                <ButtonIcon icon={ faShoppingCart } />

            </div>

        </div>

    </header>
)