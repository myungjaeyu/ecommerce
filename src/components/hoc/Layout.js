import React, { Component, Fragment } from 'react'

import './Layout.scss'

import NavigationBar from '../Navigation/NavigationBar'
import Footer from '../Footer/Footer'

import MobileMenu from '../MobileMenu/MobileMenu'
import CartSideBar from '../CartSideBar/CartSideBar'

export default class extends Component {

    state = { 
        showMenu : false, 
        showCart : false
    }

    handleClosedMenu = () => this.setState(() => ({ showMenu : false }))
    handleMenu = () => this.setState(({ showMenu }) => ({ showMenu : !showMenu }))

    handleClosedCart = () => this.setState(() => ({ showCart : false }))
    handleCart = () => this.setState(({ showCart }) => ({ showCart : !showCart }))


    render() {

        const { children } = this.props

        return (
            <Fragment>

                <NavigationBar onMenu={ this.handleMenu } onCart={ this.handleCart }/>

                <MobileMenu 
                    show={ this.state.showMenu }
                    onClosed={ this.handleClosedMenu }
                />

                <CartSideBar
                    show={ this.state.showCart }
                    onClosed={ this.handleClosedCart }
                />

                <main className='Layout'>

                    { children }

                </main>

                <Footer />

            </Fragment>
        )
    }
}