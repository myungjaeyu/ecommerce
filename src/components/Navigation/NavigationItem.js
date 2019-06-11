import React from 'react'

import { NavLink } from 'react-router-dom'

export default ({ to, children }) => (
    <NavLink exact to={ to }> 
        <li>
            { children }
        </li>
    </NavLink>
)