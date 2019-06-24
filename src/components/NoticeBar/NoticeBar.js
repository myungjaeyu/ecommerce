import React from 'react'

import './NoticeBar.scss'

import { faTimes } from '@fortawesome/free-solid-svg-icons'

import ButtonIcon from '../ButtonIcon/ButtonIcon'

export default ({ hide, onClosed, image }) => (
    <div 
        className={ `NoticeBar ${ hide ? 'NoticeBar__Close' : ''}` }
        style={ { backgroundImage : `url("${ image }")` }}
    >

        <ButtonIcon icon={ faTimes } onClick={ onClosed } />

    </div>
)