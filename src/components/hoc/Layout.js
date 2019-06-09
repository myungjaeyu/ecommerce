import React, { Component, Fragment } from 'react'

import './Layout.scss'

import NavigationBar from '../Navigation/NavigationBar'
import Footer from '../Footer/Footer'

export default class extends Component {

    render() {

        const { children } = this.props

        return (
            <Fragment>

                <NavigationBar />

                <div className='Layout'>

                    { children }

                </div>

                <Footer />

            </Fragment>
        )
    }
}