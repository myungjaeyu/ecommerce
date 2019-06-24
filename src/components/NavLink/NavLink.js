import React from 'react'

import { NavLink } from 'react-router-dom'

export default ({ children, onClick, ...props }) => {

    return (
        <NavLink { ...props } onClick={ () => {
            window.scrollTo(0,0)
            onClick && onClick()
        }}>
            { children }
        </NavLink>
    )
}