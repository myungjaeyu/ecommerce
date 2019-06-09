import React from 'react'

import { NavLink } from 'react-router-dom'

export default ({ children }) => (
    <li>
        <NavLink exact to='#'> { children } </NavLink>
    </li>
)