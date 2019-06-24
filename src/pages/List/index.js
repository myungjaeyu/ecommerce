import React, { Component } from 'react'

import './index.scss'

import ListHedaer from './internal/Section/ListHeader'
import ListContentMenu from './internal/Section/ListContentMenu'
import ListContent from './internal/Section/ListContent'

export default class extends Component {
    render() {

        const { hideHeader, hideMenu } = this.props

        return (
            <div className='List'>

                { !hideHeader && <ListHedaer /> }
                { !hideMenu && <ListContentMenu /> }
                <ListContent />

            </div>
        )
    }

}