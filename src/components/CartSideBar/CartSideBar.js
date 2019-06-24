import React from 'react'

import './CartSideBar.scss'

import NavLink from '../NavLink/NavLink'

import CartItems from './internal/CartItems'

export default ({ show, onClosed }) => {

    const IS_SHOW_CLASSNAME = show ? 'CartSideBar__Open' : 'CartSideBar__Close'

    return (
        <div className={ 'CartSideBar ' + IS_SHOW_CLASSNAME }>

            <nav>
                <CartItems onClosed={ onClosed } data={ [
                    { id : '1', image : 'http://swagger.kr/web/product/medium/201905/6ef454202d471789eefb7522499962e0.png', price : '15,000', name : 'SWAGGER 왁스 스웨거 헤어 스터너 왁스 - 크리미&소프트' },
                    { id : '2', image : 'http://swagger.kr/web/product/medium/201905/6ef454202d471789eefb7522499962e0.png', price : '15,000', name : 'SWAGGER 왁스 스웨거 헤어 스터너 왁스 - 크리미&소프트' },
                    { id : '3', image : 'http://swagger.kr/web/product/medium/201905/6ef454202d471789eefb7522499962e0.png', price : '15,000', name : 'SWAGGER 왁스 스웨거 헤어 스터너 왁스 - 크리미&소프트' },
                    { id : '4', image : 'http://swagger.kr/web/product/medium/201905/6ef454202d471789eefb7522499962e0.png', price : '15,000', name : 'SWAGGER 왁스 스웨거 헤어 스터너 왁스 - 크리미&소프트' },
                    { id : '5', image : 'http://swagger.kr/web/product/medium/201905/6ef454202d471789eefb7522499962e0.png', price : '15,000', name : 'SWAGGER 왁스 스웨거 헤어 스터너 왁스 - 크리미&소프트' },
                    { id : '6', image : 'http://swagger.kr/web/product/medium/201905/6ef454202d471789eefb7522499962e0.png', price : '15,000', name : 'SWAGGER 왁스 스웨거 헤어 스터너 왁스 - 크리미&소프트' },
                    { id : '7', image : 'http://swagger.kr/web/product/medium/201905/6ef454202d471789eefb7522499962e0.png', price : '15,000', name : 'SWAGGER 왁스 스웨거 헤어 스터너 왁스 - 크리미&소프트' },
                    { id : '8', image : 'http://swagger.kr/web/product/medium/201905/6ef454202d471789eefb7522499962e0.png', price : '15,000', name : 'SWAGGER 왁스 스웨거 헤어 스터너 왁스 - 크리미&소프트' },
                    { id : '9', image : 'http://swagger.kr/web/product/medium/201905/6ef454202d471789eefb7522499962e0.png', price : '15,000', name : 'SWAGGER 왁스 스웨거 헤어 스터너 왁스 - 크리미&소프트' }
                ]} />
            </nav>

            <div className='CartSideBar__footer'>

                    <h3>총계: ₩42,500</h3>

                    <NavLink to='/order' className='erer__btn erer__btn-black'>
                        주문하기
                    </NavLink>

            </div>

        </div>
    )

}