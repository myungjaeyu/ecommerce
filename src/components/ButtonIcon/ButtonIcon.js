import React from 'react'

import './ButtonIcon.scss'

import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default ({ icon }) => (
    <div className='ButtonIcon'>
    <NavLink exact to='#'>
        <FontAwesomeIcon icon={ icon } />
    </NavLink>
</div>
)