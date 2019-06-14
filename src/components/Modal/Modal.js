import React from 'react'

import './Modal.scss'

import ButtonIcon from '../ButtonIcon/ButtonIcon'
import ModalNotice from './internal/ModalNotice'

import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default ({ show, onClosed, modal }) => {

    const IS_SHOW_CLASSNAME = show ? 'Modal__Open' : 'Modal__Close'

    const handleModal = type => {

        switch(type) {
            case 'notice' : return ModalNotice
            default : return false
        }

    }

    return (
        <div className={ 'Modal ' + IS_SHOW_CLASSNAME } onClick={ onClosed }>

            <div className='Modal__Wrapper'>

                { handleModal(modal.type)(modal.options) }

                <ButtonIcon icon={ faTimes } onClick={ onClosed }/>

            </div>

        </div>
    )

}