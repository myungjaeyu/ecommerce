import React, { Component, Fragment } from 'react'

import './Layout.scss'

import NavigationBar from '../Navigation/NavigationBar'
import Footer from '../Footer/Footer'

import MobileMenu from '../MobileMenu/MobileMenu'
import CartSideBar from '../CartSideBar/CartSideBar'

import Modal from '../Modal/Modal'

export default class extends Component {

    state = { 
        showNavigationTransparent : false,
        showMenu : false, 
        showCart : false,
        showModal : true
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillMount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        this.handleFlagNavigationTransparent(100 < window.scrollY)
    }

    handleFlagNavigationTransparent = (bool) => {
        this.state.showNavigationTransparent !== bool && this.setState(() => ({ showNavigationTransparent : bool }))
    }

    handleClosedMenu = () => this.setState(() => ({ showMenu : false }))
    handleMenu = () => this.setState(({ showMenu }) => ({ showMenu : !showMenu }))

    handleClosedCart = () => this.setState(() => ({ showCart : false }))
    handleCart = () => this.setState(({ showCart }) => ({ showCart : !showCart }))

    handleClosedModal = () => this.setState(() => ({ showModal : false }))

    render() {

        const { children } = this.props

        return (
            <Fragment>

                <NavigationBar 
                    transparent={ this.state.showNavigationTransparent }
                    onMenu={ this.handleMenu }
                    onCart={ this.handleCart }
                />

                <MobileMenu 
                    show={ this.state.showMenu }
                    onClosed={ this.handleClosedMenu }
                />

                <CartSideBar
                    show={ this.state.showCart }
                    onClosed={ this.handleClosedCart }
                />

                <Modal 
                    show={ this.state.showModal }
                    onClosed={ this.handleClosedModal }
                    modal={
                        { 
                            type : 'notice',
                            options : {
                                header : 'Modal Header',
                                content : 'Modal Test Modal Test Modal Test Modal Test Modal Test Modal Test'
                            }
                        }
                    }
                />

                <main className='Layout' onScroll={ this.handleScroll }>

                    { children }

                </main>

                <Footer />

            </Fragment>
        )
    }
}