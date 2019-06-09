import React, { Component } from 'react'

import './index.scss'

export default class extends Component {
    render() {

        const { id } = this.props.match.params

        return (
            <div className='Item'>
                Item Page { id }
            </div>
        )
    }

}