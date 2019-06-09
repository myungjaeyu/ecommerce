import React from 'react'

import './ButtonIcon.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default ({ icon, onClick }) => (
    <div className='ButtonIcon' onClick={ onClick }>
        <FontAwesomeIcon icon={ icon } />
    </div>
)