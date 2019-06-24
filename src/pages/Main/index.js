import React, { Component } from 'react'

import './index.scss'

import MainContent from './internal/Section/MainContent'
import MainSubContent from './internal/Section/MainSubContent'

import List from '../List'

export default class extends Component {
    render() {
        return (
            <div className='Main'>

                <MainContent />
                <MainSubContent />

                <List hideHeader={ true } hideMenu={ true } />

            </div>
        )
    }

}