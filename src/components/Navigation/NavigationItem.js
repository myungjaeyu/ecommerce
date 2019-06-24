import React from 'react'

import NavLink from '../NavLink/NavLink'

export default ({ to, children }) => (
    <NavLink exact to={ to }> 
        <li>
            { children }
        </li>
    </NavLink>
)