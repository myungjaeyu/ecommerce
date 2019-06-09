import React, { Component } from 'react'

import './index.scss'

import MainContent from './internal/Section/MainContent'
import MainFeatures from './internal/Section/MainFeatures'

export default class extends Component {
    render() {
        return (
            <div className='Main'>

                <MainContent />
                <MainFeatures />

            </div>
        )
    }

}