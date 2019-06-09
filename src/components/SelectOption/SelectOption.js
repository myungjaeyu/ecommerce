import React, { Component, Fragment } from 'react'

import './SelectOption.scss'

export default class extends Component {

    render() {
        return (
            <Fragment>

                <p>{ this.props.name }: </p>

                <div className='SelectOption'>

                    <select>

                        { this.props.options.map((e, i) => <option key={ i }>{ e }</option>) }

                    </select>

                </div>

            </Fragment>
        )
    }

} 