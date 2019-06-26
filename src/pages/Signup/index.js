import React, { Component } from 'react'

import './index.scss'

import Center from '../../components/Center/Center'
import Logo from '../../components/Logo/Logo'

export default class extends Component {
    render() {

        return (
            <div className='Signup'>

                <Center>

                    <div className='Signup__form'>

                        <Logo size='2.8rem' />

                        <label>
                            <span className='erer__text-sub'>이메일</span>
                            <input />
                        </label>

                        <label>
                            <span className='erer__text-sub'>이름</span>
                            <input />
                        </label>

                        <label>
                            <span className='erer__text-sub'>비밀번호</span>
                            <input type='password' />
                        </label>

                        <label>
                            <span className='erer__text-sub'>비밀번호 확인</span>
                            <input type='password' />
                        </label>                        

                        <label className='Signup__phone'>
                            <span className='erer__text-sub'>휴대폰 번호</span>
                            <input /> - <input /> - <input />
                        </label>

                        <label className='Signup__check erer__text-sub'>
                            <input type='checkbox' />
                            이용약관과 개인정보 수집 및 이용에 동의합니다.
                            <br />
                            본 약관에는 마케팅 정보 수신 동의에 관한 내용이 포함되어 있으며, 회원은 언제든지 회원 정보 수정에서 수신 거부로 변경할 수 있습니다.
                        </label>

                        <button className='Signup__submit erer__btn erer__btn-black'>내 계정 생성하기</button>

                    </div>

                </Center>

            </div>
        )
    }

}