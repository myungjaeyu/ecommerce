import React from 'react'

import './NavigationBar.scss'

import NavLink from '../NavLink/NavLink'
import { faShoppingCart, faAlignJustify } from '@fortawesome/free-solid-svg-icons'

import Logo from '../Logo/Logo'
import ButtonIcon from '../ButtonIcon/ButtonIcon'
import NavigationItems from './NavigationItems'

export default ({ transparent, onMenu, onCart, children }) => (
    <header className={ `NavigationBar ${ transparent ? 'NavigationBar__Transparent' : ''}` }>

        { children }

        <div className='erer__container'>

            <div className='NavigationBar__auth NavigationBar__desktop'>

                <NavLink exact to='/login'>Log in</NavLink>
                <NavLink exact to='/signup'>Sign up</NavLink>

            </div>

            <div className='NavigationBar__nav'>

                <div className='NavigationBar__mobile'>

                    <ButtonIcon icon={ faAlignJustify } onClick= { onMenu } />

                </div>

                <NavLink exact to='/'>
                    <Logo />
                </NavLink>

                <nav className='NavigationBar__desktop'>

                    <NavigationItems />

                </nav>

                <ButtonIcon icon={ faShoppingCart } onClick= { onCart } />

            </div>

        </div>

    </header>
)