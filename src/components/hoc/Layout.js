import React, { Component } from 'react'

import './Layout.scss'

export default class extends Component {

    render() {

        const { children } = this.props

        return (
            <div className='Layout'>

                { children }

            </div>
        )
    }
}