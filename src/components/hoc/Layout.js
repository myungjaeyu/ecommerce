import React, { Component, Fragment } from 'react'

import './Layout.scss'

import NavigationBar from '../Navigation/NavigationBar'
import Footer from '../Footer/Footer'

import MobileMenu from '../MobileMenu/MobileMenu'

export default class extends Component {

    state = { 
        showMenu : false 
    }

    handleClosed = () => {

        this.setState(() => ({ showMenu : false }))

    }

    handleMenu = () => {

        this.setState(({ showMenu }) => ({ showMenu : !showMenu }))

    }

    render() {

        const { children } = this.props

        return (
            <Fragment>

                <NavigationBar onMenu={ this.handleMenu }/>

                <MobileMenu 
                    show={ this.state.showMenu }
                    onClosed={ this.handleClosed }
                />

                <div className='Layout'>

                    { children }

                </div>

                <Footer />

            </Fragment>
        )
    }
}