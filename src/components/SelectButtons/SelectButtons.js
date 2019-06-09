import React, { Component } from 'react'

import './SelectButtons.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompress, faExpand } from '@fortawesome/free-solid-svg-icons'

export default class extends Component {
    render() {
        return (
            <div className='SelectButtons'>

                <FontAwesomeIcon icon={ faCompress } className='SelectButtons__selected' />
                <FontAwesomeIcon icon={ faExpand } />

            </div>
        )
    }

}