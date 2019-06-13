import React from 'react'

import './CartSideBar.scss'

import { NavLink } from 'react-router-dom'

import CartItems from './internal/CartItems'

export default ({ show, onClosed }) => {

    const IS_SHOW_CLASSNAME = show ? 'CartSideBar__Open' : 'CartSideBar__Close'

    return (
        <div className={ 'CartSideBar ' + IS_SHOW_CLASSNAME } /* onClick={ onClosed } */>

            <nav>
                <CartItems />
            </nav>

            <div className='CartSideBar__footer'>

                    <h3>총계: ₩42,500</h3>

                    <NavLink exact to='/order' className='erer__btn erer__btn-black'>
                        주문하기
                    </NavLink>

            </div>

        </div>
    )

}