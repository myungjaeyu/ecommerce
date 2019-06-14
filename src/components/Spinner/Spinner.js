import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import './Spinner.scss'

export default () => (
    <div className='Spinner'>

        <div>

            <FontAwesomeIcon icon={ faSpinner } />

            <p className='erer__text-sub'>로딩중입니다..</p>

        </div>

    </div>
)