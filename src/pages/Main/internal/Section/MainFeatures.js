import React from 'react'

import { NavLink } from 'react-router-dom'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import MainFeature from './MainFeature'

export default () => (
    <section className='MainFeatures'>

        <div className='erer__container'>

            <div className='erer__row'>

                <div className='erer__col-12'>

                    <h2 className='erer__text-center'>TEST FEATURE TITLE</h2>

                </div>

                <MainFeature icon={ faCoffee } caption='Feature1' />

                <MainFeature icon={ faCoffee } caption='Feature2' />

                <MainFeature icon={ faCoffee } caption='Feature3' />

                <div className='erer__col-12 erer__text-center erer__mt-3'>

                    <NavLink exact to='#' className='erer__btn erer__btn-black'>TEST FEATURE TITLE2</NavLink>

                </div>

            </div>

        </div>


    </section>
)