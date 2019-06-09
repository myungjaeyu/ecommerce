import React, { Component } from 'react'

import './index.scss'

import ListHedaer from './internal/Section/ListHeader'
import ListContentMenu from './internal/Section/ListContentMenu'
import ListContent from './internal/Section/ListContent'

export default class extends Component {
    render() {
        return (
            <div className='List'>

                <ListHedaer />
                <ListContentMenu />
                <ListContent />

            </div>
        )
    }

}