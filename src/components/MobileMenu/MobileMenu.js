import React from 'react'

import './MobileMenu.scss'

export default ({ show, onClosed }) => {

    const IS_SHOW_CLASSNAME = show ? 'MobileMenu__Open' : 'MobileMenu__Close'

    return (
        <div className={ 'MobileMenu ' + IS_SHOW_CLASSNAME } onClick={ onClosed }>
            MobileMenu
        </div>
    )

}