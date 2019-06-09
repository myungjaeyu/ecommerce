import React, { Component } from 'react'

import './index.scss'

import MainContent from './internal/Section/MainContent'

export default class extends Component {
    render() {
        return (
            <div className='Main'>

                <MainContent />

            </div>
        )
    }

}