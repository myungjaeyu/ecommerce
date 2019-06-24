import React from 'react'

import NavLink from '../../../../components/NavLink/NavLink'

export default () => (
    <section className='MainContent'>

        <h2>메인 콘텐츠의 테스트 타이틀입니다.</h2>

        <p>
            <NavLink exact to='/list' className='erer__btn erer__btn-black'>
                구매하러 가기
            </NavLink>
        </p>

    </section>
)